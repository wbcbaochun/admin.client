/**
 * Table相关服务
 * sample:
 *     vm.tableParams = new TableSrv({
 *       searchCondition: vm.searchCondition,
 *       getDataUrl: 'user/list'
 *     }).create();
 */
'use strict';

let _ = require('lodash');
const PAGE_PARAM_KEYS = ['page', 'count'];

function TableSrv($location, NgTableParams, ApiSrv) {
    'ngInject';

    class NgTableParamsExt {
        /**
         * 构造函数
         * @param  {Object} opts {
         *                      searchCondition: Object 检索条件
         *                      getDataFun: Function 执行getData时的自定义处理
         *                      getDataUrl: String API调用的URL
         *                   } 
         *                      
         * @return {[type]}      [description]
         */
        constructor(opts = {}) {
            this.opts = opts;
            let urlWithoutPageParams = _.omit($location.search(), PAGE_PARAM_KEYS);
            angular.copy(urlWithoutPageParams, this.opts.searchCondition);
            this.firstLoad = true;
        }

        /**
         * 创建NgTableParams的实例
         * @return {NgTableParams} NgTableParams的实例
         */
        create() {
            // 取得数据的处理
            let getDataDefine = function(extInstance) {
                return function(params) {
                    let pageParams = _.pick(params.url(), PAGE_PARAM_KEYS);
                    let apiParams = angular.merge({}, pageParams, extInstance.opts.searchCondition);
                    if (!extInstance.firstLoad) {
                        $location.search(apiParams);
                    }
                    extInstance.firstLoad = false;

                    // 判断是否有自定义处理
                    if (extInstance.opts.getDataFun) {
                        return extInstance.opts.getDataFun(params, apiParams);
                    } else {
                        // ajax取数据
                        return ApiSrv.exec(extInstance.opts.getDataUrl, apiParams)
                            .then(function(data) {
                                if (data) {
                                    params.total(data.count);
                                    return data.list;
                                } else {
                                    return null;
                                }
                            });
                    }
                };
            };

            // 返回实例
            return new NgTableParams(
                angular.extend({
                    page: 1
                }, $location.search()), {
                    getData: getDataDefine(this)
                });
        }

        /**
         * 重置检索条件
         * @param  {Object} searchCondition [检索条件]     
         */
        reset(searchCondition) {
            this.opts.searchCondition = searchCondition;
        }
    }

    return NgTableParamsExt;
}

module.exports = {
    name: 'TableSrv',
    fn: TableSrv
};

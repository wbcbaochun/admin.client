'use strict';

const _ = require('lodash');

/**
 * 控制器基类：增删改查的控制器
 * @param {[type]} $window      [description]
 * @param {[type]} $state       [description]
 * @param {[type]} $stateParams [description]
 * @param {[type]} ApiSrv       [description]
 * @param {[type]} vm           控制器的value model
 * @param {[type]} ctrlOpts     {
 *                                  modelName,  // 必须 String, 模型的名称 * 
 *                                  beforeSave, // 非必须 function 保存前处理 
 *                                  afterGetDetail, // 非必须 function 取得详情后处理                                 
 *                              }
 */
function BaseCrudCtrl($window, $state, $stateParams, ApiSrv, vm, ctrlOpts) {
    'ngInject';


    (function init() {
        vm.model = {};

        // 取得当前处理的Action类别
        vm.action = _.last(_.split($state.current.name, '.'));

        vm.isDeleteAction = (vm.action === 'delete');
    })();

    function _saveForNew() {
        let listState = 'main.' + ctrlOpts.modelName + '.list';

        ApiSrv.exec(ctrlOpts.modelName + '/create', vm.model)
            .then(function() {
                $state.go(listState);
            });
    }

    function _saveForEdit() {
        ApiSrv.exec(ctrlOpts.modelName + '/update', vm.model)
            .then(function() {
                vm.back();
            });
    }

    function _delete() {
        ApiSrv.exec(ctrlOpts.modelName + '/delete', vm.model)
            .then(function() {
                vm.back();
            });        
    }

    vm.getDetail = function() {
        ApiSrv.exec(ctrlOpts.modelName + '/detail', { id: $stateParams.id })
            .then(function(data) {
                if (ctrlOpts.afterGetDetail) {
                    vm.model = ctrlOpts.afterGetDetail(data);
                }  else {
                    vm.model = data;
                }
            });
    };

    vm.save = function() {
        if (ctrlOpts.beforeSave) {
            ctrlOpts.beforeSave();
        }                
        if (vm.action === 'new') {
            _saveForNew();
        } else if (vm.action === 'edit') {
            _saveForEdit();
        } else if (vm.action === 'delete') {
            _delete();
        }
    };

    vm.back = function() {
        $window.history.back();
    };
}

module.exports = {
    name: 'BaseCrudCtrl',
    fn: BaseCrudCtrl
};

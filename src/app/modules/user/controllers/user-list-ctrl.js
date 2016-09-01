/**
 * 控制器：用户列表
 */
'use strict';

function UserListCtrl($controller, ApiSrv) {
    'ngInject';

    // 扩展自list控制器基类
    let vm = this,
        ctrlOpts = {
            modelName: 'user'
        };
    angular.extend(this, $controller('BaseListCtrl', { vm: vm, ctrlOpts: ctrlOpts }));  

    // 取得CSV数据
    vm.getCsvData = function() {
        return ApiSrv.exec('user/download', vm.searchCondition);
	};
}

module.exports = {
    name: 'UserListCtrl',
    fn: UserListCtrl
};

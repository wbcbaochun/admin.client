/**
 * 控制器：角色列表
 */
'use strict';

function RoleListCtrl($controller) {
    'ngInject';

    // 扩展自list控制器基类
    let vm = this,
        ctrlOpts = {
            modelName: 'role'
        };
    angular.extend(this, $controller('BaseListCtrl', { vm: vm, ctrlOpts: ctrlOpts }));  
}

module.exports = {
    name: 'RoleListCtrl',
    fn: RoleListCtrl
};

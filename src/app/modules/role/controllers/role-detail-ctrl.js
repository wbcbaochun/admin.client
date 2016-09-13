/**
 * 控制器：角色详情
 */
'use strict';

function RoleDetailCtrl($controller) {
    'ngInject';

    let vm = this,
        ctrlOpts = {
            modelName: 'role'
        };
    angular.extend(this, $controller('BaseCrudCtrl', { vm: vm, ctrlOpts: ctrlOpts }));
   	vm.getDetail();
    console.log("3:"+vm.model.permissions)
}

module.exports = {
    name: 'RoleDetailCtrl',
    fn: RoleDetailCtrl
};

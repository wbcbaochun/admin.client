/**
 * 控制器：角色删除
 */
'use strict';

function RoleDeleteCtrl($controller) {
    'ngInject';

    let vm = this,
        ctrlOpts = {
            modelName: 'role'
        };
    angular.extend(this, $controller('BaseCrudCtrl', { vm: vm, ctrlOpts: ctrlOpts }));

    vm.getDetail();
}

module.exports = {
    name: 'RoleDeleteCtrl',
    fn: RoleDeleteCtrl
};

/**
 * 控制器：角色新增
 */
'use strict';

function RoleNewCtrl($controller, RoleSrv) {
    'ngInject';

    let vm = this;

    // 更新前处理
    function beforeSave() {
        // 编辑权限列表成为字符串数组形式
        let temPermissionList01 = RoleSrv.convReduceRight(vm.permissionList);
        vm.model.permissions = RoleSrv.convPermissionForSave(temPermissionList01);
    }

    let ctrlOpts = {
        modelName: 'role',
        beforeSave
    };
    angular.extend(this, $controller('BaseCrudCtrl', { vm: vm, ctrlOpts }));

    // 编辑权限列表成为画面表示形式
    let temPermissionList = RoleSrv.convPermissionForView();
    vm.permissionList = RoleSrv.convPermissionGroupBy(temPermissionList);
    //vm.permissionList = [[{name: "user.view",selected: false, text: "用户查看"},{name: "user.edit",selected: false, text: "用户编辑"}],[{name: "role.view",selected: false, text: "角色查看"},{name: "role.edit",selected: false, text: "角色编辑"}]]
}

module.exports = {
    name: 'RoleNewCtrl',
    fn: RoleNewCtrl
};

/**
 * 控制器：角色编辑
 */
'use strict';

function RoleEditCtrl($controller, RoleSrv) {
    'ngInject';

    let vm = this;

    // 取得详情后处理
    function afterGetDetail(data) {
        //vm.permissionList = RoleSrv.convPermissionForView(data.permissions);
        let temPermissionList = RoleSrv.convPermissionForView(data.permissions);
        vm.permissionList = RoleSrv.convPermissionGroupBy(temPermissionList);
        //vm.permissionList = [
        //    {name: "user.view", selected: true, text: "用户查看"},
        //    {name: "user.edit", selected: true, text: "用户编辑"},
        //    {name: "role.view", selected: true, text: "角色查看"},
        //    {name: "role.edit", selected: true, text: "角色编辑"}
        //];
        return data;
    }

    // 更新前处理
    function beforeSave() {
        // 编辑权限列表成为字符串数组形式
        let temPermissionList01 = RoleSrv.convReduceRight(vm.permissionList);
        vm.model.permissions = RoleSrv.convPermissionForSave(temPermissionList01);
    }

    let ctrlOpts = {
            modelName: 'role',
            afterGetDetail,
            beforeSave
        };
    angular.extend(this, $controller('BaseCrudCtrl', { vm: vm, ctrlOpts}));

    vm.getDetail();
}

module.exports = {
    name: 'RoleEditCtrl',
    fn: RoleEditCtrl
};

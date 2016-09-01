/**
 * 控制器：角色新增
 */
'use strict';

const _ = require('lodash');

function RoleNewCtrl($controller, CodeList) {
    'ngInject';

    let vm = this;

    // 更新前处理
    function beforeSave() {
        // 编辑权限列表成为字符串数组形式
        let permissions = _
            .chain(vm.permissionList)
            .filter(o => o.selected)
            .map(o => o.name);
        vm.model.permissions = permissions;
    }

    let ctrlOpts = {
        modelName: 'role',
        beforeSave: beforeSave
    };

    angular.extend(this, $controller('BaseCrudCtrl', { vm: vm, ctrlOpts }));

    // 编辑权限列表成为画面表示形式
    vm.permissionList = _.map(CodeList.permission, function(value, key) {
        return {
            name: key,
            text: value,
            selected: false
        }
    });
}

module.exports = {
    name: 'RoleNewCtrl',
    fn: RoleNewCtrl
};

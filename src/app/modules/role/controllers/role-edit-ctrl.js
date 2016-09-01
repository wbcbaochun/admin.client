/**
 * 控制器：角色编辑
 */
'use strict';

function RoleEditCtrl($controller, UploadSrv) {
    'ngInject';

    let vm = this;
    let uploader;

    function beforeSave() {
        let photo = uploader.getFile() || null;
        vm.model.photo = photo;
    }

    let ctrlOpts = {
            modelName: 'role',
            beforeSave: beforeSave
        };
    angular.extend(this, $controller('BaseCrudCtrl', { vm: vm, ctrlOpts}));

    vm.getDetail();

    // 上传组件
    uploader = UploadSrv.createImageUploader();
    vm.uploader = uploader;    
}

module.exports = {
    name: 'RoleEditCtrl',
    fn: RoleEditCtrl
};

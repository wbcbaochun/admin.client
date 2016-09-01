/**
 * 控制器：角色新增
 */
'use strict';

function RoleNewCtrl($controller, UploadSrv) {
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
    angular.extend(this, $controller('BaseCrudCtrl', { vm: vm, ctrlOpts }));


    // 上传组件
    uploader = UploadSrv.createImageUploader();
    vm.uploader = uploader;
}

module.exports = {
    name: 'RoleNewCtrl',
    fn: RoleNewCtrl
};

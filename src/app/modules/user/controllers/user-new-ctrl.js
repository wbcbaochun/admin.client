/**
 * 控制器：用户新增
 */
'use strict';

function UserNewCtrl($controller, UploadSrv) {
    'ngInject';

    let vm = this;
    let uploader;

    function beforeSave() {
        let photo = uploader.getFile() || null;
        vm.model.photo = photo;
    }
    
    let ctrlOpts = {
            modelName: 'user',
            beforeSave
        };
    angular.extend(this, $controller('BaseCrudCtrl', { vm: vm, ctrlOpts }));


    // 上传组件
    uploader = UploadSrv.createImageUploader();
    vm.uploader = uploader;
}

module.exports = {
    name: 'UserNewCtrl',
    fn: UserNewCtrl
};

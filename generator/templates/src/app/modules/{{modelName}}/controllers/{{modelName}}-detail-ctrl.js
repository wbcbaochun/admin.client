/**
 * 控制器：{{modelText}}详情
 */
'use strict';

function {{modelNameUp}}DetailCtrl($controller) {
    'ngInject';

    let vm = this,
        ctrlOpts = {
            modelName: '{{modelName}}'
        };
    angular.extend(this, $controller('BaseCrudCtrl', { vm: vm, ctrlOpts: ctrlOpts }));

   	vm.getDetail();
}

module.exports = {
    name: '{{modelNameUp}}DetailCtrl',
    fn: {{modelNameUp}}DetailCtrl
};

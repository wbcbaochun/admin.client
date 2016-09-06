/**
 * 控制器：{{modelText}}编辑
 */
'use strict';

function {{modelNameUp}}EditCtrl($controller) {
    'ngInject';

    let vm = this,
        ctrlOpts = {
            modelName: '{{modelName}}',
        };
    angular.extend(this, $controller('BaseCrudCtrl', { vm: vm, ctrlOpts}));

    vm.getDetail();
}

module.exports = {
    name: '{{modelNameUp}}EditCtrl',
    fn: {{modelNameUp}}EditCtrl
};

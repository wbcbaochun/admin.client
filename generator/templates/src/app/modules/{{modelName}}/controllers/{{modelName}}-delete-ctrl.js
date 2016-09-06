/**
 * 控制器：{{modelText}}删除
 */
'use strict';

function {{modelNameUp}}DeleteCtrl($controller) {
    'ngInject';

    let vm = this,
        ctrlOpts = {
            modelName: '{{modelName}}'
        };
    angular.extend(this, $controller('BaseCrudCtrl', { vm: vm, ctrlOpts: ctrlOpts }));

    vm.getDetail();
}

module.exports = {
    name: '{{modelNameUp}}DeleteCtrl',
    fn: {{modelNameUp}}DeleteCtrl
};

/**
 * 控制器：{{modelText}}新增
 */
'use strict';

function {{modelNameUp}}NewCtrl($controller) {
    'ngInject';

    let vm = this,
        ctrlOpts = {
            modelName: '{{modelName}}',
        };
    angular.extend(this, $controller('BaseCrudCtrl', { vm: vm, ctrlOpts }));
}

module.exports = {
    name: '{{modelNameUp}}NewCtrl',
    fn: {{modelNameUp}}NewCtrl
};

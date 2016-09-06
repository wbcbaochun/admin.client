/**
 * 控制器：{{modelText}}列表
 */
'use strict';

function {{modelNameUp}}ListCtrl($controller) {
    'ngInject';

    // 扩展自list控制器基类
    let vm = this,
        ctrlOpts = {
            modelName: '{{modelName}}'
        };
    angular.extend(this, $controller('BaseListCtrl', { vm: vm, ctrlOpts: ctrlOpts }));  
}

module.exports = {
    name: '{{modelNameUp}}ListCtrl',
    fn: {{modelNameUp}}ListCtrl
};

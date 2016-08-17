/**
 * 控制器：用户新增
 */
'use strict';

function UserNewCtrl($controller) {
    'ngInject';

    var vm = this,
        ctrlOpts = {
            modelName: 'user'
        };
    angular.extend(this, $controller('BaseCrudCtrl', { vm: vm, ctrlOpts}));
}

module.exports = {
    name: 'UserNewCtrl',
    fn: UserNewCtrl
};

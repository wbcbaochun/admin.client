/**
 * 控制器：用户删除
 */
'use strict';

function UserDeleteCtrl($controller) {
    'ngInject';

    let vm = this,
        ctrlOpts = {
            modelName: 'user'
        };
    angular.extend(this, $controller('BaseCrudCtrl', { vm: vm, ctrlOpts: ctrlOpts }));

    vm.getDetail();
}

module.exports = {
    name: 'UserDeleteCtrl',
    fn: UserDeleteCtrl
};

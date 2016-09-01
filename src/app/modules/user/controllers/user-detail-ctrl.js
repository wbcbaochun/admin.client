/**
 * 控制器：用户详情
 */
'use strict';

function UserDetailCtrl($controller) {
    'ngInject';

    let vm = this,
        ctrlOpts = {
            modelName: 'user'
        };
    angular.extend(this, $controller('BaseCrudCtrl', { vm: vm, ctrlOpts: ctrlOpts }));

   	vm.getDetail();
}

module.exports = {
    name: 'UserDetailCtrl',
    fn: UserDetailCtrl
};

/**
 * 控制器：用户登陆
 */
'use strict';

function SessionLoginCtrl($state, ApiSrv, SessionSrv) {
    'ngInject';

    var vm = this;

    // 用户登陆
    vm.login = function() {
        ApiSrv.exec('session/login', vm.user)
            .then(function(user) {
                SessionSrv.saveCurrentUser(user);
            	$state.go('main.welcome');
            });
    };
}

module.exports = {
    name: 'SessionLoginCtrl',
    fn: SessionLoginCtrl
};

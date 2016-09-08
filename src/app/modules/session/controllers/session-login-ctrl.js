/**
 * 控制器：用户登陆
 */
'use strict';

function SessionLoginCtrl($state, ApiSrv, SessionSrv, SocketSrv) {
    'ngInject';

    let vm = this;

    // 用户登陆
    vm.login = function() {
        ApiSrv.exec('session/login', vm.user)
            .then(function(user) {
                // 保存用户信息到storeage
                SessionSrv.saveCurrentUser(user);

                // 连接到socket服务
                SocketSrv.connect();
                SocketSrv.login();

                // 跳转到首页
            	$state.go('main.welcome');
            });
    };
}

module.exports = {
    name: 'SessionLoginCtrl',
    fn: SessionLoginCtrl
};

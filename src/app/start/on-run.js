/**
 * APP首次启动时的事件
 */
'use strict';

 const io = require('socket.io-client');

function OnRun($rootScope, $state, SessionSrv, CodeList) {
	'ngInject';

	let LOGIN_STATE = 'login';

    $rootScope.codelist = CodeList;

    /**
     * 监听路由状态变化
     */
    function _watchStateChange() {
        $rootScope.$on('$stateChangeStart', function(e, toState) {
            let currentUser = SessionSrv.getCurrentUser();
            if ((!toState.isAnon) && !currentUser && toState.name !== LOGIN_STATE) {
                e.preventDefault();
                $state.go(LOGIN_STATE);
            }
        });
    }

    // 监听路由状态变化
    _watchStateChange();

    let socket = io.connect('http://127.0.0.1:9005');
    socket.emit('login', 1); 
    socket.on('notification', function(data) {
        console.log('notification');
        console.log(data);
    });

}

module.exports = OnRun;

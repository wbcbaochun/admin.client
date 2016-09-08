/**
 * APP首次启动时的事件
 */
'use strict';



function OnRun($rootScope, $state, SessionSrv, CodeList, SocketSrv) {
	'ngInject';

	let LOGIN_STATE = 'login';

    $rootScope.codelist = CodeList;

    function _connectSocket() {
        let currentUser = SessionSrv.getCurrentUser();
        if (currentUser) {
            // 连接到socket服务
            SocketSrv.connect();
            SocketSrv.login();    
        }
    }

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
    _connectSocket();
}

module.exports = OnRun;

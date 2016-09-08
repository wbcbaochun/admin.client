'use strict';

const io = require('socket.io-client');

/**
 * Socket服务
 * 	连接到SocketServer端后，当收到消息会向rootScope广播
 * @param {Object} $rootScope 根scope
 * @param {Object} AppConfigs 配置项
 * @param {Object} SessionSrv Session服务
 */
function SocketSrv($rootScope, AppConfigs, SessionSrv) {
    'ngInject';

    let socket;

    let isDev = (AppConfigs.ENV === 'dev');

    function _eventHandles() {
        socket.on('notification', data => {
        	$rootScope.$broadcast('notification', data);
        });
    }

    function connect() {
    	if (isDev) {
    		return;
    	}

        socket = io.connect(AppConfigs.SOCKET_URL);
        _eventHandles();
    }

    function login() {
    	if (isDev) {
    		return;
    	}

        let userId = SessionSrv.getCurrentUser().id;
        socket.emit('login', userId);
    }

    function disconnect() {
    	if (isDev) {
    		return;
    	}

    	socket.emit('forceDisconnect');
    }

    return {
        connect,
        login,
        disconnect
    };
}

module.exports = {
    name: 'SocketSrv',
    fn: SocketSrv
};

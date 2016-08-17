/**
 * 控制器：主画面头部
 */
'use strict';

function MainHeaderCtrl($state, ApiSrv, SessionSrv) {
    'ngInject';

    var vm = this;

    var MAX_MESSAGES = 5;

    // TODO: messages
    vm.userMessages = [];
    for (var i = 1; i <= MAX_MESSAGES; i++) {
        vm.userMessages.push({
            userPhoto: 'images/tmp/img.jpg',
            userName: '发信人' + i,
            sendTime: '3 mins ago',
            message: '这里是测试消息' + i
        });
    }

    vm.hasMoreUserMessages = true;

    /**
     * 用户登出
     */
    vm.logout = function() {
        ApiSrv.exec('session/logout')
            .then(function() {
            	SessionSrv.clearCurrentUser();
            	$state.go('login');
            });
    };
}

module.exports = {
    name: 'MainHeaderCtrl',
    fn: MainHeaderCtrl
};

/**
 * 控制器：主画面头部
 */
'use strict';

function MainHeaderCtrl($state, $uibModal, $scope, 
                        ApiSrv, SessionSrv, MessageSrv, SocketSrv) {
    'ngInject';

    let vm = this;
    vm.currentUser = SessionSrv.getCurrentUser();
    vm.unreadMessagesCount = 0;

    let MAX_MESSAGES = 5;

    // TODO: messages
    vm.userMessages = [];
    for (let i = 1; i <= MAX_MESSAGES; i++) {
        vm.userMessages.push({
            userPhoto: 'images/tmp/img.jpg',
            userName: '发信人' + i,
            sendTime: '3 mins ago',
            message: '这里是测试消息' + i
        });
    }

    vm.hasMoreUserMessages = true;

    // 当消息通知到达时， 更新未读消息件数
    $scope.$on('notification', (evnet, count) => {
        vm.unreadMessagesCount = count;
        $scope.$apply();
    });

    // 用户登出
    vm.logout = function() {
        function _proc() {
            ApiSrv.exec('session/logout')
                .then(function() {
                    SessionSrv.clearCurrentUser();
                    SocketSrv.disconnect();
                    $state.go('login');
                });
        }
        MessageSrv.confirm('confirm.logout').then(_proc);
    };

    // 修改密码
    vm.changePassword = function() {
        $uibModal.open({
            templateUrl: 'user/views/user-changePassword.html',
            controller: 'UserChangePasswordCtrl as vm'
        });
    };
}

module.exports = {
    name: 'MainHeaderCtrl',
    fn: MainHeaderCtrl
};

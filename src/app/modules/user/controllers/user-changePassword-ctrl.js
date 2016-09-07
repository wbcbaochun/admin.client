/**
 * 控制器：用户修改密码
 */
'use strict';

function UserChangePasswordCtrl($uibModalInstance, ApiSrv) {
    'ngInject';

    let vm = this;
 	
 	// 保存
 	vm.save = function() {
        ApiSrv.exec('user/changePassword', vm.user)
            .then(function() {
                $uibModalInstance.close();
            }); 		
 	};
}

module.exports = {
    name: 'UserChangePasswordCtrl',
    fn: UserChangePasswordCtrl
};

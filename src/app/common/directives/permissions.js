'use strict';

const ADMIN_ROLE_ID = 1;

/**
 * 权限控制组件
 * 将当前element上需要的权限与用户的权限进行比较， 如果没有访问权限则隐藏
 * @param  {[SessionSrv]} SessionSrv [Session服务]
 * @return {[angular directive]}            [directive]
 */
function permissions(SessionSrv) {
    'ngInject';

    function _isAdmin(currentUser) {
        return (currentUser.roleId === ADMIN_ROLE_ID);
    }

    /**
     * [_link description]
     * @param  {[type]} scope [description]
     * @param  {[type]} elem  [description]
     * @param  {String or String Array} attrs [permissions: 访问权限]
     * @return {[type]}       [description]
     */
	function _link(scope, elem, attrs) {
        let currentUser = SessionSrv.getCurrentUser();
        if (_isAdmin(currentUser)) {
            return;
        }

		let elePermissions = attrs.permissions.split(',');
		let userPermissions = [];
		if (currentUser) {
			userPermissions = currentUser.permissions || [];
		}

        let hasPermissions = false;
        for (let i = 0; i < elePermissions.length; i++) {
            let p = elePermissions[i].trim();
            if (userPermissions.indexOf(p) >= 0) {
                hasPermissions = true;
                break;
            }
        }
		
		if (!hasPermissions) {
			elem.remove();
		}		
	}

    let directive = {
        restrict: 'A',
        link: _link
    };
    return directive;
}

module.exports = {
    name: 'permissions',
    fn: permissions
};

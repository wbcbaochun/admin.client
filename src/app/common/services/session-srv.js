/**
 * Session相关服务
 */
'use strict';

function SessionSrv(localStorageService) {
    'ngInject';

    let KEY_CURRENT_USER = 'CURRENT_USER';

    let _currentUser;

    /**
     * 保存当前用户
     * @param  Object user 当前用户
     */
    let _saveCurrentUser = function(user) {
    	if (user) {
    		_currentUser = user;
    		localStorageService.set(KEY_CURRENT_USER, user);
    	}
    };

    /**
     * 清除当前用户
     */
    let _clearCurrentUser = function() {
    	localStorageService.remove(KEY_CURRENT_USER);
    	_currentUser = null;
    };

    /**
     * 取得当前用户
     * @result  Object user 当前用户
     */
    let _getCurrentUser = function() {
    	if (!_currentUser) {
    		_currentUser = localStorageService.get(KEY_CURRENT_USER);
    	}
    	return _currentUser;
    };

    return {
    	saveCurrentUser : _saveCurrentUser,
    	clearCurrentUser : _clearCurrentUser,
    	getCurrentUser: _getCurrentUser
    };
}

module.exports = {
    name: 'SessionSrv',
    fn: SessionSrv
};

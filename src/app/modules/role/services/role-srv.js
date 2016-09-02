'use strict';

const _ = require('lodash');
/**
 * 角色服务
 */
function RoleSrv(CodeList) {
    'ngInject';

    function convPermissionForView(permissions) {
    	permissions = permissions || [];
	    return _.map(CodeList.permission, function(value, key) {
	        let selected = (permissions.indexOf(key) >= 0);
	        return {
	            name: key,
	            text: value,
	            selected: selected
	        };
	    });   	
    }

    function convPermissionForSave(permissionList) {
    	return _
            .chain(permissionList)
            .filter(o => o.selected)
            .map(o => o.name);
    }

    return {
    	convPermissionForView,
    	convPermissionForSave
    };
}

module.exports = {
    name: 'RoleSrv',
    fn: RoleSrv
};

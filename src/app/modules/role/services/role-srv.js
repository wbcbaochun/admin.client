'use strict';

const _ = require('lodash');
/**
 * 角色服务
 */
function RoleSrv(CodeList) {
    'ngInject';
	function convGroupCell(permission) {
		return permission.name.substring(0,permission.name.indexOf("."));
	}
	function convDetailGroupCell(permission) {
		return permission.substring(0,permission.indexOf("."));
	}
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
	function convPermissionGroupBy(permissions) {
		return _.groupBy(permissions,convGroupCell);
	}
	function convDetailPermissionGroupBy(permissions) {
		return _.groupBy(permissions,convDetailGroupCell);
	}
    function convPermissionForSave(permissionList) {
    	return _
            .chain(permissionList)
            .filter(o => o.selected)
            .map(o => o.name);
    }
	function convReduceRight(array) {
		return _.reduceRight(array, function(flattened, other) {
			return flattened.concat(other);
		}, []);
	}
    return {
    	convPermissionForView,
    	convPermissionForSave,
		convPermissionGroupBy,
		convReduceRight,
		convDetailPermissionGroupBy,
    };
}

module.exports = {
    name: 'RoleSrv',
    fn: RoleSrv
};

'use strict';
function DeleteFlagTextFilter() {
	'ngInject';
    return function (input) {
	    if (input) {
	        return '已删除';
	    }
	    return '有效';
    };
}

module.exports = {
    name: 'deleteFlagText',
    fn: DeleteFlagTextFilter
};
'use strict';
function CodeTextFilter(CodeList) {
	'ngInject';
    return function (input, key) {
	    if (!input) {
	        return '';
	    }
	    return CodeList[key][input];
    };
}

module.exports = {
    name: 'codeText',
    fn: CodeTextFilter
};
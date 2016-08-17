'use strict';
function CodelistOptionsFilter() {
	'ngInject';
    return function (input) {
	    return 'key as value for (key, value) in codelist.' + input;
    };
}

module.exports = {
    name: 'codelistOptions',
    fn: CodelistOptionsFilter
};
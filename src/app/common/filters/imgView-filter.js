'use strict';
function ImgViewFilter() {
	'ngInject';
    return function (input, width) {
	    if (!input) {
	        return null;
	    }

	    let paramStr = '';
	    if (width) {
	    	paramStr = `?imageView2/2/w/${width}`;
	    }

	    return input + paramStr;
    };
}

module.exports = {
    name: 'imgView',
    fn: ImgViewFilter
};
'use strict';

function TextFormatFilter() {
    'ngInject';
    return function(input) {
        if (!input) {
        	return input;
        }
        let output = input
        	.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/&/, '&amp;')
            //replace possible line breaks.
            .replace(/(\r\n|\r|\n)/g, '<br/>')
            //replace tabs
            .replace(/\t/g, '&nbsp;&nbsp;&nbsp;')
            //replace spaces.
            .replace(/ /g, '&nbsp;');

        return output;
    };
}

module.exports = {
    name: 'textFormat',
    fn: TextFormatFilter
};

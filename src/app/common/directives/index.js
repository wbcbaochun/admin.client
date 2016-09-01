'use strict';
let bulk = require('bulk-require');
let directivesModule = angular.module('app.directives', []);
let directives = bulk(__dirname, ['./**/!(*index|*.spec).js']);

function declare(directiveMap) {
    for (let key in directiveMap) {
        let item = directiveMap[key];

        if (!item) {
            return;
        }

        if (item.fn) {
            directivesModule.directive(item.name, item.fn);
        } else {
            declare(item);
        }
    }
}

declare(directives);

module.exports = directivesModule;

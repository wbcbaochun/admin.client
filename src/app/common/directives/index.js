'use strict';
var bulk = require('bulk-require');
var directivesModule = angular.module('app.directives', []);
var directives = bulk(__dirname, ['./**/!(*index|*.spec).js']);

function declare(directiveMap) {
    for (var key in directiveMap) {
        var item = directiveMap[key];

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

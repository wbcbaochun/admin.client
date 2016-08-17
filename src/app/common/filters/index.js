'use strict';
var bulk = require('bulk-require');
var filtersModule = angular.module('app.filters', []);
var filters = bulk(__dirname, ['./**/!(*index|*.spec).js']);

function declare(filterMap) {
    for (var key in filterMap) {
        var item = filterMap[key];
        if (!item) {
            return;
        }
        if (item.fn && typeof item.fn === 'function') {
            filtersModule.filter(item.name, item.fn);
        } else {
            declare(item);
        }
    }
}

declare(filters);

module.exports = filtersModule;

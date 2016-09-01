'use strict';
let bulk = require('bulk-require');
let filtersModule = angular.module('app.filters', []);
let filters = bulk(__dirname, ['./**/!(*index|*.spec).js']);

function declare(filterMap) {
    for (let key in filterMap) {
        let item = filterMap[key];
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

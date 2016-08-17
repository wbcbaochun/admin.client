'use strict';
var bulk = require('bulk-require');
var servicesModule = angular.module('app.services', []);
var services = bulk(__dirname, ['./**/!(*index|*.spec).js']);

function declare(serviceMap) {
    for (var key in serviceMap) {
        var item = serviceMap[key];

        if (!item) {
            return;
        }

        if (item.fn && typeof item.fn === 'function') {
            servicesModule.factory(item.name, item.fn);
        } else {
            declare(item);
        }
    }
}

declare(services);

module.exports = servicesModule;

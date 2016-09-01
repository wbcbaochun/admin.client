'use strict';
let bulk = require('bulk-require');
let servicesModule = angular.module('app.services', []);
let services = bulk(__dirname, ['./**/!(*index|*.spec).js']);

function declare(serviceMap) {
    for (let key in serviceMap) {
        let item = serviceMap[key];

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

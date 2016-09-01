'use strict';
const bulk = require('bulk-require');
const controllersModule = angular.module('app.controllers', []);
const controllers = bulk(__dirname, ['./**/!(*index|*.spec).js']);

function declare(controllerMap) {
    for (let key in controllerMap) {
        let item = controllerMap[key];

        if (!item) {
            return;
        }

        if (item.fn && typeof item.fn === 'function') {
            controllersModule.controller(item.name, item.fn);
        } else {
            declare(item);
        }
    }
}

declare(controllers);

module.exports = controllersModule;

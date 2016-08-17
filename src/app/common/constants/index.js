'use strict';
var bulk = require('bulk-require');
var constantsModule = angular.module('app.constants', []);
var constants = bulk(__dirname, ['./**/!(*index|*.spec).js']);

function declare(constantMap) {
    for (var key in constantMap) {
        var item = constantMap[key];

        if (!item) {
            return;
        }

        if (item.fn) {
            constantsModule.constant(item.name, item.fn);
        } else {
            declare(item);
        }
    }
}

declare(constants);

module.exports = constantsModule;

'use strict';
let bulk = require('bulk-require');
let constantsModule = angular.module('app.constants', []);
let constants = bulk(__dirname, ['./**/!(*index|*.spec).js']);

function declare(constantMap) {
    for (let key in constantMap) {
        let item = constantMap[key];

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

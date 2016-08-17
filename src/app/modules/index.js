'use strict';

const bulk = require('bulk-require');
const moduleUtil = require('base/angular/utils/moduleUtil');
const moduleItems = bulk(__dirname, ['./**/!(*index|*.spec).js']);

let appModules = moduleUtil.importModule('app.modules', moduleItems);

module.exports = appModules;

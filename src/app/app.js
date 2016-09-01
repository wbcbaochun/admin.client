var angular = require('angular');
// angular' 3rd part's modules
require('angular-animate');
require('angular-ui-router');
require('angular-ui-bootstrap');
require('angular-local-storage');
require('angular-sanitize');
require('angular-growl-v2');
require('angular-translate');
require('angular-validation');
require('angular-block-ui');
require('ng-table');
require('ng-csv');

// app modules
require('./common/constants');
require('./common/services');
require('./common/directives');
require('./common/filters');
require('./common/controllers');
require('./modules');
require('../../tmp/templates.js');

// create and bootstrap app
const requires = [
	'ngAnimate',
	'ui.router',
	'ui.bootstrap',
	'LocalStorageModule',
	'ngSanitize',
	'angular-growl',
	'pascalprecht.translate',
	'validation',
	'blockUI',
	'ngTable',
	'ngCsv',
	'templates',
	'app.constants',
	'app.controllers',
	'app.services',
	'app.directives',
	'app.filters',
	'app.modules'
];

var app = angular.module('app', requires);

// set config for app
app.config(require('./start/on-config'));

// exec first run handle
app.run(require('./start/on-run'));

// start app
angular.bootstrap(document, ['app'], {
    strictDi: true
});


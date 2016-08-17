'use strict';
module.exports = function($stateProvider) {
    'ngInject';

    $stateProvider.state('main', {
        templateUrl: 'main/views/main.html',
        abstract: true
    })
    .state('main.welcome', {
    	url: '/',
        templateUrl: 'main/views/welcome.html',
    });
};

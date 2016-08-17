'use strict';
module.exports = function($stateProvider) {
    'ngInject';

    $stateProvider.state('login', {
    	url: '/login',
        templateUrl: 'session/views/login.html',
        controller:  'SessionLoginCtrl as vm',
        isAnno: true
    });
};

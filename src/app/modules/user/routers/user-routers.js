'use strict';
module.exports = function($stateProvider) {
    'ngInject';

    $stateProvider.state('main.user', {
        template: '<div ui-view></div>',
        url: '/user',
        abstract: true
    })
    .state('main.user.list', {
        url: '/',
        templateUrl: 'user/views/user-list.html',
        controller: 'UserListCtrl as vm',
    })    
    .state('main.user.new', {
    	url: '/new',
        templateUrl: 'user/views/user-new.html',
        controller: 'UserNewCtrl as vm',
    })
    .state('main.user.detail', {
        url: '/:id/detail',
        templateUrl: 'user/views/user-detail.html',
        controller: 'UserDetailCtrl as vm',
    })
    .state('main.user.edit', {
        url: '/:id/edit',
        templateUrl: 'user/views/user-edit.html',
        controller: 'UserEditCtrl as vm',
    })
    .state('main.user.delete', {
        url: '/:id/delete',
        templateUrl: 'user/views/user-detail.html',
        controller: 'UserDeleteCtrl as vm'
    });    
};

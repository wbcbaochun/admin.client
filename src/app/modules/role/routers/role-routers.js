'use strict';
module.exports = function($stateProvider) {
    'ngInject';

    $stateProvider.state('main.role', {
        template: '<div ui-view></div>',
        url: '/role',
        abstract: true
    })
    .state('main.role.list', {
        url: '/',
        templateUrl: 'role/views/role-list.html',
        controller: 'RoleListCtrl as vm',
    })    
    .state('main.role.new', {
    	url: '/new',
        templateUrl: 'role/views/role-new.html',
        controller: 'RoleNewCtrl as vm',
    })
    .state('main.role.detail', {
        url: '/:id/detail',
        templateUrl: 'role/views/role-detail.html',
        controller: 'RoleDetailCtrl as vm',
    })
    .state('main.role.edit', {
        url: '/:id/edit',
        templateUrl: 'role/views/role-edit.html',
        controller: 'RoleEditCtrl as vm',
    })
    .state('main.role.delete', {
        url: '/:id/delete',
        templateUrl: 'role/views/role-detail.html',
        controller: 'RoleDeleteCtrl as vm'
    });    
};

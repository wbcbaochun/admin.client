'use strict';
/**
 * {{modelText}} 路由设置
 * @param  {Object} $stateProvider [参照ui-router的$stateProvider]
 * @return {function}              [路由设置function]
 */
module.exports = function($stateProvider) {
    'ngInject';

    $stateProvider.state('main.{{modelName}}', {
        template: '<div ui-view></div>',
        url: '/{{modelName}}',
        abstract: true
    })
    .state('main.{{modelName}}.list', {
        url: '/',
        templateUrl: '{{modelName}}/views/{{modelName}}-list.html',
        controller: '{{modelNameUp}}ListCtrl as vm',
    })    
    .state('main.{{modelName}}.new', {
    	url: '/new',
        templateUrl: '{{modelName}}/views/{{modelName}}-new.html',
        controller: '{{modelNameUp}}NewCtrl as vm',
    })
    .state('main.{{modelName}}.detail', {
        url: '/:id/detail',
        templateUrl: '{{modelName}}/views/{{modelName}}-detail.html',
        controller: '{{modelNameUp}}DetailCtrl as vm',
    })
    .state('main.{{modelName}}.edit', {
        url: '/:id/edit',
        templateUrl: '{{modelName}}/views/{{modelName}}-edit.html',
        controller: '{{modelNameUp}}EditCtrl as vm',
    })
    .state('main.{{modelName}}.delete', {
        url: '/:id/delete',
        templateUrl: '{{modelName}}/views/{{modelName}}-detail.html',
        controller: '{{modelNameUp}}DeleteCtrl as vm'
    });    
};

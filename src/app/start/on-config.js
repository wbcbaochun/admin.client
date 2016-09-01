'use strict';

let $ = require('jquery');

function appConfig($locationProvider,
    $urlRouterProvider,
    growlProvider,
    $translateProvider,
    $validationProvider,
    ValidationRules) {
    'ngInject';

    // route 设置
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');

    // growl 设置
    growlProvider.globalTimeToLive(5000);
    growlProvider.globalDisableCountDown(true);

    // translate设置
    $translateProvider.useLoader('TranslateLoader', {});
    $translateProvider.useSanitizeValueStrategy('sanitize');
    $translateProvider.preferredLanguage('zh-CN');

    // validation设置
    $validationProvider.setExpression(ValidationRules.expression)
        .setDefaultMsg(ValidationRules.defaultMsg);

    $validationProvider.setErrorHTML(function(msg) {
        return '<label class=\"control-label has-error\">' + msg + '</label>';
    });

    angular.extend($validationProvider, {
        validCallback: function(element) {
            $(element).parents('.form-group:first').removeClass('has-error');
        },
        invalidCallback: function(element) {
            $(element).parents('.form-group:first').addClass('has-error');
        }
    });
}

module.exports = appConfig;

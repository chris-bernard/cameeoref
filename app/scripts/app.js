'use strict';

angular.module('cameeorefApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute',
        'cameeoControllers',
        'cameeoServices'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/brands', {
                templateUrl: 'views/brand-list.html',
                controller: 'BrandListCtrl'
            })
            .when('/ref/:brand/:refType', {
                templateUrl: 'views/brand-ref-list.html',
                controller: 'BrandRefListCtrl'
            })
            .when('/ref/:brand/:refType/:refId', {
                templateUrl: 'views/brand-ref-detail.html',
                controller: 'BrandRefDetailCtrl'
            })
            .when('/ref', {
                templateUrl: 'views/ref-list.html',
                controller: 'ReferentialListCtrl'
            })
            /*            .when('/', {
             templateUrl: 'views/main.html',
             controller: 'MainCtrl'
             })
             */.otherwise({
                redirectTo: '/brands'
            });
    });

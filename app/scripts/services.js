'use strict';

/* Services */

var cameeoServices = angular.module('cameeoServices', ['ngResource']);

cameeoServices.factory('Reference', ['$resource',
    function ($resource) {
        return $resource('references/:phoneId.json', {}, {
            query: {method: 'GET', params: {phoneId: 'phones'}, isArray: true}
        });
    }]);

cameeoServices.factory('Brand', ['$resource',
    function ($resource) {
        return $resource('referential/:brandId.json', {}, {
            query: {method: 'GET', params: {brandId: 'brands'}, isArray: true}
        });
    }]);

cameeoServices.factory('BrandReference', ['$resource',
    function ($resource) {
        return $resource('referential/:brandRef.json', {}, {
            query: {method: 'GET', params: {brandRef: 'canon-slr'}, isArray: true}
        });
    }]);

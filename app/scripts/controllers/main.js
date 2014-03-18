'use strict';

var cameeoControllers = angular.module('cameeoControllers', []);

cameeoControllers.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];
});

cameeoControllers.controller('BrandListCtrl', ['$scope', 'Brand',
    function ($scope, Brand) {
        $scope.items = Brand.query();
        //$scope.orderProp = 'brand';
    }]);

cameeoControllers.controller('BrandRefListCtrl', ['$scope', '$routeParams', 'BrandReference',
    function ($scope, $routeParams, BrandReference) {
        $scope.items = BrandReference.query({brandRef: $routeParams.brand + '-' + $routeParams.refType}, function () {
            $scope.brand = $routeParams.brand;
            $scope.refType = $routeParams.refType;
        });
    }]);

cameeoControllers.controller('BrandRefDetailCtrl', ['$scope', '$routeParams', 'BrandReference',
    function ($scope, $routeParams, BrandReference) {
        var items = BrandReference.query({brandRef: $routeParams.brand + '-' + $routeParams.refType}, function () {

        });

        $scope.brand = $routeParams.brand;
        $scope.refType = $routeParams.refType;

//        console.log(items);
//        items.filter(function (e) {
//            console.log(e.code);
//            if(e.code === $routeParams.refId) {
//                console.log(e);
//            }
//        });
    }]);

cameeoControllers.controller('ReferentialListCtrl', ['$scope', 'Reference',
    function ($scope, Reference) {
        $scope.phones = Reference.query();
        $scope.orderProp = 'age';
    }]);

/*
cameeoControllers.controller('ReferentialDetailCtrl', ['$scope', '$routeParams', 'Reference',
    function ($scope, $routeParams, Reference) {
        $scope.phone = Reference.get({phoneId: $routeParams.phoneId}, function (phone) {
            $scope.mainImageUrl = phone.images[0];
        });

        $scope.setImage = function (imageUrl) {
            $scope.mainImageUrl = imageUrl;
        }
    }]);
    */
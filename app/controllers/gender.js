define([
    'angular',
    'firebase',
    'angularRoute',
], function(angular, firebase, angularRoute) {
    angular.module("CapstoneApp.genderCtrl", ['ngRoute'])
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider
             .when('/general', {
                templateUrl: '../partials/general.html',
                controller: 'fmCtrl',
                controllerAs: 'generalCtrl'
            })
            .when('/', {
                templateUrl: '../partials/gender.html',
                controller: 'fmCtrl',
                controllerAs: 'genderCtrl'
            })
            .when('/female', {
                templateUrl: '../partials/femaleSelect.html',
                controller: 'fmCtrl',
                controllerAs: 'femaleSelectCtrl'
            })
            .when('/male', {
                templateUrl: '../partials/maleSelect.html',
                controller: 'fmCtrl',
                controllerAs: 'maleSelectCtrl'
            });
        }])
        .controller("fmCtrl", ["$scope", function($scope) {

    }]);
});
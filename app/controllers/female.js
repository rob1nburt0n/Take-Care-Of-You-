define([
    'angular',
    'firebase',
    'angularRoute',
], function(angular, firebase, angularRoute) {
    angular.module("CapstoneApp.femaleCtrl", ['ngRoute'])
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider
            .when('/female18', {
                templateUrl: '../partials/female18-29.html',
                controller: 'femaleCtrl',
                controllerAs: 'female18Ctrl'
            })
            .when('/female30', {
                templateUrl: '../partials/female30-39.html',
                controller: 'femaleCtrl',
                controllerAs: 'female30Ctrl'
            })
            .when('/female40', {
                templateUrl: '../partials/female40-49.html',
                controller: 'femaleCtrl',
                controllerAs: 'female40Ctrl'
            })
            .when('/female50', {
                templateUrl: '../partials/female50-64.html',
                controller: 'femaleCtrl',
                controllerAs: 'female50Ctrl'
            })
            .when('/female65', {
                templateUrl: '../partials/female65.html',
                controller: 'femaleCtrl',
                controllerAs: 'female65Ctrl'
            });
        }])
        .controller("femaleCtrl", ["$scope", function($scope) {


    }]);
});
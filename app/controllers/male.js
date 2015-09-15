define([
    'angular',
    'firebase',
    'angularRoute',
], function(angular, firebase, angularRoute) {
    angular.module("CapstoneApp.maleCtrl", ['ngRoute'])
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider
            .when('/male18', {
                templateUrl: '../partials/male18-29.html',
                controller: 'maleCtrl',
                controllerAs: 'male18Ctrl'
            })
            .when('/male30', {
                templateUrl: '../partials/male30-39.html',
                controller: 'maleCtrl',
                controllerAs: 'male30Ctrl'
            })
            .when('/male40', {
                templateUrl: '../partials/male40-49.html',
                controller: 'maleCtrl',
                controllerAs: 'male40Ctrl'
            })
            .when('/male50', {
                templateUrl: '../partials/male50-64.html',
                controller: 'maleCtrl',
                controllerAs: 'male50Ctrl'
            })
            .when('/male65', {
                templateUrl: '../partials/male65.html',
                controller: 'maleCtrl',
                controllerAs: 'male65Ctrl'
            });
        }])
        .controller("maleCtrl", ["$scope", function($scope) {


    }]);
});
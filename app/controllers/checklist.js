define([
    'angular',
    'firebase',
    'angularRoute',
], function(angular, firebase, angularRoute) {
    angular.module("CapstoneApp.checklistCtrl", ['ngRoute'])
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider
             .when('/checklistm18', {
                templateUrl: '../partials/checklistm18.html',
                controller: 'checkCtrl',
                controllerAs: 'checklistm18Ctrl'
            })
             .when('/checklistm30', {
                templateUrl: '../partials/checklistm30.html',
                controller: 'checkCtrl',
                controllerAs: 'checklistm30Ctrl'
            })
           .when('/checklistm40', {
                templateUrl: '../partials/checklistm40.html',
                controller: 'checkCtrl',
                controllerAs: 'checklistm40Ctrl'
            })
            .when('/checklistm50', {
                templateUrl: '../partials/checklistm50.html',
                controller: 'checkCtrl',
                controllerAs: 'checklistm50Ctrl'
            })
            .when('/checklistm65', {
                templateUrl: '../partials/checklistm65.html',
                controller: 'checkCtrl',
                controllerAs: 'checklistm65Ctrl'
            })
            .when('/checklistf18', {
                templateUrl: '../partials/checklistf18.html',
                controller: 'checkCtrl',
                controllerAs: 'checklistf18Ctrl'
            })
            .when('/checklistf30', {
                templateUrl: '../partials/checklistf30.html',
                controller: 'checkCtrl',
                controllerAs: 'checklistf30Ctrl'
            })
            .when('/checklistf40', {
                templateUrl: '../partials/checklistf40.html',
                controller: 'checkCtrl',
                controllerAs: 'checklistf40Ctrl'
            })
            .when('/checklistf50', {
                templateUrl: '../partials/checklistf50.html',
                controller: 'checkCtrl',
                controllerAs: 'checklistf50Ctrl'
            })
            .when('/checklistf65', {
                templateUrl: '../partials/checklistf65.html',
                controller: 'checkCtrl',
                controllerAs: 'checklistf65Ctrl'
            });
        }])
        .controller("checkCtrl", ["$scope", function($scope) {

    }]);
});
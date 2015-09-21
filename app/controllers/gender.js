define([
    'angular',
    'firebase',
    'angularRoute',
], function(angular, firebase, angularRoute) {
    angular.module("CapstoneApp.genderCtrl", ['ngRoute'])
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider
             .when('/', {
                templateUrl: '../partials/general.html',
                controller: 'fmCtrl',
                controllerAs: 'generalCtrl'
            })
             .when('/bmi', {
                templateUrl: '../partials/bmi.html',
                controller: 'fmCtrl',
                controllerAs: 'bmiCtrl'
            })
              .when('/about', {
                templateUrl: '../partials/about.html',
                controller: 'fmCtrl',
                controllerAs: 'aboutCtrl'
            })
             .when('/signup', {
                templateUrl: '../partials/additionalInfo.html',
                controller: 'fmCtrl',
                controllerAs: 'additionalInfoCtrl'
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

function calcBMI() {
  var weight = document.bmiform.pounds.value, height = document.bmiform.inches.value;
  document.bmiform.bmi.value = parseInt((weight * 703) / (height * height));
} 
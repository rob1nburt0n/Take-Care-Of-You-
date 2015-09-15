define([
  'angular',
  'angularRoute',
  'angularFire',
  'controllers/gender',
  'controllers/female',
  'controllers/male'

  ], function(angular, angularRoute, af, genderCtrl, femaleCtrl, maleCtrl) {
    return angular.module("CapstoneApp", [
      'ngRoute',
      'firebase',
      'CapstoneApp.genderCtrl',
      'CapstoneApp.femaleCtrl',
      'CapstoneApp.maleCtrl'

      ]).



config(["$routeProvider",
  function($routeProvider) {
    $routeProvider.
     
      otherwise ({
        redirectTo: "/"
      });
  }]);
});

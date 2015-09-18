define([
  'angular',
  'angularRoute',
  'angularFire',
  'controllers/gender',
  'controllers/female',
  'controllers/male',
  'controllers/checklist'

  ], function(angular, angularRoute, af, genderCtrl, femaleCtrl, maleCtrl, checklistCtrl) {
    return angular.module("CapstoneApp", [
      'ngRoute',
      'firebase',
      'CapstoneApp.genderCtrl',
      'CapstoneApp.femaleCtrl',
      'CapstoneApp.maleCtrl',
      'CapstoneApp.checklistCtrl'

      ]).



config(["$routeProvider",
  function($routeProvider) {
    $routeProvider.
     
      otherwise ({
        redirectTo: "/"
      });
  }]);
});

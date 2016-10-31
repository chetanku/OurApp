var oauthApp = angular.module('oauthApp.controllers', []);
oauthApp.controller('MainCtrl', function ($scope, $ionicSideMenuDelegate) { 
    $scope.toggleLeftSideMenu = function() {
    $ionicSideMenuDelegate.toggleRight();
  }; 
}
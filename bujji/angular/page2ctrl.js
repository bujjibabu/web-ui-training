'use strict';
angular.module('myApp')
  .controller('Page2Controller', function ($scope,$rootScope) {
  $scope.name= "this is page2";
  $rootScope.common = "this is my common code";
  });
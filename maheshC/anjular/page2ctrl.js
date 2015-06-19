'use strict';
angular.module('myApp')
.controller('Page2Controller',function($scope.$rootscope){
$scope.name="this is page 2";
$rootscope.common="this is my common code";
});
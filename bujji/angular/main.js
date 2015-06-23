var myApp = angular.module('myApp',['ngRoute']);
myApp.config(function($routeProvider) {
  $routeProvider
    .when('/page2', {
      controller:'Page2Controller',
      templateUrl:'page2.html'
    })
    .when('/page3', {
      controller:'Page3Controller',
      templateUrl:'page3.html'
    })
    .when('/page4', {
      controller:'Page4Controller',
      templateUrl:'page4.html'
    })
    .otherwise({
      redirectTo:'/page3'
    });
})
/*global angular, $scope*/

(function () {
    "use strict";
    
    var app = angular.module('testApp', []);
    
    app.controller('barcode', ['$scope', function($scope) {
        $scope.testvar = 'Also working';
        $scope.barcode = '';
        
        $scope.trybarcode = function () {
              
              setTimeout(function () {
              // if pic2shop not installed yet, go to App Store
              window.location = "http://itunes.com/apps/pic2shop";
             }, 25);
             // launch pic2shop and tell it to open Google Products with scan result
             $scope.barcode = "pic2shop://scan?callback=";
        }
    }]);
    
}());
/*global angular, $scope*/

(function () {
    "use strict";
    
    var app = angular.module('testApp', []);
    
    app.controller('barcode', ['$scope', function($scope) {
        $scope.testvar = '7';
        $scope.barcode = '';
        
        $scope.trybarcode = function (code, format) {
              
             // launch pic2shop and tell it to open Google Products with scan result
             $scope.barcode = code;
        }
    }]);
    
}());

/* Put the following HTML link in where the button is currently:  
<a href="p2spro://scan?formats=EAN13,EAN8,UPCE,ITF,CODE39,CODE128,CODABAR,QR&callback=javascript:insertCodeFormat('CODE','FORMAT')">Scan
with pic2shop PRO, javascript call</a> */
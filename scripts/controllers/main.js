'use strict';

angular.module('preMoveInCheckListApp')
.controller('mainCtrl', function($scope, dataService) {
  $scope.addCheck = function() {
    var check = {name: "This is a new check."};
    $scope.checks.push(check);
  };
  
  $scope.howdyDo = dataService.howdyDo;
  
  dataService.getChecks(function(response) { 
      console.log(response.data);  
      $scope.checks = response.data;
    });
  
  $scope.deleteCheck = function(check, $index) {
    dataService.deleteCheck(check);
    $scope.checks.splice($index, 1);
  };
  
  $scope.saveCheck = function(check) {
    dataService.saveCheck(check);
  };
})
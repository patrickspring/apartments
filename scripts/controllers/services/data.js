'use strict';

angular.module('preMoveInCheckListApp')
.service('dataService', function($http) {
  this.howdyDo = function() {
    console.log("This is the data service's method!!");
  };
  
  this.getChecks = function(callback){
    $http.get('mock/checks.json')
    .then(callback)
  };
  
  this.deleteCheck = function(check) {
    console.log("The " + check.name + " check has been deleted!")
    // other logic
  };
  
  this.saveCheck = function(check) {
    console.log("The " + check.name + " check has been saved!");
    // other logic...
  };
  
});
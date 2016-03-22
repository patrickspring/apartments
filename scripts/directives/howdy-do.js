angular.module('preMoveInCheckList')
.directive('howdyDo', function() {
    return {
        templateUrl: 'templates/check.html',
        controller: 'mainCtrl',
        replace: true
    };
});
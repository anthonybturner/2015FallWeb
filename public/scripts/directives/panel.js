angular.module('fitnessapp.directives')
    .directive('fitnessappPanel', function () {
        
        return {
            
            restrict: 'EA', //E = element, A = attribute, C = class, M = comment         
            controller: function(panel, $scope){
                $scope.vm = panel;
            },
            templateUrl: 'scripts/directives/panel.html'
            //link: function ($scope, element, attrs) { } //DOM manipulation
        }
    })
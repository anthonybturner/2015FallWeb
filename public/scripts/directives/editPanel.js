 angular.module('fitnessapp.directives')
    .directive('fitnessappEdit', function () {
        
        return {
            
            restrict: 'EA', //E = element, A = attribute, C = class, M = comment         
            controller: function(editpanel, $scope){
                $scope.vm = editpanel;
            },scope: true,
            templateUrl: 'scripts/directives/editPanel.html'
            //link: function ($scope, element, attrs) { } //DOM manipulation
        }
    }).service('editpanel', function(){
        var self = this;
        self.editstate = null;
        self.show = function(editstate){
            self.editstate = editstate;
           
            
        }
    });
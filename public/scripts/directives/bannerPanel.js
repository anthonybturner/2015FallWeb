angular.module('fitnessapp.directives')
    .directive('fitnessappdiagPanel', function () {
        
        return {
            
            restrict: 'EA', //E = element, A = attribute, C = class, M = comment         
            controller: function(panelb, $scope){
                $scope.vm = panelb;
            },
            templateUrl: 'scripts/directives/bannerPanel.html'
            //link: function ($scope, element, attrs) { } //DOM manipulation
        }
        
    }) .service('panelb', function(){
        var self = this;
        self.bannerState = null;
        self.show = function(bstate){
            self.bannerState = bstate;
        }
    });
///    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.0-beta.2/angular.min.js"></script>

angular.module('fitnessapp.directives', [])
.directive('fitnessappAlert', function () {
    return {
        controller: function(alert, $scope){
            $scope.vm = alert;
        },scope: true,
        templateUrl:   '/views/other/alert.html'
    };
})
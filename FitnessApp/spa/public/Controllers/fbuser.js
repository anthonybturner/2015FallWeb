angular.module("app")
    .controller('fbCtrl', function($http, $scope, facebook) {
                 
          var self = this;
         facebook.getUser().then(function(fbUser){
                self.fbUser = fbUser;
            });
            self.status = "Not Checked Yet."
                
    });
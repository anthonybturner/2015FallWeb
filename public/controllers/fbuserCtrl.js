angular.module("app")
    .controller('fbCtrl', function($http, $scope, $rootScope, facebook, $location) {
                 
         var self = this;
            
          
         facebook.getUser().then(function(fbUser){
                
                self.fbUser = fbUser;
                if( fbUser){
                    
                    
                    $rootScope.loggedUser = fbUser;
                }
                

            });
            
            
            self.status = "Not Checked Yet."
            
            self.login = function(){
                
                facebook.login().then(function(fbUser){
                    
                    self.fbUser = fbUser;
                     if( fbUser){
                    
                    
                    $rootScope.loggedUser = fbUser;
                    $location.url("/");
                }
                    
                  

                })
                
            }
      
                
    });
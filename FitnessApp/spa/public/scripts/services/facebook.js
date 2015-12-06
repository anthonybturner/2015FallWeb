angular.module("app").service('facebook', function($q, $http, alert){
    
            return {
                getUser: function(){
                    var deferred = $q.defer();
                    
 
                    FB.init({
                        appId      : '1526912157622194',
                        cookie     : true,  
                        xfbml      : true,  
                        version    : 'v2.5' 
                    });
                    
                    FB.getLoginStatus(function(response) {
                        
                        if(response.status === 'connected'){
                           
                                $http.get('/fbuser/' + response.authResponse.accessToken).success(function(fbUser) {
                                    deferred.resolve(fbUser);
                                })
                        }else{
                           
                            FB.login(function(response) {

                               if( response.authResponse){
                                   $http.get('/fbuser/' + response.authResponse.accessToken).success(function(fbUser) {
                                        deferred.resolve(fbUser);
                                        
                                    })
                                
                               }else{
                                   
                                   //alert.show("Not logged into facebook");
                               }
                                
                            }, {scope: 'public_profile,email'});
                        }
                    });
                    
                    return deferred.promise;
                }
            }
});
      
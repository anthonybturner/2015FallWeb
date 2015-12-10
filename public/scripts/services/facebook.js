angular.module("app").service('facebook', function($q, $http, alert){
    
            return {
                
                 login: function(){
                       
                    var deferred = $q.defer();
                    
                    FB.login(function(response) {
                        
                         console.log("loggin connected")
                        FB.api('/me', function(fbUser){
                        
                        
                            $http.get('/fbUser/', {params: {access_token: fbUser.id} });
                            deferred.resolve(fbUser);
                        });
                    }, {scope: 'public_profile,email'});
                    return deferred.promise;
                },
                
                getUser: function(){
                    var deferred = $q.defer();
                    console.log("Get user func")
 
                    FB.init({
                        appId      : '1526912157622194',
                        cookie     : true,  
                        xfbml      : true,  
                        version    : 'v2.5' 
                    });
                    
                    FB.getLoginStatus(function(response) {
                        
                            console.log("Get login status func")
                         if(response.status === 'connected'){
                            //response.authResponse.accessToken
                                FB.api('/me', function(fbUser){
                                    deferred.resolve(fbUser);
                                });
                                 console.log(" connected")
                                $http.post('/fbLogin', { access_token: response.authResponse.accessToken })
                        }else{
                            
                                console.log("not connected")
                        }
                        
                    });
                    
                    return deferred.promise;
                }
            }
});
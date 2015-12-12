angular.module("app").service('facebook', function($q, $http, alert){
    
            return {
                
                 login: function(){
                       
                    var deferred = $q.defer();
                    
                    FB.login(function(response) {
                        
                        FB.api('/me', function(fbUser){
                        
                            $http.get('/session/', {params: {access_token: fbUser.id} });
                            deferred.resolve(fbUser);
                        });
                        
                        
                    }, {scope: 'public_profile,email'});
                    return deferred.promise;
                },
                
                getUser: function(){
                    
                    var deferred = $q.defer();
            
 
                    FB.init({
                        appId      : '701683419973901',
                        cookie     : true,  // enable cookies to allow the server to access 
                                            // the session
                        xfbml      : true,  // parse social plugins on this page
                        version    : 'v2.2', // use version 2.2
                        oauth : true,
                        status: false
                      }
                    );
                    
                   
                    
                 //   FB.Event.subscribe('auth.statusChange', auth_response_change_callback);
                    
                    
                    
                    FB.getLoginStatus(function(response) {
                        
                     
                        
                         if(response.status === 'connected'){
                            //response.authResponse.accessToken
                                FB.api('/me', function(fbUser){
                                    deferred.resolve(fbUser);
                                });
                                
                                $http.post('/fbLogin', { access_token: response.authResponse.accessToken })
                        }else{
                            
                                console.log("not connected")
                        }
                        
                    }, false);
                    
                    return deferred.promise;
                }
            }
});
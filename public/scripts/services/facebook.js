angular.module("app").service('facebook',function($q, $http){
            return {
                login: function(){
                  
                    var deferred = $q.defer();
                    FB.login(function(response) {

                        FB.api('/me', function(fbUser){
                            deferred.resolve(fbUser);
                        });
                        
                    }, {scope: 'public_profile,email'});
                    
                    return deferred.promise;
                },
                getUser: function(){
                    var deferred = $q.defer();
                    
                    FB.init({
                        appId      : '701683419973901',
                        cookie     : true,  
                        xfbml      : true,
                        status     :true,
                        version    : 'v2.5' 
                    });
                    
                    
                    
                    FB.getLoginStatus(function(response) {
                      

                        if(response.status === 'connected'){
                            
                             console.log("FB connected")
                             
                                FB.api('/me', function(fbUser){
                                    deferred.resolve(fbUser);
                                });
                                
                                //Save the facebook user session
                                $http.post('/login', { access_token: response.authResponse.accessToken })
                                
                                
                        }else{
                          
                          
                             console.log("FB Not connected")
                           
                              //Delete the facebook user session
                              $http.post("/fbsession",  {state: "destroy"}).then(function(data){

                                deferred.resolve(null);
                              })
                             
                        }
                    });
                    
                    return deferred.promise;
                }
            }
        })
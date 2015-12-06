angular.module("app")
    .controller('friendsCtrl', function($http) {
                 
                   var self = this;

                   $http.get('/friend').success(function(data){
                       
                      self.Heading = {"Message": "Your friends"};
                      self.Description = {"Message":"Keep up with your friends while keeping fit"};
                      self.Intro = {
                                      "Title" : "This page uses NodeJs for server side scripting, Express for routing, and is starting to use AngularJs."+
                                      "It also uses Handlebars for some templating."
                          
                                      },
                      self.rows = data
                      
                  });
});
          

         
        

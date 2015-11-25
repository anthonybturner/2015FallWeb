 var appControllers = angular.module('appControllers', []);

         
          appControllers.controller('goalsCtrl', function($http, $scope, $sce) {
                  console.log("goals ctrl")
                 var self = this;

                 $http.get('/goal').then(function(data){
                     
                    self.Heading = {"Message": "Welcome to FitnessApp 2015", "Banner": "/images/fitness.gif"};
                    self.Description = {"Message":"Track your eating habits, keep fit with exercise goals, and talk with other members"};
                    self.Intro = {
                                    "Title" : "This page uses NodeJs for server side scripting, Express for routing, and is starting to use AngularJs."+
                                    "It also uses Handlebars for some templating."
                        
                                 },

                    self.rows = data.data;

                    

                    
                });

                 //Details button
                 self.details = function(row, index){
                    
                   var html = "<input type='text' class='form-control' name='Name' placeholder='Name' value='"+row.Name+"' disabled></input>"+
                                "<input type='text' class='form-control' name='PercentageComplete' placeholder='Percent complete' value='"+row.PercentageComplete+"' disabled></input>"+
                                "<input type='text' class='form-control' name='Accomplished' placeholder='Accomplished so far' value='"+row.Accomplished+"' disabled></input>";
                    
                      self.data = {
                      
                        title: "Details for goal " + row.Name,
                        columns: row,
                        body: $sce.trustAsHtml(html),
                        confirm: function(){
                            
                          
                            $scope.modalTitle = "Details for goal"
                        }
                     };
                     $("#myDialog .modal-title").html("<h2> Details goal</h2>");
                     $("#myDialog .modal-body").html(html);
                     $("#myDialog .submit ").hide();
                     $("#myDialog").modal('show');
                   }



                     //Details button
                 self.edit = function(row, index){
                    
                   var html = "<input type='text' class='form-control' name='Name' placeholder='Name' value='"+row.Name+"'></input>"+
                                "<input type='text' class='form-control' name='PercentageComplete' placeholder='Percent complete' value='"+row.PercentageComplete+"'></input>"+
                                "<input type='text' class='form-control' name='Accomplished' placeholder='Accomplished so far' value='"+row.Accomplished+"'></input>"+
                                "<input type='hidden' class='form-control' name='id' value='"+row.id+"'></input>";
                    
                      self.data = {
                      
                        title: "Edit  goal " + row.Name,
                        columns: row,
                        body: $sce.trustAsHtml(html),
                        confirm: function(){
                            
                          
                            
                        }
                     };
                    $("#myDialog .modal-title").html("<h2> Edit goal</h2>");
                     $("#myDialog .modal-body").html(html);
                     $("#myDialog .submit ").hide();
                     $("#myDialog").modal('show');
                }


              }).controller('goalsDetailCtrl', ['$scope','$http', '$routeParams' ,function($scope, $http, $routeParams) {
                 
                 console.log("details")
                 console.log($routeParams.id)
                 var self = this;

                  $http.get('/goal/'+$routeParams.id).then(function(data){
                         
                        self.Heading = {"Message": "Nutrition tracking"};
                        self.Description = {"Message":"Track your eating habits"};
                        self.Intro = {
                                        "Title" : "This page uses NodeJs for server side scripting, Express for routing, and is starting to use AngularJs."+
                                        "It also uses Handlebars for some templating."
                            
                                        },
                        self.row = data.data;
                       
                       $scope.modalTitle = "Details for goal"

                        
                    });

                  self.close = function(){

                        

                  }
                
                        
                 
                
            }]).controller('foodsCtrl', function($http) {
                 
                 var self = this;

                     $http.get('/food').success(function(data){
                         
                        self.Heading = {"Message": "Nutrition tracking"};
                        self.Description = {"Message":"Track your eating habits"};
                        self.Intro = {
                                        "Title" : "This page uses NodeJs for server side scripting, Express for routing, and is starting to use AngularJs."+
                                        "It also uses Handlebars for some templating."
                            
                                        },
                        self.rows = data

                        
                    });



            }).controller('foodsDetailCtrl', function($http) {
                 
                 var self = this;

                     $http.get('/food').success(function(data){
                         
                        self.Heading = {"Message": "Nutrition tracking"};
                        self.Description = {"Message":"Track your eating habits"};
                        self.Intro = {
                                        "Title" : "This page uses NodeJs for server side scripting, Express for routing, and is starting to use AngularJs."+
                                        "It also uses Handlebars for some templating."
                            
                                        },
                        self.rows = data
                        console.log(data)

                        
                    });



            }).controller('usersCtrl', function($http) {
                 
                   var self = this;

                   $http.get('/user').success(function(data){
                       
                      self.Heading = {"Message": "Users info"};
                      self.Description = {"Message":"Keep up with user info"};
                      self.Intro = {
                                      "Title" : "This page uses NodeJs for server side scripting, Express for routing, and is starting to use AngularJs."+
                                      "It also uses Handlebars for some templating."
                          
                                      },
                      self.rows = data
                    
                   });
              }).controller('exercisesCtrl', function($http) {
                 
                   var self = this;

                   $http.get('/exercise').success(function(data){
                       
                      self.Heading = {"Message": "Exercise tracking"};
                      self.Description = {"Message":"Keep fit with exercise tracking"};
                      self.Intro = {
                                      "Title" : "This page uses NodeJs for server side scripting, Express for routing, and is starting to use AngularJs."+
                                      "It also uses Handlebars for some templating."
                          
                                      },
                      self.rows = data
                      
                  });
              }).controller('friendsCtrl', function($http) {
                 
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
          

         
        
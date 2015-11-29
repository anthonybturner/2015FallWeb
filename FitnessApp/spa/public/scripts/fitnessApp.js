angular.module("app", ['ngRoute',  'fitnessapp.directives'])
  .config(function($routeProvider) {

            $routeProvider.
             when('/', {

                templateUrl: 'Views/goals/goal-list.html',
                controller: 'goalsCtrl', controllerAs: 'vm'

              }).
              when('/goal', {

                templateUrl: 'Views/goals/goal-list.html',
                controller: 'goalsCtrl', controllerAs: 'vm'

              }).
              when('/goal/:id', {

                templateUrl: 'Views/goals/goal-detail.html',
                controller: 'goalsDetailCtrl', controllerAs: 'vm'

              }).when('/food', {

                templateUrl: 'Views/foods/food-list.html',
                controller: 'foodsCtrl', controllerAs: 'vm'

              }).when('/food/:id', {

                templateUrl: 'Views/foods/food-detail.html',
                controller: 'foodsCtrl', controllerAs: 'vm'

              }). when('/user', {

                templateUrl: 'Views/users/user-list.html',
                controller: 'usersCtrl', controllerAs: 'vm'

              }).
              when('/user/:id', {

                templateUrl: 'Views/users/user-list.html',
                controller: 'usersCtrl', controllerAs: 'vm'

              }). when('/exercise', {

                templateUrl: 'Views/exercises/index.html',
                controller: 'exercisesCtrl', controllerAs: 'vm'

              }).
              when('/exercise/:id', {

                templateUrl: 'Views/exercises/index.html',
                controller: 'exercisesCtrl', controllerAs: 'vm'

              }). when('/friend', {

                templateUrl: 'Views/friends/friend-list.html',
                controller: 'friendsCtrl', controllerAs: 'vm'

              }).
              when('/friend/:id', {

                templateUrl: 'Views/friends/friend-list.html',
                controller: 'friendsCtrl', controllerAs: 'vm'

              }).
              otherwise({

                redirectTo: '/user'

              });
}).controller('goalsCtrl', function($http, $scope,$sce, panel, editpanel,  alert) {
                 
                 var self = this;
                 self.title  = "Keep fit with exercise goals";

                 $http.get("/goal", {    params: { user_id: 1 }}).then(function(data){
                     
                   
                    self.rows = data.data;

                    
                });
                
                self.delete = function(row, index){
                    

                    panel.show( {
                        title: "Delete a goal",
                        body: "Are you sure you want to delete " + row.Name + "?",
                        confirm: function(){
                            $http.delete('/goal/' + row.id)
                            .success(function(data){
           
                                self.rows.splice(index, 1);
                            }).error(function(data){
                                
                                
                                alert.show(data.code);
                            });
                        }
                    });
                }
                
                self.confirm = function(){
                    
                    
                }

                 //Details button
                 self.details = function(row, index){
                       
                       editpanel.show( {
                        title: "Details for goal",
                        rows:  row,
                        editing: false,
                        confirm: function(){
                            $http.delete('/goal/' + row.id)
                            .success(function(data){
                                
                                
                                self.rows.splice(index, 1);
                            }).error(function(data){
                                
                                
                                alert.show(data.code);
                            });
                        }
                    });
                   }



                     //Details button
                 self.edit = function(row, index){
                    
                    row.isEditing = true;
                 }
                   
                        //Details button
                 self.create = function(){
                    
                  self.rows.push({ isEditing: true });

                 }
                 
                  self.save = function(row, index){
                      
                      var data = {"isEditing": row.isEditing, "Name": row.Name, "PercentageComplete": row.PercentageComplete, "Accomplished": row.Accomplished, "UsersId": "1", "id": row.id};
                      
                        $http.post('/goal', data)
                        .success(function(data){
                            
                            data.isEditing = false;
                            self.rows[index] = data;
                            
                        }).error(function(data){
                            
                            alert.show(data.code);
                            
                        });
                    }


              }).controller('goalsDetailCtrl' ,function($scope, $http, $routeParams) {
                 
             
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
                
                        
                 
                
            }).controller('foodsCtrl', function($http, $scope,$sce, panel, editpanel,  alert) {
                 
                var self = this;
                 self.title  = "Welcome to FitnessApp 2015";

                 $http.get("/food").then(function(data){
                     
                    self.title = "Track your eating habits";
                
                    self.rows = data.data;
                    
                   
                    
                    
                });
                
                self.delete = function(row, index){
                    

                    panel.show( {
                        title: "Delete a food",
                        body: "Are you sure you want to delete food " + row.Name + "?",
                        confirm: function(){
                            $http.delete('/food/' + row.id)
                            .success(function(data){
           
                                self.rows.splice(index, 1);
                            }).error(function(data){
                                
                                
                                alert.show(data.code);
                            });
                        }
                    });
                }
                
                self.confirm = function(){
                    
                    
                }

                 //Details button
                 self.details = function(row, index){
                       
                       editpanel.show( {
                        title: "Details for food",
                        rows:  row,
                        editing: false,
                        confirm: function(){
                            $http.delete('/food/' + row.id)
                            .success(function(data){
                                
                                
                                self.rows.splice(index, 1);
                            }).error(function(data){
                                
                                
                                alert.show(data.code);
                            });
                        }
                    });
                   }



                     //Details button
                 self.edit = function(row, index){
                    
                    row.isEditing = true;
                 }
                   
                        //Details button
                 self.create = function(){
                    
                  self.rows.push({ isEditing: true });

                 }
                 
                  self.save = function(row, index){
                      
                      var data = {"isEditing": row.isEditing, "Name": row.Name, "Calories": row.Calories, "Carbohydrates": row.Carbohydrates, "Cholestrol": row.Cholestrol, "Fiber": row.Fiber, "Protein": row.Protein, "Users_id": row.Users_id, "MealType_Id": row.MealTypes_id, "id": row.id};
                      
                        $http.post('/food', data)
                        .success(function(data){
                            
                            data.isEditing = false;
                            self.rows[index] = data;
                            
                        }).error(function(data){
                            
                            alert.show(data.code);
                            
                        });
                    }

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

                    });



            }).controller('usersCtrl', function($http,  panel, editpanel,  alert) {
                 
                 var self = this;
                 self.title  = "Socialize with other members";

                 $http.get("/user", {    params: { user_id: 1 }}).then(function(data){
                     
              
                    self.rows = data.data;
                    
                   
                    
                    
                });
                
                self.delete = function(row, index){
                    

                    panel.show( {
                        title: "Delete a user",
                        body: "Are you sure you want to user " + row.Name + "?",
                        confirm: function(){
                            $http.delete('/user/' + row.id)
                            .success(function(data){
           
                                self.rows.splice(index, 1);
                            }).error(function(data){
                                
                                
                                alert.show(data.code);
                            });
                        }
                    });
                }
                
                self.confirm = function(){
                    
                    
                }

                 //Details button
                 self.details = function(row, index){
                       
                       editpanel.show( {
                        title: "Details for user",
                        rows:  row,
                        editing: false,
                        confirm: function(){
                            $http.delete('/user/' + row.id)
                            .success(function(data){
                                
                                
                                self.rows.splice(index, 1);
                            }).error(function(data){
                                
                                
                                alert.show(data.code);
                            });
                        }
                    });
                   }



                     //Details button
                 self.edit = function(row, index){
                    
                    row.isEditing = true;
                 }
                   
                        //Details button
                 self.create = function(){
                    
                  self.rows.push({ isEditing: true });

                 }
                 
                  self.save = function(row, index){
                      
                      var data = {"isEditing": row.isEditing, "Name": row.Name, "Age": row.Age, "Height": row.Height, "Weight": row.Weight, "Avatar": row.Avatar, "id": row.id};
                      
                        $http.post('/user', data)
                        .success(function(data){
                            
                            data.isEditing = false;
                            self.rows[index] = data;
                            
                        }).error(function(data){
                            
                            alert.show(data.code);
                            
                        });
                    }

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
          

         
        

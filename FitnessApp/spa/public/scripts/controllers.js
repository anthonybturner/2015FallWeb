
controller('foodsCtrl', function($http, $scope, panel, editpanel,  alert) {
                 
                var self = this;
                 self.title  = "Keep track of nutrition ";
                 self.rows = [];

                 self.users_id = null;
                 
                   
                    $http.get("/login").then(function(data){//Get a pseudo random user id and gather data based on that user
                                       

                        self.users_id = data.data.users_id;
                        $http.get('/food',  {    params: { users_id: data.data.users_id }}).then(function(data){
                      
                            self.rows = data.data;

                      
                         });
                    
                    });
                    
                self.delete = function(row, index){
                    

                    panel.show( {
                        title: "Delete a food",
                        body: "Are you sure you want to delete " + row.foods_name + "?",
                        confirm: function(){
                            $http.delete('/food/' + row.foods_id)
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
                            $http.delete('/food/' + row.foods_id)
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
                    
                        self.rows.push({ isEditing: true, users_id: self.users_id, foods_id: null, foodstypes_id: null });

                 }
                 
                  self.save = function(row, index){

                    $http.post('/food', row)
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



            }).controller('foodsNewCtrl', function($http, $scope, panel, editpanel,  alert) {
                 
                var self = this;
                 self.title  = "Keep track of nutrition ";
                 self.row = {};
                 self.term = null;
                 self.choices = [];

                 self.users_id = null;
                 
                 $http.get('/food').then(function(data){
                      
                            self.row = data.data;

                      
                 });
                 
                   
                    
                    
              })
                .controller('exercisesCtrl', function($http, $scope, panel, editpanel,  alert) {
                 
                   var self = this;
                   self.title = "Exercise tracking";
                   self.users_id = null;
                   
                   self.rows = [];

                 self.users_id = null;
                 
                   
                    $http.get("/login").then(function(data){//Get a pseudo random user id and gather data based on that user
                                       

                        self.users_id = data.data.users_id;
                        $http.get('/exercise',  {    params: { users_id: data.data.users_id }}).then(function(data){
                      
                            self.rows = data.data;

                      
                         });
                    
                    });
                    

                  
                   self.delete = function(row, index){
                    

                    panel.show( {
                        title: "Delete a exercise",
                        body: "Are you sure you want to delete " + row.exercises_name + "?",
                        confirm: function(){
                            $http.delete('/exercise/' + row.exercises_id)
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
                        title: "Details for exercise",
                        rows:  row,
                        editing: false,
                        confirm: function(){
                            $http.delete('/exercise/' + row.exercises_id)
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
                    
                     self.rows.push({ isEditing: true, exercises_id : null, users_id: self.users_id});

                 }
                 
                  self.save = function(row, index){
                      
                        $http.post('/exercise', row)
                        .success(function(data){
                            
                            data.isEditing = false;
                            self.rows[index] = data;
                            
                        }).error(function(data){
                            
                            alert.show(data.code);
                            
                        });
                    }
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
          

         
        

angular.module("app")
    .controller('goalsCtrl', function($http, $scope, $location, $rootScope, panel, editpanel,  alert, calendarService) {
                 
                 $rootScope.pagetitle = "Goals";
                 
                 var self = this;
                 self.title = "Goals"
                 self.description  = "Daily, weekly, monthly, and yearly goals";
                 self.rows = [];
                 self.isViewing = false;
                 self.bgimage = "goals.png";
                 self.createItemButtonText = "New Goal";
                 self.deleteItemsButtonText = "Delete all";
                 

                   $scope.updateCalendar = function(){

           
                       $http.get('/goal',  {    params: { users_id: null, created_at: calendarService.date }}).then(function(data){
                                   
                            self.rows = data.data;

                      
                         });
                       
                   }
                    
                    
                  var goals = [];

                   
                   var substringMatcher = function(strs) {
                       
                          return function findMatches(q, cb) {
                            var matches, substringRegex;
                           // console.log(c)
                        
                            // an array that will be populated with substring matches
                            matches = [];
                        
                            // regex used to determine if a string contains the substring `q`
                            substrRegex = new RegExp(q, 'i');
                            $http.get("/goal/search/" +q).success(function(data) {
                                 
                                    for(var i=0; i < data.length; i++){
                                        
                                        var goal = data[i];
                                         goals.push(goal.goals_name);
                                          
                                    }

                         });
                        
                            // iterate through the pool of strings and for any string that
                            // contains the substring `q`, add it to the `matches` array
                            $.each(strs, function(i, str) {
                              if (substrRegex.test(str)) {
                                matches.push(str);
                              }
                            });
                        
                            cb(matches);
                          };
                        };
                        
                        
              $('.typeahead').typeahead({
                             
                              hint: true,
                              highlight: true,
                              limit: 2,
                              minLength: 1,
                              
                            },
                            {
                              name: 'goals',
                              source: substringMatcher(goals)
                      });
                        
                       


                $http.get('/goal').then(function(data){
                                        
                    self.rows = data.data;
    
              
                 });

                self.delete = function(row, index){
                    

                    panel.show( {
                        title: "Delete a goal",
                        body: "Are you sure you want to delete " + row.goals_name + "?",
                        confirm: function(){
                            $http.delete('/goal/' + row.goals_id)
                            .success(function(data){
           
                                self.rows.splice(index, 1);
                                alert.show(row.goals_name + " deleted.", 'success')

                            }).error(function(data){
                                
                                
                                alert.show(data.code, 'danger');
                            });
                            
                            panel.state = null;
                        }
                    });
                }
                
                self.confirm = function(){
                    
                    
                }

                 //Details button
                 self.details = function(row, index){
                      // self.isViewing = true;
                       
                       editpanel.show( {
                           
                        title: "Details for goal",
                        rows:  row,
                        editing: false,
                        confirm: function(){
                            $http.delete('/goal/' + row.goals_id)
                            .success(function(data){
                                
                                
                                self.rows.splice(index, 1);
                            }).error(function(data){
                                
                                
                                alert.show(data.code, 'danger');
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
                      
                         $http.get('/login').success( function(data){
                             
                           row.users_id =  data.users_id;
                           row.created_at = calendarService.date;

                            $http.post('/goal', row)
                            .success(function(data){
                                
                                data.isEditing = false;
                                self.rows[index] = data;
                                alert.show(row.goals_name + " saved for "+ row.created_at+".", 'success')

                                
                            }).error(function(data){
                                
                                alert.show(data.code, 'danger');
                                
                            });
                         })

                    }
                    
                 


})
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
                 
                 var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
                      'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
                      'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
                      'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
                      'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
                      'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
                      'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
                      'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
                      'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
                    ];
                    
                       var substringMatcher = function(strs) {
                        
                          return function findMatches(q, cb) {
                            var matches, substringRegex;
                        
                            // an array that will be populated with substring matches
                            matches = [];
                        
                            // regex used to determine if a string contains the substring `q`
                            substrRegex = new RegExp(q, 'i');
                        
                            // iterate through the pool of strings and for any string that
                            // contains the substring `q`, add it to the `matches` array
                            
                             $http.get("/goal/search/" + q).success(function(data) {
                                 
                                   console.log("in succes of get search")
                                    console.log(data)
                                    for(var i=0; i < data.length; i++){
                                        
                                        var goal = data[i];
                                        console.log(goal)
                                         if (substrRegex.test(goal.goals_name)) {
                                             console.log("It matches")
                                            matches.push((goal.goals_name));
                                          }
                                    }

                                    cb(matches);

                                });
                                
                                  
                        
                          };
                        };
                        


                $('#the-basics .typeahead').typeahead({
                      hint: true,
                      highlight: true,
                      minLength: 1
                    },
                    {
                      name: 'states',
                      source: substringMatcher(states)
                    });
                               
                   
                   $scope.updateCalendar = function(){

           
                       $http.get('/goal',  {    params: { users_id: null, created_at: calendarService.date }}).then(function(data){
                                    console.log(data.data)
                            self.rows = data.data;

                      
                         });
                       
                   }


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
angular.module("app")
    .controller('goalsCtrl', function($http, $scope,$sce, panel, editpanel,  alert) {
                 
                 var self = this;
                 self.title  = "Keep fit with exercise goals";
                   self.rows = [];

                 self.users_id = null;
                 
                   
                    $http.get("/login").then(function(data){//Get a pseudo random user id and gather data based on that user
                                       

                        self.users_id = data.data.users_id;
                        $http.get('/goal',  {    params: { users_id: data.data.users_id }}).then(function(data){
                      
                            self.rows = data.data;

                      
                         });
                    
                    });
                
                self.delete = function(row, index){
                    

                    panel.show( {
                        title: "Delete a goal",
                        body: "Are you sure you want to delete " + row.goals_name + "?",
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
                
                self.confirm = function(){
                    
                    
                }

                 //Details button
                 self.details = function(row, index){
                       
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

                      if( !row.users_id ){
                          
                          row.users_id = self.users_id;
                      }

                        $http.post('/goal', row)
                        .success(function(data){
                            
                            data.isEditing = false;
                            self.rows[index] = data;
                            
                        }).error(function(data){
                            
                            alert.show(data.code, 'danger');
                            
                        });
                    }


})
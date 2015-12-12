angular.module("app")
    .controller('profilesCtrl', function($http, $scope, $rootScope, panel, editpanel,  alert) {
                 
                 $rootScope.pagetitle = "Profile"
                 var self = this;
                 self.title = "Profile"
                 self.description  = "Your personal information";
                 self.rows = [];
                 self.isViewing = false;
                 self.bgimage = "profile.jpg";
                
                 self.users_id = null;
                 
                   
                 $http.get("/login").then(function(data){//Get a pseudo random user id and gather data based on that user
                                       

                        self.users_id = data.data.users_id;
                       
                        $http.get("/profileuser/"+self.users_id ).then(function(data){
                     
                          self.row = data.data; 
                          console.log( data.data)

                         });
                    
                    });

                 
                
        
                
                self.confirm = function(){
                    
                    
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
                      
                      //var data = {"isEditing": row.isEditing, "Name": row.Name, "Age": row.Age, "Height": row.Height, "Weight": row.Weight, "Avatar": row.Avatar, "id": row.id};
                        $http.post('/user', row)
                        .success(function(data){
                            
                            data.isEditing = false;
                            self.rows[index] = data;
                            
                        }).error(function(data){
                            
                             alert.show(data.code, 'danger');
                            
                        });
                    }
                    
 })
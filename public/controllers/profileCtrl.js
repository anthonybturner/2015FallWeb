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
                 
                 console.log("ProfileCtrl- Need to add users id in express js")
            
                       
                $http.get("/profileuser/"+self.users_id ).then(function(data){
                    console.log("profile user data")
                    console.log(data)
                  self.row = data.data; 
                  console.log( data.data)

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
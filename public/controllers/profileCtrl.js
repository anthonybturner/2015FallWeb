angular.module("app")
    .controller('profilesCtrl', function($http, $scope, $rootScope, panel, editpanel,  alert) {
                 
                 $rootScope.pagetitle = "Profile"
                 var self = this;
                 self.title = "Profile"
                 self.description  = "Your personal information";
                 self.row = {}
                 self.isViewing = false;
                 self.bgimage = "profile.jpg";
                
                 self.users_id = null;
                 

                       
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
                    console.log(row)
                 }
                   
              self.save = function(row, index){
                  
                 
                    $http.post('/user', row).success(function(data){
                        
                        data.isEditing = false;
                        row.isEditing = false;
                        self.row[index] = data;
                        console.log(data)
                        
                    }).error(function(data){
                        
                         alert.show(data.code, 'danger');
                        
                    });
                }
                    
 })
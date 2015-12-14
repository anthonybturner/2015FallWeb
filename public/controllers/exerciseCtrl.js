angular.module("app")
    .controller('exercisesCtrl', function($http, $scope, $rootScope, panel, editpanel, alert, calendarService) {

        $rootScope.pagetitle = "Exercises";

         var self = this;
         self.title = "Exercises"
         self.description  = "Keep track of your exercises";
         self.rows = [];
         self.isViewing = false;
         self.bgimage = "exercise.jpg";
         self.createItemButtonText = "New Exercise";
         self.deleteItemsButtonText = "Delete all";
         self.totalMinutes = 0, self.totalCalsBurned = 0;

           $scope.updateCalendar = function(){
    
                   
               $http.get('/exercise',  {    params: { users_id: null, created_at: calendarService.date }}).then(function(data){
              
                    self.rows = data.data;
                    self.totalMinutes = 0;
                    self.totalCalsBurned = 0;

                    for(var i = 0; i < self.rows.length; i++){
                      
                        var curRow = self.rows[i];
                        
                        self.totalMinutes +=curRow.exercises_minutes;
                        self.totalCalsBurned += curRow.exercises_calories_burned;
                    }
    
              
                 });
               
           }



        $http.get("/login").then(function(data) { //Get a pseudo random user id and gather data based on that user


            self.users_id = data.data.users_id;
            $http.get('/exercise/' + data.data.users_id).then(function(data) {

                if (data.data)
                    self.rows = data.data;


            });

        });



        self.delete = function(row, index) {


            panel.show({
                title: "Delete a exercise",
                body: "Are you sure you want to delete " + row.exercises_name + "?",
                confirm: function() {
                    $http.delete('/exercise/' + row.exercises_id)
                        .success(function(data) {

                            self.rows.splice(index, 1);
                            alert.show(row.exercises_name + " deleted.", 'success')
                            panel.state = null;
                        }).error(function(data) {


                            alert.show(data.code, 'danger');
                        });
                        panel.state = null;
                }
            });
        }

        self.confirm = function() {


        }

        //Details button
        self.details = function(row, index) {

            editpanel.show({
                title: "Details for exercise",
                rows: row,
                editing: false,
                confirm: function() {
                    $http.delete('/exercise/' + row.exercises_id)
                        .success(function(data) {


                            self.rows.splice(index, 1);
                        }).error(function(data) {


                            alert.show(data.code, 'danger');
                        });
                }
            });
        }



        //Details button
        self.edit = function(row, index) {

            row.isEditing = true;
        }

        //Details button
        self.create = function() {

            self.rows.push({
                isEditing: true,
                exercisestypes_id: 1
            });


        }

        self.save = function(row, index) {

            
            $http.get('/login').success( function(data){
                             
                           row.users_id =  data.users_id;
                           row.created_at = calendarService.date;

                            $http.post('/exercise', row)
                            .success(function(data){
                                
                                data.isEditing = false;
                                self.rows[index] = data;
                                 alert.show(row.exercises_name + " saved for "+ row.created_at+".", 'success')
                                
                            }).error(function(data){
                                
                                alert.show(data.code , 'danger');
                                
                            });
            })
        }
    })
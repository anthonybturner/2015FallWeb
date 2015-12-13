angular.module("app")
    .controller('usersCtrl', function($http, $scope, $rootScope, panel, editpanel, alert) {

        $rootScope.pagetitle = "Users"

        var self = this;
                 self.title = "Community users"
                 self.description  = "Members using this app";
                 self.rows = [];
                 self.isViewing = false;
                 self.bgimage = "users.jpg";
                 self.createItemButtonText = "New Goal";
                 self.deleteItemsButtonText = "Delete all";


        $http.get("/user", {params: {user_id: $scope.users_id } }).then(function(data) {


            self.rows = data.data;

        });

        self.delete = function(row, index) {


            panel.show({
                title: "Delete a user",
                body: "Are you sure you want to user " + row.users_name + "?",
                confirm: function() {
                    $http.delete('/user/' + row.users_id)
                        .success(function(data) {

                            self.rows.splice(index, 1);
                        }).error(function(data) {


                            alert.show(data.code, 'danger');
                        });
                }
            });
        }

        self.confirm = function() {


        }

        //Details button
        self.details = function(row, index) {

            editpanel.show({
                title: "Details for user",
                rows: row,
                editing: false,
                confirm: function() {
                    $http.delete('/user/' + row.users_id)
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
                isEditing: true
            });

        }

        self.save = function(row, index) {

            //var data = {"isEditing": row.isEditing, "Name": row.Name, "Age": row.Age, "Height": row.Height, "Weight": row.Weight, "Avatar": row.Avatar, "id": row.id};
            $http.post('/user', row)
                .success(function(data) {

                    data.isEditing = false;
                    self.rows[index] = data;

                }).error(function(data) {

                    alert.show(data.code, 'danger');

                });
        }

    })
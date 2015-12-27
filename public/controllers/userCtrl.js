angular.module("app")
    .controller('usersCtrl', function($http, $scope, $rootScope, panel, editpanel, alert) {

        $rootScope.title = "Users"

        var self = this;
        self.header = "Community users"
        self.pageDescription = "Members using this app";
        self.rows = [];
        self.isViewing = false;
        self.bgimage = "/images/users.jpg";
        self.createItemButtonText = "New Goal";
        self.deleteItemsButtonText = "Delete all";


        $http.get("/user", {
            params: {
                user_id: $scope.users_id
            }
        }).then(function(data) {


            self.rows = data.data;

        });



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
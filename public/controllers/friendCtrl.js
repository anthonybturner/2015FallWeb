angular.module("app")
    .controller('friendsCtrl', function($http, $rootScope,alert) {
        $rootScope.pagetitle = "Friends"

        var self = this;
        self.title = "Keep in touch with other Fitness App members";
        self.rows = [];

        self.users_id = null;


        $http.get("/login").then(function(data) { //Get a pseudo random user id and gather data based on that user


            self.users_id = data.data.users_id;
            $http.get('/friend', {
                params: {
                    users_id: data.data.users_id
                }
            }).then(function(data) {

                if (data.data)
                    self.rows = data.data;

            });

        });

        self.delete = function(row, index) {


            panel.show({
                title: "Delete a friend",
                body: "Are you sure you want to delete " + row.friends_name + "?",
                confirm: function() {
                    $http.delete('/friend/' + row.friends_id)
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
                title: "Details for friends",
                rows: row,
                editing: false,
                confirm: function() {
                    $http.delete('/friend/' + row.friends_id)
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
            $http.get('/user').then(function(data) {

                if (data.data)
                    self.users = data.data;

            });


        }

        self.saveSelected = function(row, index) {

            self.newFriend = row;
            console.log(self.newFriend)
        }

        self.save = function(user, index) {

            var row = self.newFriend;


            $http.post('/friend', row)
                .success(function(data) {

                    data.isEditing = false;
                    self.rows[index] = data;

                }).error(function(data) {

                    alert.show(data.code, 'danger');

                });
        }
    });

angular.module("app")
    .controller('foodCtrl', function($http, $scope, $rootScope, panel, editpanel, alert) {

        $rootScope.pagetitle = "Nutrition"

        var self = this;
        self.title = "Keep track of nutrition ";
        self.rows = [];

        self.users_id = null;


        $http.get("/login").then(function(data) { //Get a pseudo random user id and gather data based on that user


            self.users_id = data.data.users_id;
            $http.get('/food', {
                params: {
                    users_id: data.data.users_id
                }
            }).then(function(data) {

                self.rows = data.data;


            });

        });

        self.delete = function(row, index) {


            panel.show({
                title: "Delete a food",
                body: "Are you sure you want to delete " + row.foods_name + "?",
                confirm: function() {
                    $http.delete('/food/' + row.foods_id)
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
                title: "Details for food",
                rows: row,
                editing: false,
                confirm: function() {
                    $http.delete('/food/' + row.foods_id)
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
                users_id: self.users_id,
                foods_id: null,
                foodstypes_id: null
            });

        }

        self.save = function(row, index) {

            $http.post('/food', row)
                .success(function(data) {

                    data.isEditing = false;
                    self.rows[index] = data;

                }).error(function(data) {

                    alert.show(data.code, 'danger');

                });
        }


    }).controller('foodNewCtrl', function($http, alert, panel) {
        var self = this;

        self.row = {};
        self.term = null;
        self.choices = [];

        self.search = function() {
            $http.get("/food/search/" + self.term)
                .success(function(data) {
                    self.choices = data.hits;
                });
        }
        self.choose = function(choice) {
            self.row.Name = choice.fields.item_name;
            self.row.Calories = choice.fields.nf_calories;
            self.row.Fat = choice.fields.nf_total_fat;
            self.choices = [];
        }
    })

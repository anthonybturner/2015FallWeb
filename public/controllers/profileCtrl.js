angular.module("app")
    .controller('profilesCtrl', function($http, $scope, $rootScope, panel, editpanel, alert) {

        $rootScope.title = "Profile"
        var self = this;
        self.header = "Profile"
        self.pageDescription = "Your personal information";
        self.row = {}
        self.isViewing = false;
        self.bgimage = "/images/profile.jpg";

        self.users_id = null;



        $http.get("/profileuser/" + self.users_id).then(function(data) {
           
            self.row = data.data;
           

        });

        self.confirm = function() {


        }

        //Details button
        self.edit = function(row, index) {
            row.isEditing = true;
            console.log(row)
        }

        self.save = function(row, index) {


            $http.post('/user', row).success(function(data) {

                data.isEditing = false;
                row.isEditing = false;
                self.row[index] = data;
                console.log(data)

            }).error(function(data) {

                alert.show(data.code, 'danger');

            });
        }

    })
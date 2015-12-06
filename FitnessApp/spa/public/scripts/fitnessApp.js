angular.module("app", ['ngRoute',  'fitnessapp.directives'])
  .config(function($routeProvider) {

            $routeProvider.
             when('/', {

                templateUrl: 'Views/goals/goal-list.html',
                controller: 'goalsCtrl', controllerAs: 'vm'

              }).
              when('/goal', {

                templateUrl: 'Views/goals/goal-list.html',
                controller: 'goalsCtrl', controllerAs: 'vm'

              }).
              when('/goal/:id', {

                templateUrl: 'Views/goals/goal-detail.html',
                controller: 'goalsDetailCtrl', controllerAs: 'vm'

              }).when('/food', {

                templateUrl: 'Views/foods/food-list.html',
                controller: 'foodCtrl', controllerAs: 'vm'

              }).when('/food/:id', {

                templateUrl: 'Views/foods/food-list.html',
                controller: 'foodCtrl', controllerAs: 'vm'

              }).when('/food/new/:term', {

                templateUrl: 'Views/foods/food-new.html',
                controller: 'foodNewCtrl', controllerAs: 'vm'

              }).when('/user', {

                templateUrl: 'Views/users/user-list.html',
                controller: 'usersCtrl', controllerAs: 'vm'

              }).
              when('/user/:id', {

                templateUrl: 'Views/users/user-list.html',
                controller: 'usersCtrl', controllerAs: 'vm'

              }). when('/exercise', {

                templateUrl: 'Views/exercises/exercise-list.html',
                controller: 'exercisesCtrl', controllerAs: 'vm'

              }).
              when('/exercise/:id', {

                templateUrl: 'Views/exercises/exercise-list.html',
                controller: 'exercisesCtrl', controllerAs: 'vm'

              }). when('/friend', {

                templateUrl: 'Views/friends/friend-list.html',
                controller: 'friendsCtrl', controllerAs: 'vm'

              }).when('/friend/:id', {

                templateUrl: 'Views/friends/friend-list.html',
                controller: 'friendsCtrl', controllerAs: 'vm'

              }).when('/profile', {

                templateUrl: 'Views/profiles/profile-list.html',
                controller: 'profilesCtrl', controllerAs: 'vm'

              }).
              when('/profile/:id', {

                templateUrl: 'Views/Profiles/friend-detail.html',
                controller: 'profilesDetailCtrl', controllerAs: 'vm'

              }).
              otherwise({

                redirectTo: '/goal'

              });
})
angular.module("app", ['ngRoute',  'fitnessapp.directives'])
  .config(function($routeProvider) {


            $routeProvider.
             when('/', {

                templateUrl: 'views/goals/goal-list.html',
                controller: 'goalsCtrl', controllerAs: 'vm'

              }).
              when('/goal', {

                templateUrl: 'views/goals/goal-list.html',
                controller: 'goalsCtrl', controllerAs: 'vm'

              }).
              when('/goal/:id', {

                templateUrl: 'views/goals/goal-detail.html',
                controller: 'goalsDetailCtrl', controllerAs: 'vm'

              }).when('/food', {

                templateUrl: 'views/foods/food-list.html',
                controller: 'foodCtrl', controllerAs: 'vm'

              }).when('/food/:id', {

                templateUrl: 'views/foods/food-list.html',
                controller: 'foodCtrl', controllerAs: 'vm'

              }).when('/food/new/:term', {

                templateUrl: 'views/foods/food-new.html',
                controller: 'foodNewCtrl', controllerAs: 'vm'

              }).when('/user', {

                templateUrl: 'views/users/user-list.html',
                controller: 'usersCtrl', controllerAs: 'vm'

              }).
              when('/user/:id', {

                templateUrl: 'views/users/user-list.html',
                controller: 'usersCtrl', controllerAs: 'vm'

              }). when('/exercise', {

                templateUrl: 'views/exercises/exercise-list.html',
                controller: 'exercisesCtrl', controllerAs: 'vm'

              }).
              when('/exercise/:id', {

                templateUrl: 'views/exercises/exercise-list.html',
                controller: 'exercisesCtrl', controllerAs: 'vm'

              }). when('/friend', {

                templateUrl: 'views/friends/friend-list.html',
                controller: 'friendsCtrl', controllerAs: 'vm'

              }).when('/friend/:id', {

                templateUrl: 'views/friends/friend-list.html',
                controller: 'friendsCtrl', controllerAs: 'vm'

              }).when('/profile', {

                templateUrl: 'views/profiles/profile-list.html',
                controller: 'profilesCtrl', controllerAs: 'vm'

              }).
              when('/profile/:id', {

                templateUrl: 'views/profiles/friend-detail.html',
                controller: 'profilesDetailCtrl', controllerAs: 'vm'

              }).when('/authlogin', {

                templateUrl: 'views/authentication/login.html',
                controller: 'loginCtrl', controllerAs: 'vm'

              }).
              otherwise({

                redirectTo: '/goal'

              });
})
.run( function($rootScope, $location, $http) {

    // register listener to watch route changes
    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
      
      $http.get("/login").success(function (user){
        console.log(user)
        if ( !user.users_id ) {
     
          if ( next.templateUrl != "views/authentication/login.html" ) {
           
            // not going to #login, we should redirect now
            $location.path( "/authlogin" );
          }
      }         
        
      });
      
      
    });
    
});
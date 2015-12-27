angular.module("app", ['ngRoute',  'fitnessapp.directives'])
  .config(function($routeProvider) {


            $routeProvider.
             when('/', {

                templateUrl: 'views/home/home-list.html',
                controller: 'homeCtrl', controllerAs: 'vm'

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

                redirectTo: '/'

              });
}).run( function($rootScope, $location, $http, alert) {	
  
      
 		 
           // register listener to watch route changes		  
           $rootScope.$on( "$routeChangeStart", function(event, next, current) {		    
       		       
       		        if( alert.msg )//clear out any alerts when entering new page
                    alert.msg= null;
                    
       		        $http.get('/login').then(function(data){

                          if( !data.data.fbUser){
                           $rootScope.loggedIn = false;
                           if ( next.templateUrl != "/views/authentication/login.html" ) {	
                             
                              // Not going to #login,  redirect needed
                              $location.url("/authlogin")
                            }
                         }
                        
       		        });
                        
          		
            
    
         })
     
     });
     
     
     
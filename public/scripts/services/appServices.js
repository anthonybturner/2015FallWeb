angular.module('fitnessapp.directives')
.service('alert', function(){
    
        var self = this;
        self.msg = null;
        self.show = function(msg, alertType){
            self.msg = msg;
            if( alertType )
                self.alertType = alertType;
            else
               self.alertType = "info";
        }
        
}).service('panel', function(){
        var self = this;
        self.state = null;
        self.show = function(state){
            self.state = state;
        }
        
}).service('loginService', function( ){
    
        var self = this;
        self.loggedIn = null;
        
        self.setLoggedIn = function(state){
            
            self.loggedIn = state;
        }
        
        self.isLoggedIn = function(){
            
            
            return self.loggedIn;
        }
        
        
         
}).service('calendarService', function(){
        var self = this;
        self.editstate = true;
        self.date = "";
});



      
    
   

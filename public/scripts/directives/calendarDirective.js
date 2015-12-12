angular.module('fitnessapp.directives')
.directive("calendar", function() {
    var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];

    return {
        restrict: "E",
        templateUrl: "views/other/calendar.html",
        controller: function ($scope, $element, $attrs, calendarService) {
          $scope.day = moment();
          calendarService.date = $scope.day;
          
         
            $scope.selected = _removeTime($scope.selected || moment());
            $scope.month = $scope.selected.clone();

            var start = $scope.selected.clone();
            start.date(1);
            _removeTime(start.day(0));

            _buildMonth($scope, start, $scope.month);
            
            
            
            $scope.select = function(day) {
                
                $scope.selected = day.date;  
             
               var date = new Date($scope.selected).toDateString();
                var resultArray = date.split(" ");
                var year = resultArray[3];
                 var day = resultArray[2];
                var month ="01";

                switch( resultArray[1]){
                  
                  case "Jan": month= "01";
                    break;
                  case "Feb": month= "02";
                    break;
                  case "Mar": month= "03";
                    break;
                  case "Apr": month= "04";
                    break; 
                  case "May": month= "05";
                    break;
                  case "Jun": month= "06";
                   break;
                  case "Jul": month= "07";
                   break;
                  case "Dec": month= "12";
                    break;
                   
                }

                var currDate = year + "-"+ month + "-"+day;
                calendarService.date = currDate;
               
                $scope.updateCalendar();
            };
            
           

            $scope.next = function() {
                var next = $scope.month.clone();
                _removeTime(next.month(next.month()+1)).date(1);
                $scope.month.month($scope.month.month()+1);
                _buildMonth($scope, next, $scope.month);
                
            };

            $scope.previous = function() {
                var previous = $scope.month.clone();
                _removeTime(previous.month(previous.month()-1).date(1));
                $scope.month.month($scope.month.month()-1);
                _buildMonth($scope, previous, $scope.month);
            };
          //Get the goals, foods, etc for the current date when a page is first loaded
            var d = new Date();
            var date = months[d.getMonth()] + " " + d.getDate() + " " + d.getFullYear();
            $scope.select({"date": date})
           
         },
         
       scope: { 'updateCalendar' : '&'}
      //  link: function(scope, $http, $attrs, $injector, calendarService) {
          
      //  }
    };//End return 
    
   
 
    
    function _removeTime(date) {
        return date.day(0).hour(0).minute(0).second(0).millisecond(0);
    }

    function _buildMonth(scope, start, month) {
        scope.weeks = [];
        var done = false, date = start.clone(), monthIndex = date.month(), count = 0;
        while (!done) {
            scope.weeks.push({ days: _buildWeek(date.clone(), month) });
            date.add(1, "w");
            done = count++ > 2 && monthIndex !== date.month();
            monthIndex = date.month();
        }
    }

    function _buildWeek(date, month) {
        var days = [];
        for (var i = 0; i < 7; i++) {
            days.push({
                name: date.format("dd").substring(0, 1),
                number: date.date(),
                isCurrentMonth: date.month() === month.month(),
                isToday: date.isSame(new Date(), "day"),
                date: date
            });
            date = date.clone();
            date.add(1, "d");
        }
        return days;
    }
});
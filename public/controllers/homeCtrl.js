angular.module("app")
    .controller('homeCtrl', function($http, $scope, $location, $rootScope, panel, editpanel, alert, calendarService) {

        $rootScope.title = "Home";

        var self = this;
        self.header = "Welcome"
        self.pageDescription = "Fitness Tracker App - Statistics";
        self.rows = [];
        self.isViewing = false;
        self.bgimage = "/images/goals.png";
        self.createItemButtonText = "New Goal";
        self.deleteItemsButtonText = "Delete all";


        var current_date = new Date(); //Get the current date which will be the end date
        //Get the beginning of the week date (for Sunday)
        var totals_start_date = mysqlDate(getMonday(current_date));
        var totals_end_date = mysqlDate(new Date());



        $http.get('/goalWeekTotals', {
            params: {
                start_date: totals_start_date,
                end_date: totals_end_date
            }
        }).then(function(data) {

            self.goal_rows = data.data;
            startGoalsGraph(data.data[0]);
           
        });

        $http.get('/foodWeekTotals', {
            params: {
                start_date: totals_start_date,
                end_date: totals_end_date
            }
        }).then(function(data) {

            self.food_rows = data.data;
            startFoodsGraph(data.data[0]);

        });



        function getMonday(date) {

            var day = date.getDay() || 7;
            if (day !== 0)
                date.setHours(-24 * (day - 0));
            return date;
        }

        //Take caution that toISOString may return GMT-6 for a current timezone. Maybe different for other timezones
        function mysqlDate(date) {
            date = date || new Date();
            return date.toISOString().split('T')[0];
        }




    });


var startGoalsGraph = function(goalsData) {


    $('#goals-graph').highcharts({

        chart: {
            type: 'column',
            options3d: {
                enabled: true,
                alpha: 15,
                beta: 30,
                viewDistance: 20,
                depth: 40
            },
            marginTop: 100,
            marginRight: 20
        },

        title: {
            text: 'Total Goals for this week'
        },

        xAxis: {
            categories: ['Goals Accomplished', 'Goals']
        },

        yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
                text: 'Totals'
            }
        },

        tooltip: {
            headerFormat: '<b>Weekly Goals</b><br>',
            pointFormat: '<span style="color:{series.color}">●</span> {series.name}:  {point.y} /' + goalsData.TotalGoals
        },

        plotOptions: {
            column: {
                stacking: 'normal',
                depth: 40
            }
        },

        series: [{

            name: 'Goals Completed ',
            data: [goalsData.TotalAccomplishedGoals],
            stack: 'totalAccomplished'
        }, {

            name: ' Goals',
            data: [goalsData.TotalGoals],
            stack: 'TotalGoals'
        }]
    });

}


var startFoodsGraph = function(foodsData) {


    $('#foods-graph').highcharts({

        chart: {
            type: 'column',
            options3d: {
                enabled: true,
                alpha: 15,
                beta: 30,
                viewDistance: 60,
                depth: 60
            },
            marginTop: 30,
            marginRight: 20
        },

        title: {
            text: 'Total nutrition for this week'
        },

        xAxis: {
            categories: ['Total Meals', 'Total Calories', 'Total Fiber', 'Total Cholestrol', 'Total Fat', 'Total Sodium', 'Total Carbs', 'Total Protein']
        },

        yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
                text: 'Totals'
            }
        },

        tooltip: {
            headerFormat: '<b>Weekly Nutrition Intake totals</b><br>',
            pointFormat: '<span style="color:{series.color}">●</span> {series.name}:  {point.y} '
        },

        plotOptions: {
            column: {
                stacking: 'normal',
                depth: 20
            }
        },

        series: [{

                name: 'Total Meals ',
                data: [foodsData.TotalMeals],
                stack: 'totalmeals'
            }, {

                name: 'Total Calories',
                data: [foodsData.TotalCalories],
                stack: 'totalcalories'
            }, {

                name: 'Total Fiber ',
                data: [foodsData.TotalFiber],
                stack: 'totalfiber'
            }, {

                name: 'Total Cholestrol ',
                data: [foodsData.TotalCholestrol],
                stack: 'totalcholestrol'
            }, {

                name: 'Total Fat ',
                data: [foodsData.TotalFat],
                stack: 'totalfat'
            }, {

                name: 'Total polyunsaturated Fat ',
                data: [foodsData.TotalPolyunsaturatedFat],
                stack: 'totalfat'
            }, {

                name: 'Total monounsaturated Fat ',
                data: [foodsData.TotalMonounsaturatedFat],
                stack: 'totalfat'
            }, {

                name: 'Total Sodium ',
                data: [foodsData.TotalSodium],
                stack: 'totalsodium'
            }, {

                name: 'Total Carbohydrates ',
                data: [foodsData.TotalCarbohydrates],
                stack: 'totalcarbs'
            }, {

                name: 'Total Protein ',
                data: [foodsData.TotalProtein],
                stack: 'totalprotein'
            }

        ]
    });

}
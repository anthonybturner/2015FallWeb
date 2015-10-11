 <?php
 
    $name = 'Anthony Turner';
    $message = "Welcome $name";
    $totalMaxAll = 0;
    global $person;
   
    $person = array( 'Name' => $name, 'Age' => 38, 'Weight' => 158, 'Height' => "5',11''", 'MaxCalories' => 2000, 'MaxMinutes' => 250, 'MaxTime' => 350, 'MaxCount' => 25 );
   
    $totalMaxAll = $person['MaxCalories'] +  $person['Minutes'] + $person['Count'];
   
   $exercises = $_SESSION['exercises'];
    if( !$exercises ){
     $_SESSION['exercises'] = $exercises = array(
        array( 'Name' => 'Stationary bike, general (bicycling, cycling, biking)', 'Minutes' => '30', 'Time' => strtotime("10 hour"), 'Count'=>'', 'Calories' => 200,  "Type" => 'Bicycling' ),
        array( 'Name' => 'Push Ups', 'Minutes' => '2', 'Time' => strtotime("10 hour"), 'Count'=>'50', 'Calories' => 20,  "Type" => 'Push-ups' ),
        array( 'Name' => 'Running', 'Minutes' => '60', 'Time' => strtotime("5 hour"), 'Count'=>'', 'Calories' => 400,  "Type" => 'Running' )

 
     );
   }
    
        
     
        
    $total = array( 'calories' => 0, 'carbs' => 0, 'Fat' => 0, 'fiber' => 0, 'cholestrol' => 0, 'protien' => 0, 'sum' => 0);

    
    foreach ($exercises as $exercise) {
        
        $total['sum'] += $total['Calories'] += $exercise['Calories'];
        $total['sum'] +=$total['Count'] += $exercise['Count'];
        $total['sum'] +=$total['Minutes'] += $exercise['Minutes'];
       // $total['sum'] +=$total['Time'] += $exercise['Time'];

       
    }
        
    // $totalTimePercentage = floor(370/$person['MaxTime'] *100);
     $totalCaloriesPercentage = ($total['Calories']/$person['MaxCalories'] *100);
     $totalMinutesPercentage = ($total['Minutes']/$person['MaxMinutes'] *100);

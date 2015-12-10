 <?php
 
    $totalMaxAll = 0;
    $totalMaxAll = $person['MaxCalories'] + $person['MaxCarbs'] + $person['MaxFat'] + $person['MaxFiber'] + $person['MaxCholestrol'] + $person['MaxProtien'];
   
    $food = $_SESSION['food'];
    if( !$food ){
     $_SESSION['food'] = $food = array(
        array( 'Name' => 'Freihofer Split Top Wheat Bread, 4 slices', "Meal" => 'Dinner', 'Time' => strtotime("10 hour"), 'Calories' => 280, "Carbs" => 52, "Fat" => 3, "Fiber" => 4, "Cholestrol" => 0, "Protien" => 10 ),
         
         
         array( 'Name' => 'Fiber One Cereal, original, 0.5 cup (1 serving)', "Meal"=> 'Breakfast', 'Time' => strtotime("6pm"), 'Calories' => 60, "Carbs" => 25, "Fat" => 1, "Fiber" => 14, "Cholestrol" => 0, "Protien" => 2 ),
         array( 'Name' => 'High Fiber Maple and Brown Oatmeal, (1 serving)', "Meal"=> 'Breakfast', 'Time' => "2015-10-10", 'Calories' => 30, "Carbs" => 45, "Fat" => 1, "Fiber" => 10, "Cholestrol" => 0, "Protien" => 2 ),
 
         array( 'Name' => 'Nathans Hot Dogs, (2 servings)', "Meal" => 'Lunch',  'Time' => strtotime("6 hour"), 'Calories' => 260, "Carbs" => 25, "Fat" => 30, "Fiber" => 4, "Cholestrol" => 30, "Protien" => 32 ),
         array( 'Name' => 'Bush Baked Beans, (1 serving', "Meal" => 'Dinner',  'Time' => strtotime("6 hour"), 'Calories' => 50, "Carbs" => 5, "Fat" => 10, "Fiber" => 40, "Cholestrol" => 0, "Protien" => 12 ),
         array( 'Name' => 'Hot Dog Buns, (2 servings)', "Meal" => 'Lunch',  'Time' => strtotime("6 hour"), 'Calories' => 100, "Carbs" => 5, "Fat" => 0, "Fiber" => 1, "Cholestrol" => 0, "Protien" => 25 ),
         array( 'Name' => 'Ellios Pizza, 1 slice', "Meal" => 'Lunch',  'Time' => strtotime("6 hour"), 'Calories' => 260, "Carbs" => 25, "Fat" => 10, "Fiber" => 4, "Cholestrol" => 10, "Protien" => 12 ),
         array( 'Name' => 'Ellios Pizza, 1 slice', "Meal" => 'Lunch',  'Time' => strtotime("6 hour"), 'Calories' => 260, "Carbs" => 25, "Fat" => 10, "Fiber" => 4, "Cholestrol" => 10, "Protien" => 12 )
 
     );
   }
   
   $exercises = $_SESSION['exercise'];
    if( !$exercises ){
     $_SESSION['exercise'] = $exercises = array(
        array( 'Name' => 'Stationary bike, general (bicycling, cycling, biking)', 'Minutes' => '30:00', 'Time' => strtotime("10 hour"), 'Count'=>'', 'Calories' => 200,  "Type" => 'Bicycling' ),
        array( 'Name' => 'Push Ups', 'Minutes' => '2:00', 'Time' => strtotime("10 hour"), 'Count'=>'50', 'Calories' => 20,  "Type" => 'Push-ups' ),
        array( 'Name' => 'Running', 'Minutes' => '60:00', 'Time' => strtotime("5 hour"), 'Count'=>'', 'Calories' => 400,  "Type" => 'Running' )

 
     );
   }
    
        
     
        
    $total = array( 'calories' => 0, 'carbs' => 0, 'Fat' => 0, 'fiber' => 0, 'cholestrol' => 0, 'protien' => 0, 'sum' => 0);

    
    foreach ($food as $meal) {
        
        $total['sum'] += $total['calories'] += $meal['Calories'];
        $total['sum'] +=$total['carbs'] += $meal['Carbs'];
        $total['sum'] +=$total['fat'] += $meal['Fat'];
        $total['sum'] += $total['fiber'] += $meal['Fiber'];
        $total['sum'] += $total['cholestrol'] += $meal['Cholestrol'];
        $total['sum'] += $total['protien'] += $meal['Protien'];
    }
        
     $totalCaloriesPercentage = ($total['calories']/$person['MaxCalories'] *100);
     $totalCarbsPercentage = ($total['carbs']/$person['MaxCarbs'] *100); 
     $totalFatPercentage = ($total['fat']/$person['MaxFat'] *100);
     $totalFiberPercentage = ($total['fiber']/$person['MaxFiber'] *100);
     $totalCholestrolPercentage = ($total['cholestrol']/$person['MaxCholestrol'] *100);
     $totalProtienPercentage = floor(($total['protien']/$person['MaxProtien'] *100));
     $totalMaxPercentage = floor(($total['sum']/$totalMaxAll *100));

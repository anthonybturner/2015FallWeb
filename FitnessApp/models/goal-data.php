 <?php
 
    $name = 'Anthony Turner';
    $message = "Welcome $name";
    $totalMax =0;
    $totalMaxAll = 0;
    global $person;
   
    $person = array( 'Name' => $name, 'Age' => 38, 'MaxCalories' => 2000, 'MaxCarbs' => 250, 'MaxFat' => 25,'MaxFiber' => 80, 'MaxCholestrol' => 20,'MaxProtien' =>600 );
   
    $totalMaxAll = $person['MaxCalories'] + $person['MaxCarbs'] + $person['MaxFat'] + $person['MaxFiber'] + $person['MaxCholestrol'] + $person['MaxProtien'];
   
    $food = array(
       array( 'Name' => 'Freihofer Split Top Wheat Bread, 4 slices', Meal => 'Dinner', 'Time' => strtotime("-1 hour"), calories => 280, carbs => 52, fat => 3, fiber => 4, cholestrol => 0, protien => 10 ),
        
        
        array( 'Name' => 'Fiber One Cereal, original, 0.5 cup (1 serving)', Meal=> 'Breakfast', 'Time' => strtotime("-1 hour"), calories => 60, carbs => 25, fat => 1, fiber => 14, cholestrol => 0, protien => 2 ),
        array( 'Name' => 'High Fiber Maple and Brown Oatmeal, (1 serving)', Meal=> 'Breakfast', 'Time' => strtotime("-2 hour"), calories => 30, carbs => 45, fat => 1, fiber => 10, cholestrol => 0, protien => 2 ),

        array( 'Name' => 'Ellios Pizza, 1 slice', Meal => 'Lunch',  'Time' => strtotime("-1 hour"), calories => 260, carbs => 25, fat => 10, fiber => 4, cholestrol => 10, protien => 12 )

    );
    
        
     
        
    $total = [ 'calories' => 0, 'carbs' => 0, 'fat' => 0, 'fiber' => 0, 'cholestrol' => 0, 'protien' => 0, 'sum' => 0 ];

    
    foreach ($food as $meal) {
        
        $totalMax += $total['calories'] += $meal['calories'];
        $totalMax +=$total['carbs'] += $meal['carbs'];
        $totalMax +=$total['fat'] += $meal['fat'];
        $totalMax += $total['fiber'] += $meal['fiber'];
        $totalMax += $total['cholestrol'] += $meal['cholestrol'];
        $totalMax += $total['protien'] += $meal['protien'];
    }
        
     $totalCaloriesPercentage = ($total['calories']/$person['MaxCalories'] *100).'%';
     $totalCarbsPercentage = ($total['carbs']/$person['MaxCarbs'] *100).'%'; 
     $totalFatPercentage = ($total['fat']/$person['MaxFat'] *100).'%';
     $totalFiberPercentage = ($total['fiber']/$person['MaxFiber'] *100).'%';
     $totalCholestrolPercentage = ($total['cholestrol']/$person['MaxCholestrol'] *100).'%';
     $totalProtienPercentage = floor(($total['protien']/$person['MaxProtien'] *100)).'%';
     $totalMaxPercentage = floor(($totalMax/$totalMaxAll *100)).'%';

<?php 

include 'users-data.php';

$results = array();

foreach($users as $user){


 $pos = strpos($user['Name'], $_GET['word'], 0);

 
     if ($pos === false) {
        
        
     } else{
         //array('a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 5);
      
        $results[] = $user;
     }
    
 
 }


echo json_encode($results);
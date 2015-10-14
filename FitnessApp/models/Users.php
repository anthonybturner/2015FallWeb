<?php 

include 'users-data.php';

$results = array();

for( $i = 0; $i  <= count($users) ; $i++){


 $pos = strpos($users[$i]['Name'], $_GET['word'], 0);

 
     if ($pos === false) {
        
        
     } else{
         //array('a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 5);
      
        $results[] = array('id' => $i, 'Name' => $users[$i]['Name']);
     }
    
 
 }


echo json_encode($results);
<?php 

   $users = $_SESSION['users'];

 if( !$users ){

    $_SESSION['users'] = $users = array(
        array( 'Name' => 'John Doe', 'Avatar' => $path.'images/john-doe-avatar.png','Age' => '30', 'Status' => 'Online'),
        array( 'Name' => 'Jane Doe', 'Avatar' => $path.'images/jane-doe-avatar.png' , 'Age' => '28', 'Status' => 'Offline'),
        array( 'Name' => 'Sunny Jackson','Avatar' => $path.'images/jackson-avatar.png' , 'Age' => '60', 'Status' => 'Online'),
         array( 'Name' => 'Jim Bo', 'Avatar' => $path.'images/john-doe-avatar.png','Age' => '30', 'Status' => 'Online'),
        array( 'Name' => 'Lucy When', 'Avatar' => $path.'images/jane-doe-avatar.png' , 'Age' => '28', 'Status' => 'Offline'),
        array( 'Name' => 'Ricky Jackson','Avatar' => $path.'images/jackson-avatar.png' , 'Age' => '60', 'Status' => 'Online'),
         array( 'Name' => 'Ricky Doe', 'Avatar' => $path.'images/john-doe-avatar.png','Age' => '30', 'Status' => 'Online'),
        array( 'Name' => 'Elizabeth Rod', 'Avatar' => $path.'images/jane-doe-avatar.png' , 'Age' => '28', 'Status' => 'Offline'),
        array( 'Name' => 'Rodriguez Jackson','Avatar' => $path.'images/jackson-avatar.png' , 'Age' => '60', 'Status' => 'Online')

 
     );
     
 }


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
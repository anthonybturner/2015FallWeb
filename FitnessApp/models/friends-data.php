 <?php
 
    $name = 'Anthony Turner';
    $message = "Welcome $name";
    $totalMaxAll = 0;
    global $person;
   
    $person = array( 'Name' => $name, 'Age' => 38, 'Weight' => 158, 'Height' => "5',11''", 'MaxCalories' => 2000, 'MaxMinutes' => 250, 'MaxTime' => 350, 'MaxCount' => 25 );
   
   $friends = $_SESSION['friends'];
   
    if( !$friends ){
     $_SESSION['friends'] = $friends = array(
        array( 'Name' => 'John Doe', 'Avatar' => $path.'images/john-doe-avatar.png','Age' => '30', 'Status' => 'Online'),
        array( 'Name' => 'Jane Doe', 'Avatar' => $path.'images/jane-doe-avatar.png' , 'Age' => '28', 'Status' => 'Offline'),
        array( 'Name' => 'Sunny Jackson','Avatar' => $path.'images/jackson-avatar.png' , 'Age' => '60', 'Status' => 'Online')

 
     );
   }
    
        

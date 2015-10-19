 <?php
 
include  'profile-data.php';
include  'goal-data.php';


$friends = $_SESSION['friends'];

if( !$friends ){//Get random friends
  include  'users-data.php'; //Get global users list
  
  $friends = array();
  
  
  for($i = 0; $i < 3; $i++){
   
   $index = rand(1, 3);
   
   $friend = $users[$index];
   $friends[] = $friend;
  
 }
     

}

 $_SESSION['friends'] = $friends;

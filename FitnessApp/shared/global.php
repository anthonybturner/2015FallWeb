<?php

$domain = $_SERVER["SERVER_NAME"];

//Get the correct path because we're hosting two versions of this app on different servers.
  if( $domain == "www.cs.newpaltz.edu" ){
    
    $path = "https://". $_SERVER["SERVER_NAME"]. "/~turnera1/WebProgramming/2015FallWeb/FitnessApp/";
    
  }else{
    
    $path = "https://". $_SERVER["SERVER_NAME"]. "/FitnessApp/"; 
  }
  
?>
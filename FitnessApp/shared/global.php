<?php

$domain = $_SERVER["SERVER_NAME"];

//Get the correct path because we're hosting two versions of this app on different servers.
  if( $domain == "cs.newpaltz.edu" || $domain == "www.cs.newpaltz.edu" ){//Consider when both are typed into for the url
  //Otherwise, the navigation urls will be incorrect. 
    
    $path = "https://". $domain. "/~turnera1/WebProgramming/2015FallWeb/FitnessApp/";
    
  }else{
    
    $path = "https://". $domain. "/FitnessApp/"; 
  }
  
?>
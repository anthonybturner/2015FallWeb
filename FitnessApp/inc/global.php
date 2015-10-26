<?php
    ini_set('display_errors', 1);
    
    $servername = getenv('IP');
    
        include 'password.php';
    
        $username = getenv('C9_USER');
        $database = "turnera1_db";
        $dbport = 3306;
        
    
    function GetConnection(){
        
        return mysqli_connect(getenv('IP'), getenv('C9_USER'), $password, 'turnera1_db');
        
    }
    
    function my_print($v){
        
        echo("<pre>");
        print_r($v);
       echo("</pre>");
               
    }



    

  
?>


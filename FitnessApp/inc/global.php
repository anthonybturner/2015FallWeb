<?php
    ini_set('display_errors', 1);
    
  //  $servername = getenv('IP');
    
        include 'password.php';
        global $username;
        $usern = 'anthonybjturner';
      //  $username = getenv('C9_USER');
       // $database = "turnera1_db";
       // $dbport = 3306;
        
    
    function GetConnection(){
        
        return mysqli_connect(getenv('IP'), 'anthonybjturner', $password, 'turnera1_db');
        
    }
    
    function my_print($v){
        
        echo("<pre>");
        print_r($v);
       echo("</pre>");
               
    }
    
    function fetchAll($sql){
        
        $ret = array();
        $conn = GetConnection();
        $results = $conn->query($sql);
        
        $error = $conn->error;
        if($error){
            
            //or echo $error
            my_print($error);
        }else{
            
            while($rs = $results->fetch_assoc()){
                
                $ret[] = $rs;
            }
        }
          $conn->close();
        
        return $ret;
    }



    

  
?>


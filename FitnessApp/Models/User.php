<?php
    require_once '../inc/global.php';

    class User{
        
        static function Get(){
            
            $conn = GetConnection();
            $results = $conn -> query("select * From 2015Fall_Users");
            $row = $results ->fetch_assoc();
            
          my_print($row);
            
            
        }
    }
    
    User::Get();
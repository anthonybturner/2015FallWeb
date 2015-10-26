<?php
    require_once '../inc/global.php';

    class User{
        
        static function Get(){
 
           return fetchAll("select * From 2015Fall_Users");
         
            
        }
    }
    
  


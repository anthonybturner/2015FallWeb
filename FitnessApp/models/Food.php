<?php 
include 'models/goal-data.php';


class Food{
 
 
    public static function GetTotalCalories(){
     
      return $total['calories'];
    }
    
     public static function GetTotalCarbs(){
     
      return $total['carbs'];
    }
    
     public static function GetTotalFat(){
     
      return $total['fat'];
    }
    
     public static function GetTotalCholestrol(){
     
      return $total['cholestrol'];
    }
    
     public static function GetTotalProtien(){
     
      return $total['protien'];
    }

    
    public static function GetBreakfast(){
        
       global $food;
       $breakfast  = array();
       $count = 1;
         foreach ($food as  $meal) {
          if( $meal['Meal'] == 'Breakfast')
            $breakfast[$count++] = $meal;
         }
         
         return $breakfast;
        
        
    }
    
    
     public static function GetLunch(){
        
        global $food;
        $lunch  = array();
        $count = 1;
        
         foreach ($food as $meal) {
          if( $meal['Meal'] == 'Lunch')
            $lunch[$count++] = $meal;
         }
         
         return $lunch;
        
        
    }
    
    
     public static function GetDinner(){
      
        global $food;
        $dinner  = array();
        $count = 1;
        
         foreach ($food as $meal) {
          if( $meal['Meal'] == 'Dinner')
            $dinner[$count++] = $meal;
         }
         
         return $dinner;
        
        
        
    }
    
     public static function GetSnack(){
        
        
        
    }
    
    
    
}
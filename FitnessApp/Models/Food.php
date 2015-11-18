<?php
require_once '../inc/global.php';

class Food {
	
    public static function Get($id = null){
        $sql = "SELECT m.Name, m.id, m.Calories, m.Carbohydrates, m.Fiber, m.Protein, m.Cholestrol, m.Users_id, mt.id as MealType_Id, mt.MealType FROM 2015Fall_Meals m"
        ." left join 2015Fall_MealTypes mt on mt.id=m.2015Fall_MealTypes_id";
        
		if($id){
			$sql .= " WHERE m.id=$id ";
			$ret = FetchAll($sql);
			return $ret[0];
		}else{
			return FetchAll($sql);			
		}

		
    }
    
    public static function Sum($category){
        $sql = "SELECT sum($category)  from 2015Fall_Meals";
        
			return $ret[0];

		
    }
    
    
    
    
    static public function Delete($id){
        
		$conn = GetConnection();
		$sql = "DELETE FROM 2015Fall_Meals WHERE id = $id";
		//echo $sql;
		$results = $conn->query($sql);
		$error = $conn->error;
		$conn->close();
		
		return $error ? array ('sql error' => $error) : false;
	}
	
	static public function Blank()
	{
		return array();
	}
	
	static public function Validate($row){
			$errors = array();
			if(empty($row['Calories'])) $errors['Calories'] = "is required";
			if(empty($row['MealType'])) $errors['MealType'] = "is required";

			//if(strtotime($row['Birthday']) > time()) $errors['Birthday'] = "must be in the past";
			
			return count($errors) > 0 ? $errors : false ;
	}
	
	static public function Save($row){
		
	
		if( $row['id'] ){
			
			$sql = "UPDATE 2015Fall_Meals Set Name = '$row[Name]', Calories = '$row[Calories]', Carbohydrates = '$row[Carbohydrates]', "
				. "Cholestrol='$row[Cholestrol]', Fiber = '$row[Fiber]', Protein = '$row[Protein]', Users_id=1, 2015Fall_MealTypes_id=$row[MealType] WHERE id=$row[id] ";

			
		}else{
		
				$sql = "Insert Into 2015Fall_Meals (Name, Calories, Carbohydrates, Cholestrol, Fiber, Protein, Users_id, 2015Fall_MealTypes_id) "
				." Values ('$row[Name]', '$row[Calories]', '$row[Carbohydrates]', '$row[Cholestrol]', '$row[Fiber]', '$row[Protein]', 1, $row[MealType])";

		}
		
		$conn = GetConnection();
	
		$results = $conn->query($sql);
		$error = $conn->error;
		$conn->close();
		
		return $error ? array ('sql error' => $error) : false;
		
		
	}

}



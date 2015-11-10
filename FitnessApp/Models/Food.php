<?php
require_once '../inc/global.php';

class Food {
	
    public static function Get($id = null){
        $sql = "SELECT * FROM 2015Fall_Meals";
        
		if($id){
			$sql .= " WHERE id=$id ";
			$ret = FetchAll($sql);
			return $ret[0];
		}else{
			return FetchAll($sql);			
		}
		
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
	
	static public function Validate(){
		
		
		return null;
	}
	
	static public function Save($row){
		
	
		if( $row['id']){
			
			$sql = "UPDATE 2013Fall_Users "
				.	" Set Name = '$row[Name]', Calories='$row[Calories]', Carbohydrates='$row[Carbohydrates]', Fiber='$row[Fiber]', Cholestrol='$row[Cholestrol]' "
				.	" Protein='$row[Protein]', Users_id='$row[Users_id]', 2015Fall_MealTypes_id=1 WHERE id=$row[id] ";

			
		}else{
		
				$sql = "Insert Into 2015Fall_Meals (Name, Calories, Carbohydrates,  Fiber, Cholestrol, Protein,  Users_id, 2015Fall_MealTypes_id) Values ('$row[Name]', '$row[Calories]', '$row[Carbs]', '$row[Fiber]', '$row[Cholestrol]', '$row[Protein]' , 1, 1 )";

		}
		
		$conn = GetConnection();
	
		$results = $conn->query($sql);
		$error = $conn->error;
		$conn->close();
		
		return $error ? array ('sql error' => $error) : false;
		
		
	}

}



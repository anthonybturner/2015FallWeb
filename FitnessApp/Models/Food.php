<?php
require_once '../inc/global.php';

class Food {
	
    public static function Get($id = null){
        $sql = "SELECT * FROM 2015Fall_Meals m inner join 2015Fall_MealTypes mt on mt.id=m.2015Fall_MealTypes_id ";
        
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
			
			$sql = "UPDATE 2013Fall_MealTypes "
				.	" Set MealType = '$row[MealType]' WHERE id=$row[id] ";

			
		}else{
		
				$sql = "Insert Into 2015Fall_Meals (MealType) Values ('$row[MealType]']' )";

		}
		
		$conn = GetConnection();
	
		$results = $conn->query($sql);
		$error = $conn->error;
		$conn->close();
		
		return $error ? array ('sql error' => $error) : false;
		
		
	}

}



<?php
require_once '../inc/global.php';

class Food {
	
    public static function Get($id = null){
        $sql = "SELECT * FROM 2015Fall_Exercises";
        
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
		$sql = "DELETE FROM 2015Fall_Exercises WHERE id = $id";
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
			if(empty($row['Name'])) $errors['Name'] = "is required";
			if(empty($row['Calories_Burned'])) $errors['Calories_Burned'] = "is required";

			if(strtotime($row['Minutes']) > time()) $errors['Minutes'] = "is required";
			
			return count($errors) > 0 ? $errors : false ;
	}
	
	static public function Save($row){
		
	
		if( $row['id']){
			
			$sql = "UPDATE 2013Fall_Exercises "
				.	" Set Name = '$row[Name]', Minutes='$row[Minutes]', Calories_Burned='$row[Calories_Burned]', Users_id='$row[Users_id]', 2015Fall_ExerciseTypes_id='$row[Users_id]' "
				. " WHERE id=$row[id] ";

			
		}else{
		
			//	$sql = "Insert Into 2013Fall_Exercises (Name, Minutes, Calories_Burned,  Users_id, f2015Fall_ExerciseTypes_id) Values ('$row[Name]', '$row[Minutes]', '$row[Calories_Burned]', '$row[Users_id]', $row[2015Fall_ExerciseTypes_id])";

		}
		
		$conn = GetConnection();
	
		$results = $conn->query($sql);
		$error = $conn->error;
		$conn->close();
		
		return $error ? array ('sql error' => $error) : false;
		
		
	}

}



<?php
require_once '../inc/global.php';

class Friend {
	
    public static function Get($id = null){
        $sql = "SELECT * FROM 2015Fall_Friends f inner join 2015Fall_Users u on u.id=f.Users_id ";
        
		if($id){
			$sql .= " WHERE Friend_id=$id ";
			$ret = FetchAll($sql);
			return $ret[0];
		}else{
			return FetchAll($sql);			
		}
		
    }
    
    static public function Delete($id){
        
		$conn = GetConnection();
		$sql = "DELETE FROM 2015Fall_Friends WHERE Friend_id = $id";
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
			if(empty($row['Friend_id'])) $errors['Friend_id'] = "is required";
			if(empty($row['Users_id'])) $errors['Users_id'] = "is required";

			//if(strtotime($row['Birthday']) > time()) $errors['Birthday'] = "must be in the past";
			
			return count($errors) > 0 ? $errors : false ;
	}
	
	static public function Save($row){
		
	
		if( $row['id']){
			
			$sql = "UPDATE 2013Fall_Friend "
				.	" Set Name = '$row[Name]', Friend_id='$row[Friend_id]', Users_id='$row[Users_id]' WHERE Friend_id=$row[id] ";

			
		}else{
		
				$sql = "Insert Into 2015Fall_Friends (Friend_id, Users_id) Values('$row[Friend_id]', '$row[Users_id]')";

		}
		
		$conn = GetConnection();
	
		$results = $conn->query($sql);
		$error = $conn->error;
		$conn->close();
		
		return $error ? array ('sql error' => $error) : false;
		
		
	}

}



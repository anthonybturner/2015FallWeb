<?php

require_once '../inc/global.php';

class User {
	
    public static function Get($id = null){
        $sql = "SELECT * FROM 2015Fall_Users";
        
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
		$sql = "DELETE FROM 2015Fall_Users WHERE id = $id";
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
			
			$sql = "Update 2015Fall_Users set Name='$row[Name]',  Age='$row[Age]', Height='$row[Height]', Weight='$row[Weight]', Avatar='$row[Avatar]', Status='offline' WHERE id= $row[id]";

			
		}else{
		
			$sql = "Insert Into 2015Fall_Users (Name, Age, Height, Weight, Avatar, Status) Values ( '$row[Name]', '$row[Age]', '$row[Height]', '$row[Weight]', '$row[Avatar]', 'offline' )";

		}
		
		$conn = GetConnection();
	
		$results = $conn->query($sql);
		$error = $conn->error;
		$conn->close();
		
		return $error ? array ('sql error' => $error) : false;
		
		
	}

}



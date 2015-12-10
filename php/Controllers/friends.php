<?php

include_once '../Models/Friend.php';

$action = isset($_REQUEST['action']) ? $_REQUEST['action'] : null;
$method = $_SERVER['REQUEST_METHOD'];
$format = isset($_REQUEST['format']) ? $_REQUEST['format'] : 'web';
$view 	= null;


switch ($action . '_' . $method) {
    
	case 'create_GET':
		$model = Friend::Blank();
		$view = "friends/edit.php";
		break;
		
	case 'save_POST':
			
			$sub_action = empty($_REQUEST['id']) ? 'created' : 'updated';
			
		//	$errors = Friend::Validate($_REQUEST);
		//	if(!$errors){
		
		
				$errors = Friend::Save($_REQUEST);
				var_dump($errors);
		//	}
			
			if(!$errors){
				if($format == 'json'){
					header("Location: ?action=edit&format=json&id=$_REQUEST[id]");
				}else{
					header("Location: ?sub_action=$sub_action&id=$_REQUEST[id]");
				}
				die();
			}else{
				//my_print($errors);
				$model = $_REQUEST;
				$view = "friends/edit.php";		
			}
			break;
			
	case 'delete':
			if($_SERVER['REQUEST_METHOD'] == 'GET'){
				//Prompt
			}else{
				
			}
			break;
		break;
		
	case 'details_GET':
		$model = Friend::Get($_REQUEST['id']);
		$view = "friends/details.php";		
		break;
		
	case 'edit_GET':
		$model = Friend::Get($_REQUEST['id']);
		$view = "friends/edit.php";		
		break;
		
	case 'delete_GET':
		$model = Friend::Get($_REQUEST['id']);
		$view = "friends/delete.php";		
		break;
		
	case 'delete_POST':
		$errors = Friend::Delete($_REQUEST['id']);
		if($errors){
				$model = Friend::Get($_REQUEST['id']);
				$view = "friends/delete.php";
				
		}else{
		
				header("Location: ?sub_action=$sub_action&id=$_REQUEST[id]");
				die();			
		}
		break;
		
	case 'search_GET':
		$model = Friend::Search($_REQUEST['q']);
		$view = 'friends/index.php';		
		break;
		
	case 'index_GET':
	default:
		$model = Friend::Get();
		$view = 'friends/index.php';		
		break;
}

switch ($format) {
    
	case 'json':
		echo json_encode($model);
		break;
		
	case 'plain':
		include __DIR__ . "/../Views/$view";		
		break;	
		
	case 'web':
	default:
		include __DIR__ . "/../Views/shared/_Template.php";		
		break;
}
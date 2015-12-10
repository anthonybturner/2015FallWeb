<?php

include_once '../Models/Exercise.php';

$action = isset($_REQUEST['action']) ? $_REQUEST['action'] : null;
$method = $_SERVER['REQUEST_METHOD'];
$format = isset($_REQUEST['format']) ? $_REQUEST['format'] : 'web';
$view 	= null;


switch ($action . '_' . $method) {
    
	case 'create_GET':
		$model = Exercise::Blank();
		$view = "exercises/edit.php";
		break;
		
	case 'save_POST':
			
			$sub_action = empty($_REQUEST['id']) ? 'created' : 'updated';
			
		//	$errors = Exercise::Validate($_REQUEST);
		//	if(!$errors){
		
		
				$errors = Exercise::Save($_REQUEST);
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
				$view = "exercises/edit.php";		
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
		$model = Exercise::Get($_REQUEST['id']);
		$view = "exercises/details.php";		
		break;
		
	case 'edit_GET':
		$model = Exercise::Get($_REQUEST['id']);
		$view = "exercises/edit.php";		
		break;
		
	case 'delete_GET':
		$model = Exercise::Get($_REQUEST['id']);
		$view = "exercises/delete.php";		
		break;
		
	case 'delete_POST':
		$errors = Exercise::Delete($_REQUEST['id']);
		if($errors){
				$model = Exercise::Get($_REQUEST['id']);
				$view = "exercises/delete.php";
				
		}else{
		
				header("Location: ?sub_action=$sub_action&id=$_REQUEST[id]");
				die();			
		}
		break;
		
	case 'search_GET':
		$model = Exercise::Search($_REQUEST['q']);
		$view = 'exercises/index.php';		
		break;
		
	case 'index_GET':
	default:
		$model = Exercise::Get();
		$view = 'exercises/index.php';		
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
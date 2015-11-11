<?php

include_once '../Models/Food.php';

$action = isset($_REQUEST['action']) ? $_REQUEST['action'] : null;
$method = $_SERVER['REQUEST_METHOD'];
$format = isset($_REQUEST['format']) ? $_REQUEST['format'] : 'web';
$view 	= null;


switch ($action . '_' . $method) {
    
	case 'create_GET':
		$model = Food::Blank();
		$view = "foods/edit.php";
		break;
		
	case 'save_POST':
			
			$sub_action = empty($_REQUEST['id']) ? 'created' : 'updated';
			
		//	$errors = Food::Validate($_REQUEST);
		//	if(!$errors){
		
				$errors = Food::Save($_REQUEST);
		//	}
			
			if(!$errors){

				if($format == 'json'){
					header("Location: ?action=edit&format=json&id=$_REQUEST[id]");
				}else{
					header("Location: ?sub_action=$sub_action&id=$_REQUEST[id]");
				}
				die();
			}else{
				
				var_dump($errors);

				//my_print($errors);
				$model = $_REQUEST;
				$view = "foods/edit.php";		
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
		$model = Food::Get($_REQUEST['id']);
		$view = "foods/details.php";		
		break;
		
	case 'edit_GET':
		$model = Food::Get($_REQUEST['id']);
	
		$view = "foods/edit.php";		
		break;
		
	case 'delete_GET':
		$model = Food::Get($_REQUEST['id']);
		$view = "foods/delete.php";		
		break;
		
	case 'delete_POST':
		$errors = Food::Delete($_REQUEST['id']);
		if($errors){
				$model = Food::Get($_REQUEST['id']);
				$view = "foods/delete.php";
				
		}else{
		
				header("Location: ?sub_action=$sub_action&id=$_REQUEST[id]");
				die();			
		}
		break;
		
	case 'search_GET':
		$model = Food::Search($_REQUEST['q']);
		$view = 'foods/index.php';		
		break;
		
	case 'index_GET':
	default:
		$model = Food::Get();
		$view = 'foods/index.php';		
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
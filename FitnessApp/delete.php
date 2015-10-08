<?php
   // var_dump( $_GET );
    //var_dump( $_POST );
    //var_dump( $_REQUEST );
    session_start();
    $food = $_SESSION["food"];
    
    if( $_POST ){
      
     // unset($food());
      $food[] = $_POST;
      $_SESSION["food"] = $food;
      header("Location: ./"); //Redirect user after successfull submit
    }
    
    $food = $food[$_REQUEST["id"]];
    var_dump( $food );
?>

<!DOCTYPE html>
<html>

<head>

	<!-- Always force latest IE rendering engine (even in intranet) & Chrome Frame
		Remove this if you use the .htaccess -->
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="description" content="Nutrients App">
	<meta name="author" content="turnera1">
	<meta name="viewport" content="width=device-width; initial-scale=1.0">
	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
	<link rel="stylesheet" href="css/nutrients.css">

	
	<title>Nutrients</title>

</head>

<body>
<div class="container">
            <h1>Food Intake</h1>
            <h2><?=$message?></h2>
            

         <form class="form-horizontal" action="?" method="post" >
           
              <div class='alert' style="display: none" id="myAlert">
                <button type="button" class="close" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <h3>Are you sure you want to delete <?= $food["Meal"]?>?</h3>
                <input type="submit" value="Delete" class="btn btn-danger"/>
                <input type="hidden" name="<?= $food("id");?>"/>
              </div> 
          
        
        </form>
            
</div>
            
</body>

</html>


<?php   
//Food module

session_start();

include  '../Models/nutrition-data.php';
include  '../shared/global.php';

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
	<link rel="stylesheet" href="https://cdn.datatables.net/1.10.2/css/jquery.dataTables.min.css"></style>
	<link rel="stylesheet" href="../css/fitness-app.css">

	
	<title>Profile</title>

</head>

<body>
    
    <div class="container">
        <?php include "../shared/navigation.php" ?>
        <div class="panel panel-info">
                    
            <div class="panel-heading">  
                        
                <h1><?= $person['Name']."'s"." profile" ?></h1>
                

            </div>
            
        </div>

        
        <div class="panel panel-success" style="height: 720px">
            
            <div class="panel-heading">Profile Info</div>
            
            <div class="panel-body">
                <dl class="dl-horizontal">
                    <dt>Name</dt>
                    <dd><?=$person['Name']?></dd>
                    <dt>Age</dt>
                    <dd><?=$person['Age']?></dd>
                    <dt>Weight</dt>
                    <dd><?=$person['Weight']?></dd>
                    <dt>Height</dt>
                    <dd><?=$person['Height']?></dd>
                    <hr>
                    <dt>Calories Goal</dt>
                    <dd><?=$person['MaxCalories']?></dd>
                    <dt>Today's calorie Intake</dt>
                    <dd><?=$total['calories']; ?></dd>
                    <dt>Today's cholestrol Intake</dt>
                    <dd><?=$total['cholestrol'].'mg' ?></dd>
                    <dt>Today's fat Intake</dt>
                    <dd><?=$total['fat'].'mg' ?></dd>
                </dl>
            </div>

    	</div>
	 <?php include "../shared/footer.php" ?>
	</div>
	

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script src="<?=$path ?>/scripts/navigation-select.js"> </script>
    <script>
        
     /* global setMenuNavActive */
     setMenuNavActive();

    </script>

</body>

</html>

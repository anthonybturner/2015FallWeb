<!DOCTYPE html>
<html>

<head>

	<!-- Always force latest IE rendering engine (even in intranet) & Chrome Frame
		Remove this if you use the .htaccess -->
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="description" content="Fitness App">
	<meta name="author" content="turnera1">
	<meta name="viewport" content="width=device-width; initial-scale=1.0">
	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://cdn.datatables.net/1.10.2/css/jquery.dataTables.min.css"></style>

	<link rel="stylesheet" href="css/fitness-app.css">

	
	<title></title>

</head>

<body>
    
     <?php $view ?>

    

 <?php include "shared/footer.php" ?>


	

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
	<script type="text/javascript" src="https://cdn.datatables.net/1.10.2/js/jquery.dataTables.min.js"></script>

	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script src="<?=$path ?>/scripts/navigation-select.js"> </script>
    <script>
        
     /* global setMenuNavActive */
     setMenuNavActive();
      
    </script>


</body>

</html>

<?php
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Fitness App 2015</title>

    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link rel="stylesheet" href="../css/fitness-app.css">
  </head>
  <body>
      
    <div class="container">
            <?php include "navigation.php" ?>

           <div class="panel panel-info">
            <div class="panel-heading">  
        
                   <h1>Fitness App 2015</h1>
                    <h2> <?=$message?></h2>
             
            </div>

           
        </div>
            
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/1.10.2/js/jquery.dataTables.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <?php include __DIR__ . "/../$view"; ?>
    
    <script> $('table').dataTable(); </script>
    
     <?php include "footer.php" ?>


    </div>

   
  </body>
</html>
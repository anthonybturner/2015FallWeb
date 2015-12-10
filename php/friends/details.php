<?php

session_start();
include '../shared/global.php';

  $friends = $_SESSION['friends'];
  if($_POST){
    unset($friends[$_POST['id']]);
    $_SESSION['friends'] = $friends;
    header('Location: ./');
  }
  
  $friend = $friends[$_REQUEST['id']];

//Creates Form control and labels based upon this list
$formControlFriends = array("Name"=>"Friend Name:", "Age"=>"Age:", "Status"=> "Status:");
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Friend Log: Details for <?= $friend['Name']?></title>

    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css" type="text/css" />
    <link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css"/>
    		<link rel="stylesheet" href="../css/fitness-app.css">
  </head>
  <body>
    <div class="container">
    <?php include "../shared/navigation.php" ?>

      <div class="panel panel-info">

         <div class="panel-heading">  
                                  
               <h1>Friend Details <br><small>Details for friend: <?= $friend['Name']?></small></h1>
          
          </div>
                      
            <div class="panel-body">
              
               <form class="form-horizontal col-md-8" action="" method="post">
                  <div class='alert' style="display: none" id="myAlert">
                    <button type="button" class="close" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <h3></h3>
                  </div> 
                  
                   <img src="<?=$friend["Avatar"] ?>"/> 
                   <?php foreach($formControlFriends as $item => $description): ?>
          
            
            
                  <div class="form-group">
                    <label for="<?= $item ?>" class="col-sm-2 col-sm-offset-2 control-label"><?= $description ?></label>
                    <div class="col-sm-6">
                      <input type="text" class="form-control" id="<?= $item ?>" name="<?= $item ?>" placeholder="Friend's <?= $item ?>" value="<?=$friend[$item] ?>" disabled>
                    </div>
                  </div>
         
                  <?php endforeach; ?>
          
                </form>
              
              </div>
              
      </div>
              
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js"></script>
    <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
    <script type="text/javascript">
      (function($){
        $(function(){
          
        });
      })(jQuery);
    </script>
  </body>
</html>
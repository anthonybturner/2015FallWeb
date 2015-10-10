<?php
session_start();
  $food = $_SESSION['food'];
  if($_POST){
    unset($food[$_POST['id']]);
    $_SESSION['food'] = $food;
    header('Location: ./');
  }
  
  $meal = $food[$_REQUEST['id']];
  
  
//Creates Form control and labels based upon this list
$formControlMeals = array("Name"=>"Meal Name", "Time"=>"When Did you Eat?", "Calories"=> "How many Calories?", "Carbs"=>"Carbs", "Fat"=>"Fat","Fiber"=> "Fiber", "Cholestrol"=>"Cholestrol", "Protien"=>"Protien");
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Food Log: Details for <?= $meal['Name']?></title>

    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css" type="text/css" />
    <link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
  </head>
  <body>
    <div class="container">

       <div class="page-header">
          <h1>Food Intake <small>Details for meal <?= $meal['Name']?></small></h1>
        </div>
        
        <form class="form-horizontal" action="" method="post" style="box-shadow: 2px 2px 2px 2px #ccc; padding: 16px;" >
          <div class='alert' style="display: none" id="myAlert">
            <button type="button" class="close" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h3></h3>
          </div> 
           <?php foreach($formControlMeals as $item => $description): ?>
          
            <div class="form-group">
              <label for="<?= $item ?>" class="col-sm-2 col-sm-offset-2 control-label"><?= $description ?></label>
              <div class="col-sm-6">
                <input type="text" class="form-control" id="<?= $item ?>" name="<?= $item ?>" placeholder="Meal's <?= $item ?>" value="<?=$meal[$item] ?>" disabled>
              </div>
            </div>
          
          <?php endforeach; ?>
          
        </form>

         
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
<?php
session_start();
include '../shared/global.php';

  $friends = $_SESSION['friends'];
  if($_POST){
    
    $friend = $friends[$_POST['id']];
    unset($friends[$_POST['id']]);
    $_SESSION['friends'] = $friends;
    $_SESSION['status'] = 'success';
    $_SESSION['status-msg'] = $friend['Name'].' has been deleted from your friends list.';
     header('Location: ./');
    
  }
  
  $friend = $friends[$_REQUEST['id']];
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Friend Log: Delete</title>

    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css" type="text/css" />
    <link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
  </head>
  <body>
    <div class="container">
 <?php include "../shared/navigation.php" ?>
 
 
 
 
 
 <div class="panel panel-info">

         <div class="panel-heading">  
                                  
               <h1>Friends <small>Delete a Friend</small></h1>
          
          </div>
                      
      </div>
      
       <form class="form-horizontal" action="" method="post" >
                
                <div class='alert alert-danger alert-block'  id="myAlert">
                  <button type="button" class="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <h3>Are you sure you want to delete <?=$friend['Name']?> from your friends list?</h3>
                  <input type="submit" value="Delete" class="btn btn-danger" />
                  <input type="hidden" name="id" value="<?=$_REQUEST['id']?>" />
                  
                </div> 
       </form>
              
 

       

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
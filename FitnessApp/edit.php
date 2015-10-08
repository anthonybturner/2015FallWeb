<?php
   // var_dump( $_GET );
    //var_dump( $_POST );
    //var_dump( $_REQUEST );
    session_start();
    $food = $_SESSION["food"];
    
    if( $_POST ){
      
      if(isset( $_GET['id'])){//Prevents adding another item on refresh
        
        $food[$_GET["id"]] = $_POST;//Should change exisiting one
      }
      
      $food[] = $_POST;
      $_SESSION["food"] = $food;
      header("Location: ./"); //Redirect user after successfull submit
    }
    
    if( $_GET['id'])
      $meal = $food[$_GET["id"]];
    else
      $meal = array();
      
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


 <div class="panel panel-info">
            <div class="panel-heading"> 
            
                <h2>Food intake edit</h2>
            </div>
       
            
        <form class="form-horizontal" action="?" method="post" >
          <div class='alert' style="display: none" id="myAlert">
            <button type="button" class="close" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h3></h3>
          </div> 
          <div class="form-group">
            <label for="txtName" class="col-sm-2 control-label">Name</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="txtName" name="Name" placeholder="Meal's Name" value="<?=$meal['Name']?>">
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label" for="txtCalories">Callories</label>
            <div class="col-sm-10">
                  <input type="number" class="form-control" id="txtCalories" name="Calories" placeholder="Calories in this meal"  value="<?=$meal['calories']?>">
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label" for="txtDate">When did you eat</label>
            <div class="col-sm-10">
                  <input type="date" class="form-control date" id="txtDate" name="Time" placeholder="Date"  value="<?=$meal['Time']?>">
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <div class="checkbox">
                <label>
                  <input type="checkbox"> Remember me
                </label>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button type="submit" class="btn btn-success" id="submit">Record</button>
            </div>
          </div>
        </form>
        <div class="progress">
              <div class="progress-bar progress-bar-striped active" role="progressbar"  style="width: 0%">
                <span >0</span>% Complete
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
          
          $("#submit").on('click', function(e){
            var self = this;
            //$(self).css({display: "none"});
            $(self).hide().after("Working...");
            
            var per = 0;
            var interval = setInterval(function(){
              per += 25;
              $(".progress-bar").css("width", per + "%");
              $(".progress-bar span").text(per);
              if(per >= 100){
                clearInterval(interval);
                
                if( !$("#txtDate").val() ){
                  $("input").css({ backgroundColor: "#FFAAAA"});
                  $(self).prop("disabled", false).html("Try Again");
                  $("#myAlert").removeClass("alert-success").addClass("alert-danger").show()
                    .find("h3").html("You must enter a date");
                  toastr.error("You must enter a date");
                  
                }else{
                  // Display success
                  $("#myAlert").removeClass("alert-danger").addClass("alert-success").show()
                    .find("h3").html("Yay! You did it.");
                  toastr.success("Yay! You did it.");
                  var food = $("form").serializeArray();
                  $.get()
                }
                
                
              }
            }, 200);
            //return false;
          });
          $(".close").on('click', function(e) {
              $(this).closest(".alert").slideUp()
          });
          $("input[type='number']").spinner();
          $("input.date").datepicker();
        });
      })(jQuery);
    </script>
    
    
</body>

</html>


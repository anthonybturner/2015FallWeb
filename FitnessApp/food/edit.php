<?php session_start();

    $food = $_SESSION["food"];


    if( $_POST ){
      
      
      if(isset($_GET['id'])){
        
       $food[$_GET['id']] = $_POST;
       
     }else{
       
       $food[] = $_POST;
       
    }
      
    $_SESSION['food'] = $food;
    header('Location: ./');
  }
    
    if(isset($_GET['id'])){
      $meal = $food[$_GET['id']];
    }else{
      $meal = array();
    }
    
//Creates Form control and labels based upon this list
$formControlMeals = array("Name"=>"Meal Name", "Time"=>"When Did you Eat?", "Calories"=> "How many Calories?", "Carbs"=>"Carbs", "Fat"=>"Fat","Fiber"=> "Fiber", "Cholestrol"=>"Cholestrol", "Protien"=>"Protien");

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

        <div class="page-header">
          <h1>Food Intake <small>Record your daily meals</small></h1>
        </div>
          <div class='alert alert-warning'>
            <button type="button" class="close" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <b>Special Offer</b> Free ice cream today!
          </div>
        <form class="form-horizontal" action="" method="post" >
          <div class='alert' style="display: none" id="myAlert">
            <button type="button" class="close" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h3></h3>
          </div> 
          
    <input type="hidden" id="Meal" value="<?=$meal["Meal"] ?>">

        <!-- Dynamically create form control meals based on a list of columns (array key value pairs) -->
    <?php foreach($formControlMeals as $item => $description): ?>
          
            <div class="form-group">
              <label for="<?= $item ?>" class="col-sm-2 control-label"><?= $description ?></label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="<?= $item ?>" name="<?= $item ?>" placeholder="Meal's <?= $item ?>" value="<?=$meal[$item] ?>">
              </div>
            </div>
          
    <?php endforeach; ?>
    
          <div class="form-group">
            <label for="mealType" class="col-sm-2 control-label">Meal Type</label>

            <div class="col-sm-10">
              <select id="mealType" name="Meal">
                
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Snack">Snack</option>

              </select>
            </div>
          </div>
         
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button type="submit" class="btn btn-success" id="submit">Record</button>
            </div>
          </div>
        </form>

    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js"></script>
    <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
 <script type="text/javascript">
      (function($){
        $(function(){
          
          var mealValue = $("#Meal").val();
          var myOpts = $('option').each(function(){
            
              if( $(this).val() == mealValue){
                
                
                $(this).prop('selected', true);
              }
            });
        
          
          
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
                  toastr.success("Yay! You did it.")
                  
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


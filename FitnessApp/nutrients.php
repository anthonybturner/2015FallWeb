<?php   include  'models/Food.php'; ?>

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
        
        <h1>Nutrition Agenda</h1>
        <h2><?=$message?></h2>
        <div class="panel panel-success">
            
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
        
        <div class="panel panel-info">
            <div class="panel-heading"> &nbsp;Enter meal information: 
            
                <div class="dropdown">
                    
                   <button class="btn btn-default dropdown-toggle" type="button" id="ddMealMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Select meal
                      <span class="caret"></span>
                    </button>
                    
                    <ul class="dropdown-menu" aria-labelledby="ddMealMenu">
                        <li><a href="#nutrition">Breakfast</a></li>
                        <li><a href="#nutrition">Lunch</a></li>
                        <li><a href="#nutrition">Dinner</a></li>
                        <li><a href="#nutrition">Snack</a></li>

                    </ul>
                </div>
            </div>

                <div class="panel-body">
                    <form role="form" action="#nutrition" id="add-meal-form">
    
                     <input type="hidden"  id="Meal" name="Meal">

                      <div class="form-group  col-xs-2">
                        <input type="text" class="form-control" id="nutrient" name="nutrient" placeholder="nutrient name">
                      </div>
                      <div class="form-group  col-xs-2">
                        <input type="text" class="form-control" id="calories" name="calories" placeholder="calories">
                      </div>
                     <div class="form-group col-xs-2">
                        <input type="text" class="form-control" id="carbs" name="carbs" placeholder="carbs">
        
                      </div>
                      
                       <div class="form-group col-xs-1">
                        <input type="text" class="form-control" id="fat" name="fat" placeholder="fat">
        
                      </div>
                      
                    <div class="form-group col-xs-1">
                        <input type="text" class="form-control" id="fiber" name="fiber" placeholder="fiber">
        
                      </div>
                      
                      <div class="form-group col-xs-2">
                        <input type="text" class="form-control" id="cholestrol" name="cholestrol" placeholder="cholestrol">
        
                      </div>
                      
                       <div class="form-group col-xs-2">
                        <input type="text" class="form-control" id="protien" name="protien" placeholder="protien">
        
                      </div>
                      
                      
                    </form>
                    
                    <div>
                    
    
                
                    <a href="#" class="btn btn-success" id="addMeal">
                        <i class="glyphicon glyphicon-plus"></i>
                        Add Meal
                    </a>
                    <a href="#" class="btn btn-danger">
                        <i class="glyphicon glyphicon-trash"></i>
                        Delete All
                        <span class="badge">4</span>
                    </a>
                    </div>
                    
                </div>
                
            </div>
            
        
        <div id="breakfast-nutrition" class="nutrition-area row">
            
            <h2 class="well col-md-12">Breakfast</h2>

            <div id="breakfast" class="col-md-8 col-xs-10">
        
            	 <table class="table table-condensed table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                          <th>#</th>
                          <th>Nutrient</th>
                          <th>Time</th>
                          <th>Calories</th>
                          <th>Carbs</th>
                          <th>Fat</th>
                          <th>Fiber</th>
                          <th>Cholestrol</th>
                          <th>Protien</th>
                          <th>Actions</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        
                        <?php foreach(Food::GetBreakfast() as $i => $meal): ?>
                      
                        <tr>
    
                          <th scope="row"><?=$i?></th>
                          <td><?=$meal['Name']?></td>
                          <td><?=date("M d Y  h:i:sa", $meal['Time'])?></td>
                          <td><?=$meal['calories']?></td>
                          <td><?=$meal['carbs']?></td>
                          <td><?=$meal['fat']?></td>
                          <td><?=$meal['fiber']?></td>
                          <td><?=$meal['cholestrol']?></td>
                          <td><?=$meal['protien']?></td>
                          <td>
                              <a href="" id="edit-meal"><span class="glyphicon glyphicon-edit" aria-hidden="true"></span></a>
                              
                              <a href="" id="delete-meal"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></a>
                          </td>
    
                        </tr>
                       
                       <?php endforeach; ?>
    
                        
                        
                     </tbody>
                </table>
                <hr>
            
            </div>
            <div id="breakfast-modal" class="col-md-3 col-xs-5"><img class="thumbnail" style="width: 100%; height: 150px;" src="images/breakfast.jpg"/></div>
        </div><!-- End breakfast -->
        
        <div id="lunch-nutrition" class="nutrition-area row">
             <div class="col-md-8 col-xs-10">
                <h2 class="well">Lunch</h2>
        
            	 <table class="table table-condensed table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                          <th>#</th>
                          <th>Nutrient</th>
                          <th>Time</th>
                          <th>Calories</th>
                          <th>Carbs</th>
                          <th>Fat</th>
                          <th>Fiber</th>
                          <th>Cholestrol</th>
                          <th>Protien</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        
                        <?php foreach(Food::GetLunch() as $i => $meal): ?>

                        <tr>
    
                          <th scope="row"><?=$i?></th>
                          <td><?=$meal['Name']?></td>
                          <td><?=date("M d Y  h:i:sa", $meal['Time'])?></td>
                          <td><?=$meal['calories']?></td>
                          <td><?=$meal['carbs']?></td>
                          <td><?=$meal['fat']?></td>
                          <td><?=$meal['fiber']?></td>
                          <td><?=$meal['cholestrol']?></td>
                          <td><?=$meal['protien']?></td>
    
    
                        </tr>
                   
                       <?php endforeach; ?>
                        
                        
                     </tbody>
                </table>
            </div>
        </div><!-- End Lunch -->
        
         <div id="dinner-nutrition" class="nutrition-area row">
            <div class="col-md-8 col-xs-10">
            <h2 class="well">Dinner</h2>
    
        	 <table class="table table-condensed table-striped table-bordered table-hover">
                <thead>
                    <tr>
                      <th>#</th>
                      <th>Nutrient</th>
                      <th>Time</th>
                      <th>Calories</th>
                      <th>Carbs</th>
                      <th>Fat</th>
                      <th>Fiber</th>
                      <th>Cholestrol</th>
                      <th>Protien</th>
                    </tr>
                </thead>
                
                <tbody>
                    
                    <?php foreach( Food::GetDinner() as $i => $meal): ?>

                        <tr>
    
                          <th scope="row"><?=$i?></th>
                          <td><?=$meal['Name']?></td>
                          <td><?=date("M d Y  h:i:sa", $meal['Time'])?></td>
                          <td><?=$meal['calories']?></td>
                          <td><?=$meal['carbs']?></td>
                          <td><?=$meal['fat']?></td>
                          <td><?=$meal['fiber']?></td>
                          <td><?=$meal['cholestrol']?></td>
                          <td><?=$meal['protien']?></td>
    
    
                        </tr>
                   
                       <?php endforeach; ?>
                    
                    
                 </tbody>
            </table>
            </div>
        </div> <!-- End dinner -->
        
        
        <div id="total-nutrition" class="nutrition-area row">
             <div class="col-md-8 col-xs-10">
            <h2 class="well">Total Nutrition</h2>
    
        	 <table class="table table-condensed table-striped table-bordered table-hover">
                <thead>
                    <tr>
                      <th>Nutrient</th>
                      <th>Calories</th>
                      <th>Carbs</th>
                      <th>Fat</th>
                      <th>Fiber</th>
                      <th>Cholestrol</th>
                      <th>Protien</th>
                    </tr>
                </thead>
                
                <tbody>
                    <tr>
                      <td>All</td><!-- Nutrient  -->
                      <td class="total-calories">
                          <span class='amount'>  </span> 
                          <div class='progress'> 

                              <div class='progress-bar progress-bar-striped active' aria-valuenow='$totalFatPercentage'
                                aria-valuemin="0" aria-valuemax='<?= ($person['MaxCalories']);?>'
                                role='progressbar' style='width: <?= $totalCaloriesPercentage.'%'?>'>
                                 <span class='progress-bar-text'>
                                      <?=$totalCaloriesPercentage.'%'?>
                                  </span>	
                             </div>  
                          </div> <!-- end progress bar -->
                          
                          <div class='label-info'>
                             <?= $total['calories'].' of '. $person['MaxCalories']; ?>
                          </div>
                      </td><!-- Calories  -->
                      <td class="total-carbs">
                          
                          <span class='amount'>  </span> 
                          <div class='progress'> 

                              <div class='progress-bar progress-bar-striped active' aria-valuenow='<?= ($total['carbs']); ?>'
                                aria-valuemin="0" aria-valuemax='<?= ($person['MaxCarbs']);?>' role='progressbar'
                                style='width:<?= $totalCarbsPercentage.'%' ?>'>
                                 <span class='progress-bar-text'><?=$totalCarbsPercentage.'%'?></span>	
                             </div>  
                          </div>
                           <div class='label-info'>
                             <?= $total['carbs'].' of '. $person['MaxCarbs']; ?>
                          </div>
                      </td><!-- Carbs  -->
                     
                      <td class="total-fat">
                          
                          <span class='amount'>  </span> 
                          <div class='progress'> 

                              <div class='progress-bar progress-bar-striped active' aria-valuenow='<?= ($total['fat']); ?>'
                                aria-valuemin="0" aria-valuemax='<?= ($person['MaxFat']);?>' role='progressbar'
                                style='width:<?= $totalFatPercentage.'%' ?>'>
                                 <span class='progress-bar-text'><?=$totalFatPercentage.'%'?> </span>	
                             </div>  
                          </div>
                           <div class='label-info'>
                             <?= $total['fat'].' of '. $person['MaxFat']; ?>
                          </div>
                          
                      </td><!-- Fat  -->
                      <td class="total-fiber">
                          <span class='amount'>  </span> 
                          <div class='progress'> 

                              <div class='progress-bar progress-bar-striped active' aria-valuenow='<?= ($total['fiber']); ?>'
                                aria-valuemin="0" aria-valuemax='<?= ($person['MaxFiber']);?>' role='progressbar'
                                style='width:<?= $totalFiberPercentage.'%' ?>'>
                                 <span class='progress-bar-text'><?=$totalFiberPercentage.'%'?></span>	
                             </div>  
                          </div>
                           <div class='label-info'>
                             <?= $total['fiber'].' of '. $person['MaxFiber']; ?>
                          </div>
                          
                      </td><!-- Fiber  -->
                      
                      <td class="total-cholestrol">
                          <span class='amount'>  </span> 
                          <div class='progress'> 

                              <div class='progress-bar progress-bar-striped active' aria-valuenow='<?= ($total['cholestrol']); ?>'
                                aria-valuemin="0" aria-valuemax='<?= ($person['MaxCholestrol']);?>' role='progressbar'
                                style='width:<?= $totalCholestrolPercentage.'%' ?>'>
                                 <span class='progress-bar-text'><?=$totalCholestrolPercentage.'%'?></span>	
                             </div>  
                          </div>
                           <div class='label-info'>
                             <?= $total['cholestrol'].' of '. $person['MaxCholestrol']; ?>
                          </div>
                          
                      </td><!-- Cholestrol  -->
                      
                      <td class="total-protien">
                          <span class='amount'>  </span> 
                          <div class='progress'> 

                              <div class='progress-bar progress-bar-striped active' aria-valuenow='<?= ($total['protien']); ?>'
                                aria-valuemin="0" aria-valuemax='<?= ($person['MaxProtien']);?>' role='progressbar'
                                style='width:<?= $totalProtienPercentage.'%' ?>'>
                                 <span class='progress-bar-text'><?=$totalProtienPercentage.'%'?></span>	
                             </div>  
                          </div>
                           <div class='label-info'>
                             <?= $total['protien'].' of '. $person['MaxProtien']; ?>
                          </div>
                          
                          
                          
                      </td><!-- Protien  -->
                    </tr>
                    
                    
                 </tbody>
            </table>
        
            <div id="total-progress">
            	<div class="progress">
            	    
    				<div class="progress-bar progress-bar-striped active" raria-valuenow='<?= ($totalMax); ?>'
                                aria-valuemin="0" aria-valuemax='<?= ($totalMaxAll)?>' role='progressbar'
                                style='width:<?= $totalMaxPercentage ?>'>
    					<span class="progress-bar-text"><?= $totalMaxPercentage ?></span>
    				</div>
    
    			</div>
    			 <div class='label-info'>
                     <?= $total['sum'].' of '. $totalMaxAll; ?>
                  </div>
			</div>
		    </div>
		</div>

    <div class="row">
        <div id="add-meal-modal" class="col-xs-5">
        </div>
        
    </div>

	</div>
	

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script>
        
        $(".dropdown-menu li a").click(function(){//Get the meal selected and save it 
            var selectedMeal = $(this).text();
            $("#Meal").val(selectedMeal);
        });
        
        $("#addMeal").click(function(){
            
            window.location = "edit.php";
           // $.get("edit.php", function(results){
               
                // $("#add-meal-modal").html(results);
                
            //});
            
          
          var mealItem =  $("#add-meal-form").serializeArray();
          
        });
        
        $("#edit-meal").click(function(){
            
            //Temp changes hardcoded for only breakfast test
            var breakfastWindow = $("#breakfast");
            
            if( breakfastWindow.hasClass("col-md-8 col-xs-10") ){//Shrink the window
                
                  breakfastWindow.removeClass("col-md-8 col-xs-10").addClass("col-md-6 col-xs-5");
                  
                   
                   $.get("edit.php", function(results){
               
                     $("#breakfast-modal").removeClass("col-md-3 col-xs-5").addClass("col-md-3 col-md-offset-1 col-xs-5").html(results);
                
                     });
                
            }else{//Expand the window
                
              breakfastWindow.removeClass("col-md-6 col-xs-5").addClass("col-md-8 col-xs-10");
                $("#breakfast-modal").removeClass("col-md-offset-1 col-xs-5").addClass("col-md-3 col-xs-5").html("<img class='thumbnail' src='images/breakfast.jpg' style='width: 100%;'/>");
            }
          
            
          
            
          
          var mealItem =  $("#add-meal-form").serializeArray();
          return false;
          
        });
        
    </script>
<!--	<script src="scripts/nutrients.js"></script> -->

</body>

</html>

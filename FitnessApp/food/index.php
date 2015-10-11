<?php   
//Food module

session_start();

include  '../models/nutrition-data.php';
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

	<link rel="stylesheet" href="../css/nutrients.css">

	
	<title>Nutrition</title>

</head>

<body>
    
    <div class="container">
        <?php include "../shared/navigation.php" ?>
        <div class="panel panel-info">
                    
            <div class="panel-heading">  
                        
                <h1>Nutrition Agenda</h1>
                <h2>Food Intake</h2>

            </div>

            <div class="panel-body">
               
             

            </div>
                        
        </div>
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
            <div class="panel-heading"> &nbsp;Meal Options: 
            
                
            </div>

                <div class="panel-body">
                   
    
                
                    <a href="edit.php" class="btn btn-success" id="addMeal">
                        <i class="glyphicon glyphicon-plus"></i>
                        Add Meal
                    </a>
                    <a href="#" class="btn btn-danger">
                        <i class="glyphicon glyphicon-trash"></i>
                        Delete All
                        <span class="badge"><?= count($food); ?></span>
                    </a>
                
                    
                </div>
                
            </div>
            
        
        <div class="panel panel-info row">
            
            <div class="panel-heading"> &nbsp; <h2>Meals </h2>
                
            </div>
            
        <div class="col-md-12 col-xs-10 panel-body">
        
            	 <table id="mealTable" class="table table-condensed table-striped table-bordered table-hover" style="table-layout: fixed;">
                    <thead>
                        <tr>
                          
                          <th class="col-sm-2">#</th>
                          <th class="col-sm-3">Nutrient</th>
                          <th class="col-sm-2">Time</th>
                          <th class="col-sm-2">Cals</th>
                          <th class="col-sm-2">Carbs</th>
                          <th class="col-sm-1">Fat</th>
                          <th class="col-sm-2">Fiber</th>
                          <th class="col-sm-2">Cholestrol</th>
                          <th class="col-sm-2">Protien</th>
                          <th class="col-sm-2">Meal Type</th>

                        </tr>
                    </thead>
                    
                    <tbody>
                        
                        <?php foreach($food as $i => $meal): ?>
                      
                            <tr>
                                
                                  <th scope="row" >
                                     
                                    <div class="btn-group" role="group" aria-label="...">
                                          
                                             <a href="details.php?id=<?=$i?>" id="detail-meal" class="btn btn-default btn-xs"><i class="glyphicon glyphicon-eye-open" ></i></a>
                                             <a href="edit.php?id=<?=$i?>"    id="edit-meal"   class="btn btn-default btn-xs"><i class="glyphicon glyphicon-edit" ></i> </a>
                                             <a href="delete.php?id=<?=$i?>"  id="delete-meal" class="btn btn-default btn-xs"><i class="glyphicon glyphicon-trash" ></i> </a>
                                    </div>
                                      
                                  </th>
    
                             
                                  <td><?=$meal['Name']?></td>
                                  <td><?=date("M d Y  h:i:sa", $meal['Time'])?></td>
                                  <td><?=$meal['Calories']?></td>
                                  <td><?=$meal['Carbs']?></td>
                                  <td><?=$meal['Fat']?></td>
                                  <td><?=$meal['Fiber']?></td>
                                  <td><?=$meal['Cholestrol']?></td>
                                  <td><?=$meal['Protien']?></td>
                                  <td><?=$meal['Meal']?></td>

                        </tr>
                       
                       <?php endforeach; ?>
    
                        
                        
                     </tbody>
                </table>
                <hr>
            
            </div>
        </div><!-- End meal -->
        
      
        
        <div id="total-nutrition"  class="panel panel-info row">
             
            <div class="panel-heading"> &nbsp; <h2>Nutrition totals </h2>
                
            </div>
            
            
             <div class="col-md-12 col-xs-10 panel-body">
    
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
        <div id="meal-modal" class="col-md-3 col-xs-5">
        </div>
        
    </div>

	</div>
	

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
	<script type="text/javascript" src="https://cdn.datatables.net/1.10.2/js/jquery.dataTables.min.js"></script>

	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script src="<?=$path ?>/scripts/navigation-select.js"> </script>
    <script>
        
     /* global setMenuNavActive */
     setMenuNavActive();

    
        $(".dropdown-menu li a").click(function(){//Get the meal selected and save it 
            var selectedMeal = $(this).text();
            $("#Meal").val(selectedMeal);
        });
        

        $('#mealTable').dataTable();

        
        /* $("a").click(function(){
            
            //Temp changes hardcoded for only meal test
            var mealWindow = $("#meal");
            
            if( mealWindow.hasClass("col-md-12 col-xs-10") ){//Shrink the window
                
                  mealWindow.removeClass("col-md-12 col-xs-10").addClass("col-md-6 col-xs-5");
                  
                   
                   $.get("edit.php", function(results){
               
                     $("#meal-modal").removeClass("col-md-3 col-xs-5").addClass("col-md-6 col-xs-10").html(results);
                
                     });
                
            }else{//Expand the window
                
              mealWindow.removeClass("col-md-6 col-xs-5").addClass("col-md-12 col-xs-10");
                $("#meal-modal").removeClass("col-md-6 col-xs-10").addClass("col-md-3 col-xs-5").html("<img class='thumbnail' src='images/meal.jpg' style='width: 100%;'/>");
            }
          
            
          return false;
          
        }); */
        
        
        
    </script>
<!--	<script src="scripts/nutrients.js"></script> -->

</body>

</html>

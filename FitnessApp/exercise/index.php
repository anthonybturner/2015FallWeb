<?php   
//Exercise module
session_start();

include  '../models/exercise-data.php';
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

	
	<title>Exercise</title>

</head>

<body>

    <div class="container">
    <?php include "../shared/navigation.php" ?>
     <div class="panel panel-info">
            
            <div class="panel-heading">  
                        
                <h1>Exercise Agenda</h1>
                <h2>Food Burned</h2>

            </div>

              
     </div>


        
        <div class="panel panel-info">
            <div class="panel-heading"> &nbsp;Excercise Options: 
            
                
            </div>

                <div class="panel-body">
                   
    
                
                    <a href="edit.php" class="btn btn-success" id="addExcercise">
                        <i class="glyphicon glyphicon-plus"></i>
                        Add Excercise
                    </a>
                    <a href="#" id="delete-all-friends" class="btn btn-danger">
                        <i class="glyphicon glyphicon-trash"></i>
                        Delete All
                        <span class="badge"><?= count($exercises); ?></span>
                    </a>
                
                    
                </div>
                
            </div>
            
        
        <div class="panel panel-info">
            
             <div class="panel-heading"> &nbsp; <h2>Exercises </h2>
                
            </div>
            
            <div class="panel-body">
        
            	 <table id="exercise-table" class="table table-condensed table-striped table-bordered table-hover" style="table-layout: fixed;">
                    <thead>
                        <tr>
                          
                          <th class="col-sm-2">#</th>
                          <th class="col-sm-3">Name</th>
                          <th class="col-sm-2">Time</th>
                          <th class="col-sm-2">Minutes</th>
                          <th class="col-sm-2">Calories Burned</th>
                          <th class="col-sm-2">Excercise Type</th>

                        </tr>
                    </thead>
                    
                    <tbody>
                        
                        <?php foreach($exercises as $i => $excercise): ?>
                      
                            <tr>
                                
                                  <th scope="row" >
                                     
                                    <div class="btn-group" role="group" aria-label="...">
                                          
                                             <a href="details.php?id=<?=$i?>" class="btn btn-default btn-xs"><i class="glyphicon glyphicon-eye-open" ></i></a>
                                             <a href="edit.php?id=<?=$i?>"   class="btn btn-default btn-xs"><i class="glyphicon glyphicon-edit" ></i> </a>
                                             <a href="delete.php?id=<?=$i?>" class="btn btn-default btn-xs"><i class="glyphicon glyphicon-trash" ></i> </a>
                                    </div>
                                      
                                  </th>
    
                             
                                  <td><?=$excercise['Name']?></td>
                                  <td><?=date("M d Y  h:i:sa", $excercise['Time'])?></td>
                                  <td><?=$excercise['Minutes']?></td>
                                  <td><?=$excercise['Calories']?></td>
                                  <td><?=$excercise['Type']?></td>

                        </tr>
                       
                       <?php endforeach; ?>
    
                        
                        
                     </tbody>
                </table>
                <hr>
            
            </div>
        </div><!-- End breakfast -->
        
      
        
        <div id="total-nutrition" class="panel panel-info">
            
            <div class="panel-heading"> &nbsp; <h2>Exercise totals</h2>
                
            </div>
            
             <div class="panel-body">

        	 <table class="table table-condensed table-striped table-bordered table-hover">
                <thead>
                        <tr>
                          
                          <th class="col-sm-2">#</th>
                          <th class="col-sm-2">Time</th>
                          <th class="col-sm-2">Minutes</th>
                          <th class="col-sm-2">Calories Burned</th>

                        </tr>
                    </thead>
                
                <tbody>
                    <tr>
                      <td>All</td>
                      
                      <td class="total-time">
                          
                          <span class='amount'>  </span> 
                          <div class='progress'> 

                              <div class='progress-bar progress-bar-striped active' aria-valuenow='<?= ($total['Time']); ?>'
                                aria-valuemin="0" aria-valuemax='<?= ($person['MaxTime']);?>' role='progressbar'
                                style='width:<?= $totalTimePercentage.'%' ?>'>
                                 <span class='progress-bar-text'><?=$totalTimePercentage.'%'?> </span>	
                             </div>  
                          </div>
                           <div class='label-info'>
                             <?= $total['Time'].' of '. $person['MaxTime']; ?>
                          </div>
                          
                      </td><!-- Time  -->
                      
                      <td class="total-minutes">
                          
                          <span class='amount'>  </span> 
                          <div class='progress'> 

                              <div class='progress-bar progress-bar-striped active' aria-valuenow='<?= ($total['Minutes']); ?>'
                                aria-valuemin="0" aria-valuemax='<?= ($person['MaxMinutes']);?>' role='progressbar'
                                style='width:<?= $totalMinutesPercentage.'%' ?>'>
                                 <span class='progress-bar-text'><?=$totalMinutesPercentage.'%'?></span>	
                             </div>  
                          </div>
                           <div class='label-info'>
                             <?= $total['Minutes'].' of '. $person['MaxMinutes']; ?>
                          </div>
                      </td><!-- Minutes  -->
                     
                      
                      
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
                             <?= $total['Calories'].' of '. $person['MaxCalories']; ?>
                          </div>
                      </td><!-- Calories  -->
                      
                      
                    </tr>
                    
                    
                 </tbody>
            </table>
        
          
		    </div>
		</div>
 <?php include "../shared/footer.php" ?>
	</div>
	

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
	<script type="text/javascript" src="https://cdn.datatables.net/1.10.2/js/jquery.dataTables.min.js"></script>

	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script src="<?=$path ?>/scripts/navigation-select.js"> </script>
    <script src="<?=$path ?>/scripts/utilities.js"></script>
    

    <script>
       /* global setMenuNavActive */
     setMenuNavActive();

        $('#exercise-table').dataTable();
    
    
        
       /*  $("#edit-meal").click(function(){
            
            //Temp changes hardcoded for only breakfast test
            var breakfastWindow = $("#breakfast");
            
            if( breakfastWindow.hasClass("col-md-8 col-xs-10") ){//Shrink the window
                
                  breakfastWindow.removeClass("col-md-8 col-xs-10").addClass("col-md-6 col-xs-5");
                  
                   
                 //  $.get("edit.php", function(results){
               
                  //   $("#breakfast-modal").removeClass("col-md-3 col-xs-5").addClass("col-md-3 col-md-offset-1 col-xs-5").html(results);
                
                 //    });
                
            }else{//Expand the window
                
              breakfastWindow.removeClass("col-md-6 col-xs-5").addClass("col-md-8 col-xs-10");
                $("#breakfast-modal").removeClass("col-md-offset-1 col-xs-5").addClass("col-md-3 col-xs-5").html("<img class='thumbnail' src='images/breakfast.jpg' style='width: 100%;'/>");
            }
          
            
          
            
          
          var mealItem =  $("#add-meal-form").serializeArray();
          return true;
          
        });
        
        */
        
    </script>
<!--	<script src="scripts/nutrients.js"></script> -->

</body>

</html>

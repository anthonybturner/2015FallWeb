<?php   
//CREATE USER turnera1@
session_start();
//$_SESSION['friends']  = null;
include 'shared/global.php';
include  'models/all-data.php';

?>

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

	
	<title>Fitness App</title>

</head>

<body>
    
    <div class="container">
      <?php include "shared/navigation.php" ?>
                   
        <div class="panel panel-info">
            <div class="panel-heading">  
            
                
                <div id="header-avatar" >
                  
                    <img  class="thumbnail" src="<?=$avatar?>"/>
                    
                </div>
                        
                        
                <div id="header-title">
                   <h1>Fitness App 2015</h1>
                    <h2> <?=$message?></h2>
                </div>

            </div>

           
        </div>

        <div class="panel panel-success">
            
            <div class="panel-heading">Diet Info</div>
            
            <div class="panel-body">
                <dl class="dl-horizontal">
                   
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
        
       
        <div id="total-nutrition"  class="panel panel-info">
             
            <div class="panel-heading"> &nbsp; <h2>Totals </h2>
                
            </div>
            
            
             <div class="panel-body">
    
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
            	    
    				
    
    			</div>
    			 <div class='label-info'>
                    
                  </div>
			</div>
		    </div>
		</div>

        <div class="row">
            <div id="add-meal-modal" class="col-xs-5">
            </div>
            
        </div>
 <?php include "shared/footer.php" ?>

	</div>
	

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

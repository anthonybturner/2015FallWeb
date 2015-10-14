<?php   
//Friends module
session_start();
 var_dump($_SESSION);

include  '../shared/global.php';
include  '../models/friends-data.php';

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

	<link rel="stylesheet" href="../css/friends.css">

	
	<title>Friends</title>

</head>

<body>

    <div class="container">
        <?php include "../shared/navigation.php" ?>
         <div class="panel panel-info">
                
                <div class="panel-heading">  
                            
                    <h1>Friends List</h1>
    
                </div>
    
                    <div class="panel-body">
                    
                        <?php if( isset($_SESSION['status'] )) : ?>
                            
                         <div class='alert alert-<?=$_SESSION["status"]?>'>

                            <button type='button' class='close' aria-label='Close'>
                                  <span aria-hidden='true'>&times;</span>
                                </button>
                               <?= $_SESSION['status-msg']; unset($_SESSION['status']); ?>
                               
                            </div>
                            
                        <?php endif; ?>
       
                    </div>
                    
         </div>

            
            <div class="panel panel-info">
                <div class="panel-heading"> &nbsp;Friends Options: 
                
                    
                </div>
    
                    <div class="panel-body">
                       
        
                    
                        <a href="edit.php" class="btn btn-success" id="addFriend">
                            <i class="glyphicon glyphicon-plus"></i>
                            Add Friend
                        </a>
                        <a href="#" class="btn btn-danger">
                            <i class="glyphicon glyphicon-trash"></i>
                            Delete All
                            <span class="badge"><?= count($friends); ?></span>
                        </a>
                    
                        
                    </div>
                    
                </div>
                
            
            <div class="panel panel-info row">
                
                 <div class="panel-heading"> &nbsp; <h2>Friends </h2>
                    
                </div>
                
                <div class="col-md-8 col-xs-10 panel-body">
            
                	 <table class="table table-condensed table-striped table-bordered table-hover" style="table-layout: fixed;">
                        <thead>
                            <tr>
                              
                              <th class="col-sm-1">#</th>
                              <th class="col-sm-1">Avatar</th>
                              <th class="col-sm-3">Name</th>
                              <th class="col-sm-1">Age</th>
                              <th class="col-sm-2">Status</th>

    
                            </tr>
                        </thead>
                        
                        <tbody>
                            
                            <?php foreach($friends as $i => $friend): ?>
                          
                                <tr>
                                    
                                      <th scope="row" >
                                         
                                        <div class="btn-group" role="group" aria-label="...">
                                              
                                                 <a href="details.php?id=<?=$i?>" class="btn btn-default btn-xs"><i class="glyphicon glyphicon-eye-open" ></i></a>
                                                 <a href="delete.php?id=<?=$i?>" class="btn btn-default btn-xs"><i class="glyphicon glyphicon-trash" ></i> </a>
                                        </div>
                                          
                                      </th>
        
                                      <td><img src="<?=$friend['Avatar']?>" width="48px" height="48px"/></td>
                                      <td><?=$friend['Name']?></td>
                                      <td><?=$friend['Age']?></td>
                                      <td><?=$friend['Status']?></td>

                                      
    
                            </tr>
                           
                           <?php endforeach; ?>
        
                            
                            
                         </tbody>
                    </table>
                    <hr>
                
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

        $('table').dataTable();
    
    
     $(".close").on('click', function(e) {
            
        $(this).closest(".alert").slideUp();
    });
        
       
        
    </script>

</body>

</html>

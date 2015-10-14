<?php session_start();
include  '../shared/global.php';

    $friends = $_SESSION["friends"];

    if( $_POST ){
      //Simulating a list of users for the app
      include  '../models/users-data.php';

      if(isset($_POST['user-id'])){
        
        $userAdd = $users[$_POST['user-id']];
        $friends[] = $userAdd;
       
     }
      
    $_SESSION['friends'] = $friends;
    header('Location: ./');
  }

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
	<link rel="stylesheet" href="../css/edit.css">

	
	<title>Nutrients</title>

</head>
 <body>
    <div class="container">

        <div class="page-header">
          <h1>Friends  <small>Add a Friend</small></h1>
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
        

          <div class="form-group" style="margin-bottom: 0;">
            
            <label for="name-input" class="col-sm-2 control-label">Search for friend:</label>
            
            <div class="col-sm-10">
              <input id="name-input" type="text" class="form-control" placeholder="Search for friend">
              <input id="user-id" type="hidden" name="user-id"/>

                <ul id="search-results" class="col-md-3 search-area" >
  
                 </ul>
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
        
        
        var searchArea = $(".search-area");
        var searchResultsArea = $("#search-results");
        
        function handleResultClick(id, element){
          
           $( "#name-input" ).val(element.innerHTML);
           searchArea.css("display", "none");
          $("#user-id").val(id);

          
          return false;
        }
          
        
      
      (function($){
        $(function(){
          
          
        
        $( "#name-input" ).keyup(function(key) {
          
        
          searchResultsArea.empty();

            var searchInput  = $(this);
            var typedWords = searchInput.val();
            if (typedWords.length >=1 ){
            
            $.get("../models/Users.php?word="+typedWords, function(searchResults){
              
              var results =  JSON.parse(searchResults);
                         console.log(results)

              if( results != ""){
                searchArea.css("display", "inline");
                
                for(var i =0; i < results.length; i++){
                  
                 searchResultsArea.append($("<li></li>").html("<a href='#"+results[i].id+"'"+ " onclick='return handleResultClick("+results[i].id+", this)'>"+results[i].Name+"</a>"));
                  
                }
              }

            });

          }
          
            return false;

          
        });
        

          $("#submit").on('click', function(e){
            var self = this;

            $(self).hide().after("Working...");
            
           
          });
          
          $(".close").on('click', function(e) {
              $(this).closest(".alert").slideUp()
          });
      
        });
      })(jQuery);
    </script>
    
    
</body>

</html>


<div class="panel panel-success">
    
      <div class="panel-heading">
        
          <h1><small><?= isset($model['Name']) ? "Edit User:" : "Add User"; ?></small>  <?= $model['Name']?></h1>
      </div>

    
    <div class="panel-body" style="padding: 8px">
        
        
        <form class="form-horizontal" role="form"  method="post" action="/FitnessApp/Controllers/users.php?action=save">
            <input type="hidden" name="id" class="form-control" placeholder="Enter Name" value="<?=$model['id']?>" />

            <div class="form-group">
                
               <label class="control-label col-sm-1" for ="name">Name</label> 
               <div class="col-sm-11">
                   <input type="text"id="name" name="Name" class="form-control" placeholder="Enter Name" value="<?=$model['Name']?>" />
               </div>
               
           </div>
           
           <div class="form-group">
                
               <label class="control-label col-sm-1" for ="age">Age</label> 
               <div class="col-sm-11">
                <input type="text" id="age" name="Age" class="form-control" placeholder="Enter Age" value="<?=$model['Age']?>" />
                </div>
            </div>
            
             
           <div class="form-group">
                
               <label class="control-label col-sm-1" for ="Height">Height</label> 
               <div class="col-sm-11">
                    <input type="text"  id="Height" name="Height" class="form-control" placeholder="Enter Height" value="<?=$model['Height']?>" />
                    </div>
            </div>
            
             
            <div class="form-group">
                
               <label class="control-label col-sm-1" for ="age">Weight</label> 
               <div class="col-sm-11">
                <input type="text" id="weight" name="Weight" class="form-control" placeholder="Enter Weight" value="<?=$model['Weight']?>" />
                </div>
            </div>

            
         <div class="form-group">
                
               <label class="control-label col-sm-1" for ="age">Avatar</label> 
               <div class="col-sm-11">
                <input type="text" id="avatar" name="Avatar" class="form-control" placeholder="Enter Avatar" value="<?=$model['Avatar']?>" />
                </div>
            </div>
            
        <input type="submit" id="submit" value="Submit" class="btn btn-primary form-control"/>
            
        </form>
    
    </div>

</div>
<script>
  
</script>
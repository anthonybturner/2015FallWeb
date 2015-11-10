<div class="panel panel-success">
    
      <div class="panel-heading">
        
          <h1><small>edit</small>  <?= $model['Name']?></h1>
      </div>

    
    <div class="panel-body" style="padding: 8px">
        
        
        <form class="form-horizontal" role="form"  method="post" action="?action=save">
            <input type="hidden" name="id" class="form-control"  value="<?=$model['id']?>" />
           <input type="hidden" name="Users_id" class="form-control"  value="1" />
           <input type="hidden" name="2015Fall_MealTypes_id" class="form-control"  value="1" />


            <div class="form-group">
                
               <label class="control-label col-sm-1" for ="name">Name </label>
                <div class="col-sm-11">

                   <input type="text"id="Name" name="Name" class="form-control col-sm" placeholder="Enter Name" value="<?=$model['Name']?>" />
               </div>
               
           </div>
           
            <div class="form-group">
                
               <label class="control-label col-sm-1" for ="name">Calories</label> 
               <div class="col-sm-11">
                   <input type="text"id="Calories" name="Calories" class="form-control" placeholder="Enter Calories" value="<?=$model['Calories']?>" />
               </div>
               
           </div>
           
           <div class="form-group">
                
               <label class="control-label col-sm-1" for ="age">Carbs</label> 
               <div class="col-sm-11">
                <input type="text" id="Carbohydrates" name="Carbohydrates" class="form-control" placeholder="Enter Carbs" value="<?=$model['Carbohydrates']?>" />
                </div>
            </div>
            
             
           <div class="form-group">
                
               <label class="control-label col-sm-1" for ="height">Fiber</label> 
               <div class="col-sm-11">
                    <input type="text"  id="Fiber" name="Fiber" class="form-control" placeholder="Enter Fiber" value="<?=$model['Fiber']?>" />
                    </div>
            </div>
            
             
            <div class="form-group">
                
               <label class="control-label col-sm-1" for ="age">Cholestrol</label> 
               <div class="col-sm-11">
                <input type="text" id="Cholestrol" name="Cholestrol" class="form-control" placeholder="Enter Cholestrol" value="<?=$model['Cholestrol']?>" />
                </div>
            </div>

            
         <div class="form-group">
                
               <label class="control-label col-sm-1" for ="age">Protein</label> 
               <div class="col-sm-11">
                <input type="text" id="Protein" name="Protein" class="form-control" placeholder="Enter Protein" value="<?=$model['Protein']?>" />
                </div>
            </div>
            
        <input type="submit" id="submit" value="Submit" class="btn btn-primary form-control"/>
            
        </form>
    
    </div>

</div>
<script>
  
</script>
<div class="panel panel-success">
      <div class="panel-heading">
        
          <h1><small>Details for meal</small>  <?= $model['Name']?></h1>
      </div>


<div  class="panel-body" style="padding: 4px;">
            <table class="table-condensed table-striped table-bordered table-hover" style="border-radius: 3px 3px 3px;">
              <tr>
                <td><label for="" class="" >Name</label></td>
                <td class="col-md-12">
                   <?= $model["Name"] ?> </div>
                </td>
              </tr>
              
              <tr>
                <td><label for="" class="">Age</label></td>
                <td class="col-md-12">
                   <?= $model["Age"] ?> </div>
                </td>
              </tr>
              
              <tr>
                <td><label for="" class="" >Height</label></td>
                <td class="col-md-12">
                   <?= $model["Height"] ?> </div>
                </td>
              </tr>
              
              <tr>
                <td><label for="" class="">Weight</label></td>
                <td class="col-md-12">
                   <?= $model["Weight"] ?> </div>
                </td>
              </tr>
            </table>
</div>

</div>
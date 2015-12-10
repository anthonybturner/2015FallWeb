<?php  ?>
            
            
<div class="panel panel-info">
    
    <div class="panel-heading"> &nbsp;Menu Options: </div>

    <div class="panel-body">
       
        <a href="?action=create" class="btn btn-success ajax">
            <i class="glyphicon glyphicon-plus"></i>
            New Record
        </a>
        
        <a href="#" class="btn btn-danger">
            <i class="glyphicon glyphicon-trash"></i>
            Delete All
            <span class="badge"><?=count($model)?></span>
        </a>
    
    </div>
</div>


<div class="modal fade" id="myDialog">
  <div class="modal-dialog">
    <div class="modal-content">
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->

<div class="panel panel-info">
            
            <div class="panel-heading"> &nbsp; <h2>Meals </h2>
                
            </div>

    <div class="panel-body">
    
        <table class="table table-condensed table-striped table-bordered table-hover">
            <thead>
                <tr>
                    <th class="col-sm-2">Actions</th>
                     <th class="col-sm-3">Meal Name</th>
                     <th class="col-sm-2">Updated</th>

                      <th class="col-sm-2">Created</th>
                      <th class="col-sm-2">Calories</th>
                      <th class="col-sm-2">Carbohydrates</th>
                      <th class="col-sm-1">User Id</th>
                      <th class="col-sm-1">Fiber</th>
                      <th class="col-sm-1">Cholestrol</th>
                      <th class="col-sm-1">Protien</th>
                      <th class="col-sm-2">Meal Type</th>

                </tr>
            </thead>
            <tbody>
                <?php foreach($model as $row): ?>
                    <tr>
                          <th scope="row">
                            <div class="btn-group" role="group" aria-label="...">
                              <a href="?action=details&id=<?=$row['id']?>" title="View" class="btn btn-default btn-xs ajax"><i class="glyphicon glyphicon-eye-open"></i></a>
                              <a href="?action=edit&id=<?=$row['id']?>" title="Edit" class="btn btn-default btn-xs ajax"><i class="glyphicon glyphicon-edit"></i></a>
                              <a href="?action=delete&id=<?=$row['id']?>" title="Delete" class="btn btn-default btn-xs ajax"><i class="glyphicon glyphicon-trash"></i></a>
                            </div>
                          </th>
                        <td><?=$row['Name']?></td>
                        <td><?=$row['updated_at']?></td>
                        <td><?=$row['created_at']?></td>

                        <td><?=$row['Calories']?></td>
                        <td><?=$row['Carbohydrates']?></td>
                        <td><?=$row['Users_id']?></td>
                        <td><?=$row['Fiber']?></td>
                        <td><?=$row['Cholestrol']?></td>
                      <td><?=$row['Protien']?></td>
                      <td><?=$row['2015Fall_MealTypes_id']?></td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    
    </div>
</div>


<script type="text/javascript">
    $(function(){
        $(".ajax").click(function(){
            $.get(this.href + "&format=plain").then(function(data){
                $("#myDialog .modal-content").html(data);
                $("#myDialog").modal('show');
                $("#myDialog form").submit(function(e){
                                            e.preventDefault();

                    $.post(this.action + "&format=json", $(this).serialize(), null, 'json').then( function(data){
                            console.log(data)
                        }, function(e) {
                            console.log(e.responseText);
                         $("#myDialog .modal-content").append('<div class="alert alert-danger">' + data.Name + ' can not be deleted</div>')

                          }
                        );

                });
            });
            return false;
        });
    });
    

</script>
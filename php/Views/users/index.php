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
            
            <div class="panel-heading"> &nbsp; <h2>Users </h2>
                
            </div>

    <div class="panel-body">
    
        <table class="table table-condensed table-striped table-bordered table-hover">
            <thead>
                <tr>
                    <th>Actions</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Height</th>
                    <th>Weight</th>
                    <th>Avatar</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach($model as $row): ?>
                    <tr>
                          <th scope="row">
                            <div class="btn-group" role="group" aria-label="...">
                              <a href="?action=details&id=<?=$row['id']?>" title="View" class="btn btn-default btn-xs ajax"><i class="glyphicon glyphicon-eye-open"></i></a>
                              <a href="?action=edit&id=<?=$row['id']?>" title="Edit" class="btn btn-default btn-xs ajax edit"><i class="glyphicon glyphicon-edit"></i></a>
                              <a href="?action=delete&id=<?=$row['id']?>" title="Delete" class="btn btn-default btn-xs ajax"><i class="glyphicon glyphicon-trash"></i></a>
                            </div>
                          </th>
                        <td><?=$row['Name']?></td>
                        <td><?=$row['Age']?></td>
                        <td><?=$row['Height']?></td>
                        <td><?=$row['Weight']?></td>
                        <td><img src="<?=$row['Avatar']?>" /></td>
                        <td><?=$row['Status']?></td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    
    </div>
</div>


<script type="text/template" id="edit-tpl" >
    <tr>
       <td><input type="text" name="Name" class="form-control" placeholder="Name" value="{{Name}}" /></td>
       <td><input type="text" name="Age" class="form-control" placeholder="Age" value="{{Age}}" /></td>
       <td>
         <input type="submit" value="Submit" class="btn btn-primary"/>
         <input type="hidden" name="id" value="{{id}}" /> 
       </td>
    </tr>
</script>
    
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.4/handlebars.min.js"></script>
<script type="text/javascript">
    $(function(){
        
        
        var editTemplate = Handlebars.compile($("#edit-tpl").html());
        
        

        $(".ajax").click(function(){
            $.get(this.href + "&format=plain").then(function(data){
                $("#myDialog .modal-content").html(data);
                $("#myDialog").modal('show');
                $("#myDialog form").submit(function(e){
                                            e.preventDefault();

                    $.post(this.action + "&format=json", $(this).serialize(), null, 'json').then( function(data){
                            console.log(data)
                        }, function(e) {
                            console.log(e);
                         $("#myDialog .modal-content").append('<div class="alert alert-danger">' + data.Name + ' can not be deleted</div>')

                          }
                        );

                });
            });
            return false;
        });
    });
    

</script>
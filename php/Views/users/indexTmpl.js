            <div class="panel panel-info">
            
            <div class="panel-heading"> &nbsp;Menu Options: </div>
        
            <div class="panel-body">
               
                <a href="/FitnessApp/Controllers/users.php?action=create" class="btn btn-success ajax">
                    <i class="glyphicon glyphicon-plus"></i>
                    New Record
                </a>
                
                <a href="#" class="btn btn-danger">
                    <i class="glyphicon glyphicon-trash"></i>
                    Delete All
                    <span class="badge">{{count}}</span>
                </a>
            
            </div>
        </div>
                
        <table class="table table-condensed table-striped table-bordered table-hover">
            <thead>
                <tr>
                     <th class="col-sm-1">Actions</th>
                     <th class="col-sm-2">Name</th>
                     <th class="col-sm-1">Age</th>
                     <th class="col-sm-1">Height</th>
                     <th class="col-sm-1">Weight</th>
                     <th class="col-sm-1">Avatar</th>
                     <th class="col-sm-1">Status</th>

                </tr>
            </thead>
            
            <tbody>
                {{#each rows}}
                    <tr>
                        <td scope="row">
                          <div class="btn-group" role="group" aria-label="...">
                          
                            <a href="/FitnessApp/Controllers/users.php?&action=details&id={{id}}" title="View" class="btn btn-default btn-xs ajax" onclick="return showModal(this)"><i class="glyphicon glyphicon-eye-open"></i></a>
                            <a href="/FitnessApp/Controllers/users.php?&action=edit&id={{id}}" title="Edit" class="btn btn-default btn-xs ajax edit" onclick="return showModal(this)"><i class="glyphicon glyphicon-edit"></i></a>
                            <a href="/FitnessApp/Controllers/users.php?&action=delete&id={{id}}" title="Delete" class="btn btn-default btn-xs ajax" onclick="return showModal(this)"><i class="glyphicon glyphicon-trash" ></i></a>
                          </div>
                        </td>
                        <td>{{Name}}</td>
                        <td>{{Age}}</td>
                        <td>{{Height}}</td>
                        <td>{{weight}}</td>
                        <td><img src="{{Avatar}}"/></td>
                        <td>{{Status}}</td>
                    </tr>
               {{/each}}
            </tbody>
        </table>

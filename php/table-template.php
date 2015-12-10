
<table class="table table-condensed table-striped table-bordered table-hover">
                <thead>
                    <tr>
                      <th>#</th>
                      <th>Nutrient</th>
                      <th>Time</th>
                      <th>Calories</th>
                      <th>Carbs</th>
                      <th>Fat</th>
                      <th>Fiber</th>
                      <th>Cholestrol</th>
                      <th>Protien</th>
                    </tr>
                </thead>
                
                <tbody>
                   
                    <? foreach( $items as $i => $item): ?>

                        <tr>
    
                          <th scope="row"><?=$i?></th>
                          <td><?=$item['Name']?></td>
                          <td><?=date("M d Y  h:i:sa", $item['Time'])?></td>
                          <td><?=$item['calories']?></td>
                          <td><?=$item['carbs']?></td>
                          <td><?=$item['fat']?></td>
                          <td><?=$item['fiber']?></td>
                          <td><?=$item['cholestrol']?></td>
                          <td><?=$item['protien']?></td>
    
    
                        </tr>
                   
                       <? endforeach; ?>
                    
                    
                 </tbody>
            </table>
        
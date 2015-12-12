var global = require("../inc/global");

module.exports =  {
    blank: function(){ return {} },
    
    get: function(id, ret){
        var conn = global.GetConnection();
         var sql = "SELECT foods.updated_at, foods.foods_id, foods.foods_name, foods.foods_calories, foods.foods_carbohydrates, foods.foods_fiber, foods.foods_protein, foods.foods_cholestrol, foods.users_id, foodstypes.foodstypes_id  FROM Foods foods left join FoodsTypes foodstypes on foodstypes.foodstypes_id=foods.foodstypes_id ";
        if(id){
          sql += " WHERE foods.foods_id = " + id;
        }
       
        conn.query(sql, function(err,rows){
          
          ret(err,rows);
          conn.end();
        });        
    },
    
     getByUserId: function(id, ret){
        var conn = global.GetConnection();
        var sql = "SELECT foods.updated_at, foods.foods_id, foods.foods_name, foods.foods_calories, foods.foods_carbohydrates, foods.foods_fiber, foods.foods_protein, foods.foods_cholestrol, foods.users_id, foodstypes.foodstypes_id  FROM Foods foods left join FoodsTypes foodstypes on foodstypes.foodstypes_id=foods.foodstypes_id ";
        if(id){
          sql += " WHERE foods.users_id = " + id;
        }
        conn.query(sql, function(err,rows){
          ret(err,rows);
          conn.end();
        });        
    },getByDate: function(row, ret){
        var conn = global.GetConnection();
        var sql = "SELECT foods.updated_at, foods.foods_id, foods.foods_name, foods.foods_calories, foods.foods_carbohydrates, foods.foods_fiber, "+
        "foods.foods_protein, foods.foods_cholestrol, foods.users_id, foods.foodstypes_id, foods.foods_carbohydrates, foods.foods_fat, foods.foods_polyunsaturated_fat,  "+
        "foods.foods_monounsaturated_fat, foods.foods_sodium, foodstypes.foodstypes_name "+
        "FROM Foods foods left join FoodsTypes foodstypes on foodstypes.foodstypes_id=foods.foodstypes_id "+
        "WHERE foods.users_id = " + row[0] + " and foods.created_at like '%"+row[1]+"%'";
        
        
        conn.query(sql, function(err,rows){
          ret(err,rows);
          conn.end();
        });    
    },delete: function(id, ret){
        var conn = global.GetConnection();
        conn.query("DELETE FROM Foods WHERE foods_id = " + id, function(err,rows){
          ret(err);
          conn.end();
        });        
    },
    save: function(row, ret){
      
        var sql;
        var conn = global.GetConnection();
        //  TODO Sanitize
        if (row.foods_id) {
				  sql = " Update Foods "
							+ " Set created_at=?, updated_at= NOW(), foods_name=?, foods_calories=? , foods_fiber=?, foods_protein=?,  foods_cholestrol=?,  foods_carbohydrates=?, foods_fat=?, foods_polyunsaturated_fat=?, foods_monounsaturated_fat=?, foods_sodium=?, foodstypes_id=?, users_id=?"
						  + " WHERE foods_id = ? ";
			  }else{
				  sql = "INSERT INTO Foods "
						  + " (created_at, updated_at, foods_name, foods_calories, foods_fiber, foods_protein, foods_cholestrol, foods_carbohydrates, foods_fat, foods_polyunsaturated_fat, foods_monounsaturated_fat, foods_sodium,  foodstypes_id, users_id ) "
						  + "VALUES (?, NOW(), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,  ? ) ";				
			  }
			   console.log(row)

        conn.query(sql, [ row.created_at,  row.foods_name, row.foods_calories, row.foods_fiber, row.foods_protein, row.foods_cholestrol, row.foods_carbohydrates, row.foods_fat, row.foods_polyunsaturated_fat, row.foods_monounsaturated_fat, row.foods_sodium, row.foodstypes_id, row.users_id, row.foods_id],function(err,data){
          if(!err && !row.foods_id){
            row.foods_id = data.insertId;
          }
			  console.log(err)

          ret(err, row);
          conn.end();
        });        
    },
    validate: function(row){
      var errors = {};
      
      if(!row.foods_name) errors.Name = "is required"; 
      
      return errors.length ? errors : false;
    }
};  
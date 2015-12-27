var global = require("../inc/global");

module.exports =  {
    blank: function(){ return {} },
    
    get: function(id, ret, searchType){
        var conn = global.GetConnection();
         var sql = "SELECT foods.updated_at, foods.foods_id, foods.foods_name, foods.foods_calories, foods.foods_carbohydrates, foods.foods_fiber, foods.foods_protein, foods.foods_cholestrol, foods.users_id, foodstypes.foodstypes_id  FROM Foods foods left join FoodsTypes foodstypes on foodstypes.foodstypes_id=foods.foodstypes_id ";
        if(id){
        
           switch (searchType) {
             
              case 'search':

              sql += " WHERE foods.foods_name like '%" + id +"%' LIMIT 10";
              
              break;
            
              default:
                  sql += " WHERE foods.foods_id = " + id;
         
            
                }
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
        var sql = "select  foods.foods_calories, foods.updated_at, foods.foods_id, foods.foods_name, foods.foods_calories, foods.foods_carbohydrates, foods.foods_fiber, "+
        "foods.foods_protein, foods.foods_cholestrol, foods.users_id, foods.foodstypes_id, foods.foods_carbohydrates, foods.foods_fat, foods.foods_polyunsaturated_fat,  "+
        "foods.foods_monounsaturated_fat, foods.foods_sodium, foodstypes.foodstypes_name, DATE_FORMAT(foods.created_at,'%b %d %Y %h:%i %p') as created_at "+
        "FROM Foods foods left join FoodsTypes foodstypes on foodstypes.foodstypes_id=foods.foodstypes_id "+
        "WHERE foods.users_id = " + row[0] + " and foods.created_at like '%"+row[1]+"%' ";
       
        conn.query(sql, function(err,rows){
          
          ret(err,rows);
          conn.end();
        });    
    },getWeekTotals: function(row, ret){
      
        var conn = global.GetConnection();
        var sql = "select count(foods.foods_name) as TotalMeals, "+
          "sum(foods.foods_calories) as TotalCalories, "+
          "sum(foods.foods_fiber) as TotalFiber, "+
          "sum(foods.foods_cholestrol)  as TotalCholestrol, "+
          "sum(foods.foods_sodium) as TotalSodium, "+
          "sum(foods.foods_fat) as TotalFat, "+
          "sum(foods.foods_polyunsaturated_fat) as TotalPolyunsaturatedFat, "+
          "sum(foods.foods_monounsaturated_fat) as TotalMonounsaturatedFat, "+
          "sum(foods.foods_carbohydrates) as TotalCarbohydrates, "+
          "sum(foods.foods_protein) as TotalProtein "+
          "FROM Foods foods  where foods.users_id="+row.users_id+" and foods.created_at BETWEEN '"+row.start_date+ "' and '" + row.end_date + "'";
        
 
        conn.query(sql, function(err,rows){
          ret(err,rows);
          conn.end();
        });        
    },search: function(row, ret, searchType){
      
        var conn = global.GetConnection();
    var sql = 'SELECT foods.updated_at, foods.created_at, foods.foods_id, foods.foods_name, foods.foods_calories, foods.foods_carbohydrates, foods.foods_fiber, foods.foods_protein, foods.foods_cholestrol, foods.users_id, foodstypes.foodstypes_id  FROM Foods foods left join FoodsTypes foodstypes on foodstypes.foodstypes_id=foods.foodstypes_id ';


        if(row.term){
          
        
          switch (searchType) {
           
            case 'search':

            sql += " WHERE foods.users_id="+row.users_id+" and  foods.foods_name like '%" + row.term +"%' LIMIT 10";
            
            break;
          
            
              }
        }
          
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
      
        var sql, rows;
        var conn = global.GetConnection();
        //  TODO Sanitize
        if (row.foods_id) {
				  sql = " Update Foods "
							+ " Set   updated_at= NOW(), foods_name=?, foods_calories=? , foods_fiber=?, foods_protein=?,  foods_cholestrol=?,  foods_carbohydrates=?, foods_fat=?, foods_polyunsaturated_fat=?, foods_monounsaturated_fat=?, foods_sodium=?, foodstypes_id=?, users_id=?"
						  + " WHERE foods_id = ? ";
						   rows  =[    row.foods_name, row.foods_calories, row.foods_fiber, row.foods_protein, row.foods_cholestrol, row.foods_carbohydrates, row.foods_fat, row.foods_polyunsaturated_fat, row.foods_monounsaturated_fat, row.foods_sodium, row.foodstypes_id, row.users_id, row.foods_id];
			  }else{
				  sql = "INSERT INTO Foods "
						  + " (updated_at, created_at, foods_name, foods_calories, foods_fiber, foods_protein, foods_cholestrol, foods_carbohydrates, foods_fat, foods_polyunsaturated_fat, foods_monounsaturated_fat, foods_sodium,  foodstypes_id, users_id ) "
						  + "VALUES (NOW(), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,  ? ) ";		
						 rows= [  row.created_at, row.foods_name, row.foods_calories, row.foods_fiber, row.foods_protein, row.foods_cholestrol, row.foods_carbohydrates, row.foods_fat, row.foods_polyunsaturated_fat, row.foods_monounsaturated_fat, row.foods_sodium, row.foodstypes_id, row.users_id, row.foods_id]
			  }
        
      
        conn.query(sql, rows ,function(err,data){
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
var mysql = require("mysql");

module.exports =  {
    blank: function(){ return {} },
    
    get: function(id, ret){
        var conn = GetConnection();
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
        var conn = GetConnection();
        var sql = "SELECT foods.updated_at, foods.foods_id, foods.foods_name, foods.foods_calories, foods.foods_carbohydrates, foods.foods_fiber, foods.foods_protein, foods.foods_cholestrol, foods.users_id, foodstypes.foodstypes_id  FROM Foods foods left join FoodsTypes foodstypes on foodstypes.foodstypes_id=foods.foodstypes_id ";
        if(id){
          sql += " WHERE foods.users_id = " + id;
        }
        conn.query(sql, function(err,rows){
          ret(err,rows);
          conn.end();
        });        
    },
    delete: function(id, ret){
        var conn = GetConnection();
        conn.query("DELETE FROM Foods WHERE foods_id = " + id, function(err,rows){
          ret(err);
          conn.end();
        });        
    },
    save: function(row, ret){
        var sql;
        var conn = GetConnection();
        //  TODO Sanitize
        if (row.foods_id) {
				  sql = " Update Foods "
							+ " Set updated_at= NOW(), foods_name=?, foods_calories=? , foods_fiber=?, foods_protein=?,  foods_cholestrol=?, foodstypes_id=?, users_id=?"
						  + " WHERE foods_id = ? ";
			  }else{
				  sql = "INSERT INTO Foods "
						  + " (updated_at, foods_name, foods_calories, foods_fiber, foods_protein, foods_cholestrol, foodstypes_id, users_id ) "
						  + "VALUES ( NOW(), ?, ?, ?, ?, ?, ?,  ? ) ";				
			  }

        conn.query(sql, [ row.foods_name, row.foods_calories, row.foods_fiber, row.foods_protein, row.foods_cholestrol, row.foodstypes_id, row.users_id, row.foods_id],function(err,data){
          if(!err && !row.foods_id){
            row.foods_id = data.insertId;
          }
                  console.log(row)

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

function GetConnection(){
        var conn = mysql.createConnection({
          host: "localhost",
          user: "anthonybjturner",
          password: "",
          database: "turnera1_db"
        });
    return conn;
}
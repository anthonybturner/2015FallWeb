var global = require("../inc/global");

module.exports =  {
    blank: function(){ return {} },
    
    get: function(id, ret){
        var conn = global.GetConnection();
        var sql = "SELECT u.Name as FriendName, u.Avatar from  2015Fall_Users u inner join 2015Fall_Friends f on f.Friend_id=u.id";
        if(id){
          sql += "  Where f.Users_id = 1"
        }
        conn.query(sql, function(err,rows){
          ret(err,rows);
          conn.end();
        });        
    },
    delete: function(id, ret){
        var conn = global.GetConnection();
        conn.query("DELETE FROM 2015Fall_Friends WHERE id = " + id, function(err,rows){
          ret(err);
          conn.end();
        });        
    },
    save: function(row, ret){
        var sql;
        var conn = global.GetConnection();
        //  TODO Sanitize
        if (row.id) {
				  sql = " Update 2015Fall_Friends "
							+ " Set updated_at= NOW(), Name=?, Minutes=? , Calories_Burned=?, Users_id=1, 2015Fall_ExcerciseTypes_id=?"
						  + " WHERE id = ? ";
			  }else{
				  sql = "INSERT INTO 2015Fall_Friends "
						  + " (created_at, updated_at, Name, Minutes, Calories_Burned, Users_id, 2015Fall_ExcerciseTypes_id) "
						  + "VALUES (CURDATE(), NOW(), ?, ?, ?, 1, 1 ";				
			  }

        conn.query(sql, [ row.Name, row.Calories, row.Fiber, row.Protein, row.Carbohydrates, row.Cholestrol, row.MealTypes_id, row.id],function(err,data){
          if(!err && !row.id){
            row.id = data.insertId;
          }
          ret(err, row);
          conn.end();
        });        
    },
    validate: function(row){
      var errors = {};
      
      if(!row.Name) errors.Name = "is required"; 
      
      return errors.length ? errors : false;
    }
};  

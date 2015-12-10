var global = require("../inc/global");

module.exports =  {
    blank: function(){ return {} },
    
    get: function(id, ret){
        var conn = global.GetConnection();
        var sql = "SELECT * from Users u inner join Friends f on f.friends_user_id=u.users_id";
        if(id){
          sql += "  Where f.users_id = "+ id;
        }
        conn.query(sql, function(err,rows){
          ret(err,rows);
          conn.end();
        });        
    },
    delete: function(id, ret){
        var conn = global.GetConnection();
        conn.query("DELETE FROM Friends WHERE id = " + id, function(err,rows){
          ret(err);
          conn.end();
        });        
    },
    save: function(row, ret){
        var sql;
        var conn = global.GetConnection();
         console.log(row)
        //  TODO Sanitize
        if (row.id) {
				  sql = " Update Friends "
							+ " Set updated_at= NOW(), friends_user_id=?, users_id=?"
						  + " WHERE friends_id = ? ";
			  }else{
				  sql = "INSERT INTO Friends "
						  + " ( updated_at, friends_user_id, users_id) "
						  + "VALUES (NOW(), ?, ? ";				
			  }
        console.log(row)
        conn.query(sql, [ row.friends_user_id, row.users_id, row.friends_id],function(err,data){
          if(!err && !row.friends_id){
            row.friends_id = data.insertId;
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

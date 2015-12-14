var global = require("../inc/global");

module.exports =  {
    blank: function(){ return {} },
    
    get: function(id, ret){
        var conn = global.GetConnection();
        
        if(id){
          var sql = "SELECT * from Users u inner join Friends f on f.friends_user_id=u.users_id";
          
            sql += "  Where f.users_id = "+ id;
                      console.log(sql)

             conn.query(sql, function(err,rows){
          
            ret(err,rows);
            conn.end();
          });   
             
        }else{
          var err = {"code": "no friends"};
          ret(err, null);
        }
        
       
            
    },
    delete: function(row, ret){
        var conn = global.GetConnection();
        var sql = "DELETE FROM Friends WHERE friends_user_id = " + row.friends_user_id + " and users_id=" + row.users_id;
        
        conn.query(sql, function(err,rows){
          console.log(err)
          ret(err);
          conn.end();
        });        
    },
    save: function(row, ret){
        var sql;
        var conn = global.GetConnection();
        
        //  TODO Sanitize
        if (row.id) {
				  sql = " Update Friends "
							+ " Set updated_at= NOW(), friends_user_id=?, users_id=?"
						  + " WHERE friends_id = ? ";
			  }else{
				  sql = "INSERT INTO Friends "
						  + " ( created_at, updated_at, friends_user_id, users_id) "
						  + "VALUES (NOW(), NOW(), ?, ?) ";				
			  }
        console.log(row)
        conn.query(sql, [ row.friends_user_id, row.users_id, row.friends_id],function(err,data){
          console.log(sql)
          if(!err && !row.friends_id){
            row.friends_id = data.insertId;
          }
          ret(err, row);
          conn.end();
        });        
    },
    validate: function(row){
      var errors = {};
      
      if(!row.users_id) errors.Name = "is required"; 
      
      return errors.length ? errors : false;
    }
};  

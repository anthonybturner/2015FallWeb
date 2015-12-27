var global = require("../inc/global");
module.exports =  {
    blank: function(){ return {} },
    get: function(id, ret, searchType){
      
        var conn = global.GetConnection();
        var sql = 'SELECT * FROM Users ';
        
        if(id){
          switch (searchType) {
            
            case 'facebook':
              
              sql += " WHERE facebook_id = " + id;
              break;
              
              case 'users':
              
              sql += " WHERE users_name like '%" + id +"%'";
              
              break;
            
            default:
              sql += " WHERE users_id = " + id;
          }
        }
        
       
        conn.query(sql, function(err,rows){
          
          ret(err,rows);
          conn.end();
        });        
    },
    delete: function(id, ret){
        var conn = global.GetConnection();
        conn.query("DELETE FROM Users WHERE users_id = " + id, function(err,rows){
          ret(err);
          conn.end();
        });        
    },
    save: function(row, ret){
        var sql;
        var conn = global.GetConnection();
        //  TODO Sanitize
        if (row.users_id) {
          
				  sql = " Update Users "
							+ " Set updated_at=NOW(), users_name=?, users_age=? , users_height=? , users_weight=?, users_avatar=?,users_email=?, facebook_id=?"
						  + " WHERE users_id = ? ";
						  
			  }else{
			    
			   
				  sql = "INSERT INTO Users "
						  + " (created_at, users_name, users_age, users_height, users_weight, users_avatar, users_email, facebook_id ) "
						  + "VALUES (NOW(),?, ?, ?, ?, ?, ?, ? ) ";				
			  }
		
        conn.query(sql, [row.users_name, row.users_age, row.users_height, row.users_weight, row.users_avatar, row.users_email, row.facebook_id,  row.users_id],function(err,data){
         
          if(!err && !row.users_id){
            row.users_id = data.insertId;
          }
          
          ret(err, row);
          conn.end();
        });        
    },
    validate: function(row){
      var errors = {};
      
      if(!row.users_name) errors.Name = "is required"; 
      
      return errors.length ? errors : false;
    }
};  

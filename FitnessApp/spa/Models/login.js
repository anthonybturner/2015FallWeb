var global = require("../inc/global");
module.exports =  {
    blank: function(){ return {} },
    get: function(id, ret){
        var conn = global.GetConnection();
        var sql = 'SELECT * FROM Users ';

        sql+= " order by users_id desc"
        conn.query(sql, function(err,rows){


          ret(err,rows[0]);
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
        if (row.id) {
				  sql = " Update Users "
							+ " Set users_name=?, users_age=? , users_height=? , users_weight=?, users_avatar=?, users_status='offline'"
						  + " WHERE users_id = ? ";
			  }else{
				  sql = "INSERT INTO Users "
						  + " (users_name, users_age, users_height, users_weight, users_avatar, users_status ) "
						  + "VALUES (?, ?, ?, ?, ?, 'offline' ) ";				
			  }

        conn.query(sql, [row.users_name, row.users_age, row.users_height, row.users_weight, row.users_avatar, row.users_id],function(err,data){
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
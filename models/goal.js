var global = require("../inc/global");
module.exports =  {
  
    blank: function(){ return {} },
    
    get: function(id, ret){
        var conn = global.GetConnection();
        var sql = 'SELECT * FROM Goals';
        if(id){
          sql += " WHERE goals_id = " + id;
        }
        
        conn.query(sql, function(err,rows){
          ret(err,rows);
          conn.end();
        });        
    },getByDate: function(row, ret){
        var conn = global.GetConnection();
        var sql = "SELECT * FROM Goals WHERE users_id = " + row[0] + " and created_at like '%"+row[1]+"%'";
        
        
        conn.query(sql, function(err,rows){
          ret(err,rows);
          conn.end();
        });        
    },getByUserId: function(id, ret){
        var conn = global.GetConnection();
        var sql = 'SELECT * FROM Goals';
        if(id){
          sql += " WHERE users_id = " + id;
        }
        conn.query(sql, function(err,rows){
          ret(err,rows);
          conn.end();
        });        
    }, 
    delete: function(id, ret){
        var conn = global.GetConnection();
       
        conn.query("DELETE FROM Goals WHERE goals_id = " + id, function(err,rows){
          ret(err);
          conn.end();
        });        
    },
    save: function(row, ret){

        var sql;
        var conn = global.GetConnection();

        //  TODO Sanitize
        if (row.goals_id) {
				  sql = " Update Goals "
							+ " Set created_at=?, goals_name=?, goals_percentage_complete=? , goals_accomplished=?, users_id=?"
						  + " WHERE goals_id = ? ";
			  }else{
				  sql = "INSERT INTO Goals "
						  + " (created_at, goals_name, goals_percentage_complete, goals_accomplished, users_id ) "
						  + "VALUES (?, ?, ?, ?, ? ) ";				
			  }
			  
			  console.log(row)
        conn.query(sql, [row.created_at, row.goals_name, row.goals_percentage_complete, row.goals_accomplished, row.users_id, row.goals_id],function(err,data){
          console.log(err)
          if(!err && !row.goals_id){
            row.goals_id = data.insertId;
          }
          ret(err, row);
          conn.end();
        });        
    },
    validate: function(row){
      var errors = {};
      
      if(!row.goals_name) errors.Name = "is required"; 
      
      return errors.length ? errors : false;
    }
};  

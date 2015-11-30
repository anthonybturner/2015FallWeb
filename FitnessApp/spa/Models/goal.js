var mysql = require("mysql");

module.exports =  {
  
    blank: function(){ return {} },
    
    get: function(id, ret){
        var conn = GetConnection();
        var sql = 'SELECT * FROM Goals';
        if(id){
          sql += " WHERE goals_id = " + id;
        }
        
        conn.query(sql, function(err,rows){
          ret(err,rows);
          conn.end();
        });        
    }, getByUserId: function(id, ret){
        var conn = GetConnection();
        var sql = 'SELECT * FROM Goals';
        if(id){
          sql += " WHERE users_id = " + id;
        }
        console.log(sql)
        conn.query(sql, function(err,rows){
          ret(err,rows);
          conn.end();
        });        
    }, 
    delete: function(id, ret){
        var conn = GetConnection();
       
        conn.query("DELETE FROM Goals WHERE goals_id = " + id, function(err,rows){
          ret(err);
          conn.end();
        });        
    },
    save: function(row, ret){
      console.log(row)
        var sql;
        var conn = GetConnection();
        //  TODO Sanitize
        if (row.goals_id) {
				  sql = " Update Goals "
							+ " Set goals_name=?, goals_percentage_complete=? , goals_accomplished=?, users_id=?"
						  + " WHERE goals_id = ? ";
			  }else{
				  sql = "INSERT INTO Goals "
						  + " (goals_name, goals_percentage_complete, goals_accomplished, users_id ) "
						  + "VALUES (?, ?, ?, ? ) ";				
			  }
        console.log(row)
        conn.query(sql, [row.goals_name, row.goals_percentage_complete, row.goals_accomplished, row.users_id, row.goals_id],function(err,data){
          
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

function GetConnection(){
        var conn = mysql.createConnection({
          host: "localhost",
          user: "anthonybjturner",
          password: "",
          database: "turnera1_db"
        });
    return conn;
}
var mysql = require("mysql");

module.exports =  {
  
    blank: function(){ return {} },
    
    get: function(id, ret){
        var conn = GetConnection();
        var sql = 'SELECT * FROM 2015Fall_Goals';
        if(id){
          sql += " WHERE id = " + id;
        }
        
        conn.query(sql, function(err,rows){
          ret(err,rows);
          conn.end();
        });        
    }, getByUserId: function(id, ret){
        var conn = GetConnection();
        var sql = 'SELECT * FROM 2015Fall_Goals';
        if(id){
          sql += " WHERE Users_id = " + id;
        }
        console.log(sql)
        conn.query(sql, function(err,rows){
          ret(err,rows);
          conn.end();
        });        
    }, 
    delete: function(id, ret){
        var conn = GetConnection();
       
        conn.query("DELETE FROM 2015Fall_Goals WHERE id = " + id, function(err,rows){
          ret(err);
          conn.end();
        });        
    },
    save: function(row, ret){
      console.log(row)
        var sql;
        var conn = GetConnection();
        //  TODO Sanitize
        if (row.id) {
				  sql = " Update 2015Fall_Goals "
							+ " Set Name=?, PercentageComplete=? , Accomplished=?, Users_id=?"
						  + " WHERE id = ? ";
			  }else{
				  sql = "INSERT INTO 2015Fall_Goals "
						  + " (Name, PercentageComplete, Accomplished, Users_id ) "
						  + "VALUES (?, ?, ?, ? ) ";				
			  }
        console.log(sql)
        conn.query(sql, [row.Name, row.PercentageComplete, row.Accomplished, row.UsersId, row.id],function(err,data){
          
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

function GetConnection(){
        var conn = mysql.createConnection({
          host: "localhost",
          user: "anthonybjturner",
          password: "",
          database: "turnera1_db"
        });
    return conn;
}
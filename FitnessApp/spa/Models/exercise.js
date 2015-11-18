var mysql = require("mysql");

module.exports =  {
    blank: function(){ return {} },
    
    get: function(id, ret){
        var conn = GetConnection();
        var sql = "SELECT m.updated_at,m.created_at, m.Name, m.id, m.Calories_Burned, m.Users_id, m.2015Fall_ExcerciseTypes_id, mt.id as ExerciseType_Id, mt.Name as ExerciseName FROM 2015Fall_Exercises m left join 2015Fall_ExcerciseTypes mt on mt.id=m.2015Fall_ExcerciseTypes_id ";
        if(id){
          sql += " WHERE m.id = " + id;
        }
        conn.query(sql, function(err,rows){
          ret(err,rows);
          conn.end();
        });        
    },
    delete: function(id, ret){
        var conn = GetConnection();
        conn.query("DELETE FROM 2015Fall_Exercises WHERE id = " + id, function(err,rows){
          ret(err);
          conn.end();
        });        
    },
    save: function(row, ret){
        var sql;
        var conn = GetConnection();
        //  TODO Sanitize
        if (row.id) {
				  sql = " Update 2015Fall_Exercises "
							+ " Set updated_at= NOW(), Name=?, Minutes=? , Calories_Burned=?, Users_id=1, 2015Fall_ExcerciseTypes_id=?"
						  + " WHERE id = ? ";
			  }else{
				  sql = "INSERT INTO 2015Fall_Exercises "
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

function GetConnection(){
        var conn = mysql.createConnection({
          host: "localhost",
          user: "anthonybjturner",
          password: "",
          database: "turnera1_db"
        });
    return conn;
}
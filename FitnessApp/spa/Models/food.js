var mysql = require("mysql");

module.exports =  {
    blank: function(){ return {} },
    
    get: function(id, ret){
        var conn = GetConnection();
        var sql = "SELECT m.Name, m.id, m.Calories, m.Carbohydrates, m.Fiber, m.Protein, m.Cholestrol, m.Users_id, mt.id as MealType_Id, mt.MealType FROM 2015Fall_Meals m left join 2015Fall_MealTypes mt on mt.id=m.2015Fall_MealTypes_id ";
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
        conn.query("DELETE FROM 2015Fall_Meals WHERE id = " + id, function(err,rows){
          ret(err);
          conn.end();
        });        
    },
    save: function(row, ret){
        var sql;
        var conn = GetConnection();
        //  TODO Sanitize
        if (row.id) {
				  sql = " Update 2015Fall_Meals "
							+ " Set Name=?, Calories=? , 2015Fall_MealTypes_id=?, Users_id=1"
						  + " WHERE id = ? ";
			  }else{
				  sql = "INSERT INTO 2015Fall_Meals "
						  + " (Name, Calories, 2015Fall_MealTypes_id, Users_id ) "
						  + "VALUES (?, ?, ?, 1 ) ";				
			  }

        conn.query(sql, [row.Name, row.Calories, row.MealTypes_id, row.id],function(err,data){
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
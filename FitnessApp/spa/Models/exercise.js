var global = require("../inc/global");

module.exports =  {
    blank: function(){ return {} },
    
    get: function(id, ret){
        var conn = global.GetConnection();
       var sql = "SELECT * FROM Exercises exercises left join ExercisesTypes exercisesTypes on exercisesTypes.exercisestypes_id=exercises.exercisestypes_id ";
        if(id){
          sql += " WHERE exercises.exercises_id = " + id;
        }
        conn.query(sql, function(err,rows){
          ret(err,rows);
          conn.end();
        });        
    },
    getByUserId: function(id, ret){
        var conn = global.GetConnection();
        var sql = "SELECT * FROM Exercises exercises left join ExercisesTypes exercisesTypes on exercisesTypes.exercisestypes_id=exercises.exercisestypes_id ";
        if(id){
          sql += " WHERE exercises.users_id = " + id;
        }
        conn.query(sql, function(err,rows){

          ret(err,rows);
          conn.end();
        });        
    },
    delete: function(id, ret){
        var conn = global.GetConnection();
        conn.query("DELETE FROM Exercises WHERE exercises_id = " + id, function(err,rows){
          ret(err);
          conn.end();
        });        
    },
    save: function(row, ret){
        var sql;
        var conn = global.GetConnection();
        //  TODO Sanitize
        if (row.exercises_id) {
				  sql = " Update Exercises "
							+ " Set updated_at= NOW(), exercises_name=?, exercises_minutes=? , exercises_calories_burned=?, users_id=?, exercisestypes_id=?"
						  + " WHERE exercises_id = ? ";
			  }else{
				  sql = "insert into Exercises "
						  + "(updated_at, exercises_name, exercises_minutes, exercises_calories_burned, users_id, exercisestypes_id) "
						  + "values (NOW(), ?, ?, ?, ?, ?) ";				
			  }
        console.log(row)
        conn.query(sql, [ row.exercises_name, row.exercises_minutes, row.exercises_calories_burned, row.users_id, row.exercisestypes_id, row.exercises_id],function(err,data){
          if(!err && !row.exercises_id){
            row.exercises_id = data.insertId;
          }
          console.log(err)
          ret(err, row);
          conn.end();
        });        
    },
    validate: function(row){
      var errors = {};
      
      if(!row.exercises_name) errors.Name = "is required"; 
      
      return errors.length ? errors : false;
    }
};  

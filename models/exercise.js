var global = require("../inc/global");

module.exports =  {
    blank: function(){ return {} },
    
    get: function(id, ret){
      
        var conn = global.GetConnection();
       var sql = "SELECT exercises.exercises_id,  exercises.exercises_name, exercises.exercises_minutes, exercises.exercises_calories_burned,  exercises.users_id,et.exercisestypes_id FROM Exercises exercises left join ExercisesTypes et on et.exercisestypes_id=exercises.exercisestypes_id ";
        if(id){
          sql += " WHERE exercises.users_id = " + id;
        }
        conn.query(sql, function(err,rows){
        
          ret(err,rows);
          conn.end();
        });        
    },getByDate: function(row, ret){
        var conn = global.GetConnection();
        var sql = "SELECT exercises.updated_at, exercises.exercises_id, exercises.exercises_name, exercises.exercises_minutes, exercises.exercises_calories_burned, exercises.exercisestypes_id, exercises.users_id, DATE_FORMAT(exercises.created_at,'%b %d %Y %h:%i %p') as created_at "+
        "FROM Exercises exercises left join ExercisesTypes exercisesTypes on exercisesTypes.exercisestypes_id=exercises.exercisestypes_id "+
        "WHERE exercises.users_id = " + row[0] + " and exercises.created_at like '%"+row[1]+"%'";
        
        
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
    },search: function(row, ret, searchType){
      
        var conn = global.GetConnection();
    var sql = 'SELECT exercises.exercises_id,  exercises.exercises_name, exercises.exercises_minutes, exercises.exercises_calories_burned,  exercises.users_id,et.exercisestypes_id FROM Exercises exercises left join ExercisesTypes et on et.exercisestypes_id=exercises.exercisestypes_id ';

       
        if(row.term){
          
        
            switch (searchType) {
             
              case 'search':

              sql += " WHERE exercises.users_id="+row.users_id+" and exercises.exercises_name like '%" + row.term +"%' LIMIT 10";
              
              break;
            
              
                }
        }
          
          
        console.log(sql)
        
        conn.query(sql, function(err,rows){
          console.log(rows)
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
							+ " Set created_at=?, updated_at= NOW(), exercises_name=?, exercises_minutes=? , exercises_calories_burned=?, users_id=?, exercisestypes_id=?"
						  + " WHERE exercises_id = ? ";
			  }else{
				  sql = "insert into Exercises "
						  + "(created_at, updated_at, exercises_name, exercises_minutes, exercises_calories_burned, users_id, exercisestypes_id) "
						  + "values (?, NOW(), ?, ?, ?, ?, ?) ";				
			  }

        conn.query(sql, [ row.created_at, row.exercises_name, row.exercises_minutes, row.exercises_calories_burned, row.users_id, row.exercisestypes_id, row.exercises_id],function(err,data){
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

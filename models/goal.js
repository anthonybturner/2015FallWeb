var global = require("../inc/global");
module.exports =  {
  
    blank: function(){ return {} },
    
    get: function(id, ret, searchType){
      
        var conn = global.GetConnection();
       var sql = 'SELECT * FROM Goals';

        if(id){
          
        
            switch (searchType) {
             
              case 'search':
              sql += " WHERE goals_name like '%" + id +"%' LIMIT 10";
              break;
              
              case 'users id':
              sql += " WHERE users_id = "+id;
              break;
              
              case 'count':
              sql = "select count(*) as TotalGoals FROM Goals WHERE goals_accomplished <> 'Yes' and users_id = "+id;
              break;
            
              default:
                sql += " WHERE goals_id = " + id;
            }
          
          }
          
                        console.log(sql)

        
        
        conn.query(sql, function(err,rows){
          ret(err,rows);
          conn.end();
        });        
    },getByDate: function(row, ret){
      
        var conn = global.GetConnection();
        var sql = "SELECT * , DATE_FORMAT(created_at,'%b %d %Y %h:%i %p') as created_at FROM Goals WHERE users_id = " + row[0] + " and created_at like '%"+row[1]+"%'";
        
        
        conn.query(sql, function(err,rows){
          ret(err,rows);
          conn.end();
        });        
    },getWeekTotals: function(row, ret){
      
        var conn = global.GetConnection();
        var sql = "select "+
      "(select distinct count(goals.goals_accomplished) FROM Goals goals "+
      	"where goals.goals_accomplished='Yes' and goals.created_at BETWEEN '" + row.start_date+ "' AND '" + row.end_date + "' and goals.users_id="+row.users_id+") as TotalAccomplishedGoals, "+ 
      "(select distinct (count(goals.goals_accomplished)/count(g.goals_id))*100 FROM Goals goals "+
      	"where goals.goals_accomplished='Yes' and goals.created_at BETWEEN '"+row.start_date+ "' and '" + row.end_date + "' and goals.users_id="+row.users_id+") as TotalAccomplishedGoalsPerc, "+ 
      "count(g.goals_id) as TotalGoals "+
      "FROM Goals g "+
      	"where g.users_id="+row.users_id+" and g.created_at BETWEEN '"+ row.start_date + "' and '" +row.end_date+"'";
        
        conn.query(sql, function(err,rows){
          ret(err,rows);
          conn.end();
        });        
    }
    ,getByUserId: function(id, ret){
        var conn = global.GetConnection();
        var sql = 'SELECT * FROM Goals';
        if(id){
          sql += " WHERE users_id = " + id;
        }
        conn.query(sql, function(err,rows){
          ret(err,rows);
          conn.end();
        });        
    }, search: function(row, ret, searchType){
      
        var conn = global.GetConnection();
    var sql = 'SELECT * FROM Goals';

       
        console.log("in goal model")
        if(row.term){
          
        
            switch (searchType) {
             
              case 'search':

              sql += " WHERE users_id="+row.users_id+" and  goals_name like '%" + row.term +"%' LIMIT 10";
              
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
       
        conn.query("DELETE FROM Goals WHERE goals_id = " + id, function(err,rows){
          ret(err);
          conn.end();
        });        
    },
    save: function(row, ret){

        var sql, rows;
        var conn = global.GetConnection();

        //  TODO Sanitize
        if (row.goals_id) {
				  sql = " Update Goals "
							+ " Set updated_at=NOW(), goals_name=?, goals_percentage_complete=? , goals_accomplished=?, users_id=?"
						  + " WHERE goals_id = ? ";
						   rows = [  row.goals_name, row.goals_percentage_complete, row.goals_accomplished, row.users_id, row.goals_id]
			  }else{
				  sql = "INSERT INTO Goals "
						  + " (created_at, goals_name, goals_percentage_complete, goals_accomplished, users_id ) "
						  + "VALUES (?, ?, ?, ?, ? ) ";				
						   rows =[ row.created_at, row.goals_name, row.goals_percentage_complete, row.goals_accomplished, row.users_id, row.goals_id]
			  }
			  
        conn.query(sql, rows,function(err,data){
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

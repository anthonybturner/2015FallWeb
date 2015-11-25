var express = require('express'),   app = express();

var bodyParser = require('body-parser');
var goal = require("./Models/goal");
var user = require("./Models/user");
var food = require("./Models/food");
var exercise = require("./Models/exercise");
var friend = require("./Models/friend");


app.use(express.static(__dirname+'/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/food", function(req, res){
  
  food.get(null, function(err, rows){
    res.send(rows);
  })
    
})
.get("/food/:id", function(req, res){
  
  food.get(req.params.id, function(err, rows){
    res.send(rows[0]);
  })
  
})
.post("/food", function(req, res){
  var errors = food.validate(req.body);
  if(errors){
    res.status(500).send(errors);
    return;
  }
  food.save(req.body, function(err, row){
    res.send(row);
  })
})
.delete("/food/:id", function(req, res){
  
  food.delete(req.params.id, function(err, rows){
      if(err){
        res.status(500).send(err);
      }else{
        res.send(req.params.id);
      }
  })
  
}).get("/exercise", function(req, res){
  
  exercise.get(null, function(err, rows){
    res.send(rows);
  })
    
})
.get("/exercise/:id", function(req, res){
  
  exercise.get(req.params.id, function(err, rows){
    res.send(rows[0]);
  })
  
})
.post("/exercise", function(req, res){
  var errors = exercise.validate(req.body);
  if(errors){
    res.status(500).send(errors);
    return;
  }
  exercise.save(req.body, function(err, row){
    res.send(row);
  })
})
.delete("/exercise/:id", function(req, res){
  
  exercise.delete(req.params.id, function(err, rows){
      if(err){
        res.status(500).send(err);
      }else{
        res.send(req.body.params.id);
      }
  })
  
})
.get("/user", function(req, res){
     console.log(req.query.id);
     if( req.query.id ){
       
       user.get(req.query.id, function(err, rows){
       
          res.send(rows[0]);
        
       })
      
     }else{
      
        user.get(null, function(err, rows){
          res.send(rows);
        })
     }
})
.get("/user/:id", function(req, res){
  console.log("called")
  user.get(req.params.id, function(err, rows){
    res.send(rows[0]);
  })
  
})
.post("/user", function(req, res){
  var errors = user.validate(req.body);
  if(errors){
    res.status(500).send(errors);
    return;
  }
  user.save(req.body, function(err, row){
    res.send(row);
  })
})
.delete("/user/:id", function(req, res){
  
  user.delete(req.params.id, function(err, rows){
      if(err){
        res.status(500).send(err);
      }else{
        res.send(req.params.id);
      }
  })
  
}).get("/friend", function(req, res){
  
  friend.get(null, function(err, rows){
    res.send(rows);
  })
    
})
.get("/friend/:id", function(req, res){
  
  friend.get(req.params.id, function(err, rows){
    res.send(rows[0]);
  })
  
}).get("/goal", function(req, res){
     console.log(req.query.id);
     if( req.query.id ){
       
       goal.get(req.query.id, function(err, rows){
       
          res.send(rows[0]);
        
       })
      
     }else{
      
        goal.get(null, function(err, rows){
          res.send(rows);
        })
     }
})
.get("/goal/:id", function(req, res){
  console.log("called")
  goal.get(req.params.id, function(err, rows){
    res.send(rows[0]);
  })
  
})
.post("/goal", function(req, res){
  
  var errors = goal.validate(req.body);
  
  if(errors){
    
    res.status(500).send(errors);
    return;
  }
  
  goal.save(req.body, function(err, row){
    
    res.send(row);
    
  })
  
})
.delete("/goal/:id", function(req, res){
  
  goal.delete(req.params.id, function(err, rows){
      if(err){
        res.status(500).send(err);
      }else{
        res.send(req.params.id);
      }
  })
})
  


app.listen(process.env.PORT);
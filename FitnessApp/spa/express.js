var express = require('express'),   app = express();

var bodyParser = require('body-parser');
var user = require("./Models/user");
var food = require("./Models/food");

app.use(express.static(__dirname+'/public'));

app.use(bodyParser.urlencoded({ extended: false }));

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
  user.save(req.body, function(err, row){
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
  
})
.get("/user", function(req, res){
  
  user.get(null, function(err, rows){
    res.send(rows);
  })
    
})
.get("/user/:id", function(req, res){
  
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
  
})


app.listen(process.env.PORT);
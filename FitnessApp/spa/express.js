var express = require('express'),   app = express();

var bodyParser = require('body-parser');
var goal = require("./Models/goal");
var user = require("./Models/user");
var food = require("./Models/food");
var exercise = require("./Models/exercise");
var friend = require("./Models/friend");
var login = require("./Models/login");
var unirest = require("unirest");
var Twit = require("twit");

//var twit = new Twit();
//https://market.mashape.com/msilverman/nutritionix-nutrition-database
//http://unirest.io/nodejs

var twit = new Twit({
    consumer_key:         'aSfk6iHFWusKo37mUoNBNaaSL'
  , consumer_secret:      'rFTNvG6WuK2hLuG4rUxRqfPuPXZAsEiIQF6R2DEE75e0FpFRQy'
  , access_token:         '401096761-taetwuKu7xVz1Our0yuTxILvEVmmNfjdWztpv3Hu'
  , access_token_secret:  'YllZIT7uJ2LSndvNIeyNECWMg90bGf4ZZEkaRL1eOsJlH'
})

app.use(express.static(__dirname+'/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/food", function(req, res){
  

    if( req.query.users_id){
       food.getByUserId(req.query.users_id, function(err, rows){
         res.send(rows);
       })
    }else{
        food.get(null, function(err, rows){
         res.send(rows);
       })
  
    }
  
    
})
.get("/food/:id", function(req, res){
 
      food.get(req.params.id, function(err, rows){
        res.send(rows);
      })

})
.post("/food", function(req, res){
  var errors = food.validate(req.body);
  if(errors){
    res.status(500).send(errors);
    return;
  }
 
  food.save(req.body, function(err, row){
    
    if(err){
     var errors = {"code": err.code, "msg": "Error saving: " + row.Name};
      res.status(500).send(errors); 
    }else{
      
       res.send(row);
    }
   
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
  
    if( req.query.users_id){

       exercise.getByUserId(req.query.users_id, function(err, rows){
         
         res.send(rows);
       })
    }
  
    
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
  
  //twit.post('statuses/update', { status: '[App developers test-] I just accomplished ' + req.body.exercises_minutes + ' minutes with ' + req.body.exercises_name + ' and burned ' + req.body.exercises_calories_burned + ' calories' }, function(err, data, response) {
      //console.log(data)
    //})
  
  
  exercise.save(req.body, function(err, row){
    res.send(row);
  })
})
.delete("/exercise/:id", function(req, res){
  
  exercise.delete(req.params.id, function(err, rows){
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
.get("/fbuser/:access_token", function(req, res){
    unirest.get("https://graph.facebook.com/me?access_token=" + req.params.access_token + "&fields=id,name,email")
    .end(function (result) {
        res.send(result.body);
    });
})
.get("/friend", function(req, res){
  
  friend.get(null, function(err, rows){
    res.send(rows);
  })
    
})
.get("/goal", function(req, res){
  
  if( req.query.users_id){

    goal.getByUserId(req.query.users_id, function(err, rows){
    res.send(rows);
  })
  
  }
  
    
}).get("/goal/:id", function(req, res){

  goal.get(req.params.id, function(err, rows){
    res.send(rows);
  })
  
})
.post("/goal", function(req, res){
  
  var errors = goal.validate(req.body);
  if(errors){
    
    res.status(500).send(errors);
    return;
  }
  
  goal.save(req.body, function(err, row){
    
      if(err){
        res.status(500).send(err);
        return;
      }
      
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
.get("/login", function(req, res){
     
      
        login.get(null, function(err, row){

          res.send(row);
        })
     
})
.get("/login/:id", function(req, res){
 
 
  login.get(req.params.id, function(err, rows){
    res.send(rows[0]);
  })
  
})
.post("/login", function(req, res){
  var errors = login.validate(req.body);
  if(errors){
    res.status(500).send(errors);
    return;
  }
  login.save(req.body, function(err, row){
    res.send(row);
  })
})
.get("/food/search/:term", function(req, res){
    unirest.get("https://nutritionix-api.p.mashape.com/v1_1/search/" + req.params.term + "?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat")
    .header("X-Mashape-Key", "qYpiKTaB8emshjm5EVuKkQwT8pLfp1L1LAdjsncmdtXipZViyv")
    .header("Accept", "application/json")
    .end(function (result) {
      
        res.send(result.body);
    });
    
})


  


app.listen(process.env.PORT);
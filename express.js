var express = require('express'),
  app = express();

//Express middleware
var bodyParser = require('body-parser');
var session = require('express-session')
var cookieParser = require('cookie-parser'); // the session is stored in a cookie, so we use this to parse it

//Models
var goal = require("./models/goal");
var user = require("./models/user");
var food = require("./models/food");
var exercise = require("./models/exercise");
var friend = require("./models/friend");
var login = require("./models/login");


var unirest = require("unirest");
var global = require("./inc/global");
var twit = global.GetTwitterConnection();
//https://market.mashape.com/msilverman/nutritionix-nutrition-database
//http://unirest.io/nodejs
//https://www.npmjs.com/package/express-session
//redis.io

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  httpOnly: false
}))

app.use(function(req, res, next) {
  var fbUser = req.session.fbUser;

  if (!fbUser) {
    fbUser = req.session.fbUser = null;
  }


  next()

})
app.get("/food", function(req, res) {


    if (req.query.users_id) {

      food.getByUserId(req.query.users_id, function(err, rows) {
        res.send(rows);
      })

    }
    else if (req.session.fbUser) {

      var row = [req.session.fbUser.users_id, req.query.created_at];

      food.getByDate(row, function(err, rows) {

        res.send(rows);

      });

    }

  })
  .get("/food/:id", function(req, res) {

    food.get(req.params.id, function(err, rows) {
      res.send(rows);
    })

  })
  .post("/food", function(req, res) {
    var errors = food.validate(req.body);
    if (errors) {
      res.status(500).send(errors);
      return;
    }
    req.body.users_id = req.session.fbUser.users_id;

    food.save(req.body, function(err, row) {

      if (err) {
        var errors = {
          "code": err.Error,
          "msg": err
        };
        res.status(500).send(errors);
      }
      else {

        res.send(row);
      }

    })
  })
  .delete("/food/:id", function(req, res) {

    food.delete(req.params.id, function(err, rows) {
      if (err) {
        res.status(500).send(err);
      }
      else {
        res.send(req.params.id);
      }
    })

  }).get("/food/search/:term", function(req, res) {



    unirest.get("https://nutritionix-api.p.mashape.com/v1_1/search/" + req.params.term + "?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat%2Cnf_ingredien%2Ct_statement%2Cnf_sodium%2Cnf_cholesterol%2Cnf_polyunsaturated_fat%2Cnf_total_carbohydrate%2Cnf_dietary_fiber%2C+nf_monounsaturated_fat%2Cnf_protein")
      .header("X-Mashape-Key", "qYpiKTaB8emshjm5EVuKkQwT8pLfp1L1LAdjsncmdtXipZViyv")
      .header("Accept", "application/json")
      .end(function(result) {

        res.send(result.body);
      });

  }).get("/food/search/local/:term", function(req, res) {


  
    var row = {
      users_id: req.session.fbUser.users_id,
      term: req.params.term
    };

    food.search(row, function(err, rows) {

      res.send(rows);


    }, 'search');

  }).get("/foodWeekTotals", function(req, res) {//Get food totals by a weekly date range

   if (req.session && req.session.fbUser) {

      var row = {
        
        users_id: req.session.fbUser.users_id,
        start_date : req.query.start_date,
        end_date: req.query.end_date
        
      };

      food.getWeekTotals(row, function(err, rows) {
 
        res.send(rows);

      });

    }

  }).get("/exercise", function(req, res) {



    if (req.query.users_id) {

      exercise.getByUserId(req.query.users_id, function(err, rows) {
        res.send(rows);
      })

    }
    else if (req.session.fbUser) {

      var row = [req.session.fbUser.users_id, req.query.created_at];
      exercise.getByDate(row, function(err, rows) {


        res.send(rows);

      });

    }

  })
  .get("/exercise/:id", function(req, res) {

    exercise.get(req.params.id, function(err, rows) {
      res.send(rows);
    })

  })
  .post("/exercise", function(req, res) {
    var errors = exercise.validate(req.body);
    if (errors) {
      res.status(500).send(errors);
      return;
    }
    req.body.users_id = req.session.fbUser.users_id;

    twit.post('statuses/update', {
      status: '[App Developer Test] I just accomplished ' + req.body.exercises_minutes + ' minutes with ' + req.body.exercises_name + ' and burned ' + req.body.exercises_calories_burned + ' calories'
    }, function(err, data, response) {})


    exercise.save(req.body, function(err, row) {
      res.send(row);
    })
  })
  .delete("/exercise/:id", function(req, res) {

    exercise.delete(req.params.id, function(err, rows) {
      if (err) {
        res.status(500).send(err);
      }
      else {

        res.send(req.params.id);
      }
    })

  }).get("/exercise/search/:term", function(req, res) {

    var row = {
      users_id: req.session.fbUser.users_id,
      term: req.params.term
    };
    exercise.search(row, function(err, rows) {

      res.send(rows);


    }, 'search');
  })
  .get("/user", function(req, res) {

    user.get(null, function(err, rows) {
      res.send(rows);
    })

  })
  .get("/user/:id", function(req, res) {

    user.get(req.params.id, function(err, rows) {
      res.send(rows[0]);
    })

  })

.post("/user", function(req, res) {
    var errors = user.validate(req.body);
    if (errors) {
      res.status(500).send(errors);
      return;
    }
    req.body.users_id = req.session.fbUser.users_id;

    user.save(req.body, function(err, row) {
      res.send(row);
    })
  })
  .delete("/user/:id", function(req, res) {

    user.delete(req.params.id, function(err, rows) {
      if (err) {
        res.status(500).send(err);
      }
      else {
        res.send(req.params.id);
      }
    })

  }).get("/user/search/:term", function(req, res) {

    user.get(req.params.term, function(err, rows) {


      res.send(rows);


    }, 'users');
  }).get("/profileuser/:id", function(req, res) {

    if (req.session.fbUser) {
      user.get(req.session.fbUser.users_id, function(err, rows) {
        res.send(rows[0]);
      })
    }

  })
  .get("/friend", function(req, res) {

    if (req.session.fbUser) {
      friend.get(req.session.fbUser.users_id, function(err, rows) {

        if (err) {
          res.status(500).send(err);
          return;
        }
        else {

          res.send(rows);
        }

      })
    }

  }).post("/friend", function(req, res) {

    req.body.users_id = req.session.fbUser.users_id;

    friend.save(req.body, function(err, row) {

      res.send(row);
    })
  })
  .delete("/friend/:id", function(req, res) {
    var row = {
      friends_user_id: req.params.id,
      users_id: req.session.fbUser.users_id
    };
    friend.delete(row, function(err, rows) {
      if (err) {
        res.status(500).send(err);
      }
      else {
        res.send(req.params.id);
      }
    })

  })
  .get("/goal", function(req, res) {


      if( req.session.fbUser ){
        
        if (req.query.created_at ) {
  
          var row = [req.session.fbUser.users_id, req.query.created_at];
  
          goal.getByDate(row, function(err, rows) {
    
            res.send(rows);
    
          });
  
      }else if (req.query.action ) {
        
         goal.get(req.session.fbUser.users_id, function(err, rows) {
        
          res.send(rows);
  
        }, "count");
        
      }else{//Not getting by date. Get by users id
        
        goal.get(req.session.fbUser.users_id, function(err, rows) {
        
          res.send(rows);
  
        }, "users id");
      }
      
    }
   



  }).get("/goalWeekTotals", function(req, res) {//Get goal totals by a weekly date range

   if (req.session && req.session.fbUser) {

      var row = {
        
        users_id: req.session.fbUser.users_id,
        start_date : req.query.start_date,
        end_date: req.query.end_date
        
      };
      
      goal.getWeekTotals(row, function(err, rows) {
  
          res.send(rows);

      });

    }



  }).get("/goal/:id", function(req, res) {


    goal.get(req.params.id, function(err, rows) {
      res.send(rows);
    })

  })
  .post("/goal", function(req, res) {

    var errors = goal.validate(req.body);
    if (errors) {

      res.status(500).send(errors);
      return;
    }

    req.body.users_id = req.session.fbUser.users_id;

    goal.save(req.body, function(err, row) {

      if (err) {
        res.status(500).send(err);
        return;
      }

      res.send(row);
    })
  })
  .delete("/goal/:id", function(req, res) {

    goal.delete(req.params.id, function(err, rows) {
      if (err) {
        res.status(500).send(err);
      }
      else {
        res.send(req.params.id);
      }
    })
  }).get("/goal/search/:term", function(req, res) {

    var row = {
      users_id: req.session.fbUser.users_id,
      term: req.params.term
    };
    goal.search(row, function(err, rows) {

      res.send(rows);


    }, 'search');
  })

.get("/login", function(req, res) {


    res.send({
      "fbUser": req.session.fbUser
    });


  })
  .get("/login/:id", function(req, res) {


    login.get(req.params.id, function(err, rows) {
      res.send(rows[0]);
    })

  })
  .post("/login", function(req, res) {

    var errors = login.validate(req.body);
    if (errors) {
      res.status(500).send(errors);
      return;
    }
    login.save(req.body, function(err, row) {
      res.send(row);
    })
  }).post("/fbLocalLogin", function(req, res) {


    unirest.get("https://graph.facebook.com/me?access_token=" + req.body.facebookUser.access_token + "&fields=id,name,email, birthday")
      .end(function(result) {
        //result.body.user
        var fbUser = req.session.fbUser = JSON.parse(result.body);

        req.session.fbUser.access_token = req.body.access_token;

        user.get(req.body.facebookUser.id, function(err, rows) {

          if (rows && rows.length) { //If we have that user then store there data

            req.session.fbUser = rows[0];
            req.session.save();

          }
          else {

            user.save({
              users_name: req.session.fbUser.name,
              facebook_id: req.session.fbUser.id,
              users_age: req.session.fbUser.birthday,
              users_email: req.session.fbUser.email,
              users_height: null,
              users_weight: null,
              users_avatar: req.session.fbUser.id,
              users_is_facebook_user: 1
            }, function(err, row) {

              req.session.fbUser = row;
              req.session.save();

            })
          }


        }, 'facebook');
        res.send(res.body);

      });




  }).post("/fbLogin", function(req, res) {


    unirest.get("https://graph.facebook.com/me?access_token=" + req.body.access_token + "&fields=id,name,email")
      .end(function(result) {

        //result.body.user
        var fbUser = req.session.fbUser = JSON.parse(result.body);
        req.session.fbUser.access_token = req.body.access_token;

        user.get(req.session.fbUser.id, function(err, rows) {

          if (rows && rows.length) { //If we have that user then store there data

            req.session.fbUser = rows[0];
            req.session.save();

          }
          else {

            user.save({
              users_name: fbUser.name,
              facebook_id: fbUser.id,
              users_age: null,
              users_height: null,
              users_weight: null,
              users_avatar: fbUser.id,
              TypeId: 6
            }, function(err, row) {

              req.session.fbUser = row;
              req.session.save();

            })
          }


        }, 'facebook');

        res.send(result.body);

      });

  })
  .get("/fbuser/:access_token", function(req, res) {


    user.get(req.session.fbUser.id, function(err, rows) {


      if (rows && rows.length) { //If we have that user then store there data

        req.session.fbUser = rows[0];

      }
      else {

        user.save({
          users_name: fbUser.name,
          facebook_id: fbUser.id,
          users_age: '26',
          users_height: null,
          users_weight: null,
          users_avatar: fbUser.id,
          TypeId: 6
        }, function(err, row) {

          req.session.fbUser = row;

        })
      }
      req.session.save();



    }, 'facebook');


  }).post("/fbsession", function(req, res) {


    if (req.body.state) {

      switch (req.body.state) {

        case "destroy":
          req.session.fbUser = null;
          req.session.save();
          break;


      }
    }

    res.send({
      "fbUser": null
    })

  })






app.listen(process.env.PORT);
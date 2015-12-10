var mysql = require("mysql");
var Twit = require("twit");

    module.exports =  {
        GetConnection: function(){
            var conn = mysql.createConnection({
              host: "localhost",
              user: "anthonybjturner",
              password: "",
              database: "turnera1_db"
            });
        return conn;
    },
    
    GetTwitterConnection : function(){
                
           var twit = new Twit({
            consumer_key:         '8mpPYlSx4tqgRR9pi3XmXe6sy',
            consumer_secret:      'qjzBG0z8EDmxS6o1Wuv41NkwBgoxWx2JEGlWgF81SicCRo6V4V',
            access_token:         '401096761-BZjMsHKQbkWUJzTDMz876UksPfseOs7RJXnMB8jB',
            access_token_secret:  '8szqoGldfRUhXABQaUuGupYxkKOpOxwkcG76fBfJnVw6k'
        });
        
        return twit;

        }


};
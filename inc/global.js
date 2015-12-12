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
            consumer_key:         'LBZYMFqaDvD07ZiInle6DYDhX',
            consumer_secret:      'xOtanAvwfvhtD0CKJ5dRyI3s5yr9v6CM3AnRuc5uJSWUugYm1p',
            access_token:         '401096761-4BabaT84SQRRXnR5tSumtm3O2ijTaAhNQddZl7Re',
            access_token_secret:  'ONJ8Um9w3f7iefbWjlnGK66k2IlMGlUHaP4pbgJ1Xu8u4'
        });
        
        return twit;

        }


};
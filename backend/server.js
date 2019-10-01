var express = require('express'); // remember to install these in the top directory to fill in 
var path = require('path');      // your package.json, as well as anything else you want to add
var app = express();
app.use(express.static('../public/'));
var database = require('./database_test2.json'); 
// Don't change anything above this line unless you know what it will do
var login_info = database["logins"];
console.log(login_info);

app.get('/',function(req,res){
    // Right now this does nothing. To send the index file from the public directory follow the methods in the class example
    // You will need to add the path to the index file public/index.html since we have a slightly more complex set up now.
    res.sendFile(path.join(__dirname + 'public/index.html'));
});

// You will need to add more routes than just '/' so that your website can talk to your webserver using the get XMLHttpRequests
app.get('/login/:username/:password',function(req,res){
    var user = req.params.username;
    var password = req.params.password;
    console.log(user);
    console.log(password);
    if(login_info[user]==null){
        console.log('null');
        res.send(false)
    }
    else{
        if(login_info[user]==password){
            console.log('success');
            res.send(true)
        }
        else{
            console.log('wrongpassword');
            res.send(false)
        }
    }
})


app.listen(8080);
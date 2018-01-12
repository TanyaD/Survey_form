var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.set('views', __dirname+ '/views');
app.set('view engine', 'ejs');
var session = require('express-session');
app.use(session({secret:'codingdojo'}));
app.get('/', function(request,response){
    response.render("survey")
})
app.post("/result", function(request, response){
    //request.session.name=request.params.firstname
    //console.log(request.session.firstname)
    console.log("POST DATA \n\n", request.body)
    request.session.name = request.body.firstname;
    request.session.location = request.body.location;
    request.session.language = request.body.language;
    request.session.message = request.body.message;
    response.redirect("/result")
})
app.get('/result', function(request,response){
    var name=request.session.name
    var location=request.session.location
    var language=request.session.language
    var message=request.session.message
    response.render("result", {name: name,location:location, message:message, language:language}  )
})




app.listen(8000, function(){
    console.log("listening on port 8000");
});
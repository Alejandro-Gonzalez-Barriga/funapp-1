var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var databaseInfo = require('../mysql')

var app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, '../public/src')))

app.get('/test', function(req, res){
  res.send('I am only running your server with node.');
});

app.get('infoFromDatabase', function(req, res){
  databaseInfo.getInfoFromDatabase(function(err, results){
    if(err){
      console.log('aqui la estoy cagando')
      res.sendStatus(500)
    }else{
      res.json(results)
    }
  });
});
app.post('/test', function(req, res){

 let description = req.body.description;
 let description2 = req.body.description2;

 if(!description) {
   res.sendStatus(400);
 } else {
   database.insertOne(description,description2,(err, results) => {
     if (err) {
       res.sendStatus(500);
     } else {
       res.status(200).json(results);
     }
   });
 }
});

app.listen(3000, function(){
  console.log('Server Started on Port 3000....');
})

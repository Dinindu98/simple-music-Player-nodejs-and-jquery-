var fs = require('fs');



var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.use(express.static('./public'));

app.get('/',function(req,res){
    // res.send('this i' + data[1].name + data[1].artist);
    var words = fs.readFileSync('abc.json');
    var data = JSON.parse(words);   
    
    // console.log(data[0].name);
    // console.log(data[0].artist);
     return res.render('home',{data});
    
});

app.get('/songs/',function(req,res){
    res.send('this is song page');
});

app.get('/songs/:song',function(req,res){
    res.send('this is ' + req.params.song);
});

app.listen(5000);
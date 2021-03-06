var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool= require('pg').Pool;

var app = express();
app.use(morgan('combined'));

var config={
    user:'bikumallaprudhviraj',
    database:'bikumallaprudhviraj',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password:'db-bikumallaprudhviraj-16524'
};

var pool=new Pool(config);


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/article.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article.html'));
});


app.get('/ui/cv.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'cv.html'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
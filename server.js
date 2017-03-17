var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool= require('pg').Pool;

var config={
    user:'bikumallaprudhviraj',
    database:'bikumallaprudhviraj',
    host:'db.imad.hasura-app.io',
    port:'8080',
    password: process.env.DB_PASSWORD
};
var app = express();
app.use(morgan('combined'));

app.get('/test-db',function(req,res){
    
});

var articles={
    'article-one' :{
        title:'ARTICLE ONE',
        heading:'ARTICLE ONE',
        time: 'Editing this article-one html page at 11:05 pm',
        content:`<p>
                My first ever article in this web app.My first ever article in this web app.My first ever article in this web app.My first ever article in this web app.My first ever article in this web app.My first ever article in this web app.My first ever article in this web app.My first ever article in this web app.My first ever article in this web app.My first ever article in this web app.My first ever article in this web app.My first ever article in this web app.My first ever article in this web app.
        </p>`
    
},
    'article-two' :{
        title:'ARTICLE TWO',
        heading:'ARTICLE TWO',
        time: 'Editing this article-two html page at 11:12 pm',
        content:`<p>
                My second ever article in this web app.
        </p>`
    },
    'article-three' :{
        title:'ARTICLE THREE',
        heading:'ARTICLE THREE',
        time: 'Editing this article-three html page at 11:17 pm',
        content:`<p>
                My third ever article in this web app.
        </p>`
    }
};
function createtemplate(data){
    var title=data.title;
    var heading=data.heading;
    var time=data.time;
    var content=data.content;
    var htmltemplate =`
        <!DOCTYPE html>
        <head>
            <title> 
            ${title}
            </title>
            <meta name="viexport" content="width=device-width ,initial-scale =1" />
             <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
            <div>
                <a href="/">HOME</a>
            </div>    
            <hr/>
            <h3>
                ${heading}
            </h3>
            <div>
                ${time}
            </div>
            ${content}    
            </div>
        </body>
        </html>
    `;
    return htmltemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var names=[];
app.get('/submit-name', function (req, res) {
  var name =req.query.name;
  names.push(name);
  res.send(JSON.stringify(names));
});

app.get('/:articleName',function(req,res){
    //articleName == article-one
    var articleName=req.params.articleName;
  res.send(createtemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var Pool=new Pool(config);
app.get('test-db',function(req,res){
    //make a select request
    //return a response with the results
    pool.query('SELECT * from test',function(err,result){
       if(err){
           res.status(500).send(err.toString());
       } else{
           res.send(JSON.stringify(result));
       }
    });
});
var counter =0;
app.get('/counter',function(req,res){
    counter =counter +1;
    res.send(counter.toString());
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

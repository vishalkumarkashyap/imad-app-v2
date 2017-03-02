var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articleone={
    title:'article-one|vishal kumar',
    heading: 'article one is here',
    date: 'mar 02,2017',
    content: ` <p>
                This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.
            </p>`
};
function createtemplate(data){
    var date=data.date;
    var content=data.content;
    var heading=date.heading;
    var title=data.title;
    var template=`
        <html>
            <head>
                <title>
                    ${title}
                </title>
                <meta name="viemport" content="width=device-width ,initial-scale=1" />
                <link href="/ui/style.css" rel="stylesheet" />
            </head>
            <body>
                <div class="container">
                     <div>
                        <a href="/">Home</a>
                     </div>
                     <hr/>
                     <h3>
                        ${heading}
                     </h3>
                     <h3>
                        ${date}
                     </h3>
                     <div>
                        ${content}
                     </div>
                </div>
            </body>
        </html>
    `;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one',function(req,res){
 res.sendFile(createtemplate(articleone));
});

app.get('/article-two',function(req,res){
   res.send('artile two is requsted and will be served here'); 
});

app.get('/article-three',function(req,res){
   res.send('artile three is requsted and will be served here'); 
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

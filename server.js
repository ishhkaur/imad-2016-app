var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articleOne = {
   title:'art_one || Ishdeep Kaur',
   date:'Oct 4,2016',
   heading:'Article One',
   content:`<p>This is article one. This is article one. This is article one. This is article one. This is article one. This is article one. This is article one. </p>
   <p>This is article one. This is article one. This is article one. This is article one. This is article one. This is article one. This is article one. </p>
    <p>This is article one. This is article one. This is article one. This is article one. This is article one. This is article one. This is article one. </p>`
};
function createTemplate(data){
    var title = data.title;
    var date= data.date;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate=`
    <html>
        <head>
            <title>${title}</title>
            <meta name="viewport" content="width=device-width initial-scale=1"/>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <div>
                    ${date}
                </div>
                <h3>${heading}</h3>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>`;
    return htmlTemplate;
}





app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/art-one', function (res, res){
  res.sendFile(path.join(__dirname, 'ui', 'art_one.html'));
});


app.get('/art-two', function (res, res){
res.send(createTemplate(articleOne));
});

app.get('/art-three', function (res, res){
  res.sendFile(path.join(__dirname, 'ui', 'art_three.html'));
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

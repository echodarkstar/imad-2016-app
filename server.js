var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var lorem= `
     <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id nisi ultricies, sodales leo eu, commodo libero. Praesent blandit est dui, quis venenatis magna placerat at. Etiam ac imperdiet lorem, consectetur ullamcorper metus. Donec id libero sit amet nulla tempus aliquam a quis mauris. Nulla facilisis ligula ut commodo faucibus. Curabitur iaculis interdum sem. In ac malesuada elit. Vivamus eu elit quis metus cursus molestie.
    </p>
    <hr/>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id nisi ultricies, sodales leo eu, commodo libero. Praesent blandit est dui, quis venenatis magna placerat at. Etiam ac imperdiet lorem, consectetur ullamcorper metus. Donec id libero sit amet nulla tempus aliquam a quis mauris. Nulla facilisis ligula ut commodo faucibus. Curabitur iaculis interdum sem. In ac malesuada elit. Vivamus eu elit quis metus cursus molestie.
    </p>
    `;
var pageone = {
    title: 'Page 1 | Nishant\'s webapp',
    heading: 'Page 1',
    content: lorem 
};
var pagetwo = {
    title: 'Page 2 | Nishant\'s webapp',
    heading: 'Page 2',
    content: lorem 
};
var pagethree = {
    title: 'Page 3 | Nishant\'s webapp',
    heading: 'Page 3',
    content: lorem 
};

function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var content = data.content;
    var htmlTemp = `
    <html>
        <head>
    	    <title>
    	        ${title} 
    	    </title>
    	    <meta name="viewport" content="width=device-width, initial-scale=1">
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
            	<div>
            	   ${content}
            	</div>
            </div>
        </body>
    </html>    
    `;
    
    return htmlTemp;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/fog.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'fog.jpg'));
});

app.get('/page1.html', function(req,res) {
    res.send(createTemplate(pageone));
});

app.get('/page2.html', function(req,res) {
    res.send(createTemplate(pagetwo));
});

app.get('/page3.html', function(req,res) {
    res.send(createTemplate(pagethree));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

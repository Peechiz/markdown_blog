const express = require('express'),
      bodyParser = require('body-parser'),
      path = require('path');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

const newpage = require('./newpage')
app.use('/new', newpage);


const port = process.env.PORT || 9001
app.listen(port, ()=>{
  console.log(`MKDWN listening on ${port}`);
})

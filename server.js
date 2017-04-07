const express = require('express'),
      bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const newpage = require('./newpage')
app.use('/new', newpage);

const port = process.env.PORT || 9001
app.listen(port, ()=>{
  console.log(`MKDWN listening on ${port}`);
})

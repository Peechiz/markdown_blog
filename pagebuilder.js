const md = require("markdown").markdown;

var header;
var footer;

fs.readFile('template/head.html', 'utf8', (err,data)=>{
  if (err) throw err;
  header = data;
})

fs.readFile('template/foot.html', 'utf8', (err,data)=>{
  if (err) throw err;
  footer = data;
})

function builder(content){
  
}

module.exports = builder;

const ejs = require('ejs');
const fs = require('fs');
const moment = require('moment');

/*
  TODO:
  So maybe instead of the current file naming convention,
  you create a folder tree based on year > month > day, and then you just name the file by title?

*/

// TODO: add references of pages to a blogRoll.html

function builder(page, cb){

  var filename = moment().format('DMMMYYYY_h:mma') + '.html';

  fs.readFile('./template/blog.ejs', 'utf-8', (err,data)=>{
    if (err) throw err;
    const html = ejs.render(data,page);

    fs.writeFile(`./static/blog/${filename}`, html, (err)=>{
      if (err) throw err;
      console.log('New blog written!');
      cb(filename);
    })
  })


}

module.exports = builder;

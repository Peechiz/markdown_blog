var express = require('express'),
  router = express.Router(),
  md = require("markdown").markdown,
  builder = require('./pagebuilder');

router.route('/')
  .post((req, res) => {
    if (req.body.markdown && req.body.title) {
      const mark = req.body.markdown;
      const title = req.body.title;
      const content = md.toHTML(mark);


      var page = {
        title,
        date: new Date().toLocaleString("en-us", {month: "short", day: "numeric", year: "numeric"}),
        content
      };

      builder(page, (name)=>{
        res.redirect('/blog/' + name;
      });

    } else {
      res.sendStatus(500);
    }
  })

module.exports = router;

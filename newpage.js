var express = require('express'),
  router = express.Router(),
  md = require("markdown").markdown,
  fs = require('fs');

router.route('/')
  .post((req, res) => {
    if (req.body.markdown && req.body.title) {
      var mark = req.body.markdown;
      var title = req.body.title;
      var parsed = md.toHTML(mark);

      var content = {
        title,
        date: Date.now(),
        content: parsed
      }

      fs.writeFile(`build/blog/${Date.now()}`, JSON.stringify(content), 'utf8', err => {
        if (err) throw err;
      })

      res.send(parsed)
    } else {
      res.sendStatus(500)
    }
  })

module.exports = router;

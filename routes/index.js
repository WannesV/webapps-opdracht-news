var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let jwt = require('express-jwt');

let Source = mongoose.model('Source');

let auth = jwt({secret: process.env.BACKEND_SECRET, 
  userProperty: 'payload'});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*GET all sources*/
router.get('/API/sources/', auth, function(req, res, next) {
  Source.find(function(err, sources) {
    if(err) { return next(err);}
    res.json(sources);
  });
});

router.post('/API/sources/', auth, function (req, res, next) {
  let source = new Source(req.body);
  source.save(function(err, rec) {
    if (err) { return next(err);}
    res.json(rec);
  });
});

router.put('/API/source/:id', auth, function(req, res, next) {
  Source.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});



router.get('/API/source/:id', auth, function(req, res, next)  {
  Source.findById(req.params.id, function(err, source) {
    if (err) return next(err);
    if(!source)
      return nextTick(new Error('not found ' + req.params.id));
    console.log(source);
    res.json(source);
  });
});

router.get('/API/source/:source', auth, function(req, res) {
  res.json(req);
});

router.delete('/API/source/:source',auth, function(req, res, next) {
  req.source.remove(function(err) {
    if (err) { return next(err); }
    res.json("removed source");
  })
});

module.exports = router;

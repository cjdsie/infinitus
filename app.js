
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var nodemailer = require('nodemailer');


var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

var Poet = require('poet');

var poet = Poet(app, {
  posts: './_posts/',
  postsPerPage: 5,
  metaFormat: 'json',
  routes: {
    '/myposts/:post': 'post',
    '/pagination/:page': 'page',
    '/mytags/:tag': 'tag',
    '/mycategories/:category': 'category'
  }
});

poet.init().then(function () {
  // ready to go!
});


app.get('/', function(req, res){
  res.render('index', {
    title: 'Infinitus Marketing & Technology'
  });
});

app.get('/company', function(req, res){
  res.render('company', {
    title: 'Infinitus | Who We Are'
  });
});

app.get('/team', function(req, res){
  res.render('team', {
    title: 'Infinitus | Our Team'
  });
});

app.get('/services', function(req, res){
  res.render('services', {
    title: 'Infinitus | Our Services'
  });
});

app.get('/work', function(req, res){
  res.render('work', {
    title: 'Infinitus | Our Work'
  });
});

app.get('/contact', function(req, res){
  res.render('contact', {
    title: 'Infinitus | Hiring Us'
  });
});

app.get('/blog', function(req, res){
  res.render('blog', {
    title: 'Infinitus | Our Blog'
  });
});

app.get('/access', function(req, res){
  res.render('acess', {
    title: 'Infinitus | Accessiblity'
  });
});

app.get('/styleguide', function(req, res){
  res.render('styleguide', {
    title: 'Infinitus | Style Guide'
  });
});

app.get('/jobs', function(req, res){
  res.render('jobs', {
    title: 'Infinitus | Jobs'
  });
});

app.get('/immersive', function(req, res){
  res.render('immersive', {
    title: 'Infinitus | Immersive Websites'
  });
});

app.get('/interactive', function(req, res){
  res.render('interactive', {
    title: 'Infinitus | Interactive Marketing'
  });
});

app.get('/mobile', function(req, res){
  res.render('mobile', {
    title: 'Infinitus | Mobile'
  });
});

app.get('/commerce', function(req, res){
  res.render('commerce', {
    title: 'Infinitus | Online Commerce'
  });
});

app.get('/consulting', function(req, res){
  res.render('consulting', {
    title: 'Infinitus | Consulting + Strategy'
  });
});


// Work Pages

app.get('/marble-mountain-resort', function(req, res){
  res.render('marble-mountain-resort', {
    title: 'Infinitus | Marble Mountain Resort'
  });
});

app.get('/remedy-for-wellness', function(req, res){
  res.render('remedy-for-wellness', {
    title: 'Infinitus | Remedy for Wellness'
  });
});


app.get('/town-of-grand-falls-windsor', function(req, res){
  res.render('town-of-grand-falls-windsor', {
    title: 'Infinitus | Town of Grand Falls-Windsor'
  });
});


app.get('/brenkir-industrial-supplies', function(req, res){
  res.render('brenkir-industrial-supplies', {
    title: 'Infinitus | Brenkir Industrial Supplies'
  });
});


app.get('/town-of-clarenville', function(req, res){
  res.render('town-of-clarenville', {
    title: 'Infinitus | Town of Clarenville'
  });
});


app.get('/ellsworth-2013', function(req, res){
  res.render('ellsworth-2013', {
    title: 'Infinitus | Ellsworth 2013'
  });
});


app.get('/golfwrx', function(req, res){
  res.render('golfwrx', {
    title: 'Infinitus | Golfwrx'
  });
});




app.post('/contact', function (req, res) {
  var mailOpts, smtpTrans;
  //Setup Nodemailer transport, I chose gmail. Create an application-specific password to avoid problems.
  smtpTrans = nodemailer.createTransport('SMTP', {
      auth: {
          user: "scottoldford@gmail.com",
          pass: "ngrbhhgcjyfjlxoy" 
      }
  });
  //Mail options
  mailOpts = {
      from: req.body.name + ' &lt;' + req.body.email + '&gt;', //grab form data from the request body object
      to: 'scottoldford@gmail.com',
      subject: 'Hire Us',
      text: req.body.message
  };
  smtpTrans.sendMail(mailOpts, function (error, response) {
      //Email not sent
      if (error) {
          res.render('contact', { title: 'Infinitus Marketing &amp; Technology - Contact', msg: 'Error occured, message not sent.', err: true, page: 'contact' })
      }
      //Yay!! Email sent
      else {
          res.render('contact', { title: 'Infinitus Marketing &amp; Technology - Contact', msg: 'Message sent! Thank you.', err: false, page: 'contact' })
      }
  });
});

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

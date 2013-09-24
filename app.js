
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
    title: 'Infinitus Marketing & Technology',
    description: 'Infinitus Marketing & Technology is a Newfoundland Web Development Marketing Agency. We offer custom, strategic web design and production services, SEO, social media marketing, and mobile marketing solutions to clients in Newfoundland, Canada, and globally.',
    keywords: 'interactive marketing agency, web design, strategy, seo, social media marketing, mobile marketing, newfoundland'
  });
});

app.get('/company', function(req, res){
  res.render('company', {
    title: 'Infinitus Marketing & Technology | Who We Are',
    description: 'Infinitus Marketing & Technology is a Newfoundland Web Development Marketing Agency. We offer custom, strategic web design and production services, SEO, social media marketing, and mobile marketing solutions to clients in Newfoundland, Canada, and globally.',
    keywords: 'marketing agency, web design, strategy, seo, social media marketing, mobile marketing'
  });
});

app.get('/team', function(req, res){
  res.render('team', {
    title: 'Infinitus Marketing & Technology | Our Team',
    description: 'Infinitus Marketing & Technology is a Newfoundland Web Development Marketing Agency. We offer custom, strategic web design and production services, SEO, social media marketing, and mobile marketing solutions to clients in Newfoundland, Canada, and globally.',
    keywords: 'Digital marketing agency, web design, strategy, seo, social media marketing, mobile marketing'
  });
});

app.get('/services', function(req, res){
  res.render('services', {
    title: 'Infinitus Marketing & Technology | Our Services',
    description: 'Infinitus Marketing & Technology is a Newfoundland Website Development Agency, Offering Custom Digital Marketing and Social Media Marketing and Interactive Marketing Services.',
    keywords: 'website design, website development, interactive marketing, agency, mobile marketing, social media'
  });
});

app.get('/work', function(req, res){
  res.render('work', {
    title: 'Infinitus Marketing & Technology | Our Work',
    description: 'Infinitus Marketing & Technology is a Newfoundland Web Design and Digital Strategy Company. We provide website development services, social media marketing, and mobile marketing solutions for results-oriented clients in any industry. Infinitus is based on St. John&rquos;s Newfoundland and serves clients locally and globally.',
    keywords: 'social media, mobile marketing, website development services, newfoundland'
  });
});

app.get('/contact', function(req, res){
  res.render('contact', {
    title: 'Infinitus Marketing & Technology | Hiring Us',
    description: 'Infinitus Marketing & Technology is a Newfoundland Web Development Marketing Agency. We offer custom, strategic web design and production services, SEO, social media marketing, and mobile marketing solutions to clients in Newfoundland, Canada, and globally.',
    keywords: 'interactive marketing agency, web design, strategy, seo, social media marketing, mobile marketing, newfoundland'
  });
});

app.get('/blog', function(req, res){
  res.render('blog', {
    title: 'Infinitus Marketing & Technology | Our Blog',
    description: 'Infinitus Marketing & Technology is a Newfoundland Web Development Marketing Agency. We offer custom, strategic web design and production services, SEO, social media marketing, and mobile marketing solutions to clients in Newfoundland, Canada, and globally.',
    keywords: 'interactive marketing agency, web design, strategy, seo, social media marketing, mobile marketing, newfoundland'
  });
});

app.get('/access', function(req, res){
  res.render('acess', {
    title: 'Infinitus Marketing & Technology | Accessiblity',
    description: 'Infinitus Marketing & Technology is a Newfoundland Web Development Marketing Agency. We offer custom, strategic web design and production services, SEO, social media marketing, and mobile marketing solutions to clients in Newfoundland, Canada, and globally.',
    keywords: 'interactive marketing agency, web design, strategy, seo, social media marketing, mobile marketing, newfoundland'
  });
});

app.get('/styleguide', function(req, res){
  res.render('styleguide', {
    title: 'Infinitus Marketing & Technology | Style Guide',
    description: 'Infinitus Marketing & Technology is a Newfoundland Web Development Marketing Agency. We offer custom, strategic web design and production services, SEO, social media marketing, and mobile marketing solutions to clients in Newfoundland, Canada, and globally.',
    keywords: 'interactive marketing agency, web design, strategy, seo, social media marketing, mobile marketing, newfoundland'
  });
});

app.get('/jobs', function(req, res){
  res.render('jobs', {
    title: 'Infinitus Marketing & Technology | Jobs',
    description: 'Infinitus Marketing & Technology is a Newfoundland Web Development Marketing Agency. We offer custom, strategic web design and production services, SEO, social media marketing, and mobile marketing solutions to clients in Newfoundland, Canada, and globally.',
    keywords: 'interactive marketing agency, web design, strategy, seo, social media marketing, mobile marketing, newfoundland'
  });
});

app.get('/immersive', function(req, res){
  res.render('immersive', {
    title: 'Infinitus Marketing & Technology | Immersive Websites',
    description: 'Infinitus Marketing & Technology is a Newfoundland Website Design & Development Agency, Offering Custom Digital Marketing and Social Media Marketing Services.',
    keywords: 'web design, website development, interactive, agency, marketing, social media'
  });
});

app.get('/interactive', function(req, res){
  res.render('interactive', {
    title: 'Infinitus Marketing & Technology | Interactive Marketing',
    description: 'Infinitus Marketing & Technology is a Newfoundland Web Development Marketing Agency. We offer custom, strategic web design and production services, SEO, social media marketing, and mobile marketing solutions to clients in Newfoundland, Canada, and globally.',
    keywords: 'marketing agency, web design, strategy, seo, social media marketing, mobile marketing'
  });
});

app.get('/mobile', function(req, res){
  res.render('mobile', {
    title: 'Infinitus Marketing & Technology | Mobile',
    description: 'Infinitus Marketing & Technology is a Newfoundland Web Development Marketing Agency. We offer custom, strategic web design and production services, SEO, social media marketing, and mobile marketing solutions to clients in Newfoundland, Canada, and globally.',
    keywords: 'marketing agency, web design, strategy, seo, social media marketing, mobile marketing, mobile, responsive'
  });
});

app.get('/commerce', function(req, res){
  res.render('commerce', {
    title: 'Infinitus Marketing & Technology | Online Commerce',
    description: 'Infinitus award-winning projects include ecommerce websites, tourism marketing campaigns, and online retail promotion',
    keywords: 'interactive marketing agency, web design, strategy, seo, social media marketing, mobile marketing, newfoundland'
  });
});

app.get('/consulting', function(req, res){
  res.render('consulting', {
    title: 'Infinitus Marketing & Technology | Consulting + Strategy',
    description: 'Infinitus Marketing & Technology is a Newfoundland Web Development Marketing Agency. We offer custom, strategic web design and production services, SEO, social media marketing, and mobile marketing solutions to clients in Newfoundland, Canada, and globally.',
    keywords: 'marketing agency, web design, strategy, seo, social media marketing, mobile marketing'
  });
});


// Work Pages

app.get('/marble-mountain-resort', function(req, res){
  res.render('marble-mountain-resort', {
    title: 'Infinitus Marketing & Technology | Marble Mountain Resort',
    description: 'Infinitus Marketing & Technology is a Newfoundland Digital Services Company. Our web design case studies include this profile of a ski resort tourism client, Marble Mountain Resort.',
    keywords: 'Ski resort marketing, web case study, tourism marketing, case study'
  });
});

app.get('/remedy-for-wellness', function(req, res){
  res.render('remedy-for-wellness', {
    title: 'Infinitus Marketing & Technology | Remedy for Wellness',
    description: 'Infinitus Marketing & Technology is a Newfoundland Digital Services Company. Our web design case studies include this online retail brand make-over and web development project for a new health and wellness ecommerce website.',
    keywords: 'web design, web development, ecommerce, online retail'
  });
});


app.get('/town-of-grand-falls-windsor', function(req, res){
  res.render('town-of-grand-falls-windsor', {
    title: 'Infinitus Marketing & Technology | Town of Grand Falls-Windsor',
    description: 'This website development case study of the Town of Grand-Falls Windsor is by Infinitus Marketing & Technology. Infinitus provides digital marketing services including web design, mobile marketing, and social media services.',
    keywords: 'town website, municipal website design, web development, social media marketing'
  });
});


app.get('/brenkir-industrial-supplies', function(req, res){
  res.render('brenkir-industrial-supplies', {
    title: 'Infinitus Marketing & Technology | Brenkir Industrial Supplies',
    description: 'Infinitus Marketing & Technology is a Website Design and Digital Marketing Services Company. Our web design case studies include this profile of a growing industrial service and supply company.',
    keywords: 'web development, web design, customer application, SEO, web hosting, web maintenance'
  });
});


app.get('/town-of-clarenville', function(req, res){
  res.render('town-of-clarenville', {
    title: 'Infinitus Marketing & Technology | Town of Clarenville',
    description: 'Infinitus award-winning projects include ecommerce websites, tourism marketing campaigns, and online retail promotion.',
    keywords: 'town website case study, marketing strategy, fire department website'
  });
});


app.get('/ellsworth-2013', function(req, res){
  res.render('ellsworth-2013', {
    title: 'Infinitus Marketing & Technology | Ellsworth 2013',
    description: 'Infinitus Marketing & Technology is a Newfoundland Web Development Marketing Agency. We offer custom, strategic web design and production services, SEO, social media marketing, and mobile marketing solutions to clients in Newfoundland, Canada, and globally.',
    keywords: 'interactive marketing agency, web design, strategy, seo, social media marketing, mobile marketing, newfoundland'
  });
});


app.get('/golfwrx', function(req, res){
  res.render('golfwrx', {
    title: 'Infinitus Marketing & Technology | Golfwrx',
    description: 'Infinitus Marketing & Technology is a Newfoundland Web Development Marketing Agency. We offer custom, strategic web design and production services, SEO, social media marketing, and mobile marketing solutions to clients in Newfoundland, Canada, and globally.',
    keywords: 'interactive marketing agency, web design, strategy, seo, social media marketing, mobile marketing, newfoundland'
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
          res.render('contact', { title: 'Infinitus Marketing & Technology | Contact', msg: 'Error occured, message not sent.', err: true, page: 'contact' })
      }
      //Yay!! Email sent
      else {
          res.render('contact', { title: 'Infinitus Marketing & Technology | Contact', msg: 'Message sent! Thank you.', err: false, page: 'contact' })
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

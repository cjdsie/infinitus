
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');


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

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

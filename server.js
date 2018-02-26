'use strict'

var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');

var app = express();

var port = process.env.PORT || 8080

app.use(express.static(path.join(__dirname, '/website/public')));


app.set('views',__dirname + '/website/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
	  extended: true
}));
app.use(bodyParser.json());

// Login and signup routes
app.get('/login', (req, res) => {
	// TODO: redirect to /dashboard if authenticated

	res.render('login.html')
})
// Actual login route:
// app.post('/login', (req, res) => { req.body.username, req.body.password })
app.get('/signup', (req, res) => {
	// TODO: redirect to /dashboard if authenticated

	res.render('signup.html')
})

// Actual signup route:
// app.post('/signup', (req, res) => { req.body.username, req.body.password })
app.get('/dashboard', (req, res) => {
	// TODO: redirect to /login if not authenticated

	res.render('dashboard.html')
})

// Process logout request
app.get('/logout', (req, res) => {});


app.get("/", (req,res) => {
	res.render("index.html");
});
app.listen(port, () => {
	console.log(`Listening on ${port}`);
});

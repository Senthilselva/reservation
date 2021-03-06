var express = require('express');
var bodyParser = require('body-parser');

var path = require('path');
var mySql= require('mysql');
var fs = require('fs');

var app = express();
var PORT = 3000;  

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

var reservations =[
{
	name: " 1111",
	phone: "weqweteq",
	email:"werew",
	uniqueID:"343241"
},
{
	name: " 2222",
	phone: "weqweteq",
	email:"werew",
	uniqueID:"343241"
},
{
	name: " 33333",
	phone: "weqweteq",
	email:"werew",
	uniqueID:"343241"
},
{
	name: " 4444",
	phone: "weqweteq",
	email:"werew",
	uniqueID:"343241"
}];

var waitlists = [
{
	name: " 77777",
	phone: "weqweteq",
	email:"werew",
	uniqueID:"343241"

},{
	name: "88888888",
	phone: "weqweteq",
	email:"werew",
	uniqueID:"343241"
}
];


//home html
app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/api/waitlists', function (req, res) {
	console.log("waitlist")
	res.json(waitlists);
});

app.get('/api/reservations', function (req, res) {
	res.json(reservations);
});

app.get('/table', function(req,res){
	res.sendFile(path.join(__dirname, 'table.html'))
});

app.get('/reserve', function(req,res){
	res.sendFile(path.join(__dirname, 'reserve.html'))

});

// Create New Customer - takes in JSON input
app.post('/api/new', function (req, res) {
	// req.body hosts is equal to the JSON post sent from the user
	var newCustomer = req.body;

	console.log(req.body);

	if(reservations.length < 5){
	// We then add the json the user sent to the character array
	reservations.push(newCustomer);
		//res.json(reservations);

	} else {
		waitlist.push(newCustomer);
		//res.json(waitlist);
	}
	// We then display the JSON to the users
	
});

app.listen(PORT, function () {
  console.log('App listening on PORT ' + PORT);
});
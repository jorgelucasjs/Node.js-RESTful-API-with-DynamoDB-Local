const express = require('express')
const app = express()
const dynamoDb = require('./DynamoDBConfig')

app.set('view engine', 'ejs')




// index page
app.get('/', (req, res) => {
	var mascots = [
		{ name: 'Sammy', organization: "DigitalOcean", birth_year: 2012 },
		{ name: 'Tux', organization: "Linux", birth_year: 1996 },
		{ name: 'Moby Dock', organization: "Docker", birth_year: 2013 }
	];
	var tagline = "No programming concept is complete without a cute animal mascot.";

	res.render('pages/index', {
		mascots: mascots,
		tagline: tagline
	});
	// res.render('pages/index');
});

// about page
app.get('/about', (req, res) => {
	res.render('pages/about');
});


app.listen(8080, () => {
	console.log('8080 is the magic port');
});


const express = require('express')
const app = express()
app.set('view engine', 'ejs')
var AWS = require("aws-sdk");
AWS.config.update({
	region: "us-west-2",
	endpoint: "http://localhost:8000"
});

var docClient = new AWS.DynamoDB.DocumentClient();
console.log("Querying for movies from 1985.");
var params = {
	TableName: "Movies",
	KeyConditionExpression: "#yr = :yyyy",
	ExpressionAttributeNames: {
		"#yr": "year"
	},
	ExpressionAttributeValues: {
		":yyyy": 1999
	}
};
// index page
app.get('/', (req, res) => {
	docClient.query(params, function (err, data) {
		if (err) {
			console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
		} else {
			console.log("Query succeeded.");
			data.Items.forEach(function (item) {
				console.log(" -", item.year + ": " + item.title + ": " + item.info.image_url);
			});
			res.render('pages/index', {
				movies: data.Items,
			});
		}
	});
});

// about page
app.get('/about', (req, res) => {
	res.render('pages/about');
});

app.listen(8080, () => {
	console.log('8080 is the magic port');
});



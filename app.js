// =================={Get All Items / Scan in DynamoDB}==================
const AWS = require('aws-sdk');
AWS.config.update({
	region: 'us-west-2',
	endpoint: 'http://localhost:8000'
});
const dynamoDB = new AWS.DynamoDB();
dynamoDB
	.scan({
		TableName: 'premium_plans'
	})
	.promise()
	.then(data => console.log(data.Items))

console.log(dynamoDB);

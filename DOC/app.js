// const AWS = require('aws-sdk');

// const dynamoDB = new AWS.DynamoDB({
// 	region: 'us-east-1',
// 	endpoint: "http://localhost:8000",
// });

// =================={create table}==================
// =================={create table}==================
// dynamoDB.createTable({
// 	AttributeDefinitions: [
// 		{
// 			AttributeName: 'id',
// 			AttributeType: 'S',
// 		},
// 	],
// 	KeySchema: [
// 		{
// 			AttributeName: 'id',
// 			KeyType: 'HASH',
// 		},
// 	],
// 	BillingMode: 'PAY_PER_REQUEST',
// 	TableName: 'db1',
// })
// 	.promise()
// 	.then(data => console.log('Sucess!', data))
// 	.catch(console.error)

// // describeTable
// const backoffInterval = 5000;

// const waitForTable = TableName =>
// 	dynamoDB
// 		.describeTable({ TableName })
// 		.promise()
// 		.then(data => {
// 			if (data.Table.TableStatus !== 'ACTIVE') {
// 				console.log(
// 					`Table status: ${data.Table.TableStatus}, retrying in ${backoffInterval}ms...`
// 				);
// 				return new Promise(resolve =>{
// 					setTimeout(() => waitForTable().then(resolve), backoffInterval);
// 				})
// 			} else {
// 				return
// 			}
// 		})
// 		.catch(error=>{
// 			console.warn(
// 				`Table not found Error below. Retrying in ${backoffInterval}ms...`,
// 				error	
// 			)
// 			return new Promise(resolve=>{
// 				setTimeout(() => {waitForTable().then(resolve)},backoffInterval);
// 			})
// 		});
// waitForTable('my-table').then(()=>console.log('my-table is ready'))

// =================={Delete table}==================
// =================={Delete table}==================
// dynamoDB
// .deleteTable({
// 	TableName:'my-table'
// })
// .promise()
// .then(()=>console.log('Table has been deleted'))
// .catch(console.error)

// =================={List Tables}==================
// =================={List Tables}==================
// const AWS = require('aws-sdk');

// const dynamoDB = new AWS.DynamoDB({
// 	region: 'us-east-1',
// 	endpoint: "http://localhost:8000",
// });
// dynamoDB
// .listTables()
// .promise()
// .then((tables)=>console.log(tables.TableNames))
// .catch(console.error)

// =================={Get All Items / Scan in DynamoDB}==================
// =================={Get All Items / Scan in DynamoDB}==================
// var AWS = require("aws-sdk");

// AWS.config.update({
//   region: "us-west-2",
//   endpoint: "http://localhost:8000"
// });
// var dynamodb = new AWS.DynamoDB();
// dynamodb 
//     .scan({
//         TableName: "Movies",
//     })
//     .promise()
//     .then(data => console.log(data.Items))
//     .catch(console.error)


// =================={restringir resultados de pesquisa}==================
// =================={restringir resultados de pesquisa}==================
// const AWS = require('aws-sdk')
// const dynamoDB = new AWS.DynamoDB.DocumentClient(
// 	{
// 		region: 'us-east-1',
// 		endpoint: "http://localhost:8000",
// 	})

// dynamoDB
// .scan({
// 	TableName:'my-table',
// 	FilterExpression:'attribute_not_exists(deletedAt) AND contains(firstName, :firstName)',
// 	ExpressionAttributeValues:{':firstName': 'jorge lucas'},
// })
// .promise()
// .then(data=> console.log(data.Items))
// .catch(console.error)


// =================={Get Item}==================

// const AWS = require('aws-sdk')
// AWS.config.update({region:'us-east-1',endpoint: "http://localhost:8000"})
// const dynamoDB = new AWS.DynamoDB.DocumentClient();

// dynamoDB
// 	.get({
// 		TableName:'my-table',
// 		key:{
// 			id:'123' //id is the partition key, '123' is the value of it
// 		},
// 	})
// 	.promise()
// 	.then(data=> console.log(data.Item))
// 	.catch(console.error)

// =================={Batch Get Item}==================
// =================={Batch Get Item}==================
// DocumentClienttambém é capaz de executar um monte de getoperações em uma única chamada para o serviço DynamoDB:
// const AWS = require('aws-sdk')
// AWS.config.update({ region: 'us-east-1' })
// const dynamoDB = new AWS.DynamoDB.DocumentClient();

// dynamoDB
// 	.batchGet({
// 		RequestItems: {
// 			'my-table': {
// 				keys: [
// 					{
// 						id: '123'
// 					},
// 					{
// 						id: '124'
// 					},
// 				],
// 			},
// 			'jorge_lucasDB': {
// 				keys: [
// 					{
// 						id: 'abc'
// 					},
// 					{
// 						id: 'abd'
// 					},
// 				],
// 			},
// 		}
// 	})
// 	.promise()
// 	.then(data => console.log(data.Responses))
// 	.catch(console.error)

// =================={Put Item aka Write}==================
// =================={Put Item aka Write}==================
const AWS = require('aws-sdk')
const dynamoDB = new AWS.DynamoDB.DocumentClient(
	{
		region: 'us-east-1',
		endpoint: "http://localhost:8000",
	}
)

dynamoDB
	.put({
		Item: {
			id:"123467",
			name:"Pedro gomes",
			email:"pedro@gmail.com",
		},
		TableName:"my-table",
	})
	.promise()
	.then(data=> console.log(JSON.stringify(data, null, 2)))
	.catch(console.error)


// // =================={Batch Write / Put Item}==================
// const AWS = require('aws-sdk')
// const dynamoDB = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1', endpoint: "http://localhost:8000",})

// dynamoDB
// 	.batchWrite({
// 		RequestItems: {
// 			"my-table": [
// 				{
// 					DeleteRequest: {
// 						Key: { id: '12346' }
// 					},
// 				},
// 				{
// 					PutRequest: {
// 						Item: {
// 							id: '234',
// 							name: 'dynobase',
// 							email: 'dynobase@dynobas.dev',
// 							description: 'Profissional DynamoDB Client'
// 						},
// 					},
// 				},

// 			],
// 		},
// 	})
// 	.promise()
// 	.then(data=> console.log(data))
// 	.catch(console.error)

// // =================={}==================
// // =================={}==================










// aws dynamodb list-tables --endpoint-url http://localhost:8000 --region us-west-2
/**
aws configure 
AWS Access Key ID [None]: AKIAIOSFODNN7EXAMPLE 
AWS Secret Access Key [None]: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY 
Default region name [None]: us-west-2 
Default output format [None]: json

 */
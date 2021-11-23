// Etapa 3: Criar, ler, atualizar e excluir um item

// Criar um novo item
// Criar um novo item

// var AWS = require("aws-sdk");

// AWS.config.update({
//   region: "us-west-2",
//   endpoint: "http://localhost:8000"
// });

// var docClient = new AWS.DynamoDB.DocumentClient();

// var table = "Movies";

// var year = 2015;
// var title = "The Big New Movie";

// var params = {
//     TableName:table,
//     Item:{
//         "year": year,
//         "title": title,
//         "info":{
//             "plot": "Nothing happens at all.",
//             "rating": 0
//         }
//     }
// };

// console.log("Adding a new item...");
// docClient.put(params, function(err, data) {
//     if (err) {
//         console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
//     } else {
//         console.log("Added item:", JSON.stringify(data, null, 2));
//     }
// });


// Ler um item
// Ler um item

// var AWS = require("aws-sdk");

// AWS.config.update({
//   region: "us-west-2",
//   endpoint: "http://localhost:8000"
// });

// var docClient = new AWS.DynamoDB.DocumentClient();

// var table = "Movies";

// var year = 2015;
// var title = "The Big New Movie";

// var params = {
//     TableName: table,
//     Key:{
//         "year": year,
//         "title": title
//     }
// };



// docClient.get(params, function(err, data) {
//     if (err) {
//         console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
//     } else {
//         console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
//     }
// });



// Atualização de um item
// Atualização de um item


/**
 * Copyright 2010-2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * This file is licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License. A copy of
 * the License is located at
 *
 * http://aws.amazon.com/apache2.0/
 *
 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
*/
// var AWS = require("aws-sdk");

// AWS.config.update({
//   region: "us-west-2",
//   endpoint: "http://localhost:8000"
// });

// var docClient = new AWS.DynamoDB.DocumentClient()

// var table = "Movies";

// var year = 2015;
// var title = "The Big New Movie";

// // Update the item, unconditionally,

// var params = {
//     TableName:table,
//     Key:{
//         "year": year,
//         "title": title
//     },
//     UpdateExpression: "set info.rating = :r, info.plot=:p, info.actors=:a",
//     ExpressionAttributeValues:{
//         ":r":5.5,
//         ":p":"Everything happens all at once.",
//         ":a":["Larry", "Moe", "Curly"]
//     },
//     ReturnValues:"UPDATED_NEW"
// };

// console.log("Updating the item...");
// docClient.update(params, function(err, data) {
//     if (err) {
//         console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
//     } else {
//         console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
//     }
// });



// Incrementar um Contador atômico
// Incrementar um Contador atômico

// var AWS = require("aws-sdk");

// AWS.config.update({
//   region: "us-west-2",
//   endpoint: "http://localhost:8000"
// });

// var docClient = new AWS.DynamoDB.DocumentClient()

// var table = "Movies";

// var year = 2015;
// var title = "The Big New Movie";

// // Increment an atomic counter

// var params = {
//     TableName:table,
//     Key:{
//         "year": year,
//         "title": title
//     },
//     UpdateExpression: "set info.rating = info.rating + :val",
//     ExpressionAttributeValues:{
//         ":val": 1
//     },
//     ReturnValues:"UPDATED_NEW"
// };

// console.log("Updating the item...");
// docClient.update(params, function(err, data) {
//     if (err) {
//         console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
//     } else {
//         console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
//     }
// });


// Atualização de um item (condicionalmente)
// Atualização de um item (condicionalmente)

/**
 * Copyright 2010-2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * This file is licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License. A copy of
 * the License is located at
 *
 * http://aws.amazon.com/apache2.0/
 *
 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
*/
// var AWS = require("aws-sdk");

// AWS.config.update({
//   region: "us-west-2",
//   endpoint: "http://localhost:8000"
// });

// var docClient = new AWS.DynamoDB.DocumentClient()

// var table = "Movies";

// var year = 2015;
// var title = "The Big New Movie";

// // Conditional update (will fail)

// var params = {
//     TableName:table,
//     Key:{
//         "year": year,
//         "title": title
//     },
//     UpdateExpression: "remove info.actors[0]",
//     ConditionExpression: "size(info.actors) >= :num",
//     ExpressionAttributeValues:{
//         ":num": 3
//     },
//     ReturnValues:"UPDATED_NEW"
// };

// console.log("Attempting a conditional update...");
// docClient.update(params, function(err, data) {
//     if (err) {
//         console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
//     } else {
//         console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
//     }
// });


// Exclusão de um item
// Exclusão de um item

/**
 * Copyright 2010-2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * This file is licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License. A copy of
 * the License is located at
 *
 * http://aws.amazon.com/apache2.0/
 *
 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
*/
var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8000"
});

var docClient = new AWS.DynamoDB.DocumentClient();

var table = "Movies";

var year = 2015;
var title = "The Big New Movie";

// var params = {
//     TableName:table,
//     Key:{
//         "year": year,
//         "title": title
//     },
//     ConditionExpression:"info.rating <= :val",
//     ExpressionAttributeValues: {
//         ":val": 5.0
//     }
// };
var params = {
    TableName:table,
    Key:{
        "title":title,
        "year":year
    }
};
console.log("Attempting a conditional delete...");
docClient.delete(params, function(err, data) {
    if (err) {
        console.error("Unable to delete item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("DeleteItem succeeded:", JSON.stringify(data, null, 2));
    }
});


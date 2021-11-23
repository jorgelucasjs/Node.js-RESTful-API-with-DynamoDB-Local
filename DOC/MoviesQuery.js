// Etapa 4: Consulta e verificação de dados com oAWS SDK for JavaScriptNo DynamoDB
// Etapa 4: Consulta e verificação de dados com oAWS SDK for JavaScriptNo DynamoDB

// Consulta — Todos os filmes lançados em um ano
// Consulta — Todos os filmes lançados em um ano
// var AWS = require("aws-sdk");
// AWS.config.update({
//   region: "us-west-2",
//   endpoint: "http://localhost:8000"
// });

// var docClient = new AWS.DynamoDB.DocumentClient();

// console.log("Querying for movies from 1985.");

// var params = {
//     TableName : "Movies",
//     KeyConditionExpression: "#yr = :yyyy",
//     ExpressionAttributeNames:{
//         "#yr": "year"
//     },
//     ExpressionAttributeValues: {
//         ":yyyy": 1978
//     }
// };

// docClient.query(params, function(err, data) {
//     if (err) {
//         console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
//     } else {
//         console.log("Query succeeded.");
//         data.Items.forEach(function(item) {
//             console.log(" -", item.year + ": " + item.title);
//         });
//     }
// });


// Etapa 4.2: Consulta — Todos os filmes lançados em um ano com determinados títulos
// Etapa 4.2: Consulta — Todos os filmes lançados em um ano com determinados títulos

// var AWS = require("aws-sdk");

// AWS.config.update({
//   region: "us-west-2",
//   endpoint: "http://localhost:8000"
// });

// var docClient = new AWS.DynamoDB.DocumentClient();

// console.log("Querying for movies from 1992 - titles A-L, with genres and lead actor");

// var params = {
//     TableName : "Movies",
//     ProjectionExpression:"#yr, title, info.genres, info.actors[0]",
//     KeyConditionExpression: "#yr = :yyyy and title between :letter1 and :letter2",
//     ExpressionAttributeNames:{
//         "#yr": "year"
//     },
//     ExpressionAttributeValues: {
//         ":yyyy": 1992,
//         ":letter1": "A",
//         ":letter2": "L"
//     }
// };

// docClient.query(params, function(err, data) {
//     if (err) {
//         console.log("Unable to query. Error:", JSON.stringify(err, null, 2));
//     } else {
//         console.log("Query succeeded.");
//         data.Items.forEach(function(item) {
//             console.log(" -", item.year + ": " + item.title
//             + " ... " + item.info.genres
//             + " ... " + item.info.actors[0]);
//         });
//     }
// });


// Etapa 4.3: Scan
// Etapa 4.3: Scan

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

var params = {
    TableName: "Movies",
    ProjectionExpression: "#yr, title, info.rating",
    FilterExpression: "#yr between :start_yr and :end_yr",
    ExpressionAttributeNames: {
        "#yr": "year",
    },
    ExpressionAttributeValues: {
         ":start_yr": 1950,
         ":end_yr": 1959 
    }
};

console.log("Scanning Movies table.");
docClient.scan(params, onScan);

function onScan(err, data) {
    if (err) {
        console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        // print all the movies
        console.log("Scan succeeded.");
        data.Items.forEach(function(movie) {
           console.log(
                movie.year + ": ",
                movie.title, "- rating:", movie.info.rating);
        });

        // continue scanning if we have more movies, because
        // scan can retrieve a maximum of 1MB of data
        if (typeof data.LastEvaluatedKey != "undefined") {
            console.log("Scanning for more...");
            params.ExclusiveStartKey = data.LastEvaluatedKey;
            docClient.scan(params, onScan);
        }
    }
}






const readline = require("readline");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mypass123",
  database: "hyf"
});

connection.connect();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Please input your SQL query here: ", sqlQuery => {
  // note that the query is not enclosed in single or double quotes
  connection.query(`${sqlQuery}`, function(error, results, fields) {
    if (error) throw error;
    console.log(results);
  });

  connection.end();

  rl.close();
});

// When we input the following query:
// SELECT * from hyf.user WHERE id = 5 OR id = 10
// (note that the query is not in enclosed in single or double quotes)

// This is how we structure the output for this query:
// console.log(`The results of your query are:
// Name: ${results[0].name},
// Email: ${results[0].email},
// Phone: ${results[0].phone},

// Name: ${results[1].name},
// Email: ${results[1].email},
// Phone: ${results[1].phone}`);
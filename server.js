const express = require('express')
const app = express()
const connection = require('./database.js')
const mysql = require('mysql');

// connecting with the mysql database
connection.connect((err) => {
    if(err) throw err;
    console.log('Database connected!');
  })

// endpoint for root
app.get('/', (req, res) => {
    res.send('Server is working perfectly well');
});

// Question 1 goes here
// endpoint for /patients
app.get('/patients', (req, res) => {
    let mysql_cmd = "SELECT patient_id, first_name, last_name, date_of_birth \
        FROM patients";
    connection.query(mysql_cmd, (err, results) => {
        if (err) throw err;
        res.send(results);
    })
});

// Question 2 goes here
app.get('/providers', (req, res) => {
    let mysql_cmd = "SELECT first_name, last_name, provider_specialty \
    FROM providers";
    connection.query(mysql_cmd, (err, results) => {
        if (err) throw err;
        res.send(results);
    })
});

// Question 3 goes here
app.get('/patients-by-firstname', (req, res) => {
    let mysql_cmd = 'SELECT first_name FROM patients';
    connection.query(mysql_cmd, (err, results) => {
        if (err) throw err;
        res.send(results);
    })
});

// Question 4 goes here
app.get('/providers-by-specialty', (req, res) => {
    let mysql_cmd = 'SELECT provider_specialty FROM providers';
    connection.query(mysql_cmd, (err, results) => {
        if (err) throw err;
        res.send(results);
    })
});

// listen to the server
const PORT = 3000
app.listen(PORT, () => {
  console.log(`server is runnig on http://localhost:${PORT}`)
})
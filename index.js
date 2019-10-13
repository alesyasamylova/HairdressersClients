const express = require('express');
const app = express();
const path = require('path');
const port = 8080;
const mysql = require('mysql');

app.use(express.static(path.join(__dirname, 'public')));

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: 'mydb'
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected to database!");
    con.query("SELECT * FROM clients", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
});


app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/clients', (req, res) => {
    res.sendFile(path.join(__dirname + '/clients.html'));
});

app.get('/clientinfo', (req, res) => {
    res.sendFile(path.join(__dirname + '/clientinfo.html'));
});

app.get('/newclient', (req, res) => {
    res.sendFile(path.join(__dirname + '/newclient.html'));
});

app.get('/clientvisit', (req, res) => {
    res.sendFile(path.join(__dirname + '/clientvisit.html'));
});

app.get('/newvisit', (req, res) => {
    res.sendFile(path.join(__dirname + '/newvisit.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname + '/login.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


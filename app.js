const express = require('express');
const app = express();
const path = require('path');
const port = 8080;
const mysql = require('mysql');
const {getHomePage} = require('./routes/index');
const {getClientsPage} = require('./routes/clients');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'mydb'
});


db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});

global.db = db;

app.set('view engine', 'ejs');
app.set('views', __dirname + '\\views');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', getHomePage);

app.get('/home', getHomePage);

app.get('/clients', getClientsPage);

// app.get('/clients/:id(\\d+)', showClientPage);

app.get('/clientinfo', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/clientinfo.ejs'));
});

app.get('/newclient', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/newclient.ejs'));
});

app.get('/clientvisit', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/clientvisit.ejs'));
});

app.get('/newvisit', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/newvisit.ejs'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/login.ejs'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


const express = require('express');
const app = express();
const path = require('path');
const port = 8080;

app.use(express.static(path.join(__dirname, 'public')));

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

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


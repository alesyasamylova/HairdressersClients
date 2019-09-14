const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname +'/public/views/index.html'));
});
app.get('/clients', (req, res) => {
    res.sendFile(path.join(__dirname +'/public/views/myclients.html'));
});
app.get('/calendar', (req, res) => {
    res.sendFile(path.join(__dirname +'/public/views/mycalendar.html'));
});

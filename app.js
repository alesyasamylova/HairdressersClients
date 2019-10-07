const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql');
const port = 8080;
const {getLoginPage} = require('./routes/login');
const {getHomePage} = require('./routes/index');
const {showClientsPage, showClientPage, addClientPage, storeClient, editClientPage, updateClient, deleteClient} = require('./routes/client');
const {clientVisitsPage, clientVisitPage, addClientVisitPage, storeClientVisit, editClientVisitPage, updateClientVisit, deleteClientVisit} = require('./routes/clientVisits');

// create connection to database
// the mysql.createConnection function takes in a configuration object which contains host, user, password and the database name.
const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'mydb'
});

// connect to database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});

global.db = db;

app.set('views', __dirname + '\\views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine

app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder

app.get('/login', getLoginPage);
app.get('/', getHomePage);
app.get('/home', getHomePage);

app.get('/clients', showClientsPage);

app.get('/clients/add', addClientPage);
app.post('/clients/store', storeClient);

app.get('/clients/:id', showClientPage);

app.put('/clients/:id/update', updateClient);
app.get('/clients/:id/edit', editClientPage);

app.delete('/clients/:id/delete', deleteClient);

app.get('/clients/:id/visits', clientVisitsPage);

app.get('/clients/:id/visits/:visit_id', clientVisitPage);

app.get('/clients/:id/visits/add', addClientVisitPage);
app.post('/clients/:id/visits/store', storeClientVisit);

app.get('/clients/:id/visits/:visit_id/edit', editClientVisitPage);
app.put('/clients/:id/visits/:visit_id/update', updateClientVisit);

app.delete('/clients/:id/visits/:visit_id/delete', deleteClientVisit);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


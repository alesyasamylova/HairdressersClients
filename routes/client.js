const path = require('path');

module.exports = {
    showClientsPage: (req, res) => {
        let query = "SELECT * FROM `clients`";
        db.query(query, (err, result) => {
            if (err) {
                res.render('404.ejs');
            }

            res.render('clients.ejs', {
                clients: result
            });
        });
    },

    showClientPage: (req, res) => {
        let clientId = req.params.id;
        let query = "SELECT * FROM `clients` WHERE `id` = '" + clientId + "'";
        db.query(query, (err, result) => {
            if (err) {
                res.render('404.ejs');
            }
            console.log(result);
            res.render('clientinfo.ejs', {
                client: result[0]
            });
        });
    },

    addClientPage: (req, res) => {
        res.render('newclient.ejs');
    },

    storeClient: (req, res) => {
        res.render('404.ejs');
    },

    editClientPage: (req, res) => {
        res.render('404.ejs');
    },

    updateClient: (req, res) => {
        res.render('404.ejs');
    },

    deleteClient: (req, res) => {
        res.render('404.ejs');
    },
};

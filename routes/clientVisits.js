const path = require('path');

module.exports = {
    clientVisitsPage: (req, res) => {
        let clientId = req.params.id;
        let query = "SELECT * FROM `visits` WHERE `client_id` = '" + clientId + "'";
        db.query(query, (err, result) => {
            if (err) {
                res.render('404.ejs');
            }
            console.log(result);
            res.render('clientvisits.ejs', {
                visits: result
            });
        });
    },

    clientVisitPage: (req, res) => {
        let visitId = req.params.visit_id;
        let clientId = req.params.id;
        let query = "SELECT * FROM `visits` WHERE `client_id` = '" + clientId + "'" +
            "AND `id`= '" + visitId + "'";
        db.query(query, (err, result) => {
            if (err) {
                res.render('404.ejs');
            }
          console.log(result);
            res.render('clientvisit.ejs', {
                visit: result[0],
            });
        });
    },

    addClientVisitPage: (req, res) => {
        res.render('newvisit.ejs');
    },

    storeClientVisit: (req, res) => {
        res.render('404.ejs');
    },

    editClientVisitPage: (req, res) => {
        res.render('404.ejs');
    },

    updateClientVisit: (req, res) => {
        res.render('404.ejs');
    },

    deleteClientVisit: (req, res) => {
        res.render('404.ejs');
    }

};

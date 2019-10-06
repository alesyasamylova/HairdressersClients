const path = require('path');

module.exports = {
    clientVisitsPage: (req, res) => {
        res.render('404.ejs');
    },

    clientVisitPage: (req, res) => {
        res.render('clientvisit.ejs');
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

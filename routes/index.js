const path = require('path');

module.exports = {
    getHomePage: (req, res) => {
        res.render('index.ejs');
    }
};

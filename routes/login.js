const path = require('path');

module.exports = {
    getLoginPage: (req, res) => {
        res.render('login.ejs');
    }
};

module.exports={
    getClientsPage: (req, res) => {
        let query = "SELECT * FROM `clients`";
        db.query(query,(err, dbResult)=> {
            if (err){
                res.render('404.ejs')
            }

            res.render('clients.ejs', {
                clients: dbResult
            });
        });
    }
};


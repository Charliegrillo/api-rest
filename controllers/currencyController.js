var db = require("./../database.js")

var Currency = require('./../models/currency');

exports.getCurrency = async function (req, res, next) {
    var currencyType = req.params.currency.toLowerCase()
    var strSql = "select * from monedas where lower(name)=?"
    var currencyType = req.params.currency.toLowerCase();
    db.get(strSql,[currencyType], function(err, row){
        if (err) {
                res.status(400).json({"error":err.message});
                return;
        }
        if (row) {        
            res.status(200).json({
                "moneda": row.name,
                "precio": row.value
            })
        } else {
            res.status(402).json({
                "resultados": "ninguno"
            })   
        }
    });
}

const  db = require("./database.js")

const getDataCurrency = async currencyType => {
    var strSql = "select * from monedas where lower(name)=?"
    db.get(strSql,[currencyType], function(err, row){
        return row;
    });
    throw new Error(error)
  }

  module.exports= {getDataCurrency};
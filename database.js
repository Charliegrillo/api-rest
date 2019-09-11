var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

const DBSOURCE = "cotizar.db"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        console.log('Could not connect to database', err)
    } else {
        console.log('Connected to database')
    }
});
module.exports = db
var currencyController = require('./controllers/currencyController');

module.exports = function(router) {
    router.get('/cotizacion/:currency', currencyController.getCurrency);
}

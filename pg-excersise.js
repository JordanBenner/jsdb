var pgp = require('bluebird');
var pgp = require('pg-promise')({
  promiseLib: promise
});

var db = pgp({database: 'jsdb'});

db.query('SELECT * FROM restaurant')
  .then(function (results)) {
    results.forEach(function (r) {
      console.log(r.id, r.name. r.address, r.category);
    });ls


  })
  catch(function(error){
    console.error(error);
  })
.finally(functioh(){
  pgp.end();
});

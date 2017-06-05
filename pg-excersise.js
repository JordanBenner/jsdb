var pgp = require('bluebird');
var pgp = require('pg-promise')({
  promiseLib: promise
});

var db = pgp({database: 'jsdb'});

db.query('SELECT * FROM restaurant')
  .then(function (results)) {
    results.forEach(function (r) {
      console.log(r.id, r.name. r.address, r.category);
    });
    db.one('SELECT* FROM where name="R1"');

  })
  .then(funtion (row){
    consol.log(row);
    db.result("INSERT INTO restaurant VALUES (default, 'Narf')");
  })
  .then(function (result){
    console.log(result);
  })
  catch(function(error){
    console.error(error);
  })
.finally(functioh(){
  pgp.end();
});


// injection //
// var name = 'big belly burger';
// var query = INSERT INTO restaurant \
//   VALUES(default, '${name}')`;
//
// console.log(query);
// db.result(query)
// .then(function)(result){
//   console.log(result);
// });

//sanatise
var q = "INSERT INTO restaurant VALUES (default, $1)";
var name = "Big Belly Burger'; DROP TABLE restaurant; --";

console.log(query);
db.result(q, name)
  .then(function (result) {
    console.log(result);
    pgb.end();
  });

// sanatise two
var biz = {name: "Lard Lad Donuts, address: 123 somewhere"};
var q = "INSERT INTO restaurant \
  VALUES (default, ${name})";

  console.log(query);
db.result(q, biz)
  .then(function (result) {
    console.log(result);
    pgb.end();
  });

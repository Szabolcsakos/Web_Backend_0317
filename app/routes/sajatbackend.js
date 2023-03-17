const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  
  var connection
  function dbconn(){
    var mysql = require('mysql')

    connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 's47_db'
    })
    
    connection.connect()
    
  }
  
  
  
  
   app.get('/cipok', (req, res) => {

    dbconn()
   
     
    connection.query('SELECT * from cipok', function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    
    connection.end()



    
  })

  app.get('/utcaicipok', (req, res) => {

    dbconn()
   
    
    connection.query('SELECT * from cipok where cipo_kategoria=1', function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    
    connection.end()



    
  })

  app.get('/futballcipok', (req, res) => {

    dbconn()
   
    
    connection.query('SELECT * from cipok where cipo_kategoria=2', function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    
    connection.end()



    
  })

  app.get('/kosarlabdacipok', (req, res) => {

    dbconn()
   
    
    connection.query('SELECT * from cipok where cipo_kategoria=3', function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    
    connection.end()



    
  })

  app.get('/gordeszkacipok', (req, res) => {

    dbconn()
   
    
    connection.query('SELECT * from cipok where cipo_kategoria=4', function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    
    connection.end()



    
  })

  app.post('/uzenet', (req, res) => {

    dbconn()
    
 
  
  connection.query('SELECT * from uzenet where uzenet_tema_id='+req.body.bevitel1, function (err, rows, fields) {
    if (err) 
      console.log( err)
    else{
    console.log(rows)
    res.send(rows)}
    
  })
  
  connection.end()

  
})





};

import mysql from 'mysql';


  const mySqlDb = mysql.createConnection({
    host: 'database-snowboard.cpum02q0uxqp.eu-north-1.rds.amazonaws.com',
    user: 'admin',
    password: 'Admin12*',
    database: 'estaciones_snowboard',
  });

  mySqlDb.connect(err => {
    if (err) {
        console.log('error', err)
    } else {
        console.log('db is connected')
    }
  })

  export default mySqlDb

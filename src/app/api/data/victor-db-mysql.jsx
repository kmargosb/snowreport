import dotenv from 'dotenv';
dotenv.config();

import mysql from 'mysql';

  const mySqlDb = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  });

  mySqlDb.connect(err => {
    if (err) {
        console.log('error', err)
    } else {
        console.log('db is connected')
    }
  })

  export default mySqlDb

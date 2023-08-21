//importe de express
const express = require('express');
//imoorte de mysql
const mysql = require('mysql');
//creation du port
const port = process.env.port || 3000;
//creation du serveyr
const app = express()

//identifiction de la base de donnée
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'dataBaseJS',
  socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
})

//connection à la base de donnée
connection.connect((error) => {
  if(error){
    console.error('Message ::Erreur de connexion : '+error.stack);
  }
  console.log('Message :: Connexion réussie à la base de donnée');
})

//instruction donné a la base de données
//GET
connection.query('SELECT * FROM users', (error, rows, fields) => {
  if(error) throw error;
  console.log('Message :: Les données sont :', rows);
})

//deconnection de la base de donnée
connection.end()

//lancement du serveur local
app.listen(port, (error) => {
  console.log('Message :: Le serveur a été lancé avec succés à l\'adresse http://192.168.60.108:'+port);
})
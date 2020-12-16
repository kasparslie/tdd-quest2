// app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
require('dotenv').config();
const connection = require('./connection');

app.get('/', (_, res) => res.json({ message: 'Hello World!' }))

  
  app.post("/bookmarks", (req, res) => {
    const { url, title } = req.body;
    connection.query(
      "INSERT INTO bookmark (url, title) VALUES(?, ?)",
        [url, title ],
      (err, results) => {
            if (err) {
              console.log(err);
              res.status(500).send("Error saving a product");
            } else {
              res.status(200).json(results);
            }
        }
     );
});

app.get("//bookmarks/:id", (req, res) => {
        const myCat= req.params.category
        console.log(req.params.category)
        connection.query(
          "SELECT * from product where category=?", [myCat], 
          (err, results) => {
            if (err) {  
              console.log(err);
              res.status(500).send("Error retrieving data");
            } else {
              res.status(200).json(results);
            }
          }
        );
      });
  




module.exports = app;

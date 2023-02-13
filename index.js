const express = require("express");
const app = express();
const path = require("path");

// Static middleware
app.use(express.static(path.join(__dirname, 'public')));

app.listen(4000, ()=> console.log("Servidor escuchando en el puerto 4000"));
const express = require('express');
var path = require("path");
const bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
app.use(cors())
 const port = 8080;
// create application/json parser
var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
 
app.listen(port,()=>{
  console.log(`server started at ${port}`);
})
app.get("/", function (req, res) {
  res.sendFile(path.resolve("dist/index.html"));
});


var express = require('express');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3030;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'))

require("./routes/htmlRoutes.js")(app);

app.listen(PORT, function(){
    console.log("Listening on " + PORT)
})
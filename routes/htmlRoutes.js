var path = require('path');

module.exports = function(app) {
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"))
});

app.get("/portfolio", function(req, res) {
    res.sendFile(path.join(__dirname, "../portfolio.html"))
});

app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "../contact.html"))
});

};
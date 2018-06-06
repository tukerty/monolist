var express = require('express')
var app = express()

app.use(express.static('dist'))

//КОД ПОТЯША Moi code

var server = app.listen(8080, function () {
    var host = "0.0.0.0"
    var port = "8080"
    
    console.log("Example app listening at http://%s:%s", host, port)
 })
var express = require('express')
var app = express()

app.use(express.static('dist'))

//КОД ПОТЯША Moi code
var a = "sosipisos"

var server = app.listen(3000, function () {
    var host = "0.0.0.0"
    var port = "3000"
    
    console.log("Example app listening at http://%s:%s", host, port)
 })
 // COMIT DLYA SANI
 
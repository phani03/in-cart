const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/in-cart'));
app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname+'/dist/in-cart/index.html'));
})
app.listen(process.env.PORT || 8008);
console.log('started listening.')
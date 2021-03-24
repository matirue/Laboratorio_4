const express = require('express');

const app = express();

const path = require('path');

app.use(express.static(__dirname + '/ej-clase1'));

app.listen(process.env.PORT || 8080);

app.get('/*', function(reg, res) {
    res.sendFile(path.join(__dirname + '/src/index.html'));
});

console.log('Build successful!!');
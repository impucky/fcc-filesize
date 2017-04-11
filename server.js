var express = require('express');
var multer  = require('multer');
var path = require('path');
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/get-file-size', upload.single('file'), function (req, res) {
  var output = {"filesize": req.file.size}
  res.json(output);
})

app.listen(process.env.PORT || 3000);
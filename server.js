var express = require('express');
var app = express();
var router = express.Router();
var path = __dirname + '/views/';

router.use(function (req, res, next) {
    console.log("/" + req.method);
    next();
});

router.get("/", function(req, res) {
    res.sendFile(path+"index.html");
});

router.get("/about", function(req, res) {
    res.sendFile(path+"about.html");
});

router.get('/dojoConfigLesson', function(req, res) {
    res.sendFile(path+ "dojoConfLesson/dojoConfigLesson.html");
});

router.get('/dojoConfigLesson2', function(req, res) {
    res.sendFile(path+ "dojoConfLesson/dojoConfigLesson2.html");
});

router.get('/dojoModernization', function(req, res) {
    res.sendFile(path+ "dojoModernizationLesson/dojoModernization.html");
});

router.get('/dojoRequest', function(req, res) {
    res.sendFile(path+ "dojoRequest/dojoRequest.html");
});

router.get('/arrays', function(req, res) {
    res.sendFile(path+ "dojoFundamentals/arrays.html");
});

router.get('/objects', function(req, res) {
    res.sendFile(path+ "dojoFundamentals/objects.html");
});

router.get('/modules', function(req, res) {
    res.sendFile(path+ "dojoFundamentals/modules.html");
});

router.get('/domFunctions', function(req, res) {
    res.sendFile(path+ "dojoDOM/domFunctions.html");
});

router.get('/domQuery', function(req, res) {
    res.sendFile(path+ "dojoDOM/domQuery.html");
});

router.get('/events', function(req, res) {
    res.sendFile(path+ "dojoDOM/events.html");
});

app.use("/", router);

//this is how you register additional static folders for files to be accessed from
//basically makes everything in here visible from the root level
app.use(express.static('public'));
app.use(express.static('dojo_modules'));

//anything that doesn't match anything else gets sent here
app.use("*", function(req, res) {
    res.sendFile(path+"404.html");
});

app.listen(3000, function() {
    console.log("Live at Port 3000");
    //notice, these console logs are displayed on the SERVER console, since this isn't browser client code
});
var express = require('express');
var router = express.Router();
var google = require('googleapis');
var youtubeSearch = google.youtube('v3');
var API_key = "AIzaSyB4iGzvV8qdUlVgkKY1F1tLdNb51K3dHG4";

/* GET home page. */
router.get('/', function (req, res, next) {
    var artists = ["Elton John", "Stevie Wonder", "Frank Sinatra", "Louis Armstrong"];
    res.render('index', {artistsList: artists});
});

router.get('/getlist', function (req, res, next) {
    var artist = req.query.artist;
    youtubeSearch.search.list({auth: API_key, part:"id,snippet", q: artist, type: "video"},function(err, youtubeRes){
        res.json(err||youtubeRes);
    })
});

module.exports = router;

var express = require('express')
    , http = require('http')
    , talkBox = require('./lib/iterate-voice-box.js')
    , midi = require('./lib/iterate-midi.js')
    , dictionary = require('./lib/dictionary.js');

var app = express(),
    server = http.createServer(app),
    talkBox = talkBox.listen(server);

//serve all static content
app.use(express.static(__dirname + '/public'));

//automatically parse post data
app.use(express.bodyParser());

server.listen(process.env.PORT || 3000)

//Sets up and attaches the virtual midi ports
midi.connect();
talkBox.attach(midi);

//Web API

//Gets all available words in the dictionary
//curl -X GET -H "Content-Type: application/json" http://localhost:3000/api/words
app.get('/api/words', function(req, res) {
    res.json(dictionary.words);
});

//Sends a keydown message
//curl -X POST -H "Content-Type: application/json" -d '{"note" :0, "velocity":1, "channel": 1}' http://localhost:3000/api/midi/keydown
app.post('/api/midi/keydown', function(req, res) {
    midi.keyDown(talkBox.socket)(talkBox.parseMessage(req));
    res.send(200, 'Key down!');
});

//Sends a keyup message
//curl -X POST -H "Content-Type: application/json" -d '{"note" :0, "velocity":1, "channel": 1}' http://localhost:3000/api/midi/keyup
app.post('/api/midi/keyup', function(req, res) {
    midi.keyUp(talkBox.socket)(talkBox.parseMessage(req));
    res.send(200, 'Key up!');
});

process.on("SIGTERM", function () {
    midi.close()
});
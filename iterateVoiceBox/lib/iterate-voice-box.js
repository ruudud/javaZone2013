/*
 * iterate-voice-box
 * https://github.com/andrew/iterateVoiceBox
 *
 * Copyright (c) 2013 Andrew Swift
 * Licensed under the MIT license.
 */
'use strict';
var socketIO = require('socket.io');
var io;

exports.listen = function (app) {
    var io = socketIO.listen(app);

    return {
        player: function (midiIn, midiOut) {

            io.sockets.on('connection', function (socket) {

                // note
                socket.on('notedown', function (data) {
                    midiOut.sendMessage([143 + data.channel, 0, data.message + 1]);
                    socket.broadcast.emit('playeddown', {'message': data.message});
                });

                // note stop
                socket.on('noteup', function (data) {
                    midiOut.sendMessage([127 + data.channel, 0, data.message + 1]);
                    socket.broadcast.emit('playedup', {'message': data.message});
                });

                // controller
                socket.on('controller', function (data) {
                    var message = parseInt(data.message, 10);
                    console.log("sending: " + data.message)
                    midiOut.sendMessage([message, 0, 0]);

                    data.channel = 1;
                    midiOut.sendMessage([143 + data.channel, 0, 1]);
                    midiOut.sendMessage([127 + data.channel, 0, 1]);

                    midiOut.sendMessage([143 + data.channel, 0, 2]);
                    midiOut.sendMessage([127 + data.channel, 0, 2]);

                    midiOut.sendMessage([143 + data.channel, 0, 3]);
                    midiOut.sendMessage([127 + data.channel, 0, 3]);

                    midiOut.sendMessage([143 + data.channel, 0, 4]);
                    midiOut.sendMessage([127 + data.channel, 0, 4]);

                    midiOut.sendMessage([143 + data.channel, 0, 5]);
                    midiOut.sendMessage([127 + data.channel, 0, 5]);
                });

            });
        }
    };


}

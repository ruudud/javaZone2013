/*
 * iterate-voice-box
 * https://github.com/andrewswift/javaZone2013
 *
 * Copyright (c) 2013 Andrew Swift
 * Licensed under the MIT license.
 */
'use strict';
var socketIO = require('socket.io');

exports.listen = function (app) {
    var io = socketIO.listen(app);

    return {
        player: function (midiIn, midiOut) {

            io.sockets.on('connection', function (socket) {

                // note
                socket.on('notedown', function (data) {
                    midiOut.sendMessage([143 + data.channel, data.note, data.velocity]);
                    socket.broadcast.emit('playeddown', {'message': data.velocity});
                });

                // note stop
                socket.on('noteup', function (data) {
                    midiOut.sendMessage([127 + data.channel, data.note, data.velocity]);
                    socket.broadcast.emit('playedup', {'message': data.velocity});
                });

            });
        }
    };


};

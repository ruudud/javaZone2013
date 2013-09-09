/*
 * iterate-voice-box
 * https://github.com/andrewswift/javaZone2013
 *
 * Copyright (c) 2013 Andrew Swift
 * Licensed under the MIT license.
 */
'use strict';
var socketIO = require('socket.io');

/**
 * Sets up socket IO with the given HTTP/S server.
 * Creates an object which allows attaching of midi ports
 * Sets up the handling of notedown and noteup socket.IO messages
 *
 * @param server a HTTP/S server or a port number to listen on.
 * @returns {{attach: Function}}
 */
exports.listen = function (server) {
    var io = socketIO.listen(server);

    return {
        attach: function (midi) {
            var midiIn, midiOut = midi.ports;
            var _self = this;
            //set up the known Socket.io messages
            io.sockets.on('connection', function (socket) {

                //keep a reference to the socket so that we can use it elsewhere
                _self.socket = socket;

                // play a midi note when the notedown message is received
                socket.on('notedown', midi.keyDown(socket));

                // stop playing a midi note when the noteup message is received
                socket.on('noteup', midi.keyUp(socket));

            });
        },

        /**
         * Ensures that we only look at note, velocity and channel in http request
         * @param request The http request object
         * @returns {{note: *, velocity: *, channel: *}}
         */
        parseMessage: function(request) {
            return {
                note: request.body.note,
                velocity: request.body.velocity,
                channel: request.body.channel
            }
        }

    };
};

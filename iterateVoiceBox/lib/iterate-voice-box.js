/*
 * iterate-voice-box
 * https://github.com/andrew/iterateVoiceBox
 *
 * Copyright (c) 2013 Andrew Swift
 * Licensed under the MIT license.
 */
'use strict';

exports.socket = function() {

  var io = require('socket.io').listen(80);

  io.sockets.on('connection', 
    function (socket) {
      socket.emit('news', { hello: 'world' });
      socket.on('my other event', function (data) {
      console.log(data);
    });
  });

};

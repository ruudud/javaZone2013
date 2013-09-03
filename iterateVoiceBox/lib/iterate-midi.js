/*
 * midi library exports
 *
 * https://github.com/andrewswift/javaZone2013
 *
 * Copyright (c) 2013 Andrew Swift
 * Licensed under the MIT license.
 */
'use strict';
var midi = require('midi');

exports.out = new midi.output();
exports.in = new midi.input();

/**
 * Creates the midi port that is referenced
 * in Ableton Live for sending and receiving MIDI messages
 */
exports.connect = function () {
    //midiIn.ignoreTypes(false, false, false);
    console.log("Creating Iterate MIDI port");
    this.out.openVirtualPort('Iterate Music');
    this.in.openVirtualPort('Iterate Music');

    this.in.on('message', function (deltaTime, message) {
        console.log('-->:' + message + ' d:' + deltaTime);
    });

};

exports.close = function () {
    this.out.closePort();
    this.in.closePort();
};

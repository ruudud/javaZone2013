// MIDI
var midi = require('midi')

exports.out = new midi.output();
exports.in = new midi.input();

exports.connect = function () {
    //midiIn.ignoreTypes(false, false, false);
    console.log("Creating Iterate MIDI port");
    this.out.openVirtualPort('Iterate Music');
    this.in.openVirtualPort('Iterate Music');

    this.in.on('message', function (deltaTime, message) {
        console.log('-->:' + message + ' d:' + deltaTime);
    });

}

exports.close = function () {
    this.out.closePort();
    this.in.closePort();
}

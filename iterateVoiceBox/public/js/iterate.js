var iterate = iterate || {};

(function ($, io) {

    var socket = io.connect('http://' + window.location.host)
    var pause = {note: -1, velocity: -1, channel: 1};
    var dictionary = {};

    $.ajax("http://" + window.location.host + "/api/words",{
        success : function (data){
            dictionary = data || {};
            iterate.dictionary = data;
        }
    })

    function map(word) {
        return dictionary[word]
    }

    /**
     * Creates a voice box instrument which has
     * a method for saying words.
     *
     * @param opts {delay: time in ms}
     * @returns {{say: Function}}
     */
    iterate.voiceBox = function (opts){
        function playWord(word) {
            var message = map(word) || pause;
            socket.emit('notedown', message);
            socket.emit('noteup', message);
        }
        return sequenceWithDelay(playWord, opts)
    }

    iterate.pianoSequence = function (opts){
        function playNote(note) {

            socket.emit('notedown', {note: note, velocity:127, channel: 16});
            socket.emit('noteup', {note: note, velocity:127, channel: 16});
        }

        return sequenceWithDelay(playNote, opts)
    }

    iterate.drumSequence = function (opts){
        function playDrum(note) {

            socket.emit('notedown', {note: note, velocity:127, channel: 15});
            socket.emit('noteup', {note: note, velocity:127, channel: 15});
        }

        return sequenceWithDelay(playDrum, opts)
    }


    function sequenceWithDelay(func, opts) {
        if (typeof opts !== 'object')
            opts = {};

        var delay = opts.delay || 1000

        return {
            say: function (list) {
                var index = 0;
                var timer = setTimeout(function () {
                    //call the calling function after the delay
                    timer = setTimeout(arguments.callee, delay);
                    if (list.length > index) {
                        func(list[index]);
                        index++;
                    }
                    else {
                        clearTimeout(timer);
                    }

                }, 0)
            }
        }
    }

})(jQuery, io);

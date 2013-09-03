(function ($, io) {
    // connect to socket.io
    var socket = io.connect('http://' + window.location.host)

    //creates the socket.io player
    function createPlayer(opts) {
        if(typeof opts !== 'object')
            opts = {};

        var delay = opts.delay || 1000
        function playWord(word) {
            var index = word;
            socket.emit('notedown', {message: index, channel: 1});
            socket.emit('noteup', {message: index, channel: 1});
        }

        return {
            say: function (list) {
                var index = 0;
                var timer = setTimeout(function () {
                    //call the calling function after the delay
                    timer = setTimeout(arguments.callee, delay);
                    if (list.length > index) {
                        playWord(list[index]);
                        index++;
                    }
                    else {
                        clearTimeout(timer);
                    }

                }, 0)
            }
        }
    }

    var player = createPlayer({delay:200});

    // Send a hello message
    $('.btn-primary').on('click', function (e) {
        var words = [11, 12, -1, 13, -1, -1, 10, -1, 23];

        player.say(words);
    });


})(jQuery, io);

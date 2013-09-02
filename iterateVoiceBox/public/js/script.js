(function ($) {
    // connect to socket.io
    var socket = io.connect('http://' + window.location.host);

    // send message on click
    $('.btn-primary').on('click', function (e) {
        e.preventDefault();
        socket.emit('controller', { message: $(this).data('message') });

        function playWord(vel) {
            socket.emit('notedown', {message: vel, channel: 1});
            socket.emit('noteup', {message: vel, channel: 1});
        }

        var i = 1
        var timer = setTimeout(function() {

            timer = setTimeout(arguments.callee, 400)

            playWord(i);
            if (i++==20) {
                clearTimeout(timer)
            }
        }, 0)
    });

})(jQuery);

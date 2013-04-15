// Console

if(typeof(console) == 'undefined') console = { log : function(){} };
if(typeof(console.log) != 'function') console.log = function(){};


// Functions

var App = {

    StartApp: function() {
        try {
            this.InterfaceActions();
        } catch (e) {
            alert('Existem erros no script.');
            console.log('Error: ' + e);
        }
    },

    InterfaceActions: function() {

        $('nav, header').localScroll({
          duration: 1000,
          axis: 'y'
        });

        //////////
        //
        // Begin: Camera capture - http://migre.me/e7arf
        //

        // cross browser support http://migre.me/e78Mi
        navigator.getUserMedia = navigator.getUserMedia ||
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.msGetUserMedia;
        window.URL = window.URL ||
            window.webkitURL ||
            window.mozURL ||
            window.msURL;

        var $newTeamMemberWrapper = $('#new-team-member-wrapper');
        var $newTeamMemberBox = $('#new-team-member-box');

        var getUserMediaerrorCallback = function(error) {
            $newTeamMemberWrapper.attr('data-original-title', '');
            $newTeamMemberBox.html('<img src="/img/time/tio-sam.jpg" />');
            $newTeamMemberBox.attr('style', 'cursor: default');
        };

        if (navigator.getUserMedia) {
            $newTeamMemberBox.on('click', function() {
                var videoHtml = [
                    '<div id="video-capture-box">',
                    '<video autoplay style="width: 170px; height: 165px;"></video>',
                    '</div>'].join('');

                $newTeamMemberBox.html(videoHtml);

                var video = document.querySelector('video');

                var successCallback = function(stream) {
                    $newTeamMemberWrapper.attr('data-original-title', 'Clique para pausar ou continuar');
                    // Set the source of the video element with the stream from the camera
                    if (video.mozSrcObject !== undefined) {
                        video.mozSrcObject = stream;
                    } else {
                        video.src = (window.URL && window.URL.createObjectURL(stream)) || stream;
                    }
                };

                navigator.getUserMedia({video: true}, successCallback, getUserMediaerrorCallback);
                $newTeamMemberBox.unbind(); // remove the click event listener

                $(video).on('click', function() {
                    video.paused ? video.play() : video.pause();
                });
            });
        } else {
            getUserMediaerrorCallback();
        }

        //
        // End: Camera capture
        //
        //////////

    } // InterfaceActions

} // Var Site

$(function() {
    App.StartApp();
});

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
        // Camera capture - http://migre.me/e7arf
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


        var $newTeamMemberBox = $('#new-team-member-box');

        $newTeamMemberBox.on('click', function() {
            var $newTeamMemberWrapper = $('#new-team-member-wrapper');

            var videoHtml = [
                '<div id="video-capture-box">',
                '<video autoplay style="width: 170px; height: 165px;"></video>',
                '</div>'].join('');

            $newTeamMemberBox.html(videoHtml);
            $newTeamMemberWrapper.attr('data-original-title', 'Clique para pausar ou continuar');

            if (navigator.getUserMedia) {
                var $videoBox = $('#video-capture-box');
                var video = document.querySelector('video');
                var $instructions = $('#video-instruction');

                var errorCallback = function(error) {
                    $newTeamMemberBox.html('<img src="/img/time/tio-sam.jpg" />');
                };

                var successCallback = function(stream) {
                    // Set the source of the video element with the stream from the camera
                    if (video.mozSrcObject !== undefined) {
                        video.mozSrcObject = stream;
                    } else {
                        video.src = (window.URL && window.URL.createObjectURL(stream)) || stream;
                    }
                };

                navigator.getUserMedia({video: true}, successCallback, errorCallback);
                $newTeamMemberBox.unbind();

                $(video).on('click', function() {
                    if(video.paused) {
                        video.play();
                    } else {
                        video.pause();
                    }
                });
            } else {
                $newTeamMemberBox.html('<img src="/img/time/tio-sam.jpg" />');
            }
        });

        // if (false) {
        if (!navigator.getUserMedia) {
            $newTeamMemberBox.html('<img src="/img/time/tio-sam.jpg" />');
        }

    } // InterfaceActions

} // Var Site

$(function() {
    App.StartApp();
});

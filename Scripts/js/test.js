let localStream;

document.addEventListener("DOMContentLoaded", function () {
    
});


function View_Monitor(src) {
    let localVideo = document.getElementById('local_video');
    console.log("camID:" + src)
    localVideo.srcObject = src;
    localStream = src;
    localVideo.onloadedmetadata = function (e) {
        localVideo.play();
    };
}
function stopVideo(src) {
    let localVideo = document.getElementById('local_video');
    for (track of localStream.getTracks()) {
        track.stop();
    }
    localStream = null;

    localVideo.pause();
    window.URL.revokeObjectURL(localVideo.src);
    localVideo.src = '';
}

function startVideo() {

    navigator.getUserMedia({ video: true, audio: false },
        function (stream) {
            // for success case
            console.log(stream);
            peer.addStream(stream);
            View_Monitor(stream);
        },
        function (err) {
            // for error case
            console.log(err);
            alert("メディアが取得できません");
        });

    let peer = new RTCPeerConnection({ iceServers: [{ "urls": "stun:stun.l.google.com:19302" }] });
    // peer.addStream(localStream);

}
async function startWindow() {
    try {
        let mediaStream = await navigator.mediaDevices.getDisplayMedia({ video: true });
        //videoElement.srcObject = mediaStream;
        //localStream = mediaStream;
        //let localVideo = document.getElementById('local_video');
        //localVideo.src = window.URL.createObjectURL(mediaStream);
        
        //localVideo.srcObject = mediaStream;
        View_Monitor(mediaStream);
    } catch (e) {
        console.log('Unable to acquire screen capture: ' + e);
    }
}
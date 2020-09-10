document.addEventListener("DOMContentLoaded", function () {
    
});


function View_Monitor(src) {
    let localVideo = document.getElementById('local_video');
    localVideo.srcObject = src;
}


function startVideo() {
    navigator.mediaDevices.getUserMedia(
        { video: true, audio: true },
        function (stream) {
            peer.addStream(stream);
        },
        function (error) {
            alert("メディアが取得できません");
        });
    let peer = new RTCPeerConnection({ iceServers: [{ "urls": "stun:stun.l.google.com:19302" }] });

<<<<<<< HEAD
=======
    // peer.addStream(localStream);
    View_Monitor(localStream)

>>>>>>> 4e93f9c88ef5475efb6bd7d467b06439cce98430
}
async function startWindow() {
    try {
        let mediaStream = await navigator.mediaDevices.getDisplayMedia({ video: true });
        //videoElement.srcObject = mediaStream;

<<<<<<< HEAD
        let localVideo = document.getElementById('local_video');
        localVideo.src = window.URL.createObjectURL(mediaStream);
=======
        
//        localVideo.src = window.URL.createObjectURL(mediaStream);
>>>>>>> 4e93f9c88ef5475efb6bd7d467b06439cce98430
        localVideo.srcObject = mediaStream;
    } catch (e) {
        console.log('Unable to acquire screen capture: ' + e);
    }
}
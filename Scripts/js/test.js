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
            View_Monitor(stream);
        },
        function (error) {
            alert("メディアが取得できません");
        });
    let peer = new RTCPeerConnection({ iceServers: [{ "urls": "stun:stun.l.google.com:19302" }] });
    // peer.addStream(localStream);
    

}
async function startWindow() {
    try {
        let mediaStream = await navigator.mediaDevices.getDisplayMedia({ video: true });
        //videoElement.srcObject = mediaStream;

        let localVideo = document.getElementById('local_video');
        localVideo.src = window.URL.createObjectURL(mediaStream);
        
        localVideo.srcObject = mediaStream;
    } catch (e) {
        console.log('Unable to acquire screen capture: ' + e);
    }
}
document.addEventListener("DOMContentLoaded", function () {
    let localVideo = document.getElementById('local_video');
});

function startVideo() {
    let localStream;
    navigator.mediaDevices.getUserMedia(
        { video: true, audio: true },
        function (stream) { localStream = stream; },
        function (error) {
            alert("メディアが取得できません");
        });
    let peer = new RTCPeerConnection({ iceServers: [{ "url": "stun:stun.l.google.com:19302" }] });

    peer.AddStream(localStream);

}

      navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || window.navigator.mozGetUserMedia;
      window.URL = window.URL || window.webkitURL;

      let video = document.getElementById('myVideo');
      let localStream = null;
      navigator.getUserMedia({video: true, audio: false}, 
        function(stream) { // for success case
          console.log(stream);
          /* video.src = window.URL.createObjectURL(stream); 
             Chrome68以降で URL.createObjectURL が使えなくなったらしいので、
             以下のsrcObjectプロパティを使うように修正 */
          video.srcObject = stream;
        },
        function(err) { // for error case
          console.log(err);
        });


const mediaStream = navigator.mediaDevices
    .getUserMedia({
      audio: {
        sampleRate: {ideal: 32000},
        sampleSize: {ideal: 16},
        echoCancellation: true,
        echoCancellationType: 'system',
        noiseSuppression: false,
        latency: 0.01
      },
      video: {
        width: 640,
        height: 480
      },
    })

  // MediaTrackの取得
  let tracks = mediaStream.getTracks();
  for (let i = 0; i < tracks.length; i++) {
    // 種類
    console.log('kind: '+tracks[i].kind)
    let constraints = tracks[i].getConstraints()

    // 音声トラックの制約
    if (tracks[i].kind == 'audio') {
      console.log('autoGainControl: '+constraints.autoGainControl)
      console.log('channelCount: '+constraints.channelCount)
      console.log('echoCancellation: '+constraints.echoCancellation)
      console.log('latency: '+constraints.latency)
      console.log('noiseSuppression: '+constraints.noiseSuppression)
      console.log('sampleRate: '+constraints.sampleRate)
      console.log('sampleSize: '+constraints.sampleSize)
      console.log('volume: '+constraints.volume)
    }

    // 動画トラックの制約
    if (tracks[i].kind == 'video') {
      console.log('aspectRatio: '+constraints.aspectRatio)
      console.log('facingMode: '+constraints.facingMode)
      console.log('frameRate: '+constraints.frameRate)
      console.log('height: '+constraints.height)
      console.log('width: '+constraints.width)
      console.log('resizeMode: '+constraints.resizeMode)
    }
  }
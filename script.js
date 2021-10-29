const video = document.getElementById("videoId")
let buttonCap = document.getElementById("capturarId")


navigator.mediaDevices.getUserMedia({
    audio: false,
    video: {
        height: 500,
        width: 350,
    }
}).then(
    (stream) => {
        video.srcObject = stream;
    }
).catch(err => console.error(err))


buttonCap.addEventListener("click", () => {
    debugger;
    capturarVideo();
})

function capturarVideo(){
    const canvas = document.getElementById("canvasId");
    let ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, 350, 500);
}
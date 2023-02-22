// const startBtn = document.getElementById("start")
// const captureBtn = document.getElementById("capture")
// const closeBtn = document.getElementById("close")
// const player = document.getElementById("player")
// const canvas = document.getElementById("canvas")
// const restartBtn = document.getElementById("restart")
import {
    startBtn,
    captureBtn,
    closeBtn,
    player,
    switchBtn,
    canvas,
    restartBtn,


} from "./constants.js"
import { openCamera, closeCamera, changeMode } from "./camera.js"





switchBtn.addEventListener("click", () => {
    // mode = mode === "environment" ? "user" : "environment"
    changeMode()
    player.classList.add("d-none")
    const tracks = player.srcObject.getVideoTracks()
    for (let i = 0; i < tracks.length; i++) {
        tracks[i].stop()
    }

    openCamera()

})

startBtn.addEventListener("click", () => {
    openCamera()

})
captureBtn.addEventListener("click", () => {
    console.log("capture button clicked")

    const preview = canvas.getContext("2d")
    preview.drawImage(player, 0, 0, canvas.height, canvas.width)
    canvas.classList.remove("d-none")
    player.classList.add("d-none")
    captureBtn.classList.add("d-none")
    restart.classList.remove("d-none")

})
restartBtn.addEventListener("click", () => {
    closeCamera()
    openCamera()
})
closeBtn.addEventListener("click", () => {
    closeCamera()

})

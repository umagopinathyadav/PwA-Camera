export const startBtn = document.getElementById("start")
export const captureBtn = document.getElementById("capture")
export const closeBtn = document.getElementById("close")
export const player = document.getElementById("player")
export const canvas = document.getElementById("canvas")
export const restartBtn = document.getElementById("restart")
export const switchBtn = document.getElementById("switchCamera")
export let mode = "user"
export const getMode = () => {
    // mode = arg
    return mode
}
export const changeMode = () => {
    mode = mode === "user" ? "environment" : "user"


}

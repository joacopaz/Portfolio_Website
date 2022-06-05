const media = document.querySelectorAll("img")
const video = document.querySelector("video")
const loader = document.querySelector(".loader")
const bar = document.querySelector("[data-loaded-bar]")
const loadText = document.querySelector("[data-loaded-text]")
let loaded = 0;
let percentage;

const finishedLoading = async () => {
    console.log("finished")
    loader.style.opacity = "0%"
    await new Promise(r => setTimeout(r, 500));
    loader.style.display = "none"
    loader.remove()

}
const update = () => {
    loaded++
    percentage = (loaded / (media.length + 1)) * 100
    bar.style.width = percentage + "%"
    loadText.innerText = `${Math.round(percentage)}%`
    if (percentage = 100) finishedLoading()
}
media.forEach(e => {
    e.addEventListener("loadend", () => {
        update()
    })
})
video.addEventListener("readystatechange", () => {
    if (video.readyState == 4) {
        update()
        console.log("video ready")
    }
})
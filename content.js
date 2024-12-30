function applyDarkTheme() {
    document.body.style.backgroundColor = "#121212"
    const texts = document.querySelectorAll("div, span, p")
    texts.forEach(el => {
        el.style.color = "#ffffff"
    })
    const pdfViewer = document.querySelector("embed, object")
    if (pdfViewer) {
        pdfViewer.style.filter = "invert(1) hue-rotate(180deg)"
    }
}
if (document.readyState === "complete" || document.readyState === "interactive") {
    applyDarkTheme()
} else {
    document.addEventListener("DOMContentLoaded", applyDarkTheme)
}

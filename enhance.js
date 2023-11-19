document.addEventListener("DOMContentLoaded", () => {
    const copyright = document.getElementById("copyright")
    const copyrightTextChunks = copyright.innerText.split(" ");
    copyrightTextChunks[1] = new Date().getFullYear();
    copyright.innerText = copyrightTextChunks.join(" ");
});
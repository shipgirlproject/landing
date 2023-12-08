// we try to use as little js as possible

document.addEventListener("DOMContentLoaded", () => {
    const copyright = document.getElementById("copyright")
    const copyrightText = copyright.innerText.replace("2018", new Date().getFullYear());
    copyright.innerText = copyrightText;
});
console.log("js loaded");
const body = document.querySelector(".power");

document.querySelector(".img-fans").addEventListener("mouseenter", () => {
    body.style.backgroundColor = "#f5e6e6";
});

document.querySelector(".img-idol").addEventListener("mouseenter", () => {
    body.style.backgroundColor = "#e6f0ff";
});

document.querySelector(".img-company").addEventListener("mouseenter", () => {
    body.style.backgroundColor = "#e6ffe6";
});

// 鼠标离开恢复
document.querySelectorAll(".shell img").forEach(img => {
    img.addEventListener("mouseleave", () => {
        body.style.backgroundColor = "rgba(221,221,221,0.64)";
    });
});

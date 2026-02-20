window.onload = function () {

const canvas = document.getElementById("galaxy");
if (!canvas) return;

const ctx = canvas.getContext("2d");

let w, h;

function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

const stars = [];
for (let i = 0; i < 200; i++) {
    stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * 2
    });
}

function draw() {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, w, h);

    ctx.fillStyle = "white";
    stars.forEach(s => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
    });

    requestAnimationFrame(draw);
}

draw();

}
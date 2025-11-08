let animationID;
let rate = 0;

function rotateCircle(circle) {
    rate = (rate + 2) % 360;
    circle.style.transform = `rotate(${rate}deg)`;
    animationID = requestAnimationFrame(() => rotateCircle(circle));
}

export function animateCircle (root, state) {
    const circle = root.querySelector(".progress__circle")
    if(state) {
        cancelAnimationFrame(animationID);
        root.classList.add('progress--animate')
        rotateCircle(circle);
    }
    else {
        cancelAnimationFrame(animationID);
        rate = 0;
        circle.style.transform = "rotate(0deg)";
    }
}
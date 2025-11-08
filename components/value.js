export function valueCircle(root, value) {
    const circle = root.querySelector('.progress__circle');
    const radius = circle.r.baseVal.value;
    const ring = 2 * Math.PI * radius;
    circle.style.strokeDasharray = `${ring}`;
    circle.style.strokeDashoffset = `${ring - (value / 100) * ring}`;
}

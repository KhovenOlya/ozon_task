export function hideCircle(root, state) {
    const svg = root.querySelector(".progress__svg"); 
    svg.style.display = state ? "none" : "block";
}

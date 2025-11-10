export function hideCircle(root, state) {
    const svg = root.querySelector(".progress__svg"); 
    svg.style.visibility = state ? "hidden" : "visible";
}

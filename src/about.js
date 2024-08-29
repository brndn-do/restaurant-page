export function loadAbout() {
    const content = document.querySelector("#content");
    const h1 = document.createElement("h1");
    h1.textContent = "About";
    content.appendChild(h1);
}
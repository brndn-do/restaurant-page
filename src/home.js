export function loadHome() {
    const content = document.querySelector("#content");
    const h1 = document.createElement("h1");
    h1.textContent = "Chicago Steakhouse";
    const p = document.createElement("p");
    p.textContent = "Best steaks in Chicago";
    const img = document.createElement("img")
    img.src = "https://www.washingtonpost.com/resizer/iywfEB3juK8yZhpw8ymbPCqp674=/arc-anglerfish-washpost-prod-washpost/public/53BGPNAB6YI63C7LFNHEQGYVAA.jpg";
    img.alt = "A picture of a steak";
    content.appendChild(h1);
    content.appendChild(p);
    content.appendChild(img);
}
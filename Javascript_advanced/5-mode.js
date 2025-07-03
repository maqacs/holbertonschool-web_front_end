function changeMode(size, weight, transform, background, color) {
    return function(){
        const body = document.querySelector("body");
        body.style.fontSize = size;
        body.style.fontWeight = weight;
        body.style.textTransform = transform;
        body.style.backgroundColor = background;
        body.style.color = color;
    };
}

function main() {
    let spooky = changeMode(9,"bold","uppercase","pink","green");
    let darkMode = changeMode(12,"bold","capitalize","black","white");
    let screamMode = changeMode(12,"normal","lowercase","white","black");

    const body = document.querySelector("body");

    const p = document.createElement("P");
    p.innerText = "Welcome Holberton!";
    body.appendChild(p);

    const buttonSpooky = document.createElement("button");
    const buttonDarkMode = document.createElement("button");
    const buttonScreamMode = document.createElement("button");

    buttonSpooky.innerText = "Spooky";
    buttonDarkMode.innerText = "Dark mode";
    buttonScreamMode.innerText = "Scream mode";

    body.appendChild(buttonSpooky);
    body.appendChild(buttonDarkMode);
    body.appendChild(buttonScreamMode);

    buttonSpooky.onclick = spooky;
    buttonDarkMode.onclick = darkMode;
    buttonScreamMode.onclick = screamMode;

}

main()
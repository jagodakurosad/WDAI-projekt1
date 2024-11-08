function zegar() {
    let data = new Date();

    let godzina = data.getHours();
    let minuty = data.getMinutes();
    let sekundy = data.getSeconds();

    if (godzina < 10) {
        godzina = "0" + godzina
    }

    if (minuty < 10) {
        minuty = "0" + minuty
    }

    if (sekundy < 10) {
        sekundy = "0" + sekundy
    }

    let zegarDiv = document.querySelector(".zegar")
    zegarDiv.innerHTML = godzina + ":" + minuty + ":" + sekundy;

    setTimeout(zegar, 1000);
}

window.onload = zegar;
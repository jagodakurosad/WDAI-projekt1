
function setFormCookie() {

    let mail = document.querySelector(".mail").value;
    let typ = document.querySelector(".wybierz").value;
    let uwagi = document.querySelector(".uwagi").value;
    
    document.cookie = "cookieMail=" + mail; 
    document.cookie = "cookieType=" + typ; 
    document.cookie = "cookieUwagi=" + btoa(uwagi); 

    setFormValuesFromCookies();
}

function setFormValuesFromCookies() {
    let cookies = document.cookie.split(";");
    let cookiesNames = ["cookieMail", "cookieType", "cookieUwagi"];

    let mail = document.querySelector(".mail");
    let typ = document.querySelector(".wybierz");
    let uwagi = document.querySelector(".uwagi");

    let inputs = [mail, typ, uwagi];
    let outValues = ["", "", ""];

    for (let i=0; i<cookies.length; i++) {
        for (let j = 0; j < cookiesNames.length; j++) {
            if(cookies[i].includes(cookiesNames[j] + "=")) {
                outValues[j] = cookies[i].split("=")[1];
            }
        }
    }

    outValues[2] = outValues[2] ? atob(outValues[2]) : '';

    for (let k = 0; k < cookiesNames.length; k++) {
        inputs[k].value = outValues[k];
    }
}

window.onload = () => {
    setFormValuesFromCookies();

    let formularz = document.querySelector(".formularzkontaktowy");
    formularz.addEventListener("change", setFormCookie);
}
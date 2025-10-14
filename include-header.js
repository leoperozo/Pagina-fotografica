// Este script carga el header.html y lo inserta en el elemento con id="header-container"
document.addEventListener("DOMContentLoaded", function() {
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-container").innerHTML = data;
        });
});

// Este script carga el footer.html y lo inserta en el elemento con id="header-container"
document.addEventListener("DOMContentLoaded", function() {
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-container").innerHTML = data;
        });
});

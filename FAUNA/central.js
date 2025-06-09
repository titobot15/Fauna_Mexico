document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (username === "CECYTEM" && password === "123456") {
        window.location.href = "info.html"; 
    } else {
        errorMessage.textContent = "Usuario o contraseña incorrectos.";
    }
});

const authContainer = document.getElementById("authContainer");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

// Abrir login
function mostrarLogin() {
    authContainer.classList.add("active");
    loginForm.classList.add("active");
    registerForm.classList.remove("active");
}

// Abrir registro
function mostrarRegistro() {
    authContainer.classList.add("active");
    registerForm.classList.add("active");
    loginForm.classList.remove("active");
}

// Cambiar a registro desde login
function irARegistro() {
    loginForm.classList.remove("active");
    registerForm.classList.add("active");
}

// Cambiar a login desde registro
function irALogin() {
    registerForm.classList.remove("active");
    loginForm.classList.add("active");
}

// Cerrar
function cerrarForm() {
    authContainer.classList.remove("active");
}
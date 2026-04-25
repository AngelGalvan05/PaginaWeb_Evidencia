// Funciones de navegación (igual que antes)
function mostrarLogin() {
    document.getElementById("authContainer").style.display = "flex";
    document.getElementById("loginForm").classList.add("active");
    document.getElementById("registerForm").classList.remove("active");
}

function mostrarRegistro() {
    document.getElementById("authContainer").style.display = "flex";
    document.getElementById("registerForm").classList.add("active");
    document.getElementById("loginForm").classList.remove("active");
}

function cerrarForm() {
    document.getElementById("authContainer").style.display = "none";
}

function irARegistro() {
    document.getElementById("loginForm").classList.remove("active");
    document.getElementById("registerForm").classList.add("active");
}

function irALogin() {
    document.getElementById("registerForm").classList.remove("active");
    document.getElementById("loginForm").classList.add("active");
}

// Lógica de Registro (Captura de datos)
function register() {
    const nombre = document.getElementById("nombreRegister").value;
    const tel = document.getElementById("telRegister").value;
    const email = document.getElementById("emailRegister").value;
    const pass = document.getElementById("passwordRegister").value;
    const mensaje = document.getElementById("mensaje");

    // Validación simple
    if (nombre === "" || tel === "" || email === "" || pass === "") {
        mensaje.innerText = "Por favor, llena todos los datos personales.";
        mensaje.style.color = "red";
        return;
    }

    // Aquí es donde Firebase guardaría los datos
    console.log("Registrando a:", { nombre, tel, email });
    
    mensaje.innerText = "¡Cuenta creada! Redirigiendo...";
    mensaje.style.color = "green";
    
    // Simulación de éxito
    setTimeout(() => {
        irALogin();
        mensaje.innerText = "";
    }, 2000);
}
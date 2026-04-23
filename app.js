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


function login() {
    const email = document.getElementById("emailLogin").value;
    const password = document.getElementById("passwordLogin").value;

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            document.getElementById("mensaje").innerText = "Bienvenido";
            cerrarForm();
        })
        .catch(error => {
            document.getElementById("mensaje").innerText = error.message;
        });
}

function register() {
    const email = document.getElementById("emailRegister").value;
    const password = document.getElementById("passwordRegister").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            document.getElementById("mensaje").innerText = "Cuenta creada";
            irALogin(); // 🔥 lo manda a login automáticamente
        })
        .catch(error => {
            document.getElementById("mensaje").innerText = error.message;
        });
}
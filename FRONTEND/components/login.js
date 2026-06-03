export function validar() {
    const form = document.getElementById("login-form")

    form.addEventListener("submit", async (e) =>{
        e.preventDefault()

        const email = document.getElementById("email").value
        const password = document.getElementById("password").value

        if (!email || !password) {
        alert("Todos los campos son obligatorios");
        return;
        }

        if (!email.includes("@")) {
        alert("Ingresa un correo válido");
        return;
        }

        if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres");
        return;
        }

        const response = await fetch("BACKEND/auth-db.json");
        const data = await response.json();
        const user = data.users.find(u => u.email === email && u.password === password);

        if(user){
            localStorage.setItem("user", JSON.stringify(user))
            vistas(user.rol)
        }else{
            alert("credenciales incorrectas")
        }

        form.reset()
    })
}


export function vistas (rol) {
    if(rol === "admin"){
        window.location.href = "index.html"
    }else if(rol === "tecnico"){
        window.location.href =""
    }
}
// hola mundo
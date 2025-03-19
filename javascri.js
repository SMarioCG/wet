alert("BIENVENIDO A MI CV");

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("emailForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const from = document.getElementById("from").value.trim();
        const to = document.getElementById("to").value.trim();
        const message = document.getElementById("message").value.trim();

        if (from === "" || to === "" || message === "") {
            alert("Todos los campos son obligatorios.");
            return;
        }

        if (!validateEmail(from) || !validateEmail(to)) {
            alert("Por favor, ingresa direcciones de correo válidas.");
            return;
        }
        alert("Correo enviado correctamente.");
        form.reset();
        
    });
   
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    }
});

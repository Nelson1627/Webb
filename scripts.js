document.getElementById("verRecuerdos").addEventListener("click", function() {
    window.location.href = "recuerdos.html"; // Redirige a la página de recuerdos
});

// Funcionalidad para agregar deseos
document.getElementById("agregarDeseo").addEventListener("click", function() {
    const nuevoDeseo = document.getElementById("nuevoDeseo").value;

    if (nuevoDeseo) {
        const listaDeseos = document.getElementById("listaDeseos");
        const li = document.createElement("li");
        li.textContent = nuevoDeseo;
        listaDeseos.appendChild(li);
        
        // Limpiar el campo de texto
        document.getElementById("nuevoDeseo").value = "";
        
        // Mostrar el mensaje de deseo cumplido
        document.getElementById("mensaje").style.display = "block";
    } else {
        alert("Por favor, escribe un deseo antes de agregarlo.");
    }
});

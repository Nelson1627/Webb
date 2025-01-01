document.getElementById("volver").addEventListener("click", function() {
    window.location.href = "index.html"; // Redirigir a la página principal
});

// Nombres de las imágenes
const nombresImagenes = [
    "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", 
    "6.jpeg", "7.jpeg", "8.jpeg", "9.jpeg", "10.jpeg", 
    "12.jpeg", "13.jpeg", "14.jpeg", "15.jpeg", "16.jpeg", 
    "17.jpeg", "18.jpeg", "19.jpeg", "20.jpeg", "21.jpeg", 
    "22.jpeg", "23.jpeg", "24.jpeg", "25.jpeg"
];

const frasesAmistad = [
    "La amistad es un alma que habita en dos cuerpos.",
    "Un amigo es alguien que sabe todo sobre ti y aún así te quiere.",
    "La verdadera amistad no se trata de ser inseparables, sino de estar separados y que nada cambie.",
    "Los amigos son la familia que elegimos.",
    "La amistad duplica nuestras alegrías y divide nuestras tristezas."
];

const recuerdosContainer = document.getElementById("recuerdosContainer");

// Crear contenedores para imágenes y frases
nombresImagenes.forEach(nombre => {
    const contenedor = document.createElement("div");
    contenedor.className = "recuerdo";

    const img = document.createElement("img");
    img.src = `img/${nombre}`; // Usar el nombre de la imagen
    img.alt = `Imagen ${nombre}`;
    img.style.maxWidth = "100%"; // Asegura que las imágenes no excedan el contenedor
    img.style.height = "auto"; // Mantiene la proporción de las imágenes

    const frase = document.createElement("p");
    frase.textContent = frasesAmistad[Math.floor(Math.random() * frasesAmistad.length)];

    contenedor.appendChild(img);
    contenedor.appendChild(frase);
    recuerdosContainer.appendChild(contenedor);
});

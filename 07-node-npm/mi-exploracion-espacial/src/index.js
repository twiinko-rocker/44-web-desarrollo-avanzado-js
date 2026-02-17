import { planetas } from "./planetas.js";

console.log("¡Bienvenido a la exploración espacial!");
console.log("Aquí tienes algunos planetas interesantes que hemos descubierto:");

planetas.forEach((planeta, index) => {
    console.log(`${index + 1}. ${planeta.nombre} - ${planeta.descripcion} - Coordenadas: (${planeta.coordenadas.x}, ${planeta.coordenadas.y}, ${planeta.coordenadas.z}) (Descubierto en: ${planeta.descubiertoEn}).`);
});

console.log("¡Sigue explorando el universo!");
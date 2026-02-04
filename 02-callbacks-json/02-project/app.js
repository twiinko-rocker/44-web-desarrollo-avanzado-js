// Datos iniciales de libros en formato JSON
let biblioteca = {
    "libros": [
        { "titulo": "Cien años de soledad", "autor": "Gabriel García Márquez", "genero": "Realismo mágico", "disponible": true },
        { "titulo": "1984", "autor": "George Orwell", "genero": "Distopía", "disponible": true }
    ]
};

// Función para simular la lectura de datos (asimilar la lectura de un archivo JSON)
function leerDatos(callback) {
    setTimeout(() => {
        // Aquí simulas leer el JSON con un retraso de 1 segundo
        callback(biblioteca);
    }, 1000);
}

// Función para mostrar todos los libros en consola
function mostrarLibros() {
    leerDatos((datos) => {
        console.log("Inventario de libros:");
        datos.libros.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro.titulo} - ${libro.autor} (${libro.disponible ? 'Disponible' : 'Prestado'})`);
        });
    });
}

function escribirDatos(callback) {
    setTimeout(() => {
        callback();
    }, 1000);
}

// Función para agregar un nuevo libro

function agregarLibro(titulo, autor, genero, disponible) {
    const nuevoLibro = { titulo, autor, genero, disponible };

    escribirDatos(() => {
        biblioteca.libros.push(nuevoLibro);
        console.log(`✅ Libro agregado: ${titulo}`);
    });
}



// Función para cambiar la disponibilidad de un libro
function actualizarDisponibilidad(titulo, nuevoEstado) { 
    escribirDatos(() => {
        const libro = biblioteca.libros.find( //busca el libro por título
            (libro) => libro.titulo === titulo
        );

        if (libro) { // Si el libro existe, actualiza su disponibilidad
            libro.disponible = nuevoEstado;
            console.log(
                `🔄 Disponibilidad actualizada: ${titulo} → ${nuevoEstado ? "Disponible" : "Prestado"}`  
            );
        } else {
            console.log(`❌ Libro no encontrado: ${titulo}`);
        }
    });
}

// Ejemplo de cómo ejecutar la aplicación
mostrarLibros();
agregarLibro("El principito", "Antoine de Saint-Exupéry", "Fábula", true);
actualizarDisponibilidad("1984", false);
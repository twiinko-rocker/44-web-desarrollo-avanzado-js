
// //https://swapi.dev/api/starships/9/

// /* fetch("https://swapi.dev/api/starships/9/")
//   .then( res => { 
//     console.log( res.ok ) //True o false 
//     console.log( res.status ) //200, 404, 500
//     if( !res.ok ){
//       throw new Error ( `Error HTTP. Status: ${res.status}` )
//     }

//     return res.json()

//   })
//   .then( data => {
//     console.log(data)
//   })
//   .catch( error => { console.error( error ) }) 
//   .finally( () => { console.log("Esto se ejecuta independientemente de la promesa fetch") } ) */

// /* fetch("https://jsonplaceholder.typicode.com/posts",{
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({
//     nombre: "Pepe",
//     correo: "pepe@correo.com",
//     pass: "12345"
//   })
// })
// .then( res => res.json() )
// .then( data => console.log(data) ) */



// //Ejemplo de buscador de personajes con fetch

// const inputBusqueda = document.getElementById("busqueda")
// const btnBuscar = document.getElementById("btnBuscar")
// const resultado = document.getElementById("resultado")

// async function buscarPersonaje(nombre) {

//     try {

//         resultado.innerHTML = "<p>Cargando personajes...</p>"

//         const respuesta = await fetch(`https://rickandmortyapi.com/api/character/?name=${nombre}`)

//         if (!respuesta.ok) {
//             throw new Error("Personaje no encontrado")
//         }

//         const data = await respuesta.json()

//         const personaje = data.results[0]

//         resultado.innerHTML = `
//         <div class="card">
//         <h2>${personaje.name}</h2>
//         <img src="${personaje.image}">
//         <p>Status: ${personaje.status}</p>
//         </div>
//     `

//     } catch (error) {
//         resultado.innerHTML = `Personaje no encontrado en la biblioteca ❎`
//         console.log(error)
//     }

// }

// btnBuscar.addEventListener("click", () => {

//     const nombre = inputBusqueda.value.trim()

//     if (nombre === "") {
//         resultado.innerHTML = "<p>⚠️ Escribe un nombre para buscar...</p>"
//         return
//     }

//     buscarPersonaje(nombre)

// })

// //Hacerlo funcionar cuando demos "enter"
// inputBusqueda.addEventListener("keydown", (event) => {

//     if (event.key === "Enter") {
//         btnBuscar.click()
//     }

// })


// ------------------------------------------------------------------

//Axios

// async function mostrarPosts() {

//     try {
//         const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
//         console.log(res.data)
//     } catch (error) {
//         console.error(error)
//     }

// }

// mostrarPosts();



//Peticion POST

const baseURL = "https://jsonplaceholder.typicode.com/posts"

async function enviarDatos(data) {

    try {

        const res = await axios.post(baseURL, data)
        console.log(res.data);

    } catch (error) {
        console.error(`Error al enviar datos: ${error.message}`)
    }
}

enviarDatos();
// // let tiendaAbierta = true;

// // let pedido = (tiempo, proceso) => {

// //     return new Promise((resolve, reject) => {

// //         if (tiendaAbierta) {
// //             setTimeout(() => {
// //                 resolve(proceso())
// //             }, tiempo);
// //         } else {
// //             reject(console.log('La tienda está cerrada'));
// //         }
// //     });

// // };

// // pedido(3000, () => console.log('Ingredientes reunidos'))
// //     .then(() => {
// //         return pedido(2000, () => console.log('Carne cocinada'))
// //     })
// //     .then(() => {
// //         return pedido(2000, () => console.log('El pan ya esta tostado'))
// //     })
// //     .then(() => {
// //         return pedido(2000, () => console.log('Hamburguesa armada'))
// //     })
// //     .then(() => {
// //         return pedido(2000, () => console.log('Tu pedido está listo'))
// //     })
// //     .catch(() => {
// //         console.log('El pedido no se pudo completar')
// //     })
// //     .finally(() => {
// //         console.log('Gracias por visitarnos, vuelva pronto')
// //     })

// const form = document.getElementById('registroForm');
// const nombreInput = document.getElementById('mensaje');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const usuario = document.getElementById('usuario').value;
//     const password = document.getElementById('password').value;

//     if (!usuario || !password) {
//         mensaje.textContent = 'Por favor, complete todos los campos.';
//         mensaje.style.color = 'red';
//         return;
//     }

//     //Encadenar promesas

//     registrarUsuario(usuario)
//         .then(result => {
//             mensaje.textContent = result;
//             mensaje.style.color = 'green';
//             return enviarCorreoBienvenida(usuario);
//         })
//         .then(result => {
//             alert(result);
//         })
//         .catch(error => {
//             mensaje.textContent = error;
//             mensaje.style.color = 'red';
//         })

// })

// function registrarUsuario(nombre) {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             if (nombre) {

//                 resolve(`Usuario ${nombre} registrado exitosamente`);

//             } else {
//                 reject('Nombre de usuario inválido');
//             }
//         }, 1500);

//     })

// }


// function enviarCorreoBienvenida(nombre) {
//     return new Promise((resolve) => {

//         setTimeout(() => {
//             resolve(`Correo de bienvenida enviado a ${nombre}`);
//         }, 1000);

//     })
// }


//Async Await

let isOpen = true;

let eleccion_salsas = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log("Qué salsa quieres?"))
        }, 4000)
    })
}

let cocina = async () => {
    console.log("A");
    console.log("B");
    console.log("C");

    await eleccion_salsas();

    console.log("D");
    console.log("E");
    console.log("F");

}


cocina();

console.log("Lavando platos");
console.log("Barriendo el piso");
console.log("Sacando la basura");


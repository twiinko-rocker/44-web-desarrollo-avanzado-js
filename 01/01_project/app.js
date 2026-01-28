const orderList = document.getElementById('orderList'); // // Lista de pedidos
const addOrderBtn = document.getElementById('addOrderBtn'); // Botón para agregar pedidos

let orderId = 1; // Para identificar los pedidos 

addOrderBtn.addEventListener('click', () => { // Al hacer clic en el botón
    const order = { id: orderId++, status: 'En Proceso' }; // Crear un nuevo pedido
    addOrder(order); // Agregar el pedido a la lista
    processOrder(order); // Procesar el pedido
});

function addOrder(order) { // Agregar un pedido a la lista visual
    const listItem = document.createElement('li'); // Crear un elemento de lista
    listItem.id = `order-${order.id}`; // Asignar un ID único
    listItem.textContent = `Pedido #${order.id}: ${order.status}`; //
    orderList.appendChild(listItem); // Agregar a la lista
}

function updateOrderStatus(order, status) {
    const listItem = document.getElementById(`order-${order.id}`); // Encontrar el elemento de la lista
    if (listItem) { // Si existe, actualizar su contenido
        listItem.textContent = `Pedido #${order.id}: ${status}`; // 
    }
}

async function processOrder(order) {
    // TODO: Simular la preparación del pedido usando setTimeout y Promise
    await new Promise((resolve) => {
        const preparationTime = Math.floor(Math.random() * 10000) + 1000; // Tiempo aleatorio entre 1 y 10 segundos
        setTimeout(() => {
            resolve();
        }, preparationTime);
    });
    // TODO: Actualizar el estado del pedido a "Completado"
    order.status = 'Completado';
    updateOrderStatus(order, order.status); // Actualizar la visualización del pedido
}

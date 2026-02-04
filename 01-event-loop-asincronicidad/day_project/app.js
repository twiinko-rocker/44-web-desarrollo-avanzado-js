const hacerPedido = async (pedido, tiempo) => {
    console.log(`Pedido de ${pedido}`);

    await new Promise( (resolve) => {
        setTimeout(() => {
            resolve();
        }, tiempo);
    }); 

    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();

    console.log(`Pedido de ${pedido} listo`);
}

hacerPedido("Pizza", 5000);
hacerPedido("Hamburguesa", 2500);
hacerPedido("Ensalada", 1000);



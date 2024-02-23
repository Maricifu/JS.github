const listaProductos =[];

const cargarProductos=()=>{
    for(let i=1;i<=10;i++){
        const nuevoProducto={
            codigo: `PROD${i}`,
            descripcion: faker.commerce.productName(),
            precio: parseFloat(faker.commerce.price(10, 100, 2)),
            existencias:parseInt(faker.random.number(50))+30,
        };
        listaProductos.push(nuevoProducto);
    }
}




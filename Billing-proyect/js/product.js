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

const cargarFormularioProductos=()=>{
    const productosForm=document.getElementById('productos-form');
    productosForm.innerHTML= `
        <form>
            <label for="codigoProducto">Código del Producto:</label>
            <input type="text" id="codigoProducto" required>
            <label for="descripcionProducto">Descripción del Producto:</label>
            <input type="text" id="descripcionProducto" required>
            <label for="precioProducto">Precio del Producto:</label>
            <input type="number" id="precioProducto" required>
            <button type="button" onclick="crearProducto()">Crear Producto</button>
            <button type="button" onclick="mostrarListadoProductos()">Ver Listado de Productos</button>
            <!-- Aquí se puede añadir más funcionalidad, como modificar y eliminar productos -->
        </form>
    `;

    const listadoProductos= document.getElementById('listado-productos');
    listadoProductos.style.display='none';
}

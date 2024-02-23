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

const crearProducto=()=>{
    const codigoInput = document.getElementById('codigoProducto');
    const descripcionInput = document.getElementById('descripcionProducto');
    const precioInput =document.getElementById('precioProducto');

    const codigo = codigoInput.value;
    const descripcion =  descripcionInput.value; 
    const precio = precioInput.value;

    if(!codigo || !descripcion || !precio) {
        alert ('Por favor, completa todos los campos. ');
        return;
    }

    const nuevoProducto={
        codigo: codigo,
        descripcion: descripcion,
        precio: precio
    };

    listaProductos.push(nuevoProducto);
    console.log('Producto creado:', nuevoProducto);
    console.log('Lista de productos: ', listaProductos);

    //limpiar campos del formulario 
    codigoInput.value= '';
    descripcionInput.value='';
    precioInput.value='';

    //mostrar mensaje de exito
    alert('Producto creado con éxito! ');
    actualizarProductosEnFacturas();

    return nuevoProducto;
}
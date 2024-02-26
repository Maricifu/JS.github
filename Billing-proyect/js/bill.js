const listaFacturas=[];

const actulizarClientesEnFacturas=()=>{
    const clienteSelect=document.getElementById('clienteFactura');
    clienteSelect.innerHTML='';
    const opcionesClientes=generarOptionsClientes();
    clienteSelect.innerHTML=opcionesClientes;
}

const actulizarProductosEnFacturas=()=>{
    const productosSelect=document.getElementById('productosFactura');
    productosSelect.innerHTML='';
    const opcionesProductos=generarOptionsProductos();
    productosSelect.innerHTML=opcionesProductos;
}

const cargarFormularioFacturas=()=>{
    const facturasForm=document.getElementById('facturas-form');
    facturasForm.innerHTML = `
        <form>
            <label for="fechaFactura">Fecha de la Factura:</label>
            <input type="date" id="fechaFactura" required>
            
            <label for="clienteFactura">Cliente:</label>
            <select id="clienteFactura" required>
                ${generarOptionsClientes()}
            </select>

            <label for="productosFactura">Productos:</label>
            <select id="productosFactura" multiple required>
                ${generarOptionsProductos()}
            </select>

            <label for="cantidadProducto">Cantidad:</label>
            <input type="number" id="cantidadProducto" required>

            <button type="button" onclick="agregarItemFactura()">Agregar Item</button>

            <h3>Items de la Factura:</h3>
            <ul id="listado-items"></ul>

            <button type="button" onclick="crearFactura()">Crear Factura</button>
            <button type="button" onclick="mostrarListadoFacturas()">Ver Listado de Facturas</button>
        </form>
    `;

    const listaFacturas=document.getElementById('listado-facturas');
    listaFacturas.style.display='none';

}

const generarOptionsProductos=()=>{
    let options='';
    for(const producto of listaProductos){
        options+=`<option value="${producto.codigo}">${producto.descripcion}</option>`;
    }
    return options;
}

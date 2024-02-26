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

const listaFacturas=[];

const actulizarClientesEnFacturas=()=>{
    const clienteSelect=document.getElementById('clienteFactura');
    clienteSelect.innerHTML='';
    const opcionesClientes=generarOptionsClientes();
    clienteSelect.innerHTML=opcionesClientes;
}
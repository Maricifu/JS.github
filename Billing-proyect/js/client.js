const listaClientes= [];

const cargarClientes=()=>{
    for(let i=0;i<=10;i++){
        const nuevoCliente={
            id:i,
            nombre:faker.name.findName(),
            edad: Math.floor(Math.random*30)+18,
            email: faker.internet.email()
        };
        listaClientes.push(nuevoCliente);
    }
}

const cargarFormularioClientes=()=>{
    const clientesForm= document.getElementById('clientes-form');
    clientesForm.innerHTML = `
        <form>
            <label for="nombreCliente">Nombre del Cliente:</label>
            <input type="text" id="nombreCliente" required>
            <label for="edadCliente">Edad del Cliente:</label>
            <input type="number" id="edadCliente" required>
            <label for="emailCliente">Correo Electrónico del Cliente:</label>
            <input type="email" id="emailCliente" required>
            <button type="button" onclick="crearCliente()">Crear Cliente</button>
            <button type="button" onclick="mostrarListado()">Ver Listado de Clientes</button>
            <!-- Aquí se puede añadir más funcionalidad, como modificar y eliminar clientes -->
        </form>
    `;
    const listadoClientes = document.getElementById('listado-clientes');
    listaClientes.style.display='none';
}

const crearCliente=()=>{
    const nombreInput=document.getElementById('nombreCliente');
    const edadInput=document.getElementById('edadCliente');
    const emailInput=document.getElementById('emailCliente');

    const nombre=nombreInput.value;
    const edad=edadInput.value;
    const email=emailInput.value;

    const nuevoCliente={
        id:listaClientes.length+1,
        nombre:nombre,
        edad:edad,
        email:email
    }

    listaClientes.push(nuevoCliente);

    nombreInput.value='';
    edadInput.value='';
    emailInput.value='';

    alert('Cliente creado con éxito!');
    console.log(listaClientes);

    return nuevoCliente;
}

const empleado = {
    nombre: "maria",
    apellido: "duarte",
    identificación: 7890,
    direccion:{
      calle:"34",
      carrera:"6",
      numero:"87"
    }
    
  };
  const empleado2 = {
    nombre: "juan",
    apellido: "perez",
    identificación: 7890,
    direccion:{
      calle:"98",
      carrera:"76",
      numero:"100"
    }
   
  };
  const empleado3 = {
    nombre: "jose",
    apellido: "perez",
    identificación: 7890,
    direccion:{
      calle:"98",
      carrera:"76",
      numero:"100"
    }
   
  };

const listaEmpleados=[];

listaEmpleados.push(empleado,empleado2);

console.log(listaEmpleados);

listaEmpleados.splice(1,1);

console.log(listaEmpleados);
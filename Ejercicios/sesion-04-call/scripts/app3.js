const empleados=[
    {
        id:1,
        nombre:"Camilo"
    },
    {
        id:2,
        nombre:"Maria"

    },
    {
        id:3,
        nombre:"Pedro"
    }
]
const salarios=[
    {
        id:1,
        salario:1000
    },
    {
        id:2,
        salario:2000

    }
    
]

const getEmpleado=(id, callback)=>{
    const empleado=empleados.find(x=>x.id===id)?.nombre;
    if(empleado){
        callback(null,empleado)
    }else{
       callback("Empleado con el "+id+" no existe"); 
    }
}

const getSalario=(id,callback)=>{
    const salario=salarios.find(s=>s.id===id)?.salario;
    if(salario){
       callback(null,salario); 
    }else{
        callback("No existe salario para el id: "+id);
    }
}

/*
getSalario(1,(err,salario)=>{
   if(err){
     console.log("ERROR");
     return console.log(err);
   }
   console.log("Tiene un salario de: "+salario);
})
*/ 
const id=3;
getEmpleado(id,(err,emp)=>{
   if(err){
     console.log("ERROR");
     return console.log(err);
   } 
   getSalario(id,(err,salario)=>{

       if(err){
         return console.log(err);
       }

       console.log("El empleado: "+emp+" tiene un salario de: "+salario);

   })
})
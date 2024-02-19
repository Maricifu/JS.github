/*setTimeout(()=>{
   let a=5;
   let b=10;
   let rta=a+b;
   console.log("El resultado de la suma es: "+rta);
},5000);*/

/*setTimeout((a,b)=>{    
    let rta=a+b;
    console.log("El resultado de la suma es: "+rta);
 },5000,5,10);*/

 const getUsuarioId=(id, callback)=>{
 
    const user={
        id,
        nombre:'Juan'
    }

    setTimeout(()=>{
        callback(user)
        
    },1500)

 }


 getUsuarioId(10,(x)=>{
    console.log(x.id);
    console.log(x.nombre.toUpperCase());
 })
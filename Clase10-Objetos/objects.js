// const B = {}
// console.log(b);

const leo = {
    nombre: "Leo",
    apellido: "Castro",
    edad: "36",
    pasatiempos: ["correr","futbol", "tecnologia"],
    soltero: true,
    contacto:{
        email: "leocastfig@ilcloud.com",
        twitter: "@leocastfig",
        movil: 2614685967
    },
    saludar:function() {
        console.log(`hola:)`);
    },
    decirMiNombre:function(){
        console.log(`hola me llamo ${this.nombre}  ${this.apellido} y tengo ${this.edad} años.`)
    }
}

console.log(leo["nombre"]);
console.log(leo.apellido);
console.log(leo.contacto.movil);
console.log(leo.contacto.twitter);
console.log(leo.contacto);
console.log(leo.pasatiempos[1]);
leo.saludar();
leo.decirMiNombre(); 
console.log(Object.keys(leo));
console.log(Object.values(leo));
console.log(leo.hasOwnProperty("nombre"));

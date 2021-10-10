const a = [];
const b = [1, true, "Hola", ["A","B","C",[1,2,3]]];
console.log(a);
console.log(b);
console.log(b.length);
console.log(b[0]);
console.log(b[1]);
console.log(b[2]);
console.log(b[3]);
console.log(b[3][2]);
console.log(b[3][3][1]);

const c = Array.of("x", "y", "z", 9,8,7);
console.log(c);
console.log(c[3]);

const d = Array(100).fill(false);
console.log(d);

const colores = ["Rojo","verde", "azul"]
console.log(colores); 

colores.push("negro");
console.log(colores);

colores.pop()
console.log(colores);

colores.forEach(function(el,index){
    console.log(`<li id=${index}>${el}</li>`)
});


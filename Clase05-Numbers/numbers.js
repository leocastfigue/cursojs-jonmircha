// Numbers
let a = 2; 
let b = new Number(1); //Constructor
let c = 7.19;
let d = "5.6sss"

console.log(a,b);
console.log(c.toFixed(1));
console.log(c.toFixed(5));
console.log(parseInt(c));
console.log(parseFloat(c));
console.log(typeof c, typeof d);
console.log(a+b);
console.log(c+d); //Concatenó en vez de sumar porque ni se puede sumar un dato tipo number, con una string
console.log(c+parseInt(d)) 
console.log(c+parseFloat(d)) 
console.log(c+Number.parseFloat(d)) 


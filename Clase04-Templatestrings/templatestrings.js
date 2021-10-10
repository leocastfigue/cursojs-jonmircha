// CONCATENACION
let nombre = "Leo";
let apellido = "Castro";

let saludo = "Hola mi nombre es " + nombre + " " + apellido;
console.log(saludo);

// Interpolacion - Template strings
let saludo2 = `Hola mi nombre es ${nombre} ${apellido}.`;
console.log(saludo2);

let ul = "<ul><li>Verano</li><li>Invierno</li><li>Primavera</li></ul> "
console.log(ul);

let ul2 = `
<ul>
    <li>Verano</li>
    <li>Otoño</li>
    <li>Invierno</li>
    <li>Primavera</li>
</ul>`
console.log(ul2);

let ul3 = "<ul> "
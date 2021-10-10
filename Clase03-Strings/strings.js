// Cadena de texto 
let nombre = "Leo";
let apellido = "Castro";
let lorem = "       Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, libero. Fugit est voluptatem incidunt praesentium corrupti doloribus eum necessitatibus, excepturi accusantium ratione, cumque debitis nisi, nulla non maiores quisquam odit?      "

console.log(nombre, apellido);

console.log(
    nombre.length, 
    apellido.length,
    nombre.toLowerCase(),
    apellido.toUpperCase(),
    lorem.includes("amet"),
    lorem.includes("lorem"),
    lorem,
    lorem.trim(),
    lorem.split(" "),
    lorem.split(","),
);

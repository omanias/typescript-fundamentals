"use strict";
function greet(name = "USER") {
    console.log(`Welcome ${name}`);
}
//Al agregar 'void' es porque no retornamos nada
// Al agregar "USER" toma el parámetro por defecto
greet("Alumno");
function getNumber() {
    return Math.floor(Math.random() * 100);
}
console.log(getNumber());
function printPosition(position) {
    console.log(`LAT: ${position.lat}, LONG: ${position.long}`);
}
printPosition({ lat: 10, long: 30 });

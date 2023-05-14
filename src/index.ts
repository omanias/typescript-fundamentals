let myString: string = "Bienvenidos a Typescript";
let myNumber: number = 35;
let myBoolean: boolean = true;

// Arrays

let arrayString: string[] = ["A", "B", "C"];
let arrayNumber: number[] = [5, 8, 20];
let arrayBoolean: boolean[] = [true, false];
let arrayAny: any[] = [true, "string", 30];

//Tuple
let tupleArray: [string, number, boolean] = ["string", 30, true];

// Tuple array
let players: [number, string][];

players = [
  [25, "A"],
  [30, "B"],
  [50, "C"],
];

// Tipos por inferencia
let myVariable = 60; // de any a number

// Unions: Una variable puede ser de uno o mas tipos

let myVariable2: string | number | null;

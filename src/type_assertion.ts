// Si no sabemos el tipo de un valor, lo podemos transformar

let channel: any = "Coderhouse";

// let channelStr = <string>channel
let channelStr = channel as string;

// const myCanvas = document.getElementById('main') as HTMLCanvasElement
const myCanvas = <HTMLCanvasElement>document.getElementById("main");

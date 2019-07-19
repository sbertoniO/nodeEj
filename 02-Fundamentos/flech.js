// function sumar(a, b) {
//     return a + b;
//}

// let sumar = (a, b) => {
//     return a + b;
// }


// let sumar = (a, b) => a + b;

// function saludar() {
//     return 'Hola mundo';
// }

// let saludar = () => 'Hola mundo';



// console.log(saludar());

// console.log(sumar(10, 20));

let deadpool = {
    nombre: 'wade',
    apellido: 'wilson',
    poder: 'regeneracion',
    getNombre() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
}

console.log(deadpool.getNombre());
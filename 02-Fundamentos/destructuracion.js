let deadpool = {
    nombre: 'wade',
    apellido: 'wilson',
    poder: 'regeneracion',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
}

// let nombre = deadpool.nombre;
// let apellido = deadpool.apellido;
// let poder = deadpool.poder;

let { nombre: primerNomber, apellido, poder } = deadpool;

console.log(primerNomber, apellido, poder);
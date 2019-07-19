// setTimeout(() => {
//     console.log('Hola mundo');
// }, 3000);

let getUsuarioById = (id, callback) => {

    let usuario = {
        nombre: 'Santos',
        id
    }

    if (id === 20) {
        callback(`El usuario con id 20 no existe`);
    } else {
        callback(usuario);
    }


}

getUsuarioById(10, (usuario) => {
    console.log('Usuario de base de datos', usuario);
});
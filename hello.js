// hello.js
// TODO: Implementa la función sayHello que debe:
// 1. Recibir un nombre como parámetro
// 2. Retornar un mensaje que incluya el nombre
// 3. Incluir la palabra "WillDevp" en el mensaje

function sayHello(name) {
    // Tu código aquí
}

module.exports = { sayHello };

if (require.main === module) {
    console.log(sayHello(process.env.PARTICIPANT_NAME || 'Participante'));
}
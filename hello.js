// hello.js

function sayHello(name) {
    return `Hola, soy ${name}, y conocí la StartUp WillDevp!`;
}

module.exports = { sayHello };

if (require.main === module) {
    console.log(sayHello(process.env.PARTICIPANT_NAME || 'Andrés Ayala'));
}
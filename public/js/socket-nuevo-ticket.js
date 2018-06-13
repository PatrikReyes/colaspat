// Comando para establecer la comunicación

let socket = io();
let label = $('#lblNuevoTicket')

socket.on('connect', () => {
    console.log('Conectado');
});

socket.on('disconnect', () => {
    console.log('Desconectado');
});

socket.on('estadoActual', (resp) => {
    label.text(resp.actual);
})

$('button').on('click', () => {
    socket.emit('siguienteTicket', null, (siguiemteTicket) => {
        label.text(siguiemteTicket);
    });
});
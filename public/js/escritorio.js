// Comando para establecer la comunicación


let socket = io();

let searhParams = new URLSearchParams(window.location.search);

if (!searhParams.has('escritorio')) {
    window.location = 'index.html';
}

var escritorio = searhParams.get('escritorio');
var label = $('small');

$('h1').text(`Escritorio ${escritorio}`);

$('button').on('click', () => {
    console.log('escritorio', escritorio);

    socket.emit('atenderTicket', { escritorio }, (res) => {
        if (res === 'no hay tickets') {
            alert(res);
            return;
        }

        label.text('Ticket ' + res.numero);

    });
});
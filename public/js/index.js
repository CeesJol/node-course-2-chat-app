var socket = io();

socket.on('connect', function() {
  console.log('Connected to server');

  // Send a new email to the server
  socket.emit('createMessage', {
    from: 'Cees',
    text: 'Hey. This is Cees.'
  });
});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});

// Listen to new emails from server
socket.on('newMessage', function(message) {
  console.log('New message', message);
});

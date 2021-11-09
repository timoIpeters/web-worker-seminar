const connections = [];
let messages = [];

const command = {
  ADD: 'ADD',
  SET: 'SET'
}

onconnect = function(e) {
  const port = e.ports[0];
  connections.push(port);

  port.onmessage = function(msg) {
    switch(msg.data[0]) {
      case command.ADD:
        messages = [...messages, msg.data[1]];
        break;
      case command.SET:
        messages = msg.data[1];
        break;
    }

    connections.forEach(con => {
      con.postMessage(messages);
    });
  }
}
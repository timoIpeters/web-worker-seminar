// list of connected ports
const connections = [];

// connect-event called when a port connects to the shared worker
onconnect = function(e) {
  const port = e.ports[0];
  connections.push(port);

  // receiving a message from a port will send the new value to all other ports
  port.onmessage = function(e) {
    const msg = e.data;
    connections.forEach(con => {
      con.postMessage(msg);
    });
  }
}
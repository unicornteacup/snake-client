const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.148',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  
  conn.on('connect', () => {
    console.log('We\'re connected!');
  });

  conn.on('connect', () => {
    conn.write('Name: CEJ');
  });
  
  // conn.on('connect', () => {
  //   conn.write('Move: up');
  // });

  // setInterval(() => {
  //   conn.write('Move: up');
  // }, 50);

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  return conn;

}

const connectObject = {
  connect
}

module.exports = connectObject;
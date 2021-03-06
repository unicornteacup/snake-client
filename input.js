const conn = require('./play');
let connection;
/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', handleUserInput)

  return stdin;
}

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    connection.write('Move: up')
  }
  if (key === 's') {
    connection.write('Move: down')
  }
  if (key === 'a') {
    connection.write('Move: left')
  }
  if (key === 'd') {
    connection.write('Move: right')
  }
  if (key === '3') {
    // max 20
    connection.write('Say: Out of my way worms!')
  }
  if (key === 'q') {
    connection.write('Say: Nice day 4 a slither')
  }
};

const inputObject = {
  setupInput
}

module.exports = inputObject;

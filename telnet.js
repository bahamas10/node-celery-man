var net = require('net');
var fs = require('fs');
var path = require('path');

var delay = 40;
var engage_delay = 500;
var celery_path = path.join(__dirname, './celery');
var celery = [];
var port = +process.argv[2] || 23;

var BREAK = new Buffer('fff4fffd06', 'hex').toString();
var EOF = new Buffer('ffec', 'hex').toString();

require('log-timestamp');

var conns = [];

console.log('loading 4d3d3d3...');
fs.readdirSync(celery_path).sort().forEach(function(file, i) {
  celery[i] = fs.readFileSync(path.join(celery_path, file), 'ascii');
});
console.log('engaged');

function clear(clear) {
  var s = '';
  if (clear !== false)
    s += '\033[2J';
  s += '\033[0f';
  return s;
}

var server = net.createServer(function(socket) {
  conns.push(socket);
  var r_addr = socket.remoteAddress;
  var r_port = socket.remotePort;
  console.log('CONNECT %s on %d (%d connected clients)',
      r_addr, r_port, conns.length);
  trywrite('4d3d3d3... ');

  // Flarhgunnstow
  var i = 0;
  var interval;
  setTimeout(function() {
    trywrite(clear());
    interval = setInterval(function() {
      // Hat Wobble
      trywrite(clear(false));
      trywrite(celery[i]);
      i = (i + 1) % celery.length;
    }, delay);
  }, engage_delay);

  // close the interval for celery man
  socket.on('end', end);
  socket.on('data', function(data) {
    data = data.toString();
    if (data === BREAK || data === EOF) end();
  });

  function end() {
    // remove the connection from conns
    var origlength = conns.length;
    var i = conns.indexOf(socket);
    if (i >= 0) conns.splice(i, 1);
    if (origlength > conns.length)
      console.log('DISCONNECT %s on %d (%d connected clients)',
          r_addr, r_port, conns.length);

    if (interval) {
      clearInterval(interval);
      interval = null;
    }
    if (socket) socket.end();
  }

  function trywrite(s) {
    try {
      socket.write(s);
    } catch (e) {}
  }
});

server.listen(port);

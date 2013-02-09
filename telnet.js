var net = require('net');
var fs = require('fs');
var path = require('path');
var spawn = require('child_process').spawn;

var delay = 40;
var engage_delay = 500;
var celery_path = path.join(__dirname, './celery');
var celery = [];
var port = +process.argv[2] || 23;

console.log('loading 4d3d3d3...');
fs.readdirSync(celery_path).forEach(function(file, i) {
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
  console.log('connection recieved');
  socket.write('4d3d3d3... ');

  // Flarhgunnstow
  var i = 0;
  var interval;
  setTimeout(function() {
    socket.write(clear());
    interval = setInterval(function() {
      // Hat Wobble
      socket.write(clear(false));
      socket.write(celery[i]);
      i = (i + 1) % celery.length;
    }, delay);
  }, engage_delay);

  // close the interval for celery man
  socket.on('end', function() {
    clearInterval(interval);
  });
});

server.listen(port);

#!/usr/bin/env node
/**
 * Engage 4d3d3d3
 *
 * http://www.youtube.com/watch?v=XWX4GUYGQXQ
 *
 * Author: Dave Eddy <dave@daveeddy.com>
 */

var fs = require('fs'),
    path = require('path'),
    clear = require('clear'),
    delay = (+process.argv[2]) ? +process.argv[2] : 40, // ms
    engage_delay = 1 * 500,
    celery_path = path.join(__dirname, '../celery'),
    celery = [];

// Load up the celery man
process.stdout.write('4d3d3d3... ');
fs.readdirSync(celery_path).sort().forEach(function(file, i) {
  celery[i] = fs.readFileSync(path.join(celery_path, file), 'ascii');
});
console.log('engaged');

// Engage it
function _4d3d3d3(rudd) {
  clear(false);
  console.log(rudd);
}

// Flarhgunnstow
var i = 0;
setTimeout(function() {
  clear();
  setInterval(function() {
    // Hat Wobble
    _4d3d3d3(celery[i]);
    i = (i + 1) % celery.length;
  }, delay);
}, engage_delay);

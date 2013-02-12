#!/usr/bin/env node
/**
 * Engage 4d3d3d3
 *
 * http://www.youtube.com/watch?v=XWX4GUYGQXQ
 *
 * Author: Dave Eddy <dave@daveeddy.com>
 */

var fs = require('fs');
var path = require('path');

var clear = require('clear');
var say = require('say');

var delay = (+process.argv[2]) ? +process.argv[2] : 40; // ms
var engage_delay = 500;
var celery_path = path.join(__dirname, '../celery');
var celery = [];

var voices = [
  {voice: 'zarvox', text: 'richardson richardson'},
  {voice: 'trinoids', text: 'engaged'},
  {voice: 'trinoids', text: '4d3d3d3'},
  {voice: 'zarvox', text: 'magnus, magnus'},
  {voice: 'trinoids', text: 'not suitable for work'},
  {voice: 'alex', text: 'I have a beta sequence i\'ve been working on, would you like to see it?'},
];

var _v = voices[Math.floor(Math.random() * voices.length)];
say.speak(_v.voice, _v.text);

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

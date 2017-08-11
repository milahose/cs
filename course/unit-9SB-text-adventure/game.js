#!/usr/bin/env node
const readline = require('readline');
var telnet = require('telnet')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const terminal = rl.output;
terminal.write('Would you like to play?\n');
// const deferred = $.Deferred();

rl.question

// deferred.done(function() {
//    document.write('Would you like to play?\n');
// });

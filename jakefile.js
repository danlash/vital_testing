var exec = require('child_process').exec
  , util = require('util')
  , fs   = require('fs');

task('default', ['specs'])

desc('Runs the specs')
task('specs', function(){
  exec('mocha -R list roman_numerals_specs.js', function(err, stdout, stderr) {
      util.puts(stdout) 
      util.puts(stderr) 

      complete();
    });  
})

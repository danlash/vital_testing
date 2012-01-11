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


var walk = function(dir, done) {
  var results = [];

  fs.readdir(dir, function(err, list) {
    if (err) return done(err);

    var pending = list.length;
    if (!pending) return done(null, results);

    list.forEach(function(file) {
      file = dir + '/' + file;

      fs.stat(file, function(err, stat) {

        if (stat && stat.isDirectory()) {

          walk(file, function(err, res) {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });

        } else {
          results.push(file);
          if (!--pending) done(null, results);
        }
      });
    });
  });
};               
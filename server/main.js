import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup

  //TODO::test code for run .py file from backend, remember to delete this!
  var exec = require('child_process').exec;
  var arg1 = 'hello';
  var arg2 = 'world';
  var filename = 'D:\\Things_on_GitHub\\SR.Web\\server\\test_py.py'
  exec('python' + ' ' + filename + ' ' + arg1 + ' ' + arg2, function (err, stdout, stderr) {
    if (err) {
      console.log('stderr', err);
    }
    if (stdout) {
      console.log('stdout', stdout);
    }

  });
});

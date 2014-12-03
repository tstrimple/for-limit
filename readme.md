## note ##
Currently the loop is inclusive. That means if you pass 1, 100 it will include both 1 and 100 in the iterator call.

# example usage #
    var forLimit = require('for-limit');

    function doSomething(i, next) {
      setTimeout(function() { 
      	console.log('something:', i); 
      	next(); }, 
      Math.random() * 1000); // simulate variable time asynchronous function
    }

    function allDone(err) {
      console.log('all done');
    }

    forLimit(1, 100, 10, doSomething, allDone);

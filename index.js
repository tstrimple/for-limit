
var forLimit = function (start, end, limit, iterator, callback) {
	var fn = _forLimit(limit);
	fn.apply(null, [start, end, iterator, callback]);
};

var _forLimit = function (limit) {
  return function (start, end, iterator, callback) {
  	console.log('creating limit function.');
    callback = callback || function () {};
    if (!end || limit <= 0) {
      return callback();
    }
    var current = start;
    var completed = 0;
    var started = 0;
    var running = 0;

    (function replenish () {
      if (completed >= end) {
        return callback();
      }

      while (running < limit && started < end) {
        started += 1;
        running += 1;
        iterator(current, function (err) {
          if (err) {
            callback(err);
            callback = function () {};
          }
          else {
						completed += 1;
            running -= 1;
            if (completed >= end) {
              callback();
            }
            else {
              replenish();
            }
          }
        });

				current += 1;
      }
    })();
  };
};

module.exports = forLimit;

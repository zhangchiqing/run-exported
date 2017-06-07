var assert = require('assert');
var path = require('path');
var usage = function() {
  return 'Usage:\n' +
         'run-exported math.js add 2 3';
};

var is = function(type, value) {
  return Object.prototype.toString.call(value) === '[object ' + type + ']';
};

var isString = function(value) {
  return is('String', value);
};

var isFunction = function(value) {
  return is('Function', value);
};

module.exports = function() {
  // String
  var filePath = process.argv[2];
  // String
  var exported = process.argv[3];
  assert(isString(filePath), usage());
  assert(isString(exported), usage());

  // [String]
  var args = process.argv.slice(4);

  // so that the required module can still use `process.argv[2]` to refer to the additional arguments
  process.argv = process.argv.slice(0, 1).concat(process.argv.slice(2, 3)).concat(args);

  // Might raise error if not found
  var mod = require(path.resolve(filePath));

  assert(isFunction(mod[exported]),
    'Can not find exported function "' + exported + ' in file: ' + filePath);

  return mod[exported].apply(mod, args);
};

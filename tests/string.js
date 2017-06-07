// String, String -> String
var concat = function(a, b) {
  return a + b;
};

exports.concat = function() {
  console.log(concat(process.argv[2], process.argv[3]));
};

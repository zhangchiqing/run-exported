### How to install
```
npm install -g run-exported
```

### How to run
Let's say we have a node module `script.js` that exports a function `main` that computes some value and print it:
```
var fib = function(n) {
  if (n === 0) { return 0; }
  if (n < 2) { return 1; }
  return fib(n - 1) + fib(n - 2);
};

exports.main = function() {
  console.log(fib(10));
};
```

To run the script, we will have to add a new line into the file
```
exports.main();
```

Instead, we can use `run-exported` to run the exported `main` function like this:
```
run-exported script.js main
55
```

### How to run with arguments
Let's say the main function now takes the number from arguments
```
var fib = function(n) {
  if (n === 0) { return 0; }
  if (n < 2) { return 1; }
  return fib(n - 1) + fib(n - 2);
};

exports.main = function() {
  console.log(fib(parseInt(process.argv[2], 10)));
};
```

To pass the arguments to the script, simply appending the arguments like this
```
$ run-exported script.js main 10
55
```

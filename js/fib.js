// memorization
var fib = (function () {
    var cache = {};
    return function(n) {

        if (cache[n]) {
            console.log('returning from cache');
            return cache[n];
        }

      if (n <= 0) {
        return 0;
      }
      if (n === 1) {
        return 1;
      }
   
      return cache[n] = fib(n-1) + fib(n-2);

    }
})();

console.log(fib(500));

// recursion
var fibR = (function () {
  return function (n) {
    if (n<=0) {
      return 0;
    }
    if (n === 1) {
      return 1;
    }
    return fibR(n-1) + fibR(n-2);
  };
})();
console.log(fibR(6));

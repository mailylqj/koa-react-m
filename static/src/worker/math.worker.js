var fibo = function fibo (n) {
    return n > 1 ? fibo(n - 1) + fibo(n - 2) : 1;
};

self.addEventListener('message', function (e) {
    console.log(e.data)
    var n = e.data.args;
    var result = fibo(n)
    self.postMessage(result);
    console.log('You said: ' + result);
}, false);
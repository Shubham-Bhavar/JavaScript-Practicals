// Generate infinite Fibonacci sequence using generator

var fibGenerator = function* () {
    let a = 0, b = 1;

    while (true) {
        yield a;              // return current value
        [a, b] = [b, a + b]; // update values
    }
};

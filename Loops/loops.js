// For more info, watch the Shining...
function work(times) {
    for (i = 0; i < times; i++) {
        document.write("All work and no play makes Jack a dull boy.", "");
    }
}

// A function for calculating a factorial
function factorial(number) {
    var result = 1;
    for (i = number; i > 0; i--) {
        result = result * i;
        console.log(result);
    }
    return result;
}

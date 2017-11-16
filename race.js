function hello(min, max) {
    var num = Math.floor((max - min + 1) * Math.random());



    if (num == 0) {
        return num + 2
    }
    if (num % 2 == 0) {
        return num;
    } else {
        return num + 1;
    }

}

function goodbye(min, max) {
    var numodd = Math.floor((max - min + 1) * Math.random());


    if (numodd % 2 == 1) {
        return numodd;
    } else {
        return numodd + 1;
    }
}

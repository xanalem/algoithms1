function shuffleArray(array) {
    for (i = array.length - 1; i > 0; i--) {

        var x = Math.floor(Math.random() * (i + 1));

        var temp = array[i];

        array[i] = array[x];
        array[x] = temp;
    }
    return array[x];
}

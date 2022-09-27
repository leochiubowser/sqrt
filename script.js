function sqrt(input) {
    var index = 1;
    var index_plus = 1;
    var times = 0;
    var result;
    var max = input;
    var min;


    while (times < total_times) {
        if (Math.pow(max - index, 2) < input) {
            min = max - index;
            max = min + index_plus;
            index = 0;
            index_plus /= 10;
            times += 1;
        }
        else {
            index += index_plus;
        }
    }

    result = min;
    h1.innerText = result;
}

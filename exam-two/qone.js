function minimumNumber(inputNumbers){
    let minNumber = 0;
    inputNumbers.forEach(function(value, index, array){
        // console.log(value);
        if(value > minNumber){
            minNumber = value;
        }
    });
    return minNumber;
}

const numbers =  ["10", "21", 3, "14", "53", 55, "36", 480];

console.log(minimumNumber(numbers));
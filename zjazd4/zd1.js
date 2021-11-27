const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', input => {
    const stringArray = input.split(' ');
    const parsedArray = stringArray.map(temp => parseInt(temp, 10));
    console.log(zd1(parsedArray));
    rl.close();
});

function zd1(array) {
    var a = array[0];
    var b = array[1];
    var c = array[2];

    if (a*a+b*b==c*c || a*a+c*c==b*b || c*c+b*b==a*a) {
        return "To jest trójka pitagorejska";   
    } else{
        return "To nie jest trójka pitagorejska";
    }

}
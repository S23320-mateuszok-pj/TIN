const readline = require('readline');
console.log("1:Bok a, 2:Bok b, 3: wysokosc, 4:figura 1-trojkat 2-prostokat 3-rownoleglobok 4-trapez")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', input => {
    const stringArray = input.split(' ');
    const parsedArray = stringArray.map(temp => parseInt(temp, 10));
    console.log(zd7(parsedArray)); 
    rl.close();
});

function zd7(array) {
    var a = parseFloat(array[0]);
    var b = parseFloat(array[1]); 
    var h = parseFloat(array[2]); 

    switch (array[3]) {
        case 1:
            return (a*h)/2;
        case 2:
            return a*b;
        case 3:
            return a*h;
        case 4:
            return(a+b)*h;
        default:
            break;
    }
}
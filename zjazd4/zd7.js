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
            console.log(trojkat(array[0],array[2]));
        case 2:
            console.log(prostokat(array[0],array[1]));
        case 3:
            console.log(rownoleglobok(array[0],array[2]));
        case 4:
            console.log(trapez(array[0],array[1],array[2]));
        default:
            break;
    }

    function trojkat(a,h) {
        return (a*h)/2;
    }

    function prostokat(a,b) {
        return a*b;
    }

    function rownoleglobok(a,h) {
        return a*h;
    }

    function trapez(a,b,h) {
        return(a+b)*h;
    }
}
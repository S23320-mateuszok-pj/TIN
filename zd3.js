const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', input => {
    console.log(zd3(parseInt(input)));
    rl.close();
});

function zd3(input) {
    let bok = input;
    let string = '';    
    for ( let i = 1; i <= bok ;i++) {
        for (let j = 1; j <= bok; j++) {
            string += (i*j) + '\t';            
        }
        string += "\n"
    }
    return string;
}
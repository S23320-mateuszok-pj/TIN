const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', input => {
    console.log(zd5(parseInt(input)));
    rl.close();
});

function zd5(input) {
    let string = '';
    for (let i = 0; i <= input ; i++) {
        for (var j = 0; j <= i; j++) {
            string+='*';                    
        }
        string+='\n';      
    }
    return string;
}
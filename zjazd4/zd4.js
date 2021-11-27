const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', input => {
    let str = '';
    for (let i = 0; i<parseInt(input); i++)
        str += fib(i) + ' ';
    console.log(str);
    rl.close();
});


function fib(num) {
    if(num == 0) return 0;
    if(num == 1) return 1;
    return fib(num-1)+fib(num-2);
}
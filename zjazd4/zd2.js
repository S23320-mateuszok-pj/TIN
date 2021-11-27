const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', input => {
    const stringArray = input.split(' ');
    const parsedArray = stringArray.map(temp => parseInt(temp, 10));
    zd2(parsedArray);
    rl.close();
});

function zd2(array) {
    let a = array[0];
    let b = array[1];
    let c = array[2];
    let str = '';
    for(let i = a; i <= b; i++){
        if(i%c === 0)
            str += (i/c) + ' ';
    }        
    
    console.log(str);

}
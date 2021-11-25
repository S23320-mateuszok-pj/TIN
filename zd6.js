const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', input => {
   console.log(zd6(parseInt(input)));
    rl.close();
});

function zd6(input) {
    let string='';  
    for (let i=1; i<=input; i++)
    {
        for (let j = i; j <= input; j++)
        {
            string+="*";
        }
        for (let k = 1; k <= i*2-2; k++)
        {
            string+=" ";
        }
        for (let l = i; l <= input; l++)
        {
            string+="*";
        }
        string+="\n";
    }
    return string;
}
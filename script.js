//console.log(eval("2*3+2"))
let num1 = 25;
let num2 = 11;
let op;

function clean(){
    document.getElementById('result').innerHTML = '';
    return
}

function solve(){
    let result;
    switch (op) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case 'sqrt':
            result = Math.sqrt(num2);
            break;
        case 'sqrt':
            result = Math.sqrt(num2);
            break;
    }
    document.getElementById("result").innerHTML = result;
}
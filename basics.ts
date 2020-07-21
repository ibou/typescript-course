
function add(n1: number, n2: number, show_result: boolean, phrase: string) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new Error('Error input');
    }
    const result = n1 + n2;
    if (show_result) {
        console.log(phrase + result);
        return show_result;
    } else {
        return n1 + n2;
    }
}

let number1: number ;
number1 = 5; //'5';
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'un zero result >> '
const result = add(number1, number2, printResult, resultPhrase);
console.log(result);

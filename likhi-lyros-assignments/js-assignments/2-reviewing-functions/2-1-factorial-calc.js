// reviewing functions
// reviewing functions is not a particular concept. it includes the different types of functions

// writing a factorial calculation func using recursive functions

// recursive functions --> functions that call themselves to solve a problem are called recursive functions.

// example:
function fact(n) {
    if (n==0) {
// factorial of 0 is 1
        return 1;
    }
    return n*fact(n-1); 
// here the func factorial will repeat itself again and again until the given cond is satisfied.
//  fact of 1=1 (from line no 12); fact of 2==> (line no 14) 2*fact(2-1)==>2*fact(1)=> 2*1 =2; fact of 3==> 3*fact(2)==> 3*2==>6
}

console.log(fact(4));


//// fatorial of 1-10 numbers

// recursive func
function factorial(n) {
    if (n===0) {
        return 1;
    }
    return n*factorial(n-1);
}

// main func
function printFactorial() {
    for (let i=1;i<=10;i++) {
        console.log(`Factorial of ${i} is ${factorial(i)}`)
    }
}

printFactorial();



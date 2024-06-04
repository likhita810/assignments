// an array in js is a type of global object that is used to store ordered list of different types of data. each element in an array containing n items is assigned with an index starting from 0 for the first position to (n-1) index for the last element. the index of last element is also said to be -1 from the backward direction.

// function to initialize first 10 positive integers
//  an empty array is is initialized by the func initialiazeArray and using for loop, the numbers are pushed into the array.

function initializeArray() {
    let arr=[];
    for (let i=1;i<=10;i++) {
        arr.push(i);
    }
    return arr;
}

// function to print all elements of an array
//  this func is used to print all the elements in the array.

function printArray(arr) {
    for (let i=0; i<arr.length; i++) {
        console.log(arr[i]);
    }
}

// main function to call to display all elements initialized in array
// this main func is used to call the initialized array func and the print func to get all elements.

function main() {
    let array=initializeArray();
    printArray(array);
}

// calling the function to get the output - functions have to called to get the execution of results a function returns.
// the main is called to execute the final output of the program.

main();
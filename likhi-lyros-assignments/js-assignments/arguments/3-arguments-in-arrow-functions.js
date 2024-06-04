// arguments keyword in js is an array-like object that contains value of the arguments passed to the function.

//  normal functions
function regularFunc() {
    console.log(arguments);
};

regularFunc(1,2,3,4);


//  arrow functions - the function keyword is not required to be specified in arrow functions, instead they can directly be declared.
const arrowFunction = () => {
    console.log(arguments);
};

// arrowFunction(1,2,3);

// line num 16 gives an error "ReferenceError: arguments is not defined at arrowFunction" 

// why arguments doesnt work in arrow functions
// they do not have 'arguments' object, instead they inherit from the closest non-arrow function.

// example:
function outerFunc() {
    const arrowFunc = () => {
        console.log(arguments);
    };
    arrowFunc(1,2,3);
};
outerFunc(4,5,6);
// here both arrowFunc and outerFunc are given arguments but the outer function's arguments will be displayed in the console.log which is inside arrowFunc. This is because the arrow functions take the arguments from the closest non-arrow function.


// but if you still want to access the arguments of an arrow function u can use `...args` the rest parameters syntax. this allows us to gather all arguments into the array.

// example
const arrowFunction2 = (...args) => {
    console.log(args);
};

arrowFunction2(9,8,7,6);
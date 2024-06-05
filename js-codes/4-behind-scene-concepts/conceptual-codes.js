//////// scoping --> determines the accessibility of var,objects and functions from different parts of the code. i.e. becoz of scoping we can call any var, object/ function at any point of time in a code.
// still calling/accessing them can still depend on the global and local declarations thou.

function calcAge (dob) {
    const age=2024-dob;

    function printAge() {
        let output = `${firstName}, you are ${age} years, old born in ${dob}.`;
        console.log(`output in printAge func: ${output}`);

        let str=`str in printAge(): ${firstName} you are ${age} years old.`;

        if (dob >=1981 && dob<=1996) {
            var millenial=true;
            // creating same var as outer scope var
            const firstName='Christopher';
            // firstName here is a local variable. cant be accessed outside this block.

            // reassigning outer scopes var
            output = 'NEW OUTPUT';

            const str=`Oh! you are a millenial, ${firstName}`;
            console.log(`str from if cond: ${str}`);

            function product(a,b) {
                return a*b;
            }
            console.log(`calling product func within if cond before calling printAge func: ${product(4,5)}`);
        }

        console.log(`str from printAge func: ${str}`);
        console.log(`millenial: ${millenial}`);
        console.log(`calling product func in if cond outside the if block before calling printAge func: ${product(7,6)}`);
        console.log(`output from printAge func:${output}`);
    }
    printAge();
    return age;
}

const firstName = 'Fernandes';
let age = calcAge(1988);
console.log(`age of ${firstName} is ${age}`);
// console.log(`calling product func within if cond after calling printAge func: ${product(4,5)}`);
// line 43 wont be executed as product func is inside the printAge func and thus can be access inside it.



//////// hoisting

//  it represents that anything could be accessed only after they are declared.

// the process where the interpreter appears to move the declaration of fucntions, vars, classes or imports to the top of their scope, prior to execution of the code.

// varibales

// console.log(noun);
// wont be executed before initialization

console.log(job);
// undefined 

// console.log(students);
// wont be executed before initialization

// thou variable with var is not executed it doesnt show any error either.

let noun = 'ramakrishna';
var job = 'trainer';
const students = 21;


// functions

console.log(division(2,4));

function division(a,b) {
    return a/b;
}

//////// window -object

var x = 1;
let y = 2;
const z = 3;

console.log(window)

console.log(x===window.x);
console.log(y===window.y);
console.log(z===window.z);

// this is returning true only for variables declared with var keyword.


//////// 'this' keyword

console.log(this);
// this will reflect the current running window.

const calcAgeAnonymous = function (dob) {
    console.log(2025-dob);
    console.log(this);
    //  will also return the current running window.
}

calcAgeAnonymous(1998);

// 
const ageArrowfunc = (dob) => {
    console.log(2024-dob);
    console.log(this);
    // current window.
}
ageArrowfunc(1996);

// this is also used to access a var from most nearest func

const ageObj = {
    year: 1976,
    calcAge: function() {
        console.log(this);
        console.log(2024-this.year);
    },
};

ageObj.calcAge();

const divyaObj = {
    year: 1997,
};

divyaObj.calcAge = ageObj.calcAge;
divyaObj.calcAge();



//////// regular functionc vs arrow functions

const obj = {
    firstName2 : 'Chinni',
    year: 1991,
    ageCalc : function () {
        console.log(`-------------ageCalc----------`);
        console.log(this);
        console.log(2023-this.year);

        // is millenial - regualr func
        const self=this;
        const isMillenial1 = function() {
            console.log(self);
            console.log(self.year >=1981 && self.year <=1996);
            // will return a boolean value
        }
        isMillenial1();

        // is millenial - arrow functinos
        const isMillenial2 = () => {
            console.log(self);
            console.log(self.year >=1981 && self.year <=1996);
        }
        isMillenial2();
        },

        greet1 : () => {
            console.log('--------greet1-----------');
            console.log(this);
            console.log(`hey, ${this.firstName2}`);
        },

        myWish: function () {
            console.log('---------mywish---------');
            console.log(this);
            console.log(`hello, ${this.firstName2}`);
        }
    };

    obj.ageCalc();
    obj.greet1();
    obj.myWish();


//////// arguments keyword

//  with reg functions
const add = function (a,b) {
    console.log(arguments);
    //  wont be executed as arrow functions doesnt have arguments keyword.
    return a+b;
}

let argAdd = add(23,43);
console.log(argAdd);

// with arrow functions
var sub = (a,b) => {
    // console.log(arguments);
    return a-b;
}

let subArg = sub(23,12);
console.log(subArg);



//////// objects vs primitives

// primitives = data that are stored in directly in a variable.
// observed in variables
let age1 = 25;
console.log('age1:', age1);

let oldAge = age1;
console.log('oldAge', oldAge);

age1 = 31;
console.log('age1 after changing', age1);
console.log('oldAge after chnaging age1', oldAge);
// updating age1 doesnt reflect in oldAge

// ex-2
let lastName='konathala';
console.log(lastName);

let newLastName=lastName;
console.log(newLastName);

newLastName='gunda';
console.log(newLastName);
console.log(lastName);


// objects = collection of properties (association of key - value pair)
//  reference types - this is observed in objects
const me = {
    name1: 'maira',
    age: 5,
};
console.log('age in me', me.age);

const rashi = me;
rashi.age = 8;

console.log('me: ',me.age);
console.log('rashi: ', rashi.age);
// updating rashi.age will be reflected in me.age


// ex-2

const unmarried = {
    firstName3:'roshni',
    lastName2:'konathala',
    age:26,
};

console.log(unmarried.lastName2);

const married = unmarried;
married.lastName2='gunda';
console.log(married.lastName2);
console.log(unmarried.lastName2);
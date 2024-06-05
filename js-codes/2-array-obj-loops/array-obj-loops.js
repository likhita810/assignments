// arrays --> a var used to hold/store a group of items/elements.
// array is defined by [] and gives gives index to each element beginning from 0 by default.
// if no. of ele = n ==> index of last element is (n-1) from beginning or -1 from last.

// eg-1

const fam= ['devki', 'roshi', 'likhu'];
console.log(fam);

///////// accessing particular element from an Array- using INDEX method
console.log(fam[1]);

//////// fining no of elements in an array- using length
console.log(fam.length);

//////// updating elements in an array - using index method
fam[2]='likhi'
console.log(fam);

//////// array inside another array
const famName='konathala'
const konathala=[famName, 2024-1976,fam];
console.log(konathala);
console.log(konathala[2]);

//////// basic array methods/operations
// adding elements to an existing array - using push() and unshift() methods
//  push- adds at the end (-1 index), unshift- adds at 0 index
const newFam=fam.push('akhil');
console.log(newFam); /*this gives only count of elements*/
console.log(fam); 

console.log(fam.unshift('divya')); /*this gives only count of elements*/
console.log(fam);

// removing elements from an array - using pop() and shift()
// pop - removes element at -1 index, shift- removes element at 0 index
console.log(fam.pop());
console.log(fam);

console.log(fam.shift());
console.log(fam);

///////// finding index of an element
console.log(fam.indexOf('likhi'));

console.log(fam.indexOf('akhil')); /*returns -1 if requested element doesnt exist in the array*/

//////// anonymous functions - calling an array func inside an array
const calcTip = function (bill) {
    return bill>=50 && bill<=300 ? bill*0.5 : bill*0.2;
}

const bills = [148, 29, 467, 234, 765, 46];
const tips = [calcTip(bills[0]), calcTip(bills[1]),calcTip(bills[2]), calcTip(bills[3]),calcTip(bills[4]), calcTip(bills[5])];
const totalBills = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2],bills[3]+tips[3],bills[4]+tips[4],bills[5]+tips[5]];

console.log(bills);
console.log(tips);
console.log(totalBills); /*can be simplified with loops concept.*/

//////// introduction to objects
// objects have a set of key value pair instead of just having the value.
// represented in []

// eg:

const likhi=['likhita', 'konathala', 25, 'SDE',['prasanna', 'vamsi']]; /*this is a simple array*/
console.log(likhi);

////// object properties

const likhiObject = { /*defining an object*/
    firstName:'konathala', /*line 72-76: are the properties of object with obj name likhiObject*/
    lastName:'likhita',
    age:25,
    profession:'SDE',
    friends:['prasanna', 'vamsi'],
};
console.log(likhiObject);

// accessing elements(called properties in objects) in an object - using . (dot) or [] (bracket notation)

console.log(likhiObject.firstName);
console.log(likhiObject['friends']); /*friends is a property inside obj thus, ""/'' 'd to be used*/

//  accessing from concatenation method

const job='prof'
console.log(likhiObject[job+'ession']);

// accesing from user input

// const interestedIn = prompt('what are you interested to know about likhita?')
// if (likhiObject[interestedIn]) { /*here interestedIn is a var outside obj, so ''/"" is not required*/    
//     console.log(likhiObject[interestedIn]);
// } else {
//     console.log('Data insufficient. We can\'t provide you any details other than available queries.')
// };

// declaring new properties to object
likhiObject.proper = 'Anakapalli';
likhiObject['Work location'] = 'Bangalore';

console.log(likhiObject);

////// object methods

// eg-1 
const objMethods = {
    // properties
    firstName:'Pari',
    lastName: 'Mehta',
    dob: 1993,
    job:'model',
    visa: true,

    // methods
    calcAge: function() {
        this.age = 2024-this.dob; 
        // this.age is a local variable accessible only inside calcAge func
        return this.age; 
        // this. is a method used to access the property used within the obj func
    },

    getSummary: function () {
        return `${this.firstName} ${this.lastName} is a ${this.calcAge()} years old ${this.job} having ${this.visa? 'visa':'no visa'} to travel and work in abroad.`;
    }
};

console.log(objMethods.calcAge());
console.log(objMethods.getSummary());

// eg-2 calculating bmi

const jennie = {
    fullName: 'Jennie',
    weight: 53,
    height: 1.58,

    calcBMI : function () {
        this.bmi = this.weight / (this.height**2);
        return this.bmi;
    }
};

console.log(`${jennie.fullName}\'s BMI is ${jennie.calcBMI()}`);

// eg-3:

const jackson = {
    fullName: 'Jackson',
    weight: 74,
    height: 1.78,

    calcBMI : function () {
        this.bmi = this.weight / (this.height**2);
        return this.bmi;
    }
};

const urBMI=jackson.calcBMI();
console.log(urBMI);

if (urBMI < 18.5) {
    console.log(`you are ${18.5-urBMI} kg/m2 less than the healthy BMI.`)
} else if (urBMI > 25) {
    console.log(`you are ${urBMI-25} kg/m2 more than the healthy BMI.`)
} else {
    console.log(`you have a healthy BMI of ${urBMI} kg/m2`)
};


//////// iteration - repeating the same for n iterations.
////// for loop

// eg-1 forward looping
for (let rep=0; rep<5; rep++) {
    console.log(`repetition number ${rep}`);
};

// eg-2 backward looping
for (let rep=5; rep>=0; rep--) {
    console.log(`repetition number ${rep}`);
};

// eg-3

// const likhiObject = { 
//     firstName:'konathala',
//     lastName:'likhita',
//     age:25,
//     profession:'SDE',
//     friends:['prasanna', 'vamsi'],
// };

console.log(likhiObject);
console.log(likhiObject[0]); /*this is not possible as objects doesnt have index instead hv properties with which the values can be accessed.*/

console.log(likhi);
const types=[];

// checking typeof each element in the likhiObject using for loop

for (let i=0; i<likhi.length; i++) {
    console.log(likhi[i],'-', typeof likhi[i]);

    // filling typeof in types array

    types.push(typeof likhi[i]);
}

console.log(types);

// eg-4 calculating ages

const years = [1976,1996,1998, 1994, 1997, 1995];
const agesNew = [];

for (let i=0;i<years.length; i++) {
    agesNew.push(2024-years[i]);
}
console.log(agesNew);

// eg-5

// nrml method
// const bills = [148, 29, 467, 234, 765, 46];
// const tips = [calcTip(bills[0]), calcTip(bills[1]),calcTip(bills[2]), calcTip(bills[3]),calcTip(bills[4]), calcTip(bills[5])];
// const totalBills = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2],bills[3]+tips[3],bills[4]+tips[4],bills[5]+tips[5]];

// console.log(bills);
// console.log(tips);
// console.log(totalBills); 

// loops concept

// eg-1
const varName=[4,10,'abcd',0.34,true];
for (let i=0;i<varName.length;i++) {
    console.log(varName[i],"-",typeof varName[i]);
}


// eg-2
const calcTips = function (bill) {
    return bill>=50 && bill<=300? bill*0.5:bill*0.2;
}

const billS = [34,656,34,565,256,778,213,453];
const tipS = [];
const totalBill = [];

for (let i=0; i<billS.length; i++) {
    // const tip = calcTips(billS[i]);
    tipS.push(calcTips(billS[i]));
    totalBill.push(tipS[i] + billS[i]);
}
console.log(billS, tipS, totalBill);


////// continue and break

// ex-1 break ==> breaks the array at specified condition.
const array=[2,4,6,7,'abs',0.2,'cls',74,true,'true']
for (i=0;i<array.length;i++) {
    if (typeof array[i]==='string')
        break;
        console.log(array[i],typeof array[i]);
}

// ex-2 continue ==> continues the execution leaving the speficief condition
const array2=[2,4,6,7,'abs',0.2,'cls',74,true,'true']
for (i=0;i<array2.length;i++) {
    if (typeof array[i]==='string')
        console.log(array2[i],typeof array2[i]);
        continue;
}

// ex-3
const array3=[2,4,6,7,'abs',0.2,'cls',74,true,'true']
for (i=0;i<array3.length;i++) {
    if (typeof array[i]==='string') 
        continue;
        console.log(array3[i],typeof array3[i]);  
}

//////// while loops
let rep=1;
while (rep<=10) {
    console.log(`while loops repetition num ${rep}`);
    rep++;
}

// dice example

// Math.trunc() is a static method --> returns a whole number by removing any fractional part.
// Math.randon() returns a float number between 0-1 i.e. from 0.00000___ to 0.99999_____
// here we multiply that num with 6 as a dice has 6 faces and whole number of any num from 0.0-0.9 multiplied will be less than 6, we add 1 to get 6 so that the rolling of dice comes to an end.
// like: let the random number be 0.754557757 so Math.trunc(0.754557757*6) ==> 4.527346542, so 1 will be added to this and dice value here will be 5.

let dice=Math.trunc(Math.random()*6) + 1;
while (dice !==6) {
    console.log(`You rolled a ${dice}`);
    dice=Math.trunc(Math.random()*6) + 1;
    if (dice===6) {console.log(`the loops is about to end.`)};
}
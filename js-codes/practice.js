// // identifiers

//     fullName="likhita"
//     full_name43 = 'abcd'

//     // variables

//     // a key word added with identifier is a variable

    var first$name='konathala';
    let last_name="likhita";
    console.log(first$name+" "+last_name);

function makefullname(fn,ln) {
    console.log(firstname+" "+lastname);
}
const firstname="a";
const lastname="b";
const fullname=makefullname(firstname,lastname);

console.log(2+5);

//operators.
 //mathematical operators (+,-,,*,/)...

 //example 1
 const year=2024;
 const dob=1997;
 const age=year-dob;
 const ageafter=age+12;
 console.log("my age is",age);
 console.log(`my age after 12 years is ${ageafter}`);
 
 //example2
 const number=1997;
 const divnum=number/36;
 const pro=divnum*7;
 const power=pro**2;
 console.log(`the number obtained upon dividing the ${number}with 36 is ${divnum}`);
 console.log(`the number obtained upon multiplying the ${divnum}with 36 is ${pro}`);
 console.log(`the number  ${pro} raised twice is ${power}`);
 
 //assignment operators (+=,-=,*=,/=)...
 
 //example 1
 let x=4+5;
     x+=15;
 console.log(x);
 
 //example 2
 let apple=20-3;
     apple-=5;
     console.log("i need",apple,"apples");
 //example 3
 let xyz=810/10;
     xyz*=2;
     console.log(xyz);
 //example 4
   xyz/=32;
   console.log(xyz);
 
 //incrementing and decrementing operators (++,--)..
 
 //example 1
 let a=4;
     a++;
     console.log(a);
     console.log(++a);
     console.log(a--);
     console.log(--a);
     console.log(a--);
     console.log(--a);
 
 
 //comparision operators (==,!=,===,!==,<,>,<=,>=)...
 
 //example 1..
 console.log(8==10);
 console.log(8!=10);
 console.log(14==="14");
 console.log(11!=="23");
 console.log(2<3);
 console.log(4>6);
 console.log(3<=4);
 console.log(5>=5);
 
 //operator precedence...
 
 //example 1
 let abc =2+3-6/4*2;
 console.log(abc);
 
 //example 2
 let naresh=2-(3+6)*2/2;
 console.log(naresh);
 
 //example 3
 let likitha=8+(1*0)-1*(9*9)/8;
 console.log(likitha);
 
 //strings and template literals..
 
 //example1
 let name1= "prabhas";
 let age1 = 44;
 let job = "actor";
 let statement=name1 +" is an" + job+" and he is" + age1+" years old";
 console.log(statement);
 
 //decision statements using if,else statements....
 
 //example1..
 
 const age2= 47;
 if(age2>=18) console.log("she has right to vote");
 
 //example2..
 
 const age3= 13;
 if(age3>=18) console.log("she has  right to vote");
 else{
     const yearsleft=18-age3;
     console.log(`she has to wait for ${yearsleft} more years `);
 }
 
 //example3..
 
 const marks= 67;
 if(marks>=85) {
     console.log("he got A grade");
 } 
 else if(marks<85 && marks>=70) {
     console.log("he got B grade");
 }
 else if(marks<70 && marks>=55) {
     console.log("he got c grade");
 }
 else if(marks<55 && marks>=35) {
     console.log("he got d grade");
 }
 else if(marks<35) {
     console.log("better luck next time");
 }

 
 //example 5
 
 const day= "sunday";
 switch (day){
 
     case"monday": 
         console.log("he got");
         break;
     case"tuesday": 
         console.log("he got j grade");
         break;
      case"wednesday": 
         console.log("he got s grade");
         break;
     case"thursday": 
         console.log("he got  r grade");
         break;
      case"sunday": 
         console.log("he got  b grade");
         break;
 
 }

  
 //example 4..
 
 function getGrade(marks1) {
  marks1= 67;

 switch (true){
 
     case("marks1>=85"): 
         console.log("he got A grade");
         break;
 
     case"marks1>=70 && marks1<85":
         console.log("he got B grade");
         break;
 
     case"marks1>=55 && marks1<70": 
         console.log("he got c grade");
         break;
     
     case"marks1>35 && marks1<55": 
         console.log("he got d grade");
         break;
     
     case"marks1<35": 
         console.log("better luck next time");
         break;

    default:
        console.log("please enter marks between 0-100.")
     
 }
 }

//   user inputs (prompt) along with switch-case and functions

function fruitname_bycolor(color) {
    let fruit;

    switch (color) {
        case 'yellow':
            fruit="mango";
            break;
        
        case 'red':
            fruit='apple';
            break;
        
        case 'black':
            fruit='grapes';
            break;

        case 'green':
            fruit='guava';
            break;

        case 'violet':
            fruit='dragen fruit';
            break;

        default:
            fruit="Opps!! i dont know any fruit with that color."

    }

    return fruit;
}



// commenting (line no 241 - 243) to not ask again just to cont with other concepts.

// let fruit_color = (prompt('give me a color ill tell the name of the fruit..'));
// let fruit=fruitname_bycolor(fruit_color);
// console.log(`the fruit with ${fruit_color} color is ${fruit}.`);

// logical operators (&& , ||, !)

// && --> all the given conditions should be true. 
// || --> any given condition should be true.
// the final result will be a boolean value.
// 1=true , 0= false.

// eaxmple1:

const yes=1;
const no=0;

console.log(yes&&no);
console.log(yes||no);
console.log(yes&&!no);
console.log(!yes||no);

// example 2:

console.log((yes&&no)&&(yes||no));
// (yes&&no) - cond-1
// (yes||no) - cond-2
// cond1 && cond-2 --> cond3- final cond
console.log((yes&&no)||(yes||no));




// conditional (ternary) operator

// expression and statements.
// single line conditions/code.

let my_age=25;

// expression? stmt-1 ( will be executed is the cond is true):stmt-2 (will be executed if the cond is false);

(my_age>=24) ? console.log('u r eligible for phd') : console.log('u r not eligible. u r too young.');


// type conversion and coercion:

// type conversion -- changing the data type.

const yeAr='3243';
console.log(typeof(yeAr));
console.log(Number(yeAr),yeAr);
const yeaR=Number(yeAr);
console.log(typeof(yeaR));

// coercion -- combination of strings and numbers

console.log('I\'m Likhita and i am ' + 25 +' years old.')

//  +   -->   concatenation -- adding two stmts or a string and a number..

let number2= 10 +5;
console.log(number2);

let n='10'+ 1;
console.log(n);

// truthy and falsy values

// output will be a boolean value.

// true --> any value other than 0 and empty spaces, space and {} []
// fasle --> 0, null values or any empty spaces.

console.log(Boolean('naresh'));
console.log(Boolean(''));
console.log(Boolean({}));
console.log(Boolean());
console.log(Boolean(0));
console.log(Boolean([]));
console.log(Boolean(" "));



// difference  between var let and const

var wxyz=10;
console.log(wxyz);
wxyz=45;
console.log(wxyz);

var wxyz=56;
console.log(wxyz);

wxyz=87;
console.log(wxyz);

//  var allows redeclaration of a variable and also updation of the value and the value of a variale can even be assigned after the var is declared.

let abcd= 25;
console.log(abcd);

// let abcde=27  --> let wont allow redeclaration of a var

abcd=27;
console.log(abcd);

let abcde;
abcde=76;
console.log(abcde);

//  let wont allow redeclaration but allows updation of value to a variable and the value can be assigned to a var later even after declaration.

// const mno; --> while using const, the variable has to be assigned its value.
const mno=12;
console.log(mno);

// mno=23; --> once assigned, the value of a varibale cant be changed/updated as it is a constant var.
console.log(mno);


// strict mode

// strict mode is activated by using 'use strict'
// a var wont be allowed to assign or use in any expression until it is declared. i.e. a var has to be declared before using it anywhere in the code.

asd=56;
console.log(asd); 

"use strict";

// lkj; --> since the var lkj is not declared it will pop an error unless it is declared.
let lkj=1;
console.log(lkj); 

const passtest=false;
let has_licence=true;

if (passtest) has_licence=true; 
// there will be no output for this as the passtest is given as flase and this stmt will execute if that cond is true.
// this is also an example of simple if cond with single line stmt.

// functions

// function name() --> definig a function(without arguments)
// function name(arg1, arg2) --> defining a function with arguments
// name() --> calling a func
// name(par1, par2) --> calling a func with parameters for the arguments.

// example:

function juicemix(apples, banana) {
    const juice=`Juice with ${apples} apples and ${banana} bananas.`
    return juice;
}

const jc=juicemix(4,5);
console.log(jc);


// func declaration and function expression

// declaration
// example-1

function calcAge(dob) {
    return 2024-dob;
}

const user_age=calcAge(1998);
console.log(user_age);

// example-2

function calcAge(dob) {
    return 2024-dob;
}

const user_age2=calcAge(1996);
console.log(user_age2);

// function expression

console.log(user_age, user_age2);



// arrow functions --> used for faster executions (executes a num of milli sec faster than functions)

// any function can be converted to variable and vice versa.

// example-1
const yrs= user_dob => 2024-user_dob;
const user_age3=yrs(1976);
console.log(user_age3);

// example-3

const retireInYears=(birthYear, Name) => {
    const age_now=2024-birthYear;
    const retirement=65-age_now;
    return `${Name} will retire in ${retirement} years.`;
}
console.log(retireInYears(1968,'Mr.Rao'));

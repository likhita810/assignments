'use strict'

////////////////
// Default Parameters
const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 2499 * numPassengers) {
    numPassengers = numPassengers || 1;
    price = price || 2499;

    const booking = {
        flightNum, 
        numPassengers, 
        price,
    };

    console.log(booking);
    bookings.push(booking);
};

createBooking('LH23');
createBooking('LH23', 2, 5000);
createBooking('LH23', 4);
createBooking('LH23', undefined, 1000);

console.log(bookings);

////////////////
// How Passing Arguments Works: Values vs References
const flightNum = 'LH352';
const passenger = {
    name: 'Nick', 
    passport: 634569234346,
};

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH579';
    passenger.name = "Mr. / Mrs. " + passenger.name;

    if (passenger.passport === 5435435447653) {
        console.log(`Checked In`);
    } else {
        console.log('Wrong Passport');
    }
};

checkIn(flightNum, passenger);


////////////////
// Functions Accepting Callback Functions
const oneWord = function (str) {
    return str.replace('Joe', 'James').toLowerCase();
}

console.log(oneWord('Hey Joe'));

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(" ");
    return [first.toUpperCase(), ...others].join(' ');
}
 
console.log(upperFirstWord("Functions Accepting Callback Functions"));

////////////////
// Accessing the Function as a Parameter to Another Function
const transformer = function (str, fn) {
    console.log(`Original String: ${str}`);
    console.log(`Transformed String: ${fn(str)}`);
}

transformer("Joe is a good friend of james", oneWord);
transformer("javascript is interesting", upperFirstWord);

////////////////
// Higher Order Functions
const transformer2 = function (str, fn) {
    console.log(`Original String: ${str}`);
    console.log(`Transformed String: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
    // fn.name gives the name of the function called
}

transformer2("Functions Accepting Callback Functions", oneWord);
transformer2("Functions Accepting Callback Functions", upperFirstWord);


////////////////
// Function Returning Function
const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet (`Hey`);
greeterHey(`Nick`);

// or

const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hey')('Jonas');


//////////////// 
// call(), apply() and bind() functions
const lufthansa = {
    airLine: "Lufthansa", 
    iataCode: "LH", 
    bookings: [], 
    
    book(flightNum, name) {
        // console.log(`${name} booked a seat on ${this.airLine} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
    }
};

lufthansa.book(749, "Priyanka");
console.log(lufthansa.bookings[0].flight);
console.log(lufthansa.bookings[0].name);


const eurowings = {
    airLine: "Eurowings", 
    iataCode: "EW", 
    bookings: [], 
};

const book1 = lufthansa.book;
// book1(664, "James"); // this doesnt work

// call() method 
book1.call(eurowings, 532, "Adam");
// this wont be executed if lufthansa func is not assigned to a new var (book1 here) 532 n addam will be declared in book func n assigns in bookings of eurowings object as that func is called
console.log(eurowings);

const swiss = {
    airLine: "Swiss Air Lines", 
    iataCode: "SW", 
    bookings: [], 
};

const book2 = lufthansa.book;
book2.call(swiss, 773, "Dumru");

// // apply() method
const flightData = [733, "Kali"];
book2.apply(swiss, flightData);
console.log(swiss);

//////////////// 
// // with Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);
    this.planes++;
    //  will increment the lufthansa.planes value by 1
    console.log(this.planes);
}
lufthansa.buyPlane();

//////////////// 
document.querySelector(".buy")
document.addEventListener("click", lufthansa.buyPlane.bind(lufthansa));
// this will bind the lufthansa func to the html doc and performs the buyPlane func and thus increases value by 1 every time the event click is performed

////////////////  
// IIFE - Immediately Invoked Function Expressions
const runOnce = function () {
    console.log('This will never run again!!');
}

runOnce();

// // IIFE (Self Executing Functions)
(function () {
    console.log("This will never run again!!");
    const isPrivate = 23;
    console.log(isPrivate);
    // will be executed as executed within the func
})();

console.log(isPrivate);
// this wont be executed as it is a private var inside IIFE

(() => console.log("This will never run again!"))();

{
    var isPrivate = 23;
    var notPrivate = 35;
    // both these var will be exceuted as they are written/declared outside the IIFE
}

console.log(isPrivate);
console.log(notPrivate);


//////////////// 
// Closures
// method-1 - returning a func within a func
const secureBooking = function () {
    let passengerCount = 0;

    return function () {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}

const booker = secureBooking();
booker();
booker();

// method-2 - defining a func within a func
let f;

const g = function () {
    const a = 23;
    f = function () {
        return (a * 2);
    }
}
g();
f();
// f here returns nthg as the fuc just returns a value but it is not executed.
let x = f();
console.log(x);
console.log(g());
// func g returns nothing. so the output will be undefined

const h = function () {
    const b = 65;
    f = function () {
        console.log(b * 2);
    }
}

h();
f();

// method-3
const boardPassengers = function (numPer, wait) {
    const perGroup = numPer / wait;

    setTimeout(function () {
        // setTimeout - builtin func to declare time span in execution of result
        console.log(`we are now boarding all ${numPer} passengers`);
        console.log(`there are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1500);
    // wait*1000 is changing the time span from milliseconds to seconds delay in the execution.
    // the setTimeout block will be executed after mentioned time. and rest of the code will be executed first

    console.log(`will start boarding in ${wait} seconds`);
}

boardPassengers(300, 4);
'use strict'

// assigning days to an array
const weekdays = ['monday', 'tuesday','wednesday','thursday','friday','saturday','sunday'];

//  declaring opeing and closing hours of each day as an object.
const openingHours = {
    [weekdays[0]] : {closed},
    [weekdays[1]] : {open: 10, close: 23},
    [weekdays[2]] : {open: 10, close: 23},
    [weekdays[3]] : {open: 11, close: 23},
    [weekdays[4]] : {open: 11, close: 23},
    [weekdays[5]] : {open: 11, close: 23},
    [weekdays[6]] : {open: 8, close: 24},
};

const restaurant = {
    name: 'Mr. Chef',
    location: 'ByPass Road, Anakapalli.',
    categories: ['veg', 'non veg', 'non veg mandi'],
    starterMenu: ['chilli chicken','chicken 65','chicken manchuria','garlic chicken'],
    mainMenu: ['biryani', 'sp biryani', 'lollipop biryani', 'fry biryani','dum biryani'],

    openingHours,

    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
    },

    orderDelivery(
        {
            starterIndex=1,
            mainIndex=2,
            time='21:00',
            address
        }
    ) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time} hours.`);
    },

    orderPasta(ing1,ing2,ing3) {
        console.log(`Your pizza with ${ing1}, ${ing2} and ${ing3} is here.`)
    },

    orderPizza(mainIng, ...otherIng) {
        console.log(mainIng);
        console.log(otherIng);
     }
};

let ordr = restaurant.order(2,1);
console.log(ordr);

restaurant.orderDelivery({starterIndex:0,mainIndex:2,time:'20:00',address:"Narsinga Rao Peta"});

restaurant.orderPasta('origano','onion','extra cheese');

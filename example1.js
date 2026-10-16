require('dotenv').config();

// let a = "hello"

// console.log(a);


// console.log(returnName("Alex"));

// function returnName(myName){
//     let result = "My name is " + myName;
//     return result;
// }

const bedroom0 = "Bedroom 1";
const bedroom1 = "Bedroom 2";
const bedroom2 = "Bedroom 3";

const appartment = {
    City: process.env.APP_CITY || "New York",
    address: "123 Main St",
    rent: 2500,
    rooms: [bedroom0, bedroom1, bedroom2],
    getDetails: function() {
        return "the appartment is located in " + this.City + " at " + this.address + " with " + this.rooms.length + " rooms and with the rent " + this.rent;
    }
}

console.log(appartment.getDetails());

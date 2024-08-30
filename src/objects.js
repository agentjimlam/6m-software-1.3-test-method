// Declaring an empty object
let empty = {};

// Initializing object with default value
const person = {
    name:"John Doe",
    yearOfBirth: 1987
}
console.log("person", person);

// Retrieve the value of "yearOfBirth" property
console.log("I am born in", person.yearOfBirth);

// Looping an object
for(let key in person){
    console.log("key is", key, "and value is", person[key]);
}

/*Class discussion
Break out into groups and discussion what are the following:
    1. Object Destructuring

    https://www.w3schools.com/react/react_es6_destructuring.asp

    Both old and new way put an object into the function, but in new way of Destructuring, we can just select the key-value pairs/obj properties, no need to put in the whole object
    with all it's properties like before. 

    const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red'
    }

    myVehicle(vehicleOne);

    function myVehicle({type, color, brand, model}) {
    const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
    }

    RMB! YOU MUST PUT CURLY BRACKETS {} for machine to recognize destructuring


    2. Template Literals 

    https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-introduction/cheatsheet
    Template literals are strings that allow embedded expressions, ${expression}. While regular strings use single ' or double " quotes, template literals use backticks ` instead.

    eg.
    let name = "Codecademy";
    console.log(`Hello, ${name}`); 
    // Prints: Hello, Codecademy

    console.log(`Billy is ${6+8} years old.`); 
    // Prints: Billy is 14 years old.

Provide examples for each.
*/

/*
Exercise:
1. Create an object called "school" with the following fields (values are up to the learner): 
    a. Name - String
    b. yearEstablished - Number
    c. isActive - Boolean
    d. coursesOffered - Array containing 3 Strings
2. Print in the console the following sentence using the "school object" - "Welcome to <name> and we offer <coursesOffered>
*/
const school = {
    name : 'Codecademy',
    yearEstablished : 2015,
    isActive : true,
    coursesOffered : ['Java', 'CSS', 'HTML']
};

console.log(`Welcome to ${school.name} and we offer ${school.coursesOffered[0]}, ${school.coursesOffered[1]}, ${school.coursesOffered[2]}`); // print out using template literal ${}, and dot notation to access the 'school' object's property/key-value pair
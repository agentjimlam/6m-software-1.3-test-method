// Declaring an empty array
let empty = [];

// Initializing array with default values
let defaults = [1,2,"3"]; // some programming languages do not allow mixed type.
console.log("defaults", defaults);

// Retrieve the first element in array
console.log("first element value is", defaults[0]);

// Looping an array
for(let i=0 ;i<defaults.length; i++){
    console.log("value of i is", i, "and the value is", defaults[i]);
}

/*Class discussion
Array methods:
Break out into groups and research how each of the array methods can be used and give an example.
    1. push     //.push(), allows us to add items to the end of an array
    2. pop      //.pop(), removes the last item of an array.
    3. shift    // remove the first item from the array. All subsequent elements will shift down one place.
    4. unshift  // Adds one or more elements to beginning of array and returns new length.
    5. splice   // modifies an array in place by inserting, removing, and/or replacing array elements then returning an array of removed elements.
    6. slice    // .slice() method in JavaScript returns a partial copy of an array, otherwise known as a shallow copy, without altering the original array.

https://www.codecademy.com/resources/docs/javascript/arrays/splice
*/

//Exercise:
/*
Question 1:
1. Create an array called "grades" with 5 numeric values
2. Use a for loop to loop through the array to get the average of the values.

Question 2:
1. Use array methods to combine the two arrays and remove all even-indexed values
const arr1 = [15, 12, 11, 29, 5];
const arr2 = [13, 2, 6, 7];
*/

const grades = [50,60,70,80,90];
let totalGlobal = 0;

for (let i=0; i < grades.length; i++){
    totalGlobal += grades[i];
}

const average = totalGlobal / grades.length;
console.log(average);

const arr1 = [15, 12, 11, 29, 5];
const arr2 = [13, 2, 6, 7];

/*
const arr3 = arr1.push(...arr2);  
console.log(arr3); // this prints 9 (no. of elements in array)
*/

let combinedArray = [...arr1, ...arr2]; // using spread operator to combine arrays
console.log(combinedArray);

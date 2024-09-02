# JavaScript Concepts Review for React

## ES6 Arrow Functions

In JavaScript, there are 3 ways to define a function:

1. Function Declaration

```js
function add(a, b) {
  return a + b;
}
```

2. Function Expression

```js
const add = function (a, b) {
  return a + b;
};
```

3. Arrow Function

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

Arrow functions are a more concise way to write functions in JavaScript. They are anonymous functions that are commonly used in React components to define event handlers and callback functions, or even the component itself.

```js
const add = (a, b) => {
  return a + b;
};
```

If the function body is a single expression, you can omit the curly braces and the `return` keyword:

```js
const add = (a, b) => a + b;
```

Note that if there are no arguments, you need to include an empty set of parentheses:

```js
const sayHello = () => console.log("Hello!");
```

## Modules - Import and Export

In modern JavaScript projects, you can use the `import` and `export` statements to split your code into multiple files. This is useful for organizing your code and making it easier to maintain.

We can export variables, functions, and classes from a module using the `export` keyword. We can then import these exported values into another module using the `import` keyword.

```js
// Named exports

// Exporting a variable
export const fruits = ["apple", "banana", "cherry"];
export const vegetables = ["carrot", "cabbage", "celery"];

// Exporting a function
export function sayHello(name) {
  return `Hello, ${name}!`;
}

// Default export
export default function sayGoodbye(name) {
  return `Goodbye, ${name}!`;
}

const transport = ["car", "bus", "train"];

// Exporting a variable
export { transport };
```

```js
// Importing named exports
import { fruits, vegetables, sayHello } from "./demo-export.js";

console.log(fruits); // Output: ["apple", "banana", "cherry"]
console.log(vegetables); // Output: ["carrot", "cabbage", "celery"]
console.log(sayHello("Alice")); // Output: Hello, Alice!

// Importing default exports
import sayGoodbye from "./demo-export.js";

console.log(sayGoodbye("Bob")); // Output: Goodbye, Bob!

// Importing variables
import { transport } from "./demo-export.js";

console.log(transport); // Output: ["car", "bus", "train"]
```

## Spread and Rest Operators

The spread operator (`...`) is used to expand an array or object into individual elements. It is commonly used to make a copy of an array or object, or to combine multiple arrays or objects into a single array or object.

```js
// Spread operator with arrays
const numbers = [1, 2, 3];
const copyOfNumbers = [...numbers];
console.log(copyOfNumbers); // Output: [1, 2, 3]

const moreNumbers = [4, 5, 6];
const combinedNumbers = [...numbers, ...moreNumbers];
console.log(combinedNumbers); // Output: [1, 2, 3, 4, 5, 6]

// Spread operator with objects
const person = { name: "Alice", age: 30 };
const copyOfPerson = { ...person };
console.log(copyOfPerson); // Output: { name: "Alice", age: 30 }

const additionalInfo = { city: "New York", country: "USA" };
const personWithInfo = { ...person, ...additionalInfo };
console.log(personWithInfo); // Output: { name: "Alice", age: 30, city: "New York", country: "USA" }
```

The rest operator (`...`) is used to collect multiple elements into an array. It is commonly used in function parameters to handle an arbitrary number of arguments.

```js
// Rest operator in function parameters
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5, 6, 7)); // Output: 22
```

## Destructuring

Destructuring is a convenient way to extract multiple values from arrays or objects and assign them to variables in a single statement.

```js
// Destructuring arrays
const numbers = [1, 2, 3];
const [first, second, third] = numbers;
console.log(first); // Output: 1

// Destructuring objects
const person = { name: "Alice", age: 30 };
const { name, age } = person;
console.log(name); // Output: Alice
```

Destructuring can also be used with default values and renaming:

```js
// Destructuring arrays with default values
const numbers = [1];
const [first = 0, second = 0] = numbers;
console.log(first); // Output: 1
console.log(second); // Output: 0

// Destructuring objects with renaming
const person = { name: "Alice", age: 30 };
const { name: fullName, age: years } = person;
console.log(fullName); // Output: Alice
console.log(years); // Output: 30
```

# Git and GitHub

## Git Basics

Git is a distributed version control system that allows multiple developers to collaborate on a project. It tracks changes to files, allows developers to work on different branches, and provides tools for merging changes.

Here are some basic Git commands that you should be familiar with:

- `git init`: Initialize a new Git repository in the current directory.
- `git clone <repository-url>`: Clone an existing Git repository from a remote server.
- `git add <file>`: Add a file to the staging area.
- `git commit -m "message"`: Commit changes to the repository with a descriptive message.
- `git status`: Check the status of the working directory and staging area.
- `git log`: View the commit history of the repository.
- `git branch`: List all branches in the repository.
- `git checkout <branch>`: Switch to a different branch.
- `git merge <branch>`: Merge changes from one branch into the current branch.
- `git pull`: Fetch changes from the remote repository and merge them into the current branch.
- `git push`: Push local changes to the remote repository.

## GitHub

GitHub is a web-based platform that provides hosting for Git repositories. It offers additional features such as issue tracking, pull requests, and project management tools.

Here are some common GitHub workflows that you may encounter:

- Forking a repository: Create a personal copy of a repository on GitHub.
- Cloning a repository: Copy a repository from GitHub to your local machine.
- Creating a pull request: Propose changes to a repository and request them to be merged.
- Reviewing pull requests: Provide feedback on proposed changes before they are merged.

# Testing with Jest

## Jest Basics

Jest is a popular JavaScript testing framework that is commonly used with React applications. It provides a simple and intuitive API for writing tests and running them in a fast and reliable manner.

Basic Jest concepts:

- Test Suites: A collection of test cases that are grouped together.
- Test Cases: Individual tests that verify specific behavior or functionality.


## Writing Tests

Jest uses a simple and expressive syntax for writing tests. You can use the `test` or `it` functions to define test cases, and the `expect` function to make assertions.

```js
test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("sayHello returns the correct greeting", () => {
  expect(sayHello("Alice")).toBe("Hello, Alice!");
});
```

## Running Tests

Jest provides a command-line interface for running tests. You can run all tests in a project by executing the `jest` command in the terminal.

```bash
jest
```

You can also run tests in watch mode to automatically re-run tests when files change:

```bash
jest --watch
```

//type npm run test{} in terminal to run test
//use functions from sample.js
const {addFunc, isDivisibleBy5, checkOddEven} = require("./sample");

// create the test suite
describe ("test suite for sample.js function", ()=>{

    it("should add 3 numbers", () => {
        const result = addFunc(1,3,4);
        //compare the result to an expected value
        expect(result).toBe(8);
    })

    //write a test if divisible by 5
    it("should be divisible by 5", () => {
        const result = isDivisibleBy5(1000);
        expect(result).toBe(true);
    })

    it("should be odd", () => {
        const result = checkOddEven(99);
        expect(result).toBe("odd");
    })
})
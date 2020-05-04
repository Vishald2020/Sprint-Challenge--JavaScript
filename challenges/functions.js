// ==== Callbacks ====  

/* Step 1: Create a callback function
* Create a function named consume that can take 3 parameters.
* The first two parameteres can accept any argument
* The last parameter accepts a callback 
* In the body of the function return the callback with the two parameters that you created
*/
function consume (a, b, cb) {
return cb(a,b);
};

/* Step 2: Create several functions to callback with consume();
* Create a function named add that returns the sum of two numbers
nd returns "Hello first-name last-name, nice to meet you!"  * Create a function named multiply that returns the product of two numbers 
* Create a function named greeting that accepts a first and last name a
*/
function add(a, b) {
return a + b;
};

function multiply(a, b) {
return a * b;
};

function greeting(first, last) {
return `Hello ${first} ${last}, nice to meet you!`;
};



/* Step 3: Check your work by uncommenting the following calls to consume(): */
consume(2,2,add); // 4
consume(10,16,multiply); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 
// Question 1: Explain in your own words why the example below is a closure.

// Explanation: 
//It has a nested function which calls on the parent function, and the parent function is able to call on a global variable. 
// Question 2: Given the example below, what scope is the external variable in?
//- Global Scope
let external = "I'm outside!";

function myFunction() {
let internal = "Hello! I'm inside the function";
console.log(external);

function nestedFunction() {
  console.log(internal);
};
nestedFunction();
}
myFunction();
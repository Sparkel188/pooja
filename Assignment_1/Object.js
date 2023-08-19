//6. how iterate over an object data? explain with an example
//output = Using for...in loop:
// name: John
// age: 30
// occupation: Developer
let person = {
    name: "John",
    age: 30,
    occupation: "Developer"
  };
  
  console.log("Using for...in loop:");
  for (let key in person) {
    console.log(key + ": " + person[key]);
  }
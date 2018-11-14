/*alert("JS FROM FILE");*/
// Number variables
var number = 17;
console.log("Number=", number);
// String variables
var name = "Anca BALC";
console.log("Name=", name);
// Boolean data
var isTrue = true;
console.log("IsTrue=", isTrue);
var isFalse = false;
console.log("IsFalse=", isFalse);

// + operator
console.log("Sum=", 2 + 2); // result 4

// compare
console.log("Compare numbers", 3 < 4); // result boolean

// equal VALUES
console.log("Equal ", 2 == 2); // TRUE
console.log("Equal ", 2 == "2"); // TRUE

// equal VALUES & TYPES
console.log("Equal ", 2 === 2); // TRUE
console.log("Equal ", 2 === "2"); // FALSE
console.log("Compare values and types", 2 == "2" && typeof 2 == typeof "2");

// Arrays DATA
// define empty array
var arr = [];
console.log("Empty array", arr);
// define array with values
var arr2 = ["A", "B", "C"];
console.log("Array with value", arr2);
// array length
console.log("Array nymber of elements", arr2.length);
// display B
console.log(arr2[1]);
// update value
arr2[1] = "Bogdan";
console.log("New array", arr2);
// add new value
arr2.push("D");
console.log("New array", arr2);

var arr3 = ["A", 13, true];
console.log("Diffrent data types array", arr3);

// Objects
// empty object
var obj = {};
// objects with value
var robot = {
  model: "TRX123",
  color: "red"
};
console.log("Robot", robot);
// get value
console.log("Robot model", robot.model);
// add new property
robot.weight = 180;
console.log("Robot", robot);

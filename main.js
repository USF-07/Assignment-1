// Part 1:

// Task 1
// let x = "123";
// console.log(Number(x) + 7);

// Task 2
// let checkOnValue = (value) => !value ? "Invalid" : value;
// console.log(checkOnValue(0));

// Task 3
// for (let i = 1 ; i <= 10 ; i++){
//   if( i % 2 == 0) continue;
//   console.log(i);
// }

// Task 4
// let arr = [1,2,3,4,5];
// let evenOnly = arr.filter((element) => element % 2 == 0);
// console.log(evenOnly);

// Task 5
// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let mergedArr = [...arr1,...arr2];
// console.log(mergedArr);

// Task 6
// let day = 2;
// switch (day) {
//   case 1:
//     console.log("Sunday");
//     break;
//   case 2:
//     console.log("Monday");
//     break;
//   case 3:
//     console.log("Tuesday");
//     break;
//   case 4:
//     console.log("Wednesday");
//     break;
//   case 5:
//     console.log("Thursday");
//     break;
//   case 6:
//     console.log("Friday");
//     break;
//   case 7:
//     console.log("Saturday");
//     break;

//   default:
//     console.log("invalid input");
//     break;
// }

// Task 7
// function arr(arr){
//  return arr.map((element) => element.length)
// }
// console.log(arr(["a","ab","abc"]));

// Task 8
// function checkOnDiv(num){
//   return (num % 3 == 0 && num % 5 == 0)? "Divisible by both" : "Not Divisible by both";
// }
// console.log(checkOnDiv(15));

// Task 9
// let squareNum = (num) => num * num;
// console.log(squareNum(5));

// Task 10
// const person = { name: "John", age: 25 };
// function format({name,age}){
//   return `${name} is ${age} years old`
// }
// console.log(format(person));

// Task 11
// function getSum (...nums){
//   return nums.reduce((total,num) => total + num , 0)
// }
// console.log(getSum(1,2,3,4,5));

// Task 12
// function doTask(){
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Success")
//     }, 3000);
//   })
// }
// doTask().then((msg) => console.log(msg));

// Task 13
// function findMax(arr){
//   return arr.reduce((max,num) => (num > max)? num : max);
// }
// console.log(findMax([1,3,7,2,4]));

//Task 14
// let returnArr = (obj) => {
//   return Object.keys(obj);
// }
// console.log(returnArr({name: "John", age: 30}));

// Task 15
// let splitWords = function (text){
//   return text.split(" ");
// }
// console.log(splitWords("The quick brown fox"));





// Part 2 (Essay Questions)

// (1)
// (forEach) => (Array Method) => when you just want to run something for each element without needing to stop early , .
// (for of) => (Language statement) => when you need break/continue, and looping over something other than an array (like a string or Map).

// (2)
// (Hoisting) => Moving declarations to the top of global scope
// console.log(x); // Undefiend by Hoisting
// var x = 10;
// (Temporal Dead Zone) => If you try to access the variable during this TDZ period, you get an error because let/const are hoisted but Not initialized
// console.log(x); // ReferenceError (TDZ)
// let x = 10;


// (3)
// (==) => Compare with value only , use Type Coercion
// (===) =>  Compare with value & type

// (4) 
// (try/catch) =>  catch the error and handle it and break the code if there an error while running , it prevents the application from crashing.

// (5)
// (Type Conversion) => you explicitly write code to make conversion and control on the result. 
// Number("123");  //123
// String(123);  //"123"
//
// (Type Coercion) => JS is the controler on type coercion when you do oper like (+"3" , 3 == "3") , it's can lead to unexpected results  
// "5" + 3; //53
// 5 == "5"; // true





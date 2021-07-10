//Problem 1
// const cars = ['Tesla', 'Mercedes', 'Honda'];
// const [ randomCar ] = cars; // Output : Tesla
// const [,otherRandomCar] = cars; //Output : Mercedes
// console.log(randomCar);
// console.log(otherRandomCar);

//Problem 2
// const employee = {
//     name : 'Elon',
//     age : 47,
//     company : 'Tesla'
// }
// const { name : otherName} = employee; 
// console.log(name); // Output : Name is not defined because it have been changed to otherName
// console.log(otherName); // it will not output because of an error occured in line 15
//                         // but the expected output is (Elon)

// Problem 3
// const person = {
//     name : 'Phil Smith',
//     age : 47,
//     height : '6 feet'
// }
// const password = '12345';
// const {password : hashedPassword } = person;

// console.log(password); // Output : 12345
// console.log(hashedPassword) // error : undefined 


//Problem 4
// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [,first] = numbers; // Output : 2
// const [,,,second] = numbers; // Output : 5
// const [,,,,,,,,third] = numbers; // Output : 2

// console.log(first == second); //Output : false
// console.log(first == third); // Output : true

//Problem 5
// const lastTest = {
//     key: 'value',
//     secondKey: [1, 5, 1, 8, 3, 3]
// }
// const { key } = lastTest; // Output : value
// const { secondKey } = lastTest; // Output : [1, 5, 1, 8, 3, 3]
// const [,willThisWork] =secondKey; // Output : 5 

// console.log(key);
// console.log(secondKey);
// console.log(secondKey[0]); // Output : 1
// console.log(willThisWork); // Yes
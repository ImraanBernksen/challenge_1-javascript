let userFirstname = prompt("Please enter your name");
let userSurname = prompt("Please enter your surname");
let userSalary = prompt("Please enter your salary");
let userSalarySum = eval(userSalary) + 100000;
// let userSalarySum = eval(`${userSalary}`) + 100000;

console.log(`Name:${userFirstname}`);
console.log(`Name:${userSurname}`);
console.log(`Name:${userSalarySum}`);

document.write(`Name:${userFirstname}`);
document.write(`<br>Name:${userSurname}`);
document.write(`<br>Name:${userSalarySum}`);
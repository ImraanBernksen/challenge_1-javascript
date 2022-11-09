// let userFirstname = prompt("Please enter your name");
// let userSurname = prompt("Please enter your surname");
// let userSalary = prompt("Please enter your salary");
// let userSalarySum = eval(userSalary) + 100000;
// // let userSalarySum = eval(`${userSalary}`) + 100000;

// console.log(`Name:${userFirstname}`);
// console.log(`Name:${userSurname}`);
// console.log(`Name:${userSalarySum}`);

// document.write(`Name:${userFirstname}`);
// document.write(`<br>Name:${userSurname}`);
// document.write(`<br>Name:${userSalarySum}`);

// First approach: make use of function
// let firstName = prompt("Please enter your name: ");
// let surName = prompt("Please enter your surname: ");
// let salary = prompt("Please enter your salary: ", 0);
// document.write(`
// Name: ${firstName}<br>
// Surname: ${surName}<br>
// Salary: R${eval(`${salary}*2`)}`);

//My Attempt
// let userName = prompt("Please enter your name: ");
// let userSurname = prompt("Please enter your surname: ");
// let userSalary = prompt("Please enter your salary: ");
// document.write(`
// Name: ${userName}<br>
// Surname: ${userSurname}<br>
// Salary: R${eval(`${userSalary}/4`)}`);

// function addition() {
//     return 9 + 2
// }

// document.write(`Sum: ${addition()}`);

let addition = ()=>{
    document.write(8 + 4);
}

addition();
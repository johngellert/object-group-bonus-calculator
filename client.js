const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT
// for (employee of employees) {
//   console.log(employee);
// }

// Everything commented out below is the code that our team was working on together
// At the end of the day, the code was not running how we wanted it to
// With our first attemp, I started to get confused with the layout
// I tried writing the code again using const and conditional like we learned in class
// Not sure if this is any cleaner but the code is working correctly now


// for loop to iterate through the emoplyee information
for (employee of employees) {
  console.log(employeeBonus(employee));
}

// declare employeeBonus function that accepts and employee object
// creates a new object with the employees bonus
// @para employeeInfo    an employee object
// @return               a new object with bonus info
function employeeBonus(employeeInfoX) {
  const percentBonus = finalBonus(employeeInfoX);
  const percentBonusDecimal = percentBonus / 100;

  // creates new employee bonus object
  let employee = {
    name: employeeInfoX.name,
    bonusPercentage: percentBonus + '%',
    totalCompensation: percentBonusDecimal * parseInt(employeeInfoX.annualSalary) + parseInt(employeeInfoX.annualSalary),
    totalBonus: (finalBonus(employeeInfoX) / 100) * parseInt(employeeInfoX.annualSalary)
  }
  return employee;
}

function finalBonus(employeeInfoY) {
  let percent = 0;
  // bonus percent based on review
  const noBonus = employeeInfoY.reviewRating <= 2;
  const fourPercent = employeeInfoY.reviewRating === 3;
  const sixPercent = employeeInfoY.reviewRating === 4;
  const tenPercent = employeeInfoY.reviewRating === 5;

  // bonus percent based on tennur greater than 15 years
  const addFive = employeeInfoY.employeeNumber.length === 4;

  // bonus percent based on salary cap of 65,000
  const overSalaryCap = employeeInfoY.annualSalary > 65000;

  // bonus percent based on bonus cap of 13%
  const overBonusCap = percent > 13;

  // set percent based on employee review rating
  if (noBonus) {
    percent = 0;
  }
  else if (fourPercent) {
    percent = 4;
  }
  else if (sixPercent) {
    percent = 6;
  }
  else if (tenPercent) {
    percent = 10;
  }

  // add five percent if the employee has been with the company for ober 15 years
  if (addFive) {
    percent += 5;
  }

  // set percent to 1 if current salary is over 65000
  if (overSalaryCap) {
    percent = 1;
  }

  // set percent to 13 if greater than 13
  if (overBonusCap) {
    percent = 13;
  }

  // only return if the percent is less than 13 and greater than 0
  if (percent <= 13 && percent >= 0) {
    return percent;
  }
  else {
    return "bonus outside range";
  }
} // end finalBonus





// INITIAL CODE FORM OUR TIME IN CLASS


// function employeeBonus(employee) {
//   percentCalc(employee);
//   let emp = {
//     name: employee.name,
//     bonusPercentage: finalBonus(employee),
//     totalCompensation: employee.annualSalary,
//     totalBonus: employee.bonusPercentage
//   }
//   return emp;
// }

// let bonusPercent = 0;

// function percentCalc(employee) {
//   if (employee.reviewRating < 2) {
//     bonusPercent;
//   }
//   else if (employee.reviewRating === 3) {
//     bonusPercent = 4;
//   }
//   else if (employee.reviewRating === 4) {
//     bonusPercent = 6;
//   }
//   else if (employee.reviewRating === 5) {
//     bonusPercent = 10;
//   }
// }

// function finalBonus(employee) {
//   if (employee.employeeNumber.length === 4) {
//     bonusPercent += 5;
//     if (employee.annualSalary > 65000) {
//       bonusPercent = 1;
//     }

//   }
//   if (bonusPercent > 13) {
//     bonusPercent = 13;
//   }
//   return bonusPercent;
// }







// console.log(employeeBonus(employees[0]));
// console.log(employeeBonus(employees[1]));
// console.log(employeeBonus(employees[2]));


// // Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// // This problem is massive! Break the problem down. Use the debugger.
// // What is the fewest lines of code I can write and test to get just a little closer?

// // This is not a race. Everyone on your team should understand what is happening.
// // Ask questions when you don't.

// //console.log( employees );

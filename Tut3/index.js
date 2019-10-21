let monthArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function printMonthName(monthNumber) {
  switch (monthNumber) {
    case 0:
      console.log("Jan");
      break;

    case 1:
      console.log("Feb");
      break;

    case 2:
      console.log("Mar");
      break;

    case 3:
      console.log("Apr");
      break;

    case 4:
      console.log("May");
      break;

    case 5:
      console.log("Jun");
      break;

    case 6:
      console.log("Jul");
      break;

    case 7:
      console.log("Aug");
      break;

    case 8:
      console.log("Sep");
      break;

    case 9:
      console.log("Oct");
      break;

    case 10:
      console.log("Nov");
      break;

    case 11:
      console.log("Dec");
      break;
  }
}
function getMonthName(monthNumber) {
  switch (monthNumber) {
    case 0:
      return "Jan";
      break;

    case 1:
      return "Feb";
      break;

    case 2:
      return "Mar";
      break;

    case 3:
      return "Apr";
      break;

    case 4:
      return "May";
      break;

    case 5:
      return "Jun";
      break;

    case 6:
      return "Jul";
      break;

    case 7:
      return "Aug";
      break;

    case 8:
      return "Sep";
      break;

    case 9:
      return "Oct";
      break;

    case 10:
      return "Nov";
      break;

    case 11:
      return "Dec";
      break;
  }
}

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

// let a = add(10, 5);
// let b = sub(10, 5);
// let c = mult(10, 5);

// console.log(a, b, c);

let output = getMonthName(10);

console.log(output.charAt(0));

// monthArray.forEach(item => {
//   printMonthName(item);
// });

// myArr.forEach((item, index) => {
//   if (item % 2 == 1) {
//     console.log(item, "Odd");
//   } else {
//     console.log(item, "Even");
//   }
// });
function getOddNumber(n) {
  return 2 * n + 1;
}

monthArray.forEach(item => {
  let value = getOddNumber(item);
  console.log(value);
});

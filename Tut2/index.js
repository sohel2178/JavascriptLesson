// String Operation
let fName = "Sohel";
let lname = "Ahmed";

// Concatenation +
let fullname = fName + " " + lname;

// Get the length of Character

// console.log(fullname);
// console.log(fullname.length);

let data = "The code above generates the following result";

// console.log(data.replace("code", "mode"));

// console.log(data);
// console.log(data.trim());

// console.log(data.indexOf("above"));

// console.log(data.slice(0, 14));

// console.log(data.charAt(9));

// console.log(data.toUpperCase());
// console.log(data.toLowerCase());

let words = data.split(" ");

let finalArr = [];

console.log(words);

words.forEach(word => {
  let firstCharacter = word.charAt(0).toUpperCase();
  let finalWord = firstCharacter + word.substr(1);
  finalArr.push(finalWord);
});

let result = "";

finalArr.forEach(word => {
  result = result + word + " ";
});

console.log(result);

// for (let i = 0; i < words.length; i++) {
//   console.log(words[i]);
// }

// console.log(words);

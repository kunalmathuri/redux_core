import { compose } from "redux";

function removeSpaces(string) {
  return string.split(" ").join("");
}

function repeatString(string) {
  return string + string; // can also use string.repeat(2)
}

function convertToUpper(string) {
  return string.toUpperCase();
}

const input = "ab cde efg";
const output = convertToUpper(repeatString(removeSpaces(input)));
console.log(output);

const composeFunction = compose(removeSpaces, repeatString, convertToUpper);
console.log(composeFunction(input));

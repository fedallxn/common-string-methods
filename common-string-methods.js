/*

Practice Problem #1

Activity 1: Searching Strings
Write a program to:
Check if the text "JavaScript" is in the string "Learning JavaScript is fun!" using includes.
Find the position of the word "fun" in the string.

Activity 2: Transforming Strings
Convert the string " CODE BOOTCAMP " to lowercase and remove all extra whitespace.
Replace "BOOTCAMP" with "JavaScript" in the transformed string.

Activity 3: Breaking Apart a Sentence
Split the sentence "Coding is fun and educational" into an array of words.

Activity 4: Retrieving Substrings
Retrieve the first character of "Bootcamp" using charAt.
Extract the word "camp" from "Bootcamp" using slice.

Advanced Challenge
Write a program to process the following string:
Customer: John Doe
Order: Apple, Banana, Grape
Total: $20.50
Extract the customer name.
Split the order into an array of items.
Convert the total price to uppercase (e.g., "TOTAL: $20.50").


Practice Problem #2

Objective
Practice using common string methods to manipulate and extract information from strings.

Instructions:
You are tasked with processing a single string and
performing a series of operations using the string methods covered in the lesson.
Each task corresponds to one or more methods and can be completed independently.

String to Use:
  let inputString = "  Welcome to the Coding Bootcamp! Learn JavaScript today.  ";

Tasks:
Complete the following tasks and assign the results to the specified variables. Log each result to the console.

1. Searching
  - Check if the word "JavaScript" is in the string using includes and assign the result to a variable named hasJavaScript.
  - Find the position of the word "Coding" in the string using indexOf and assign the result to a variable named codingPosition.
  - Check if the string starts with "Welcome" using startsWith and assign the result to a variable named startsWithWelcome.
  - Check if the string ends with "today." using endsWith and assign the result to a variable named endsWithToday.

2. Transforming
  - Convert the string to all lowercase letters using toLowerCase and assign the result to a variable named lowercaseString.
  - Convert the string to all uppercase letters using toUpperCase and assign the result to a variable named uppercaseString.
  - Remove the extra spaces from the beginning and end of the string using trim and assign the result to a variable named trimmedString.
  - Replace the word "JavaScript" with "coding" using replace and assign the result to a variable named replacedString.

3. Breaking Apart
  - Split the string into an array of words using split with a space (" ") as the delimiter and assign the result to a variable named wordsArray.

4. Retrieving
  - Retrieve the first character of the trimmed string using charAt and assign the result to a variable named firstCharacter.
  - Extract the word "Bootcamp" from the string using slice and assign the result to a variable named extractedBootcamp.

*/

//Starter Code
let inputString = "  Welcome to the Coding Bootcamp! Learn JavaScript today.  ";

// 1. Searching
let hasJavaScript = inputString.includes("JavaScript"); // True
let codingPosition = inputString.indexOf("Coding");  // 17
let startsWithWelcome = inputString.startsWith("Welcome"); // False; because there is whitespace before "Welcome"
let endsWithToday = inputString.endsWith("today."); // False; because there is whitespace after "today."

// 2. Transforming
let lowercaseString = inputString.toLowerCase(); // "  welcome to the coding bootcamp! learn javascript today.  "
let uppercaseString = inputString.toUpperCase(); // "  WELCOME TO THE CODING BOOTCAMP! LEARN JAVASCRIPT TODAY.  "
let trimmedString = inputString.trim(); // "Welcome to the Coding Bootcamp! Learn JavaScript today."
let replacedString = inputString.replace("JavaScript","coding"); // "  Welcome to the Coding Bootcamp! Learn coding today.  "

// 3. Breaking Apart
let wordsArray = inputString.split(" "); // [" ","Welcome","to","the","coding","bootcamp!","learn","Javascript","today."," "]

// 4. Retrieving
let firstCharacter = trimmedString.charAt(0); // "W"
let extractedBootcamp = trimmedString.slice(22,30); // "Bootcamp"

// Log all results
console.log({
  hasJavaScript,
  codingPosition,
  startsWithWelcome,
  endsWithToday,
  lowercaseString,
  uppercaseString,
  trimmedString,
  replacedString,
  wordsArray,
  firstCharacter,
  extractedBootcamp,
});

//Practice Problem 1: Activity #1
let phrase = "Learning JavaScript is fun!";
let checkFor = phrase.includes("JavaScript"); // True
let positionOf = phrase.indexOf("fun"); // 23
console.log({
  checkFor,
  positionOf,
});

//Practice Problem 1: Acivity #2
let originalString = " CODE BOOTCAMP ";
let alteredString = originalString.trim().toLowerCase(); // "code bootcamp"
let transformedString = originalString.replace("BOOTCAMP","JavaScript"); // " CODE JavaScript "
console.log({
  alteredString,
  transformedString,
});

//Practice Problem 1: Activity #3
let fact = "Coding is fun and educational"
let splitFact = fact.split(" "); // ["Coding","is","fun","and","educational"]
console.log(splitFact); 

//Practice Problem 1: Activity #4
let word = "Bootcamp"
let firstUp = word.charAt(0); // "B"
let extractedWord = word.slice(-4); // "camp"
console.log({
  firstUp,
  extractedWord,
});

//Practice Problem 1: Advanced Challenge
let challenge = `Customer: John Doe
Order: Apple, Banana, Grape
Total: $20.50`;
let customerName = challenge.slice(10,18);
let listOfItems = challenge.slice(25,46).split(",");
let largeTotal = challenge.slice(-13).toUpperCase();
console.log({
  customerName,
  listOfItems,
  largeTotal
});

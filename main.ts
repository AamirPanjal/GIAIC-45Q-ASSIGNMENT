// Author: Aamir Sheikh
// Date: June 2, 2024



//QUESTION2        

// This program stores a person's name in a variable and prints a personalized message.

let personName: string = "Eric"; // Store the person's name in a variable

// Print a personalized message to the person
console.log(`Hello ${personName}, would you like to learn some Python today?`);



//QUESTION-3

// Step 1: Store the person's name in a variable
let personName1: string = "Aamir Sheikh";

// Step 2: Print the name in lowercase
console.log("Lowercase: " + personName1.toLowerCase());

// Step 3: Print the name in uppercase
console.log("Uppercase: " + personName1.toUpperCase());

// Step 4: Print the name in titlecase
console.log("Titlecase: " + personName1.replace(/\b\w/g, (char) => char.toUpperCase()));



//QUESTION-4

// Define the quote and its author
const quote: string = "A person who never made a mistake never tried anything new.";
const author: string = "Albert Einstein";

// Print the quote and its author
console.log(`${author} once said, "${quote}"`);



//QUESTION-5

// Store the famous person's name in a variable
const famous_person: string = "Albert Einstein";

// Define the quote
const quote1: string = "A person who never made a mistake never tried anything new.";

// Compose the message
const message: string = `${famous_person} once said, "${quote1}"`;

// Print the message
console.log(message);



//QUESTION-6

// Store the person's name with whitespace characters
let personName2: string = "\t \n Aamir Sheikh \t \n";

// Print the name with whitespace
console.log("With Whitespace: '" + personName2 + "'");

// Strip the whitespace from the name
let strippedName: string = personName2.trim();

// Print the stripped name
console.log("Stripped Name: '" + strippedName + "'");



//QUESTION-7&8

// Addition
console.log("Addition:", 5 + 3);

// Subtraction
console.log("Subtraction:", 10 - 2);

// Multiplication
console.log("Multiplication:", 4 * 2);

// Division
console.log("Division:", 64 / 8);



//QUESTION-9

// Store your favorite number in a variable
const favoriteNumber: number = 7;

// Create a message revealing your favorite number
const message1: string = `My favorite number is ${favoriteNumber}.`;

// Print the message
console.log(message1);



//QUESTION-10a

// Author: Aamir Shiekh
// Date: June 3, 2024

// Famous Quote Program
// Store the famous quote in a variable
const famousQuote: string = "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.";
// Store the author's name in a variable
const authorName: string = "Albert Einstein";

// Compose the message with the quote and the author's name
const quoteMessage: string = `${authorName} once said, "${famousQuote}"`;

// Print the message
console.log("Famous Quote:", quoteMessage);



//QUESTION-10b

// Author: Aamir Sheikh
// Date: June 3, 2024

// Favorite Number Program
// Store the author's favorite number in a variable
const favoriteNumber1: number = 7;

// Print the author's favorite number
console.log("My favorite number is:", favoriteNumber1);



//QUESTION-11

// Define an array called 'names' to store names of a few friends
let names: string[] = ["Ali", "Mohsin", "Saad", "Saif"];

// Print each person's name by accessing each element in the list, one at a time
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}



//QUESTION-12

// Define an array called 'names' to store names of a few friends
let names1: string[] = ["Ali", "Mohsin", "Saad", "Saif"];

// Print a personalized message to each person
for (let i = 0; i < names.length; i++) {
    console.log(`Hello, ${names1[i]}! Hope you're having a great day!`);
}



//QUESTION-13

// Define an array to store examples of your favorite modes of transportation
let favoriteTransports: string[] = ["Car", "Bike", "Bus", "Train"];

// Print a series of statements about these items
for (let i = 0; i < favoriteTransports.length; i++) {
    console.log(`I would like to own a ${favoriteTransports[i]}.`);
}



//QUESTION-14

// Define an array to store names of people you'd like to invite to dinner
let guestList: string[] = ["Mubashir", "Zaid", "Mohsin"];

// Print a personalized invitation message to each person
for (let i = 0; i < guestList.length; i++) {
    console.log(`Asslam u alaikum ${guestList[i]}, you are cordially invited to dinner at my home.`);
}



//QUESTION-15

// Define an array to store names of people you'd like to invite to dinner
let guestList1: string[] = ["Mubashir", "Zaid", "Mohsin"];

// Print the initial invitation messages
for (let i = 0; i < guestList1.length; i++) {
  console.log(
    `Assalam u alaikum ${guestList1[i]}, you are cordially invited to dinner at my home.`
  );
}

// Define the guest who can't make it and the new guest
let notPresent: string = "Zaid";
let newGuest: string = "Saif"; 

// Print the name of the guest who can't make it
console.log(`Unfortunately, Mr. ${notPresent} can't make it to tomorrow's dinner.`);

// Update the guest list by replacing the guest who can't make it
let indexOfNotPresent: number = guestList1.indexOf(notPresent);
if (indexOfNotPresent !== -1) {
    guestList1[indexOfNotPresent] = newGuest;
}

// Print the new set of invitation messages
for (let i = 0; i < guestList1.length; i++) {
  console.log(
    `Assalam u alaikum ${guestList1[i]}, you are cordially invited to dinner at my home.`
  );
}



//QUESTION-16

// Define an array to store names of people you'd like to invite to dinner
let guestList2: string[] = ["Mubashir", "Zaid", "Mohsin"];

// Print the initial invitation messages
for (let i = 0; i < guestList2.length; i++) {
  console.log(
    `Assalam u alaikum ${guestList2[i]}, you are cordially invited to dinner at my home.`
  );
}

// Define the guest who can't make it and the new guest
let notPresent1: string = "Zaid"; // Removed the colon ":"
let newGuest1: string = "Saif"; // Removed the colon ":"

// Print the name of the guest who can't make it
console.log(`Unfortunately, Mr. ${notPresent1} can't make it to tomorrow's dinner.`);

// Update the guest list by replacing the guest who can't make it
let indexOfNotPresent1: number = guestList2.indexOf(notPresent1);
if (indexOfNotPresent1 !== -1) {
    guestList1[indexOfNotPresent1] = newGuest1;
}

// Print the new set of invitation messages
for (let i = 0; i < guestList2.length; i++) {
  console.log(
    `Assalam u alaikum ${guestList2[i]}, you are cordially invited to dinner at my home.`
  );
}

// Inform that a bigger dinner table is found
console.log("Great news! We found a bigger dinner table.");

// Add one new guest to the beginning of the array
guestList2.unshift("Ali");

// Add one new guest to the middle of the array
guestList2.splice(Math.floor(guestList2.length / 2), 0, "Hassan");

// Add one new guest to the end of the array using append()
guestList2.push("Khalid");

// Print a new set of invitation messages for each person in the list
for (let i = 0; i < guestList2.length; i++) {
  console.log(
    `Assalam u alaikum ${guestList2[i]}, you are cordially invited to dinner at my home.`
  );
}



//QUESTION-17

let guestList3: string[] = ["Mubashir", "Zaid", "Mohsin"];

// Print the initial invitation messages
for (let i = 0; i < guestList3.length; i++) {
  console.log(`Assalam u alaikum ${guestList3[i]}, you are cordially invited to dinner at my home.`);
}

// Define the guest who can't make it and the new guest
let notPresent2: string = "Zaid";
let newGuest2: string = "Saif";

// Print the name of the guest who can't make it
console.log(`Unfortunately, Mr. ${notPresent2} can't make it to tomorrow's dinner.`);

// Update the guest list by replacing the guest who can't make it
let indexOfNotPresent2: number = guestList3.indexOf(notPresent2);
if (indexOfNotPresent2 !== -1) {
    guestList3[indexOfNotPresent2] = newGuest2;
}

// Print the new set of invitation messages
for (let i = 0; i < guestList3.length; i++) {
  console.log(`Assalam u alaikum ${guestList3[i]}, you are cordially invited to dinner at my home.`);
}

// Inform that only two people can be invited
console.log("Unfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.");

// Remove guests from the list until only two names remain
while (guestList3.length > 2) {
  let removedGuest = guestList3.pop();
  console.log(`Sorry ${removedGuest}, we can't invite you to dinner.`);
}

// Print invitation messages for the two people still on the list
for (let i = 0; i < guestList3.length; i++) {
  console.log(`Assalam u alaikum ${guestList3[i]}, you are still invited to dinner at my home.`);
}

// Remove the last two names from the list
guestList3.pop();
guestList3.pop();

// Print the list to ensure it's empty
console.log("Final guest list:", guestList3);



//QUESTION-18

let placesToVisit: string[] = ["Tokyo", "London", "Berlin", "Dubai", "Sydney"];

console.log("Original Order:", placesToVisit.slice()); // Print original order

console.log("Alphabetical Order:", placesToVisit.slice().sort()); // Print alphabetical order

console.log("Original Order:", placesToVisit.slice()); // Print original order again

console.log("Reverse Alphabetical Order:", placesToVisit.slice().sort().reverse()); // Print reverse alphabetical order

console.log("Original Order:", placesToVisit.slice()); // Print original order again

console.log("Reversed Order:", placesToVisit.slice().reverse()); // Print reversed order

console.log("Original Order:", placesToVisit.slice()); // Print original order again

console.log("Sorted Alphabetical Order:", placesToVisit.slice().sort()); // Print sorted alphabetical order

console.log("Sorted Reverse Alphabetical Order:", placesToVisit.slice().sort().reverse()); // Print sorted reverse alphabetical order



//QUESTION-19

// List of dinner guests
let guestList4: string[] = ["Asif", "Mohsin", "Saif", "Daniyal", "Ali"];

// Calculate the number of guests
let numberOfGuests: number = guestList4.length;

// Print a message indicating the number of people invited to dinner
console.log(`You are inviting ${numberOfGuests} people to dinner.`);



//QUESTION-20

// List of cities
let cities: string[] = ["New York", "London", "Tokyo", "Sydney", "Paris"];

// Print the list of cities
console.log("List of cities:");
for (let city of cities) {
    console.log(city);
}



//QUESTION-21

// Define the type for a book
type Book = {
  title: string;
  author: string;
  year: number;
};

// Create a list of book objects
let books: Book[] = [
  {
      title: "Rich Dad Poor Dad",
      author: "Robert T. Kiyosaki",
      year: 1997
  },
  {
      title: "The Psychology of Mone",
      author: "Morgan Housel",
      year: 2020
  },
];

// Print the list of books
console.log("List of books:");
for (let book of books) {
  console.log(`Title: ${book.title}, Author: ${book.author}, Year: ${book.year}`);
}



//QUESTION-22

// Define the array of fruits
const fruits: string[] = ["Apple", "Banana", "Orange", "Mango"];

// Intentional error: Trying to access an index that doesn't exist (index 4, out of bounds)
console.log(fruits[4]); // Intentional error

// Corrected access: This works and prints "Mango"
console.log("Corrected access:");
console.log(fruits[3]);



//QUESTION-23

let car: string = 'subaru';

// Test 1: Check if car is equal to 'subaru'
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // Should print true

// Test 2: Check if car is equal to 'honda'
console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda'); // Should print false

// Test 3: Check if car is not equal to 'toyota'
console.log("Is car != 'toyota'? I predict True.");
console.log(car != 'toyota'); // Should print true

// Test 4: Check if car is not equal to 'subaru'
console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru'); // Should print false

// Test 5: Check if car is equal to 'SUBARU' (case-sensitive comparison)
console.log("Is car == 'SUBARU'? I predict False.");
console.log(car == 'SUBARU'); // Should print false

// Test 6: Check if car is not equal to 'SUBARU' (case-sensitive comparison)
console.log("Is car != 'SUBARU'? I predict True.");
console.log(car != 'SUBARU'); // Should print true

// Test 7: Check if car is equal to 'subaru' (case-insensitive comparison)
console.log("Is car.toLowerCase() == 'subaru'? I predict True.");
console.log(car.toLowerCase() == 'subaru'); // Should print true

// Test 8: Check if car is not equal to 'SUBARU' (case-insensitive comparison)
console.log("Is car.toLowerCase() != 'SUBARU'? I predict False.");
console.log(car.toLowerCase() != 'SUBARU'); // Should print false

// Test 9: Check if car is an empty string
console.log("Is car empty? I predict False.");
console.log(car == ''); // Should print false

// Test 10: Check if car is undefined
let car2: string |undefined ;
console.log("Is car2 undefined? I predict True.");
console.log(car2 === undefined); // Should print true



//QUESTION-24

let name_1: string = "Aamir";
let name_2: string = "Muhammad Aamir";
let name_3: string = "Aamir Sheikh";

if (name_1 == name_3) {
    console.log("The names are equal");
} else {
    console.log("The names are not equal");
}

if (name_1 != name_2) {
    console.log("Name 1 and Name 2 are different");
}

let age_1: number = 25;
let age_2: number = 30;

if (age_1 == 25) {
    console.log("Eligible for vote");
}

if (age_1 != 20) {
    console.log("Eligible for vote in older category");
}

if (age_1 <= age_2) {
    console.log("Younger");
}

if (age_2 >= age_1) {
    console.log("Older");
}

if (age_1 == 25 && age_2 == 22) {
    console.log("Person is eligible not for vote");
}

if (age_1 == 25 || age_2 != 22) {
    console.log("Person is eligible not for vote");
}

let countries: string[] = ["USA", "Canada", "Mexico", "Brazil"];
if (countries.indexOf("USA") !== -1) {
    console.log("USA is in the country list");
}

let other_countries: string[] = ["Germany", "France", "Italy", "Spain"];
if (other_countries.indexOf("Japan") === -1) {
    console.log("Japan is not included in the array");
}



//QUESTION-25/a

let alien_color: string = "green";

// Check if the alien color is green
if (alien_color == "green") {
    console.log("You earn 5 points");
}



//QUESTION-25/b

// Version 2: Alien's color is not green
let alien_color1: string = 'yellow'; // or 'red'

// Check if the alien's color is green
if (alien_color1 == 'green') {
    console.log("Congratulations! You just earned 5 points."); // This message should not be printed
}



//QUESTION-26/a

// Version 1: Alien's color is green
let alien_color2: string = 'green';

// Check if the alien's color is green
if (alien_color2 == 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
} else {
    console.log("Congratulations! You just earned 10 points for shooting the alien."); // This message should not be printed
}



//QUESTION-26/b

// Version 2: Alien's color is not green
let alien_color3: string = 'yellow'; // or 'red'

// Check if the alien's color is green
if (alien_color3 == 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien."); // This message should not be printed
} else {
    console.log("Congratulations! You just earned 10 points for shooting the alien.");
}



//QUESTON-27

//Version 1: Green Alien
let alienColor: string = 'green';

if (alienColor === 'green') {
    console.log("You just earned 5 points!");
} else if (alienColor === 'yellow') {
    console.log("You just earned 10 points!");
} else if (alienColor === 'red') {
    console.log("You just earned 15 points!");
}

//Version 2: Yellow Alien
let alienColor4: string = 'yellow';

if (alienColor4 === 'green') {
    console.log("You just earned 5 points!");
} else if (alienColor4 === 'yellow') {
    console.log("You just earned 10 points!");
} else if (alienColor4 === 'red') {
    console.log("You just earned 15 points!");
}

//Version 3: Red Alien
let alienColor5: string = 'red';

if (alienColor5 === 'green') {
    console.log("You just earned 5 points!");
} else if (alienColor5 === 'yellow') {
    console.log("You just earned 10 points!");
} else if (alienColor5 === 'red') {
    console.log("You just earned 15 points!");
}



//QUESTIOON-28

let age: number = 25; // You can set this value to test different stages of life

if (age < 2) {
    console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
} else if (age >= 65) {
    console.log("The person is an elder.");
}



//QUESTIOON-29

let favorite_fruits: string[] = ['apple', 'banana', 'mango', 'grape', 'strawberry'];

// Check for 'apple'
if (favorite_fruits.includes('apple')) {
    console.log("You really like apples!");
}

// Check for 'banana'
if (favorite_fruits.includes('banana')) {
    console.log("You really like bananas!");
}

// Check for 'mango'
if (favorite_fruits.includes('mango')) {
    console.log("You really like mangoes!");
}

// Check for 'grape'
if (favorite_fruits.includes('grape')) {
    console.log("You really like grapes!");
}

// Check for 'strawberry'
if (favorite_fruits.includes('strawberry')) {
    console.log("You really like strawberries!");
}



//QUESTIOON-30

let usernames: string[] = ['Admin', 'Noman', 'Hamza', 'Arslan', 'Mahira', 'Aena'];

for (let username of usernames) {
    if (username === 'Admin') {
        console.log(`Hello ${username}, would you like to see a status report?`);
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}



//QUESTIOON-31

let usernames1: string[] = ['admin', 'Noman', 'Hamza', 'Arslan', 'Mahira', 'Aena'];

// Clear the array to test the empty case
usernames1 = [];

if (usernames1.length === 0) {
    console.log("We need to find some users!");
} else {
    for (let username of usernames1) {
        if (username === 'admin') {
            console.log(`Hello ${username}, would you like to see a status report?`);
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}


//QUESTIOON-32

let current_users: string[] = ["mahira", "Arslan", "Nabeel", "Ali", "Mohsin"];
let new_users: string[] = ["mahira", "aena", "John", "Hamza", "Abdullah"];

let current_users_lower: string[] = current_users.map(user => user.toLowerCase());

for (let new_user of new_users) {
    if (current_users_lower.indexOf(new_user.toLowerCase()) >= 0) {
        console.log(`Sorry "${new_user}" name is already taken.`);
    } else {
        console.log(`Yes ${new_user}, is still available.`);
    }
}



//QUESTION-33

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of numbers) {
    if (number === 1) {
        console.log(`${number}st`);
    } else if (number === 2) {
        console.log(`${number}nd`);
    } else if (number === 3) {
        console.log(`${number}rd`);
    } else {
        console.log(`${number}th`);
    }
}



//QUESTION-34

let favourite_pizza : string [] = ["pepperoni","chicken tikka","fajita"]

for (let pizza of  favourite_pizza) {
    console.log(pizza)
}
console.log("\n")

for (let pizza of  favourite_pizza) {
    console.log(`I really like ${pizza} pizza!`)
}

console.log("\nI really love pizza!")



//QUESTION-35

let animals: string[] = ["horse", "donkey", "mule"];

// Print the name of each animal
for (let animal of animals) {
    console.log(animal);
}
console.log("\n");

// Print a statement about each animal
for (let animal of animals) {
    console.log(`A ${animal} is known for its strength.`);
}

// Concluding statement about the animals
console.log("\nAll of these animals are strong and reliable work companions!");



//QUESTION-36

function make_shirt(size: string, message: string): void {
  console.log(`The shirt size is ${size} and it has the message: "${message}" printed on it.`);
}

// Call the function with sample arguments
make_shirt("Large", "Keep Calm and Code On");
make_shirt("Medium", "Hello World!");
make_shirt("Small", "TypeScript Rocks!");



//QUESTION-37

function make_shirt1(size: string = "Large", message: string = "I love TypeScript"): void {
  console.log(`The shirt size is ${size} and it has the message: "${message}" printed on it.`);
}

// Make a large shirt with the default message
make_shirt1();

// Make a medium shirt with the default message
make_shirt1("Medium");

// Make a shirt of any size with a different message
make_shirt1("Small", "TypeScript Rocks!");



//QUESTION-38

function describe_city(city: string, country: string = "Pakistan"): void {
  console.log(`${city} is in ${country}.`);
}

// Call the function for three different cities
describe_city("Karachi"); // Default country
describe_city("Lahore");  // Default country
describe_city("New York", "USA"); // Different country



//QUESTION-39

function city_country(city: string, country: string): string {
  return `${city}, ${country}`;
}

// Call the function with at least three city-country pairs
let city1 = city_country("Lahore", "Pakistan");
let city2 = city_country("Paris", "France");
let city3 = city_country("Sydney", "Australia");

console.log(city1);
console.log(city2);
console.log(city3);



//QUESTION-40

function make_album(artist: string, title: string, tracks?: number): Record<string, any> {
  const album: Record<string, any> = {
      artist,
      title,
      tracks
  };
  
  return album;
}

// Call the function to create three albums
const album1 = make_album("Haasan Rahem", "Wishes");
const album2 = make_album("Young Stunners", "Dont Mind", 16);
const album3 = make_album("Superstar Pride", "Painting Picture", 12);

// Print each album object
console.log(album1);
console.log(album2);
console.log(album3);



//QUESTION-41

function show_magicians(magicians: string[]): void {
  magicians.forEach(magicians => console.log(magicians));
}

const magicians: string[] = ["Rameez", "Atif", "Nabeel",];

show_magicians(magicians);



//QUEESTION-42

function make_great(magicians: string[]): void {
  for (let i = 0; i < magicians.length; i++) {
      magicians[i] = magicians[i] + ' the great';
  }
}

const magicians2: string[] = ["abbas", "jawwad", "faraz"];
make_great(magicians2);
console.log(magicians2);



//QUEESTION-43

function make_great2(magicians: string[]): string[] {
  const greatMagicians: string[] = [];
  for (let i = 0; i < magicians.length; i++) {
      greatMagicians.push(magicians[i] + " the Great");
  }
  return greatMagicians;
}

const magicians3: string[] = ["Nabeel", "Atif", "Rameez"];

const greatMagicians2: string[] = make_great2([...magicians3]); // Create a copy using spread operator
console.log(magicians3); // Original array remains unchanged
console.log(greatMagicians2); // Modified array with "the Great" added to each magician's name



//QUEESTION-44

function sandwich(...items: string[]): void {
  console.log("Sandwich order:");

  for (let i = 0; i < items.length; i++) {
      console.log(`-  ${items[i]}`);
  }
}

console.log("Enjoy your sandwich Man ");

sandwich('ham', 'cheddar', 'pickles', 'mayonnaise');
sandwich('turkey', 'swiss cheese', 'lettuce', 'mustard');
sandwich('roast beef', 'provolone', 'onions', 'tomatoes', 'mustard');



//QUEESTION-45

type car = {
  manufacturer: string;
  model: string;
  [key: string]: any;
};

function createCar(manufacturer: string, model: string, optional: Record<string, any>): car {
  return {
      manufacturer,
      model,
      ...optional
  };
}

const mycar: car = createCar("Lexus", "LX600", { color: "white", year: 2024 });
console.log(mycar);

alert,prompt,console, and concatenation

Assignement 1 : Welcome Message

let name = prompt("What is your name?");
alert("Welcome," + name + "!")

Assignment 2: Age Message
let name =prompt("What is your name?");
let age =prompt("What is your age?");
console.log("name:" + name);
console.log("age:" + age);


Assignment 3: Favorite Color
let color = prompt("what is favourite color?");
alert("WOW " + color + " is a nice color!")


Assignment 4: Simple Math Sentence
let num1 = prompt("NUM1");
let num2 = prompt("NUM2");
console.log("The result of " + num1  + "+" +  num2 + " is 10.");


Assignment 5: About Me Summary
let name = prompt("What is your Name?");
let hobby = prompt("What are your hobbies?");
let country = prompt("Where do you live?");
alert("Hi, I'm "+ name + " from " +  country  + " , and I love "+ hobby + "!")

Javascript String concatenation Practice:

Task 1: Create a Full Address
let Address = prompt("Where do you live?");
console.log("Your full address is: " + Address);


Task 2: Make a Custom Username
let address = prompt("Your name and Favourite number?");
console.log("Your new username is : " + address);


Task 3: Email Generator
let name = prompt("Your first name");
let lastName = prompt("Your first lastname");
console.log(name + lastName + "@gmail.com");


Task 4: Combine Favorite Things
let color = prompt("What is your Favorite color?");
let animal = prompt("What is your Favorite animal?");
let food = prompt("What is your Favorite food?");
console.log("Your favorite things are: " +  color + " "+   animal  + " and " + food);
  

 Task 5: Quote with Author
let quote = prompt("Share a quote with us.");
let authorName = prompt("Who is the author of quotation.");
console.log(quote + " -" + authorName);


Arithmetic Operator Tasks
(1) one 04-Assignment
let num1 = Number(prompt("Enter the firstnumber:"));
let num2 = Number(prompt("Enter the second number:"));
let result = num1 + num2;
alert("The sum is:" + result);


  (2) one 04-Assignment
let num1 = Number (prompt("Enter the first number"));
let num2 = Number (prompt("Enter the second number"));
let result = num1 - num2;
console.log("The result is:" + result);


 (3) one 04-Assignment
let num1 = Number (prompt("Enter the first number"));
let num2 = Number (prompt("Enter the second number"));
let result = num1 * num2;
alert("The result is: " + result)


(4) one 04-Assignment
let  num1 = Number(prompt("Enter the first number:"));
let  num2 = Number(prompt("Enter the second number:"));
let  result = num1 / num2;
console.log("Division result: " + result);


(5) one 04-Assignment
let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));
let result = num1 % num2;
console.log("Remainder: " + result);

(6) one 04-Assignment
let num = 10;
num += 5;
console.log(num);



(7) one 04-Assignment
let num = 20;
num -= 4;
alert(num);


(8) one 04-Assignment
let num = 6;
num *= 3;
console.log(num);

(9) one 04-Assignment
let num = 50;
num /= 2;
console.log(num);

(10) one 04-Assignment
let num = Number(prompt("Enter a number:"));
num += 10;
alert("Result: " + num);

(11) one 04-Assignment
let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));
console.log(num1 > num);


(12) one 04-Assignment
let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));
alert(num1 < num2);


(13) one 04-Assignment
let num = Number(prompt("Enter a number:"));
console.log(num == 100);

(14) one 04-Assignment
let num = prompt("Enter a number:");
console.log(num === "100");

(15) one 04-Assignment
let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));
alert(num1 != num2);

(16) one 04-Assignment
let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));
console.log(num1 !== num2);

(17) one 04-Assignment
let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));
alert(num1 >= num2);

(18) one 04-Assignment
let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));
console.log(num1 <= num2);

(19) one 04-Assignment
let age = Number(prompt("Enter your age:"));
let country = prompt("Enter your country:");
let result = age > 18 && country === "USA";
console.log(result);

(20) one 04-Assignment
let color = prompt("Enter a color:");
let shape = prompt("Enter a shape:");
let result = color === "red" || shape === "circle";
alert(result);

1. Age Check
let age = Number(prompt("Enter your age:"));

if (age >= 18) {
    alert("You are an adult.");
} else {
    alert("You are a minor.");
}

2. Positive Number
let num = Number(prompt("Enter a number:"));

if (num > 0) {
    console.log("Positive number");
} else {
    console.log("Not positive");
}

3. Even or Odd
let num = Number(prompt("Enter a number:"));

if (num % 2 === 0) {
    alert("Even number");
} else {
    alert("Odd number");
}

4. Username Check
let username = prompt("Enter your username:");

if (username === "admin") {
    alert("Welcome, admin!");
} else {
    alert("Access denied.");
}

5. Compare Two Numbers
let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));

if (num1 === num2) {
    console.log("Both numbers are the same");
} else {
    console.log("The numbers are different");
}

6. Find the Larger Number
let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));

if (num1 > num2) {
    alert("First is larger");
} else if (num2 > num1) {
    alert("Second is larger");
} else {
    alert("Both numbers are equal");
}

7. Number Greater Than 100
let num = Number(prompt("Enter a number:"));

if (num > 100) {
    alert("Too big!");
} else {
    alert("Within range");
}

8. Pass or Fail
let score = Number(prompt("Enter your score:"));

if (score >= 50) {
    console.log("You passed!");
} else {
    console.log("You failed.");
}

9. Temperature Check
let temperature = Number(prompt("Enter the temperature:"));

if (temperature > 30) {
    alert("It's hot!");
} else {
    alert("It's not hot.");
}

10. Check for Zero
let num = Number(prompt("Enter a number:"));

if (num === 0) {
    alert("Zero");
} else {
    alert("Not zero");
}

11. Senior Citizen Check
let age = Number(prompt("Enter your age:"));

if (age >= 60) {
    console.log("You are a senior citizen.");
} else {
    console.log("You are not a senior.");
}

12. Name Check
let name = prompt("Enter your name:");

if (name === "Alice") {
    alert("Hi, Alice!");
} else {
    alert("You're not Alice!");
}

13. Password Check
let password = prompt("Enter your password:");

if (password === "12345") {
    console.log("Correct password");
} else {
    console.log("Wrong password");
}

14. Morning or Afternoon
let hour = Number(prompt("Enter the current hour (0–23):"));

if (hour < 12) {
    alert("Good morning!");
} else {
    alert("Good afternoon!");
}

15. Divisible by 5
let num = Number(prompt("Enter a number:"));

if (num % 5 === 0) {
    console.log("Divisible by 5");
} else {
    console.log("Not divisible by 5");
}

16. Play a Game
let answer = prompt("Do you want to play a game? (yes/no)");

if (answer === "yes") {
    alert("Let's play!");
} else {
    alert("Maybe next time!");
}

17. Color Check
let color = prompt("Enter a color:");

if (color === "blue") {
    console.log("Cool choice!");
} else {
    console.log("Interesting color!");
}

18. Weekend or Weekday
let day = prompt("Enter the day of the week:");

if (day === "Sunday") {
    alert("Weekend!");
} else {
    alert("Weekday");
}

19. Fruit Availability
let fruit = prompt("Enter a fruit:");

if (fruit === "banana" || fruit === "apple") {
    alert("We have that!");
} else {
    alert("Sorry, out of stock.");
}

20. Start a Game
let input = prompt("Type 'start' to begin:");

if (input === "start") {
    alert("Game started!");
} else {
    alert("Waiting for input...");
}

Part 2: Advanced Conditional Logic (1–15)
1. Age-Based Grade Check
let marks = Number(prompt("Enter your marks (0–100):"));

if (marks < 0 || marks > 100) {
    console.log("Invalid Marks");
} else if (marks >= 80) {
    console.log("Distinction");
} else if (marks >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}

2. Discount Eligibility
let age = Number(prompt("Enter your age:"));
let membership = prompt("Are you a premium member? (yes/no)");

if (age >= 60 && membership === "yes") {
    console.log("Senior Premium Discount");
} else if (age >= 60) {
    console.log("Senior Discount");
} else if (membership === "yes") {
    console.log("Premium Discount");
} else {
    console.log("No Discount");
}

3. Login and Email Verification
let loggedIn = prompt("Are you logged in? (yes/no)");
let verified = prompt("Is your email verified? (yes/no)");

if (loggedIn === "yes" && verified === "yes") {
    console.log("Access granted");
} else if (loggedIn === "yes" && verified === "no") {
    console.log("Please verify your email");
} else {
    console.log("Please log in");
}

4. Contest Eligibility
let age = Number(prompt("Enter your age:"));
let country = prompt("Enter your country:");
let banned = prompt("Are you banned? (yes/no)");

if (banned === "yes") {
    console.log("You are banned");
} else if (age < 18 || age > 35) {
    console.log("Age requirement not met");
} else if (country !== "Pakistan" && country !== "India") {
    console.log("Region not eligible");
} else {
    console.log("You are eligible for the contest");
}

5. Subscription Access
let plan = prompt("Enter your subscription plan (premium/free):");
let loggedIn = prompt("Are you logged in? (yes/no)");

if (loggedIn !== "yes") {
    console.log("Please log in to continue");
} else if (plan === "premium") {
    console.log("Welcome Premium User");
} else if (plan === "free") {
    console.log("Welcome Free User");
} else {
    console.log("Invalid subscription");
}

6. Product Purchase Validation
let price = Number(prompt("Enter product price:"));
let stock = Number(prompt("Enter available stock:"));
let member = prompt("Are you a member? (yes/no)");

if (price <= 0 || stock < 0) {
    console.log("Invalid product");
} else if (stock === 0) {
    console.log("Out of stock");
} else if (price > 1000 && stock > 0 && member === "yes") {
    console.log("Buy now with discount");
} else if (stock > 0) {
    console.log("Buy now");
} else {
    console.log("Invalid product");
}

7. Work Hours Check
let hoursWorked = Number(prompt("Enter hours worked:"));
let isWeekend = prompt("Is it the weekend? (yes/no)");

if (hoursWorked < 0) {
    console.log("Invalid hours");
} else if (hoursWorked === 0) {
    console.log("No work");
} else if (hoursWorked > 40 && isWeekend === "no") {
    console.log("Overtime");
} else if (isWeekend === "yes") {
    console.log("Weekend work");
} else {
    console.log("Regular hours");
}

8. Age and Gender Classification
let age = Number(prompt("Enter your age:"));
let gender = prompt("Enter your gender (male/female):");

if (age < 0) {
    console.log("Invalid age");
} else if (age >= 13 && age <= 19 && gender === "male") {
    console.log("Teen Male");
} else if (age >= 13 && age <= 19 && gender === "female") {
    console.log("Teen Female");
} else if (age >= 20) {
    console.log("Adult");
} else if (age < 13) {
    console.log("Child");
} else {
    console.log("Invalid gender");
}

9. Weather Warning System
let temp = Number(prompt("Enter temperature:"));
let humidity = Number(prompt("Enter humidity percentage:"));

if (humidity < 0 || humidity > 100) {
    console.log("Invalid humidity");
} else if (temp >= 40 && humidity >= 60) {
    console.log("Heatwave Alert");
} else if (temp >= 40 && humidity < 60) {
    console.log("Hot and Dry");
} else if (temp <= 20) {
    console.log("Cool Weather");
} else {
    console.log("Moderate");
}

10. Score Grading System
let score = Number(prompt("Enter your score (0–100):"));

if (score < 0 || score > 100) {
    console.log("Invalid Score");
} else if (score >= 90) {
    console.log("Excellent");
} else if (score >= 70) {
    console.log("Good");
} else if (score >= 50) {
    console.log("Average");
} else if (score >= 30) {
    console.log("Poor");
} else {
    console.log("Fail");
}

11. Course Access Control
let loggedIn = prompt("Are you logged in? (yes/no)");
let enrolled = prompt("Are you enrolled? (yes/no)");
let banned = prompt("Are you banned? (yes/no)");

if (loggedIn !== "yes") {
    console.log("Please log in");
} else if (banned === "yes") {
    console.log("User is banned");
} else if (enrolled !== "yes") {
    console.log("Enroll in course first");
} else {
    console.log("Access granted");
}

12. Driving Conditions
let speed = Number(prompt("Enter your speed:"));
let hasLicense = prompt("Do you have a license? (yes/no)");

if (speed < 0) {
    console.log("Invalid speed");
} else if (speed > 120) {
    console.log("License suspended");
} else if (speed >= 100) {
    console.log("Warning");
} else if (hasLicense === "yes") {
    console.log("Normal driving");
} else {
    console.log("Driving without license");
}

13. Order Processing Status
let payment = prompt("Enter payment status (complete/pending/failed):");
let shipped = prompt("Has the order shipped? (yes/no)");

if (payment === "failed") {
    console.log("Payment failed");
} else if (payment === "pending") {
    console.log("Awaiting payment");
} else if (payment === "complete" && shipped === "yes") {
    console.log("Order on the way");
} else if (payment === "complete" && shipped === "no") {
    console.log("Preparing your order");
} else {
    console.log("Invalid payment status");
}

14. Battery Status Checker
let battery = Number(prompt("Enter battery level (0–100):"));
let charging = prompt("Is the device charging? (yes/no)");

if (battery < 0 || battery > 100) {
    console.log("Invalid battery level");
} else if (battery === 100) {
    console.log("Fully Charged");
} else if (battery < 20 && charging === "no") {
    console.log("Low Battery");
} else if (battery < 100 && charging === "yes") {
    console.log("Charging...");
} else {
    console.log("Battery OK");
}

15. Browser and Device Compatibility
let browser = prompt("Enter your browser:");
let device = prompt("Enter your device (Desktop/Mobile):");

if (browser === "Chrome" && device === "Desktop") {
    console.log("Full features enabled");
} else if (browser === "Chrome" && device === "Mobile") {
    console.log("Limited mobile features");
} else {
    console.log("Please switch to Chrome");
}

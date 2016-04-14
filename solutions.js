// JavaScript Function Exercises

// 1. Define a function called "divideByTwo". It should accept one parameter called "number".
//    The function should divide the number by two and output the answer.
var divideByTwo = function(number){
  console.log(number / 2)
}

divideByTwo(4);
divideByTwo(32);
divideByTwo(7);

// 2. Define a function called "greeting". It should accept two parameters, which will be names.
//    The function should output the a greeting to both people.
var greeting = function(name1, name2){
  console.log("Hi there,", name1, "and", name2)
}

greeting("Scranton", "Veda")
// 3. You use Amazon Subscribe & Save to have six cans of cashews automatically sent to you each month, but the price keeps changing.
//    Write a function that takes the price per unit and calculates the total for you each month.
var amazon = function(price){
  console.log("The price this month is $" + (price * 6))
}

amazon(8);
amazon(2.22);
amazon(813.44);
// 4. Write a function that accepts the following array and separates the people into two teams.
//    No names next to eachother in the array should be on the same team.
      teammates = ["Harold", "Bob", "Sue", "Grady", "Notorious B.I.G.", "JavaCrypt", "Weird guy in the back", "Gary", "Carol", "Hipster Tim", "Janet"]
var team1 = [];
var team2 = [];
var teamSplit = function(teammates){
  for(i=0; i<teammates.length; i++){
    if(i % 2 === 0){
      team1.push(teammates[i]);
    } else {
      team2.push(teammates[i]);
    }
  }
  console.log(team1);
  console.log(team2);
}

teamSplit(teammates);
// 5. Define a function called "quarter". It accepts one parameter called "number".
//    The function will return a value which is one quarter of the number provided.

var quarterIt = function(number){
  return number / 6;
}

quarterIt(48);
// 6. Define functions called "area" and "perimeter". They should both accept two parameters and calculate the area and perimeter of a rectangle.
var area = function(length, width){
  console.log("The area is:", (length * width));
}
area(5, 7);

var permimeter = function(length, width){
  console.log("The permimeter is:", 2 * (length * width));
}

permimeter(3, 9);
// 7. Write a function called "sleepings", it should accept one parameter, an integer called "hours".
//    Write a conditional statement inside of the function. If the number of hours is more than 8, print a statement to the console about getting enough rest.
//    If the number of hours is less than 8, print a statement recommending the user get more shut eye.
var sleepings = function(hours) {
  if(hours < 8){
    console.log("Get some more sleep!");
  } else {
    console.log("You're solid.");
  }
}

sleepings(7);
sleepings(11);
// 8. Prompt a user to enter a three digit number. Write a function that adds the numbers together.
//    HINT: You may need to google how to turn a string into an integer.
var adding = function(number){
  var numArray = number.split("")
  var total = 0;
  for(i=0; i<numArray.length; i++){
    total += parseInt(numArray[i])
    console.log(total)
  }
}
adding("234")

// 9. You've finally gotten around to counting the change in your piggy bank. Write a function that accepts four parameters (quarters, dimes, nickels, and pennies).
//     The function should take each number of coins and multiply it times each coin's value.
//     Finally, it should return the total amount of change you have in the following format: "$32.77"
//     HINT: Googling the toFixed method will help you
var changeCounting = function(quarters, dimes, nickels, pennies){
  var qTotal = (quarters * .25);
  var dTotal = (dimes * .1);
  var nTotal = (nickels * .05);
  var pTotal = (pennies * .01);
  var total = (qTotal + dTotal + nTotal + pTotal);
  console.log("$" + total.toFixed(2));
}

changeCounting(8, 20, 40, 200);
// 11. Develop a function that determines a person's age by prompting them for their birth year.
var ageFinder = function(birthYear){
  var age = (2016 - birthYear)
  console.log("You're probably", age, "years old.");
}

ageFinder(1994);
ageFinder(1966);

// 12. Write a function that takes a year and reports whether or not it is a leap year.
//     Remember, a leap year occurs:
//        On every year that is evenly divisible by 4
//        Except every year that is evenly divisible by 100
//        Unless the year is also evenly divisible by 400
//        For example, 1997 is not a leap year, but 1996 is.  1900 is not a leapyear, but 2000 is
var leapYear = function(year) {
  if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)){
    console.log("Leap Year");
  } else {
    console.log("Meh, not so leap year-ish.")
  }
}
leapYear(1997);
leapYear(2000);
leapYear(1900);
leapYear(2016);
leapYear(2014);

// 13. Develop a function that cleans up a phone number entered by a user.
//     The rules are as follows:
//        If the phone number is less than 10 digits or more than 11 digits, assume that it is bad number
//        If the phone number is 10 digits assume that it is good
//        If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits
//        If the phone number is 11 digits and the first number is not 1, then it is a bad number.
//        HINT: You may need to use the charAt method.
var cleanPhone = function(phone){
  phone = phone.toString();
  if(phone.length > 11 || phone.length < 10){
    console.log("Bad Number");
  }
  else if(phone.length === 11){
    if(phone.charAt(0) == 1){
      var clean = phone.substring(1);
      console.log(clean);
    }
    else {
      console.log("Bad Number");
    }
  }
  else {
    console.log(phone);
  }
}
cleanPhone(15868830323);
cleanPhone(5868830323);
cleanPhone(38792359082358);
cleanPhone(32908);
cleanPhone(39286928893);
cleanPhone(3029829838);

// 14. Create a function that determines whether a parameter is a number or not.
//     Iterate over the elements in the following array to determine if each is a number.
//     HINT: You may need to use the isNaN method.
       arrayOfAllTheThings = ["one", 23, {thingsWhalesLove: "beaches"}, "six hundred", 33, 6834, "5,435"]
var checkIt = function(array){
  for(i=0; i<array.length; i++){
    if(isNaN(array[i])){
      console.log(array[i] + " is not a number!")
    } else {
      console.log(array[i] + " IS a number!")
    }
  }
}

checkIt(arrayOfAllTheThings);
// 15. Create a die rolling function that accepts no parameters.
//     It rolls two six-sided-dice, adds the two numbers together, and returns a roll value.
//     To get the random number rolled by each die, use Math.random and Math.floor.
var rollDice = function() {
  var total = 0
  dieOne = Math.floor(Math.random() * 6) + 1;
  dieTwo = Math.floor(Math.random() * 6) + 1;
  console.log("die one:", dieOne)
  console.log("die two:", dieTwo)
  var roll = dieOne + dieTwo
  console.log("Your roll: " + roll);
  total += roll
  count = 0
  while(total < 41){
    dieOne = Math.floor(Math.random() * 6) + 1;
    dieTwo = Math.floor(Math.random() * 6) + 1;
    var roll = dieOne + dieTwo
    console.log("Your roll: " + roll);
    total += roll
    console.log(total)
    count ++
  }
  console.log("It took me", count, "rolls to finally buy a property!")
}

rollDice();

// 16. Using your die roll function above, figure out how many times it would take a user
//     to get around a Monopoly board once. A monopoly board has 40 spaces total.

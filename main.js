// JavaScript Function Exercises

// 1. Define a function called "divideByTwo". It should accept one parameter called "number".
//    The function should divide the number by two and output the answer.
console.log("Question 1");
var divideByTwo = function(number){
	return number / 2
};
var answer = divideByTwo(4);
console.log(answer);

// 2. Define a function called "greeting". It should accept two parameters, which will be names.
//    The function should output the a greeting to both people.
console.log("Question 2");
var greeting = function(name1, name2){
	console.log("Hello, " + name1 + " and " + name2);
};
greeting("Tom", "Emily");

// 3. You use Amazon Subscribe & Save to have six cans of cashews automatically sent to you each month, but the price keeps changing.
//    Write a function that takes the price per unit and calculates the total for you each month.
console.log("Question 3");
var nuts = function(price){
	return price * 6;
};
var price = 10;
var pricePerUnit = nuts(price);
console.log("If cashews cost " +price+ " per unit, it costs you " +pricePerUnit+ " for 6 cans per month.");

// 4. Write a function that accepts the following array and separates the people into two teams.
//    No names next to eachother in the array should be on the same team.
console.log("Question 4");
var teammates = ["Harold", "Bob", "Sue", "Grady", "Notorious B.I.G.", "JavaCrypt", "Weird guy in the back", "Gary", "Carol", "Hipster Tim", "Janet"]
var classmates = ["emily", "michelle", "sandy"];
var teamMaker = function(array){
	var team1 = [];
	var team2 = [];
	for(i=0; i<array.length; i++){
		if( i % 2 === 0 ){
			team1.push(array[i]);
		}else{
			team2.push(array[i]);
		}
	}
	return team1;
	return team2;
	// return [team1, team2];
};
console.log(teamMaker(teammates));
console.log(teamMaker(classmates));

// 5. Define a function called "quarter". It accepts one parameter called "number".
//    The function will return a value which is one quarter of the number provided.
console.log("Question 5");
var quarter = function(number){
	return number / 4
};
console.log(quarter(16));

// 6. Define functions called "area" and "perimeter". They should both accept two parameters and calculate the area and perimeter of a rectangle.
console.log("Question 6");
var area = function(width, height){
	return width * height;
};
var perimeter = function(width, height){
	return (width*2) + (height*2) ;
};
console.log("Area: " + area(2, 6));
console.log("Perimeter: " + perimeter(5, 2));

// 7. Write a function called "sleepings", it should accept one parameter, an integer called "hours".
//    Write a conditional statement inside of the function. If the number of hours is more than 8, print a statement to the console about getting enough rest.
//    If the number of hours is less than 8, print a statement recommending the user get more shut eye.
console.log("Question 7");
var sleepings = function(hours){
	if(hours > 8){
		return "Yahoo! You got enough sleep last night. Go eat a cookie.";
	}else{
		return "Go back to bed.";
	}
};
console.log(sleepings(4));

// 8. Prompt a user to enter a three digit number. Write a function that adds the numbers together.
//    HINT: You may need to google how to turn a string into an integer.
console.log("Question 8");
// var reply = prompt('Hey there, Pick a number, any number! Three digits, please.');
// var addThreeNumbers = function(number){
// 	var numArray = number.split('');
// 	var newNum = 0;
// 	for(i=0; i<numArray.length; i++){
// 		newNum += parseInt(numArray[i]);
// 	}
// 	return newNum;
// };
// console.log(addThreeNumbers(reply));


// 9. You've finally gotten around to counting the change in your piggy bank. Write a function that accepts four parameters (quarters, dimes, nickels, and pennies).
//     The function should take each number of coins and multiply it times each coin's value.
//     Finally, it should return the total amount of change you have in the following format: "$32.77"
//     HINT: Googling the toFixed method will help you with the format.
console.log("Question 9");
var piggyBank = function(quarters, dimes, nickels, pennies){
	var qTotal = quarters * 0.25;
	var dTotal = dimes * 0.10;
	var nTotal = nickels * 0.05;
	var pTotal = pennies * 0.01;
	return qTotal + dTotal + nTotal + pTotal
};
var amount = piggyBank(8, 20, 40, 200);
console.log("$" + amount.toFixed(2));

// 10. Develop a function that determines a person's age by prompting them for their birth year.
console.log("Question 10");
// var age = function(year){
// 	return 2016 - year
// };
// var newAge = prompt("When were you born?")
// console.log("The user's age is " + age(newAge));

// 11. Write a function that takes a year and reports whether or not it is a leap year.
//     Remember, a leap year occurs:
//        On every year that is evenly divisible by 4
//        Except every year that is evenly divisible by 100
//        Unless the year is also evenly divisible by 400


// There is a leap year every year whose number is perfectly divisible by four
// - except for years which are both divisible by 100 and not divisible by 400


//        For example, 1997 is not a leap year, but 1996 is.  1900 is not a leapyear, but 2000 is.
console.log("Question 11");
var leapYear = function(year){
	if( (year % 4 === 0) && !( (year%100 === 0) && !(year%400 === 0) ) ){
		result = "This is leap year";
	}else{
		result = "This is not a leap year";
	}
	return result;
};
console.log(leapYear(1900));
console.log(leapYear(1996));
console.log(leapYear(1997));
console.log(leapYear(2000));
console.log(leapYear(2016));
console.log(leapYear(2014));

// 12. Develop a function that cleans up a phone number entered by a user.
//     The rules are as follows:
//        If the phone number is less than 10 digits or more than 11 digits, assume that it is bad number
//        If the phone number is 10 digits assume that it is good
//        If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits
//        If the phone number is 11 digits and the first number is not 1, then it is a bad number.
//        HINT: You may need to use the charAt method.
console.log("Question 12");
var cleanPhone = function(number){
	var phone = number.toString();
	if(phone.length > 11 || phone.length < 10){
		return message = "Bad number";
	}else if(phone.length === 11){
		if(phone.charAt(0) == 1){
			var clean = phone.substring(1);
			return clean;
		}else{
			return message = "Bad number";
		}
	}else{
		return number;
	}
};
console.log(cleanPhone(13037817122));
console.log(cleanPhone(137817122));
console.log(cleanPhone(7202171838));
console.log(cleanPhone(72021718382345));

// 13. Create a function that determines whether a parameter is a number or not.
//     Iterate over the elements in the following array to determine if each is a number.
//     HINT: You may need to use the isNaN method.
console.log("Question 13");
       arrayOfAllTheThings = ["one", 23, {thingsWhalesLove: "beaches"}, "six hundred", 33, 6834, "5,435"]
var check = function(array){
	for(i=0; i<array.length; i++){
		if(isNaN(array[i])){
			console.log(array[i] + " is not a number");
		}else{
			console.log(array[i] + " is a number");
		}
	}
}
check(arrayOfAllTheThings);

// 14. Create a die rolling function that accepts no parameters.
//     It rolls two six-sided-dice, adds the two numbers together, and returns a roll value.
//     To get the random number rolled by each die, use Math.random and Math.floor.
console.log("Question 14");
var rollDice = function(){
	var total = 0;
	dieOne = Math.floor(Math.random() * 6) + 1;
	dieTwo = Math.floor(Math.random() * 6) + 1;
	console.log("Die One: " + dieOne);
	console.log("Die Two: " + dieTwo);
	var roll = dieOne + dieTwo
	console.log("Your roll: " + roll);
	total += roll;
	count = 1;
	while( total < 41 ){
		dieOne = Math.floor(Math.random() * 6) + 1;
		dieTwo = Math.floor(Math.random() * 6) + 1;
		console.log("Die One: " + dieOne);
		console.log("Die Two: " + dieTwo);
		var roll = dieOne + dieTwo
		console.log("Your roll: " + roll);
		total += roll;
		console.log(total);
		count ++;
	}
	console.log("It took me " + count + " to buy a property!");
}
rollDice();

// 15. Using your die roll function above, figure out how many times it would take a user
//     to get around a Monopoly board once. A monopoly board has 40 spaces total.

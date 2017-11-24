"use strict";

var median, pupilsAge = [], ageSum = 0, ageMax = 0, ageMin = 1000, pupilsMax = 0;

do{
    pupilsMax = parseInt (prompt("How many pupils in your class?",3),10);
} while ( !isValid(pupilsMax, 1, 30) );
 
 	for (var i=0; i<pupilsMax; ++i){
		var age;
		do{
			age = parseInt (prompt ("Write age of pupil №" + (i + 1), 10),10);
		} while ( !isValid(age, 6, 19) );
		pupilsAge.push( age );	
 		ageSum = ageSum + age;
 		
 		if (age > ageMax){
 			ageMax = age;
 		};
 	 	
 		if (age < ageMin){
 	 	 	ageMin = age;
 		};
 		
		console.log(age, ' ', ageSum);
 		console.log(pupilsMax);
 		console.log(ageMax, " ", ageMin);
	}

 pupilsAge.sort(compare);
 
 var n = pupilsMax >> 1;
 if ((pupilsMax % 2) === 1) {  //IsOdd checking
 median = pupilsAge[n + 1];
 } else { 
 median = (pupilsAge[n] + pupilsAge[n + 1])/2;
 };
 
 alert("Average age: " + ageSum/pupilsAge.length);
 alert("Min age: " + ageMin);
 alert("Max age: " + ageMax);
 alert("Median: " + median);

 
function compare(a,b) {
	if (a > b) return 1;
	if (a < b) return -1;
};

 
function isValid (num, min, max){	
	return (typeof num === "number" && num >= min && num <= max ) ?
	true : false; //ЗДЕСЬ не обязательная конструкция, НО запомни как пользоваться
};


/*var pupilsAge = [];
 while (pupilsAge !== number) {
  var pupilsMax = prompt("How many pupils in your class?"); 
   }
*/


/*var ageSum=0;
const pupils = [
	{age:14 ,height:120, scores:[1, 2, 3]},
	{age:15 ,height:120, scores:[1, 2, 3]},
	{age:16 ,height:120, scores:[1, 2, 3]}
];

for (var i=0; i<pupils.length; ++i) {
	ageSum = ageSum + pupils[i].age;
}

alert("Average age: " + ageSum/pupils.length);


//[,].forEach(alert)
*/
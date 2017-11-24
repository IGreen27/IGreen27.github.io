"use strict";

function validate(current, min, max){
	min = min || 0;
	min -= 1;
	max += 1;

	return(typeof current === typeof 1 && current > min && current < max) ?
	true : false;
};
function chekOdd (num){
	num % 2 === 0 ;
}

var pupilsAge = [], ageSum = 0, ageMax = 0, ageMin = 1000;
var mediana = null, midPupil = null;
prog:
for (;;){
 var pupilsMax = +prompt("How many pupils in your class?",3);
 if( !validate(pupilsMax, 1, 30) ) continue ;

 	for (var i=0; i<pupilsMax; ++i){
		for (;;){
 		  pupilsAge.push( +prompt("Write age of pupil №" + (i + 1), 10) );

		  if( !validate(pupilsAge[i], 6, 19) ) continue ;

 		  ageSum = ageSum + pupilsAge[i];

 		  if (pupilsAge[i] > ageMax){
 			ageMax = pupilsAge[i];
 		  }

 		  if (pupilsAge[i] < ageMin){
 	 	 	ageMin = pupilsAge[i];
 		  }
 		  console.log(pupilsAge[i], ' ', ageSum);
 		  console.log(pupilsMax);
 		  console.log(ageMax, " ", ageMin);
		  break;
		}
 }

 mediana = 0;
 alert("Average age: " + ageSum/pupilsAge.length);
 alert("Min age: " + ageMin);
 alert("Max age: " + ageMax);
 break prog;
}


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

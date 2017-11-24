var isQuoted = false; 
var isWrong = false;		//Продумать состояния!
var isSpaced = false
var a = 0;
var mas = [];
var input =	prompt("Введите строчку");
for ( i = 0; i < input.length; ++i ){
	var symbol = input[i];
	function addWord ( a, i ){
		mas.push( input.splice( a, i ))
	};
	if (isSpaced){		                 //пробелы?
		if(!(symbol === " ")){
			isSpaced = false;
		} else {
			a = i + 1;
		}
	} else {
		if (isQuoted){					//кавычки?
			if (symbol === "\""){
				isQuoted = false;
				addWord ( a, i )
			} else {
				
			}
		}
	}
}
alert (mas.join("\" & \""));

function isSeparator (a){
	switch (a){
		case "." :
		case "," :
		case ":" :
		case "?" :
		case "!" :
		case "-" :
		case "—" :
		case "(" :
		case ")" :
		case "[" :
		case "]" :
		case "{" :
		case "}" :
		case "=" :
		case "+" :
		case ";" :
		case "\\" :
			return true;
		break;
		default:
			return false;
		break;
	}
}



/*

	var symbol = input[i];
	if ( isQuoted ) {
		if (symbol === "\""){
			while (input[a] === " "){++a};
			var s = input.slice (a , i);
			if ( s !== '' ){
				while (s[s.length - 1] === " ") {s = s.slice( 0, -1)};
				mas.push (s);
			};
			a = i + 1;
			isQuoted = false;
		}
	} else {
		switch (symbol) {
			case "\"" :
				isQuoted = true;
				++a;
				break;
			case "*" :
				if (i + 1 < input.length){
					if (!isSeparator(input[i + 1])){
						isWrong = true;
						console.log(isWrong);
					}
				}
				break;
			case " " :
			case "." :
			case "," :
			case ":" :
			case "?" :
			case "!" :
			case "-" :
			case "—" :
			case "(" :
			case ")" :
			case "[" :
			case "]" :
			case "{" :
			case "}" :
			case "=" :
			case "+" :
			case ";" :
			case "\\" :
				console.log(isWrong);
				var s = input.slice (a , i);
				if ( s !== '' && !isWrong){
					mas.push (s);
				};
				isWrong = false;
				a = i + 1;
				console.log(isWrong);
				break;
		}
	}
*/
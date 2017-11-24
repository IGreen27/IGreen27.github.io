"use strict";
const matrix1 = [
	[1,2,3],
	[10,20,30],
	[100,200,300] ];
const matrix2 = [
	[4,5,6],
	[40,50,60],
	[400,500,600] ];
var matrix3 = [];

/*(matrix1[0].length = matrix2.length)*/

for (var l = 0; l < matrix1.length; l++){
	matrix3[l] = [];
	for (var c = 0; c < matrix2[0].length; c++){
		var a = 0;
		for (var x = 0; x < matrix2.length; x++){
			a += matrix1[l][x] * matrix2[x][c];
		}
		matrix3[l][c] = a;
	}
}
alert (matrix3.join("\n"));

/*var n = 0;
function func(x, n){
	return x+x ,n + 1 ; //tuple													//massRnd
}
*/
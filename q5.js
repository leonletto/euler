//5 - Smallest Multiple
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?


var isdivisable=function(candidate,num){
	if (num==20 && candidate%20==0) return 1;
	if (num>0 && candidate%num==0 && isdivisable(candidate,++num)){
		return 1;
	}
	return 0;
}


for (x=1;x<99999999999;x++){
	if (isdivisable(x,1)){
		console.log(x);
		break;
	}
}





// console.log("total is " + sum);
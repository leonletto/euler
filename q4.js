//4 - Largest Palindrome Product
// What is the largest Palindrome Product of 3 numbers
// A palindromic number reads the same both ways. The 
// largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

var ispal=function(candidate){
	var one = candidate.toString();
	//console.log("one is "+one+" and one's length is "+one.length);
	if (one.length==1) return 1;
	if (one.length==2) {
		if (one.substring(0,1)==one.substring(1,2)) return 1;
	}
	if (one.length>2){
		//console.log("first:"+one.substring(0,1)+" second:"+one.substring(one.length-1,one.length))
		if (one.substring(0,1)==one.substring(one.length-1,one.length)){
			if (ispal(one.substring(1,one.length-1))) return 1;
		}
	}
	return 0;
}
var first = 999;
var second = 999;
var result = 0;
for (var x=first;x>0;x--){
	for (var y=second;y>0;y--){
		if (ispal(x*y) && x*y>result){
			result=x*y;
		}
	}
}

console.log(result);



// console.log("total is " + sum);
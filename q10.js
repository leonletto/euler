//10 Summation of Primes
// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.

var isprime=function(candidate){
	var x=2;
	for(var x=2;x <= Math.sqrt(candidate);x++){
		if(candidate%x==0){
			return 0;
		}
	}
	return 1;
}

var sample=2000000

var sum=5;
var prev=0;
var next=2;
var temp=0;
for (var next=4;next<sample;next++){
	if(isprime(next)){
		sum = sum + next;
		console.log(next+" is next and sum is "+sum);
	}
}


console.log("total is " + sum);
//3 - Largest Prime factor
// What is the largest prime factor of the number 600851475143

var isprime=function(candidate){
	var x=2;
	while(x <= candidate/2){
		if(candidate%x==0){
			return 0;
		}
		x++;
	}
	return 1;
}

var sample=600851475143

var sum=0;
var prev=0;
var next=2;
var temp=0;
for (var next=2;next<=sample;next++){
	if(sample%next==0){
		if(isprime(next)){
		console.log(next);
		sample=sample/next;
		}
	}

	
	
}


// console.log("total is " + sum);
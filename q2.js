//2- Even Fibonacci numbers
var sum=0;
var prev=0;
var next=1;
var temp=0;
while (next<4000000){
	temp=prev;
	prev=next;
	next=temp + next;
	
	
	
	if(next%2==0 && next < 4000000){
		console.log("sum is "+sum +"and next is "+next);
		sum = sum+next;
	}
}
console.log("total is " + sum);
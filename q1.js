//1	- Multiples of 3 and 5
var sum=0;
for(var x=1;x<1000;x++){
	if(x%3==0){
		console.log("sum is "+sum +"and x is "+x);
		sum = sum+x;
	} else if(x%5==0) {
		console.log("sum is "+sum +"and x is "+x);
		sum=sum+x;
	}
}
console.log("total is " + sum);
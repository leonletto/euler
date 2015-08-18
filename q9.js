//9 - Special Pythagorean triplet
//T
//A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
//a^2 + b^2 = c^2
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 52.
//There exists exactly one Pythagorean triplet for which a + b + c = 1000.
//Find the product abc.

var total = 1000;
var digits = [];

for (var x=1;x<330;x++){
	for (var y=x+1;y<500;y++){
		for (var z=y+1;z<900;z++){
			if (((x*x)+(y*y)==(z*z))){
				if(x+y+z==1000){
				console.log("answer is - x="+x+", y="+y+", z="+z+" and the product is "+x*y*z);
				break;
				}
			} else if (x+y+z>1000){
				z=1000;
			}
		}
	}
}

console.log("end ");
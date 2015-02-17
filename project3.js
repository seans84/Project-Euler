var i = 600851475143
function largestPrimeF(number) {
	var divisor = 2;
	var initialNum = number;
	
	while (initialNum > divisor) {
		if (initialNum % divisor === 0) {
			initialNum = initialNum / divisor;
		}
		else {
			divisor++;
		}
	}
	console.log("The largest prime factor of " + i + " is " + divisor)
}

largestPrimeF(i)
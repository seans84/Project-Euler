// determine if a number is divisible by 3 or 5.  If it is
// then add the results together and print to screen.
var x = 0

for (var i = 1; i < 1000; i++) {
	if ((i % 3 === 0) || (i % 5 === 0)) {
		x += i;
	}
}

console.log(x)
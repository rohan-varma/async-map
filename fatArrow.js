//explanation of basic differences of => and function() { ... }
//namely, the different binding of this


function returnIncrementer(startAt) {
	const b = 
	return function() {
		return startAt + 1
	}
}

const incr = returnIncrementer(4)
console.log(incr())
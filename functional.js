const each = (iterable, op) => {
	for(let i = 0; i < iterable.length; i++) {
		op(iterable[i], i);
	}
}

const filter = (iterable, predicate) => {
	const results = [];
	for(let i = 0; i < iterable.length; i++) {
		if(predicate(iterable[i])) {
			results.push(iterable[i]);
		}
	}
	return results;
}

const reduce = (iterable, reducer) => {
	// reducer takes 2 things and returns 1
	if (iterable.length === 1) {
		return "error";
	}
	else {
		let reduced = reducer(iterable[0], iterable[1]);
		for(let i = 2; i < iterable.length; i++) {
			reduced = reducer(reduced, iterable[i])
		}
		return reduced
	}
}


each([1, 2, 3], (element, idx) => console.log('idx is ', idx, 'element is ', element))
console.log('events are', filter([0, 1, 2, 3], element => element % 2 === 0))
console.log(reduce([1, 2, 3], (a, b) => a + b))
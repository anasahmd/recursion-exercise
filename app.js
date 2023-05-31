function sumRange(num) {
	if (num == 0) {
		return num;
	} else {
		return num + sumRange(num - 1);
	}
}

function power(base, exp) {
	if (exp == 0) {
		return 1;
	} else {
		return base * power(base, exp - 1);
	}
}

function factorial(num) {
	if (num == 1) {
		return 1;
	} else {
		return num * factorial(num - 1);
	}
}

function allEvery(arr, cb) {
	if (arr.every(cb)) {
		return true;
	} else {
		return false;
	}
}

// Functionality similar all allEvery but using recursion
function all(arr, cb) {
	if (arr.length == 0) {
		return true;
	}

	if (cb(arr[arr.length - 1])) {
		//Removes the last element of array, and pass it again to all
		arr.pop();
		return all(arr, cb);
	} else {
		return false;
	}
}

function productOfArray(arr) {
	if (arr.length == 0) {
		return 1;
	} else {
		return arr.pop() * productOfArray(arr);
	}
}

function contains(obj, value) {
	for (var key in obj) {
		if (typeof obj[key] === 'object') {
			return contains(obj[key], value);
		}

		if (obj[key] === value) {
			return true;
		}
	}
	return false;
}

function totalIntegers(arr) {
	if (arr.length == 0) return 0;

	const last = arr.pop();

	if (typeof last == 'number') {
		return 1 + totalIntegers(arr);
	} else if (Array.isArray(last)) {
		return totalIntegers(last) + totalIntegers(arr);
	} else {
		return totalIntegers(arr);
	}
}

function sumSquares(arr) {
	if (arr.length == 0) return 0;

	const last = arr.pop();
	if (typeof last == 'number') {
		return power(last, 2) + sumSquares(arr);
	} else if (Array.isArray(last)) {
		return sumSquares(last) + sumSquares(arr);
	} else {
		return sumSquares(arr);
	}
}

function replicate(times, num) {
	if (times == 1) {
		return [num];
	} else {
		return [num].concat(replicate(times - 1, num));
	}
}

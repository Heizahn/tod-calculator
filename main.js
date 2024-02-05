function suma(num1, num2) {
	return num1 + num2
}

function resta(num1, num2) {
	return num1 - num2
}

function multi(num1, num2) {
	return num1 * num2
}

function divi(num1, num2) {
	if (num2 === 0) return "Infinity"

	return num1 / num2
}

function operate(num1, operator, num2) {
	if (operator === "+") {
		suma(Number(num1), Number(num2))
	}

	if (operator === "-") {
		resta(Number(num1), Number(num2))
	}

	if (operator === "*") {
		multi(Number(num1), Number(num2))
	}

	if (operator === "/") {
		divi(Number(num1), Number(num2))
	}
}
const screenInput = document.getElementById("screen")
let operation
let opt = false
let n1 = ""
let n2 = ""


function suma(num1, num2) {
	return num1 + num2
}

function resta(num1, num2) {
	return (num1 - num2)
}

function multi(num1, num2) {
	return num1 * num2
}

function divi(num1, num2) {
	if (num2 === 0) return "Infinity"

	return num1 / num2
}

function operate() {
	if (n1 !== "") {
		n2 = screenInput.value
	}
	let result = 0
	switch (operation) {
		case "+":
			result = suma(Number(n1), Number(n2))
			n1 = result
			n2 = ""
			return screenInput.value = result.toFixed(2)

		case "-":
			result = resta(Number(n1), Number(n2))
			n1 = result
			n2 = ""
			return screenInput.value = result.toFixed(2)

		case "*":
			result = multi(Number(n1), Number(n2))
			n1 = result
			n2 = ""
			return screenInput.value = result.toFixed(2)

		case "/":
			result = divi(Number(n1), Number(n2))
			n1 = result
			n2 = ""
			return screenInput.value = result.toFixed(2)
	}
}

function operator(str) {
	operation = str
	if (n1 === "") {
		n1 = screenInput.value
	}
	opt = true

}


function addBtn(str) {
	if (opt) {
		screenInput.value = ""
		opt = false
	}
	screenInput.value += str

}

function clearScreen() {
	n1 = ""
	n2 = ""
	return screenInput.value = ""
}


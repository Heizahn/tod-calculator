const screenInput = document.getElementById("screen")


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


	let Add = screenInput.value.includes("+")
	let Subtract = screenInput.value.includes("-")
	let Multiply = screenInput.value.includes("*")
	let Divide = screenInput.value.includes("/")

	if (Add) {
		let arrAdd = screenInput.value.split("+")

		let num1 = Number(arrAdd[0])
		let num2 = Number(arrAdd[1])

		let result = suma(num1, num2)

		return screenInput.value = result
	}

	if (Subtract) {
		let arr = screenInput.value.split("-")

		let num1 = Number(arr[0])
		let num2 = Number(arr[1])

		let result = resta(num1, num2)

		return screenInput.value = result
	}

	if (Multiply) {
		let arr = screenInput.value.split("*")

		let num1 = Number(arr[0])
		let num2 = Number(arr[1])

		let result = multi(num1, num2)

		return screenInput.value = result
	}

	if (Divide) {
		let arr = screenInput.value.split("/")

		let num1 = Number(arr[0])
		let num2 = Number(arr[1])

		let result = divi(num1, num2)

		return screenInput.value = result
	}
}


function addBtn(str) {
	screenInput.value += str

}

function clearScreen() {
	return screenInput.value = ""
}


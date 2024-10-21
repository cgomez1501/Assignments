function generateTable() {
    const number = parseInt(document.getElementById('numberInput').value);

    if (isNaN(number) || number < 1) {
        alert("Please enter a valid positive number.");
        return;
    }

    for (let i = 1; i <= 10; i++) {
        let result = number * i;
        let resultElementId = `result${i}`;

        document.getElementById(resultElementId).textContent = `${number} x ${i} = ${result}`;

        if (result % 2 === 0) {
            document.getElementById(resultElementId).classList.add('even');
        } else {
            document.getElementById(resultElementId).classList.remove('even');
        }
    }
}
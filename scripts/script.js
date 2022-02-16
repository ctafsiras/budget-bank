function getInput(inputId) {
    const input = document.getElementById(inputId);
    const inputAmount = parseInt(input.value);
    return inputAmount;
}
function calculate() {

    const incomeInput = getInput('income-input');
    const foodsInput = getInput('foods-input');
    const rentsInput = getInput('rents-input');
    const clothesInput = getInput('clothes-input');
    const totalExpences = foodsInput + rentsInput + clothesInput;
    const balanceAmount = incomeInput - totalExpences;
    if (isNaN(incomeInput) || isNaN(foodsInput) || isNaN(rentsInput) || isNaN(clothesInput)) {
        document.getElementById('calculate-str').style.display = 'block';
    }
    else if (incomeInput < 0 || foodsInput < 0 || rentsInput < 0 || clothesInput < 0) {
        document.getElementById('calculate-str').style.display = 'none';
        document.getElementById('calculate-neg').style.display = 'block';
    }
    else if (totalExpences > incomeInput) {
        document.getElementById('calculate-str').style.display = 'none';
        document.getElementById('calculate-neg').style.display = 'none';
        document.getElementById('calculate-over').style.display = 'block';
    }
    else {
        document.getElementById('calculate-str').style.display = 'none';
        document.getElementById('calculate-neg').style.display = 'none';
        document.getElementById('calculate-over').style.display = 'none';
        document.getElementById('total-expenses-amount').innerText = totalExpences;
        document.getElementById('balance-amount').innerText = balanceAmount;
    }

}
function saving() {
    const saveInput = getInput('save-input');
    const incomeInput = getInput('income-input');
    const saveAmount = (incomeInput / 100) * saveInput;
    const balance = parseInt(document.getElementById('balance-amount').innerText);
    const remainingAmount = balance - saveAmount;
    if (isNaN(incomeInput) || isNaN(saveInput)) {
        document.getElementById('saving-str').style.display = 'block';
    }
    else if (incomeInput < 0 || saveInput < 0) {
        document.getElementById('saving-str').style.display = 'none';
        document.getElementById('saving-neg').style.display = 'block';
    }
    else if (saveInput > balance) {
        document.getElementById('saving-str').style.display = 'none';
        document.getElementById('saving-neg').style.display = 'none';
        document.getElementById('saving-over').style.display = 'block';
    }
    else {
        document.getElementById('saving-str').style.display = 'none';
        document.getElementById('saving-neg').style.display = 'none';
        document.getElementById('saving-over').style.display = 'none';
        document.getElementById('saving-amount').innerText = saveAmount;
        document.getElementById('remaining-amount').innerText = remainingAmount;
    }


}
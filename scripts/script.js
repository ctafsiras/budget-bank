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
    document.getElementById('total-expenses-amount').innerText = totalExpences;
    document.getElementById('balance-amount').innerText = balanceAmount;
}
function saving() {
    const saveInput = getInput('save-input');
    const incomeInput = getInput('income-input');
    const saveAmount = (incomeInput / 100) * saveInput;
    const balance = parseInt(document.getElementById('balance-amount').innerText);
    const remainingAmount = balance - saveAmount;
    document.getElementById('saving-amount').innerText = saveAmount;
    document.getElementById('remaining-amount').innerText = remainingAmount;

}
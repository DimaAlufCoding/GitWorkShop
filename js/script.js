function clearDisplay() {
    document.getElementById('display').value = '';
    console.log('dima')

}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
    console.log('dima')
}

function calculateResult() {
    const display = document.getElementById('display').value;
    try {
        const result = eval(display);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

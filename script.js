const container = document.querySelector('.container');
const form = document.calc.result.value;
console.log(form);

container.addEventListener('click', function(e) {
    numbers = e.target.value;

    if (numbers === undefined) {
        error();
    } else if (numbers == 'C') {
        numbers = '';
    } else if (numbers == '=') {
        btnresult();
    } else {
        calculate = document.calc.result.value += numbers;
    }
});

function error() {
    alert('INPUT ERROR!');
}

function btnClear() {
    var clear = document.getElementById('hasil');
    clear.value = '';

}

function btnresult() {

    ans = eval(calculate);
    document.calc.result.value = ans;
}
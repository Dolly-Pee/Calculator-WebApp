const buttons = document.querySelectorAll('.button');
const plus = document.querySelector('.plusBtn');
const minus = document.querySelector('.minusBtn');
const divide = document.querySelector('.divideBtn');
const del = document.querySelector('.deleteBtn');
const reset = document.querySelector('.resetBtn');
const multiplication = document.querySelector('.multiplicationBtn');
const equalBtn = document.querySelector('.equalBtn');
let inputbox = document.querySelector('input');
let buttonValue;


const operators = [del, plus, minus, divide, reset, multiplication, equalBtn];

let initialNumbers = [];
let firstNumber;
let counter = 0;

var digitPeriodRegExp = new RegExp('\\d|\\.');

inputbox.addEventListener('input', function (event) {
    var splitValue = inputbox.value.split('');
    var charactersToFilter = 0;
    var filteredSplitValue =
        splitValue.map(function (character) {
            if (!digitPeriodRegExp.test(character)) {
                charactersToFilter++;
                return '';
            }

            return character;
        });

    inputbox.value = filteredSplitValue.join('');

    var charactersBeforeSelectionStart = filteredSplitValue.slice(0,
        inputbox.selectionStart);
    var filteredCharactersBeforeSelectionStart = charactersBeforeSelectionStart.filter(function (character) {
        return !character;
    });

    var totalFilteredCharactersBeforeselectionStart = filteredCharactersBeforeSelectionStart.length;
    var newSelectionStart = inputbox.selectionStart - totalFilteredCharactersBeforeselectionStart;

    inputbox.selectionStart = newSelectionStart;
    inputbox.selectionEnd = inputbox.selectionStart;

}, false);

inputbox.addEventListener('keydown', (event) => {
  event.preventDefault();
  return false;
});


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {

        if (operators.includes(buttons[i])) {

            if (buttons[i] === del) {

                for (let i = 0; i < inputbox.value.length; i++) {
                    let deleteNumber = inputbox.value;
                    deleteNumber = deleteNumber.toString()
                    deleteNumber = deleteNumber.slice(0, deleteNumber.length - 1);
                    inputbox.value = deleteNumber;
                    initialNumbers = [];
                }
            }
            if (buttons[i] === plus) {
                initialNumbers.push(parseFloat(inputbox.value));
                initialNumbers.push('+');
                inputbox.value = '';
            }
            else if (buttons[i] === minus) {
                initialNumbers.push(parseFloat(inputbox.value));
                initialNumbers.push('-');
                inputbox.value = '';
            }
            else if (buttons[i] === divide) {
                initialNumbers.push(parseFloat(inputbox.value));
                initialNumbers.push('/');
                inputbox.value = '';
            }
            else if (buttons[i] === multiplication) {
                initialNumbers.push(parseFloat(inputbox.value));
                initialNumbers.push('*');
                inputbox.value = '';
            }

            else if (buttons[i] === reset) {
                inputbox.value = '';
                counter = 0;
                initialNumbers = [];
            }



            else if (buttons[i] === equalBtn) {

                firstNumber = initialNumbers[0];

                counter += firstNumber;

                initialNumbers.push(parseFloat(inputbox.value));

                for (let i = 0; i < initialNumbers.length; i++) {

                    if (initialNumbers[i] === '+') {
                        counter = parseFloat(counter);
                        counter += parseFloat(initialNumbers[++i]);
                    }

                    else if (initialNumbers[i] === '-') {
                        counter = parseFloat(counter);
                        counter -= parseFloat(initialNumbers[++i]);
                    }
                    else if (initialNumbers[i] === '/') {
                        counter = parseFloat(counter);
                        counter /= parseFloat(initialNumbers[++i]);
                    }
                    else if (initialNumbers[i] === '*') {
                        counter = parseFloat(counter);
                        counter *= parseFloat(initialNumbers[++i]);
                    }

                }


                initialNumbers = [counter];
                counter = 0;
                inputbox.value = parseFloat(initialNumbers[0]).toLocaleString();

            }

        }
         else {
            let buttonValue = buttons[i].textContent;
            inputbox.value += buttonValue;
        }
    })
}       
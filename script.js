const display = document.getElementById('display');

function appendValue(value) {
  display.value += value;
}

function appendFunction(func) {
  display.value += func;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    // Replace percentage
    let expression = display.value.replace(/%/g, '/100');
    // Evaluate the expression
    display.value = eval(expression);
  } catch (error) {
    display.value = 'Error';
  }
}
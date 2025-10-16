const content = document.getElementById('content');

function getSum() {
    const num1 = prompt('Enter first integer:');
    const num2 = prompt('Enter second integer:');
    
    if (isNaN(num1) || isNaN(num2) || !Number.isInteger(Number(num1)) || !Number.isInteger(Number(num2))) {
        const error = document.createElement('div');
        error.className = 'error';
        error.textContent = `Error! You must enter integers. You entered "${num1}" and "${num2}". Try again.`;
        content.appendChild(error);
        return;
    }
    
    const sum = Number(num1) + Number(num2);
    const result = document.createElement('div');
    const span = document.createElement('span');
    span.style.color = 'red';
    span.style.fontWeight = 'bold';
    span.textContent = `${num1} + ${num2} = ${sum}`;
    
    result.appendChild(span);
    content.appendChild(result);
}

getSum();

const content = document.getElementById('content');

function getSum() {
    const num1 = prompt('Enter first integer:');
    const num2 = prompt('Enter second integer:');
    
    if (isNaN(num1) || isNaN(num2) || !Number.isInteger(Number(num1)) || !Number.isInteger(Number(num2))) {
        const error = document.createElement('div');
        
        const errorSpan = document.createElement('span');
        errorSpan.style.color = 'red';
        errorSpan.style.fontWeight = 'bold';
        errorSpan.textContent = 'Error!';
        error.appendChild(errorSpan);
        
        const restText = document.createTextNode(` You must enter integers. You entered "${num1}" and "${num2}". Try again.`);
        error.appendChild(restText);
        
        content.appendChild(error);
        return;
    }
    
    const sum = Number(num1) + Number(num2);
    const result = document.createElement('div');
    const text = document.createTextNode(`${num1} + ${num2} = `);
    result.appendChild(text);
    
    const span = document.createElement('span');
    span.style.color = 'red';
    span.style.fontWeight = 'bold';
    span.textContent = sum;
    
    result.appendChild(span);
    content.appendChild(result);
}

getSum();

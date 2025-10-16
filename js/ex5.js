const output = document.getElementById('output');

for (let i = 1; i <= 12; i++) {
    const div = document.createElement('div');
    div.textContent = i;
    
    if (i % 4 === 0) {
        div.classList.add('divisible-by-4');
    }
    
    output.appendChild(div);
}
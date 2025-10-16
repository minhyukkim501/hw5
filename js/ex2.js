const displayText400 = () => {
  const items = document.querySelectorAll('li[class*="400level"]');
  items.forEach(item => {
    console.log(item.textContent.trim());
  });
}

const makeParagraphsBold = () => {
  const paragraphs = document.querySelectorAll('p');
  paragraphs.forEach(p => {
    p.style.fontWeight = 'bold';
    p.style.backgroundColor = 'yellow';
  });
}

const addCollegeOfBusinessLink = () => {
  const csulbLi = document.getElementById('csulb');
  
  const newLi = document.createElement('li');
  const newLink = document.createElement('a');
  newLink.href = 'https://www.csulb.edu/college-of-business';
  newLink.textContent = 'Information Systems';
  newLink.textContent = 'College of Business';
  newLi.appendChild(newLink);
  
  csulbLi.parentNode.insertBefore(newLi, csulbLi.nextSibling);
}

displayText400();
makeParagraphsBold();
addCollegeOfBusinessLink();
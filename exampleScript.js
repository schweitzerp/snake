const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

const p = document.createElement ('p');
p.textContent = "Hey I'm red!";
p.style.color = "red";
container.appendChild(p);

const header = document.createElement('h3');
header.textContent = "I'm a blue h3!";
header.style.color = "blue";
container.appendChild(header);

const div2 = document.createElement('div');
div2.style.background = "pink";
div2.style.border = "1px solid black";

const divHeader = document.createElement('h1');
divHeader.textContent = "I'm in a div!";
div2.appendChild(divHeader);

const p2 = document.createElement('p');
p2.textContent = 'ME TOO!';
div2.appendChild(p2);
container.appendChild(div2);


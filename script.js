const container = document.querySelector('#container');

for (let i=0; i<256; i++){
    const cell = document.createElement('div');
    cell.textContent = `${i}`;
    cell.id = 'c' + i;
    cell.className = "block"
    container.appendChild(cell);

}
const cells = document.querySelector('div')

container.addEventListener("mouseover", function (e){
console.log(this);
e.target.style.backgroundColor = 'blue';
})

console.log(document.body.childNodes)
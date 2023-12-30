let input = document.querySelector('input');

let button = document.querySelector('button');

let p = document.createElement('p');
let container = document.querySelector('.container');

container.append(p);

// -------------------------------------------------------

let maxNumber = 10;
let number = Math.floor(Math.random()* maxNumber);


let tries = 3;

button.addEventListener('click', function() {
  event.preventDefault();
  let guess = parseInt(input.value);

 if (guess !== number){
  tries--;
  if (guess > number){
    p.textContent = 'Too high, trie again and you have ' + tries + ' left';
    p.style.color = 'white';

  }else{
    p.textContent = 'Too low, trie again and you have ' + tries + ' left';
    p.style.color = 'white';
  }

 }else{
  p.textContent = 'You won';
  p.style.backgroundColor = '#074009';
  p.style.color = 'white';
  button.disabled = true;
 }if (tries === 0){
  p.textContent = 'You lost';
  p.style.color = 'white';
  button.disabled = true;
 }
 if (tries ===2){
  p.style.backgroundColor = '#f5c242';
 }else if (tries === 1){
  p.style.backgroundColor = 'orange';
 }

 else if (tries === 0){
  p.textContent = 'You lost, no more tries';
  p.style.backgroundColor = 'red';
  button.disabled = true;
 }});
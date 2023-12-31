let input = document.querySelector('input');

let button = document.querySelector('button');

let p = document.createElement('p');
let container = document.querySelector('.container');

container.append(p);

// -------------------------------------------------------

let maxNumber = 10;
let number = Math.floor(Math.random()* maxNumber);
alert(number);


let tries = 3;

button.addEventListener('click', function() {
  event.preventDefault();
  let guess = parseInt(input.value);

 if (guess !== number){
  tries--;
  if (guess > number){
    p.innerHTML = `<div><p>Too high, trie again and you have ${tries} tries left</p></div>`;
    p.style.color = 'white';
    p.style.width = '40%';
    p.style.textAlign = 'center';

  }else{
    p.innerHTML = `<div></p>Too low, trie again and you have ${tries} tries left</p></div>`;
    p.style.color = 'white';
    p.style.width = '40%';
    p.style.textAlign = 'center';
  }

 }else{
  p.innerHTML = "<div></p>You won</p></div>";
  p.style.backgroundColor = '#22b005';
  p.style.color = 'white';
  p.style.width = '40%';
  p.style.textAlign = 'center';
  button.disabled = true;
 }if (tries === 0){
  p.innerHTML = "<div></p>You have lost</p></div>";
  p.style.color = 'white';
  p.style.width = '40%';
  p.style.textAlign = 'center';
  p.style.backgroundColor = 'red';
  button.disabled = true;
 }
 if (tries ===2){
  p.style.backgroundColor = '#f5c242';
 }else if (tries === 1){
  p.style.backgroundColor = 'orange';
 }

 
 });

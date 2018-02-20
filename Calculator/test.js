
const multiplyB = document.querySelector('.multiply');
const divideB = document.querySelector('.divide');

function onloadEventListeners(){
  multiplyB.addEventListener('click',multiply);
  divideB.addEventListener('click',divide);
}

function multiply(){
  const firstN = document.getElementById('first');
  const secondN = document.getElementById('second');
  const resultf = document.querySelector('.result');
  const result = firstN.value * secondN.value;
  console.log(result);
  resultf.innerHTML = result;

}

function divide(){
  const firstN = document.getElementById('first');
  const secondN = document.getElementById('second');
  const resultf = document.querySelector('.result');
  const result = firstN.value / secondN.value;
  console.log(result);
  resultf.innerHTML = result;

}



function convert(){
const firstN = document.getElementById('first');
const secondN = document.getElementById('second');  
const label = document.getElementById('1');  
if(label.innerHTML === 'Temperature in Celsius:'){
    const result = (9*firstN.value/5)+32;
    // console.log(firstN.value);
    // console.log(result);
    secondN.value = result + " degree Fahrenheit";
  }else{
    const result = (firstN.value-32)*5/9;
    // console.log(firstN.value);
    // console.log(result);
    secondN.value = result + " degree Celsius";
  }

}

function exchange(){
  const firstN = document.getElementById('first');
  const secondN = document.getElementById('second');
  const text = document.getElementById('1').innerHTML;
  document.getElementById('1').innerHTML = document.getElementById('2').innerHTML;
  document.getElementById('2').innerHTML = text;

  firstN.value = '';
  secondN.value= '';


}




//Adding Py in the starting of String
function convert(){
const firstN = document.getElementById('first');
const secondN = document.getElementById('second');  

const thirdN = firstN.value[0]+firstN.value[1];
if(firstN.value === null || firstN.value === undefined || firstN.value.substring(0, 2) === 'Py'){
second.value = firstN.value;
}else{
  second.value = 'Py' + firstN.value;
}


}


//Function to reset the fields.
function reset(){
const firstN = document.getElementById('first');
const secondN = document.getElementById('second');

firstN.value = '';
secondN.value = '';

}


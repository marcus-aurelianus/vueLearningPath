const buttonElement = document.querySelector('button');
const inputElement = document.querySelector('input');
const listElement = document.querySelector('ul');


function addGoal(){
  const enteredValue = inputElement.value;
  if (enteredValue){
    const newListElement = document.createElement('li');
    newListElement.textContent = enteredValue;
    listElement.appendChild(newListElement);
    inputElement.value = '';
  }
}

buttonElement.addEventListener('click',addGoal)
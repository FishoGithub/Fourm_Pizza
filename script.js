function onSubmit(){
  var zip =document.getElementById('zip').value
  var zipinput = document.getElementById('zip')
  
  if(zip == "98052"){
  zipinput.style.background = "green";
}
else{
  zipinput.style.background = "red";
}
}

let toppers = document.getElementsByName('toppings-options')
toppers.forEach(node => console.log(node.checked))

function checkBoxes() {
  for (let i = 0; i<toppers.length; i++) {
    array = []
    array.push(toppers[i])
  }
  if (array.length > 3) {
    alert('TOO MANY TOPPINGS');
  }
}

function validation() {
  let pizzasize = document.getElementById('size-input');
  let crusttype = document.getElementById('pizza-crust');
  var zip = document.getElementById('zip');
  answers = {
    size: pizzasize.value,
    crust: crusttype.value,
    zip_code: zip.value

  }
  console.log(answers);
}

//boilerplate, make sure to change later to show values of all inputs
function submitted() {
  validation();
}
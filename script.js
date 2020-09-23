let crust = document.getElementById('pizza-crust');
let crust = document.getElementById('size-input');

function onSubmit() {
  let toppings = document.getElementsByName('toppings');
  alert(toppings.value);

  toppings.forEach(node=> console.log(node.checked))

  for (let i = 0; i<toppings.length; i++) {
    if(toppings[i].checked)
    console.log(toppings[i].value)
  }
}
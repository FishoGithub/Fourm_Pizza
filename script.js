let toppers = document.getElementsByName('toppings-options')

function onSubmit() {
  let zipcode = document.getElementById('zip')
  console.log(zipcode.value);

  if(zipcode === '98052') {
    console.log('correct');
  }
  else if (zipcode === !'98052') {
    console.log('no')
  }
}

function checkBoxes() {
  for(var i = 0; i<toppers.length; i++) {
    if(toppers[i].checked) {
      console.log(toppers[i].value);
    }
  }
}


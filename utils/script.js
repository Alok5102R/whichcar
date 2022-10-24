let carListContainer = document.getElementById('carList');
let suggestionHeading = document.getElementsByClassName('suggestions')[0];
let noresult_textContainer = document.getElementsByClassName('noresult_text')[0];

let cars = {};

// ==== Function to fetch data from json ====
fetch("../utils/cardata.json")
  .then(function(resp) {
    return resp.json();
  })
  .then(function(data){
    cars = data;
  });
// ==== Function to fetch data from json ====


function getFilteredCars() {
  resetFields();
  var fPrice = document.getElementById('fPrice').value;
  var tPrice = document.getElementById('tPrice').value || 10;

  var seatsDrpDwn = document.getElementById('Seats');
  var minseats = seatsDrpDwn.options[seatsDrpDwn.selectedIndex].value;

  var typesDrpDwn = document.getElementById('Types');
  var type = '';
  if (typesDrpDwn.value)
    type = typesDrpDwn.options[typesDrpDwn.selectedIndex].text;

  let selectedCars = [];
  for (let i = 0; i < cars.length; i++) {

    if (
      cars[i]['price'] >= fPrice &&
      cars[i]['price'] <= tPrice &&
      (cars[i]['type'] == type || !type) &&
      cars[i]['seat'] >= minseats 
    ) {
        let carObj = {
          car: cars[i]['car'] + ' : Rs. ' + cars[i]['price'] + ' lacs ' + ' | ' + cars[i].colr,
          link: cars[i]['link']
        };
        if (!type || minseats == 0) carObj.car += ' |\n';
        if (!type) carObj.car += ' | ' + cars[i].type;
        if (minseats == 0) carObj.car += ' | ' + cars[i].seat + ' Seater';
        selectedCars.push(carObj);
    }
  }
  if(selectedCars.length > 0) {
    suggestionHeading.style.display = 'block';
    carListContainer.innerHTML = '';
    noresult_textContainer.style.display = 'none';
  }
  else{
    noresult_textContainer.style.display = 'block';
    noresult_textContainer.classList.remove('noresult_text');
    void noresult_textContainer.offsetWidth;
    noresult_textContainer.classList.add('noresult_text');
    console.log("trigered!");
  }
  for(let i = 0; i < selectedCars.length; i++) {
    let carLink = document.createElement('a');
    carLink.innerText = selectedCars[i].car;
    carLink.href = selectedCars[i].link;
    carLink.target = '_blank';
    carLink.classList.add('carLink', 'text-base', 'font-medium', 'text-gray-500', 'bg-gray-50', 'hover:text-gray-900', 'hover:bg-gray-100', 'dark:text-gray-400', 'dark:bg-gray-800', 'dark:hover:bg-gray-700', 'dark:hover:text-white');
    carListContainer.appendChild(carLink);
  }
}

function resetFields() {
  suggestionHeading.style.display = 'none';
  carListContainer.innerHTML = '';
}



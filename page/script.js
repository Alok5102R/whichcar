
import data from '../scripts/cars.json' assert {type:'json'};


const btn = $('.filter-cars').click(getFilteredCars)


function getFilteredCars() {
  var fPrice = document.getElementById('fPrice').value;
  var tPrice = document.getElementById('tPrice').value;

  var seatsDrpDwn = document.getElementById('Seats');
  var minseats = seatsDrpDwn.options[seatsDrpDwn.selectedIndex].text;
  minseats = minseats.substring(0,1);

  var typesDrpDwn = document.getElementById('Types');

  var type = typesDrpDwn.options[typesDrpDwn.selectedIndex].text;

  var cars = data

  let resultCar = [];
  let resultPrice = [];
  let j = 0;
  let selectedCars = '';
  for (let i = 0; i < cars.length; i++) {

    if (
      cars[i]['price'] >= fPrice &&
      cars[i]['price'] <= tPrice &&
      cars[i]['type'] == type &&
      cars[i]['seat'] >= minseats 
    ) {
        resultCar[j] = cars[i]['car'];
        resultPrice[j] = cars[i]['price'] + ' lacs ' + ' | ' + cars[i].colr;
        j = j + 1;
    }
  }

  for (let i = 0; i < resultCar.length - 1; i++) {
    selectedCars = selectedCars + resultCar[i] + ' : Rs. ' + resultPrice[i] + '\n';
  }
  selectedCars =
  selectedCars +
    resultCar[resultCar.length - 1] +
    ' : Rs. ' +
    resultPrice[resultCar.length - 1];

  document.querySelector('#demo').textContent = selectedCars;
}

$("button").click(function () {
  $("#myform").get(0).reset();
});


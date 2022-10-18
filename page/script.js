function getFilteredCars() {
  var fPrice = document.getElementById('fPrice').value;
  var tPrice = document.getElementById('tPrice').value;

  var seatsDrpDwn = document.getElementById('Seats');
  var minseats = seatsDrpDwn.options[seatsDrpDwn.selectedIndex].text;
  minseats = minseats.substring(0,1);

  var typesDrpDwn = document.getElementById('Types');

  var type = typesDrpDwn.options[typesDrpDwn.selectedIndex].text;
 
  var cars = [
    {
      car: 'Maruti Alto K10 (Petrol)',
      seat: 5,
      colr: '🔴 🔵 ⚫ ⚪ 🟤',
      type: 'Hatchback',
      price: 4,
    },
    {
      car: 'Maruti Suzuki Swift (Petrol)',
      seat: 5,
      colr: '🔴 🔵 ⚫ ⚪',
      type: 'Hatchback',
      price: 5.9,
    },
    {
      car: 'Tata Punch (Petrol)',
      seat: 5,
      colr: '🔴 🔵 ⚫ ⚪',
      type: 'SUV',
      price: 6,
    },
    {
      car: 'Mahindra Bolero (Petrol)',
      seat: 7,
      colr: '🔴 🔵 ⚫ ⚪',
      type: 'SUV',
      price: 10,
    },
    {
      car: 'Maruti Suzuki Baleno (Petrol)',
      seat: 5,
      colr: '🔴 🔵 ⚫ ⚪',
      type: 'Hatchback',
      price: 6.5,
    },
    {
      car: 'Maruti Brezza (Petrol)',
      seat: 5,
      colr: '🔴 🔵 ⚫ ⚪',
      type: 'SUV',
      price: 8,
    },
    {
      car: 'Maruti S-Presso (Petrol)',
      seat: 4,
      colr: '🔴 🔵 ⚫ ⚪',
      type: 'Hatchback',
      price: 4.7,
    },
    {
      car: 'Tata Nexon (Petrol)',
      seat: 5,
      colr: '🔴 🔵 ⚫ ⚪',
      type: 'SUV',
      price: 7.6,
    },
    {
      car: 'Honda City (Petrol)',
      seat: 5,
      colr: '🔴 🔵 ⚫ ⚪',
      type: 'Sedan',
      price: 12,
    },
    {
      car: 'Tata Safari (Petrol)',
      seat: 6,
      colr: '🔴 🔵 ⚫ ⚪',
      type: 'SUV',
      price: 16,
    }
    
  ];

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

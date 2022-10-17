function getFilteredCars() {
  var fPrice = document.getElementById('fPrice').value;
  var tPrice = document.getElementById('tPrice').value;

  var colorDrpDwn = document.getElementById('Colour');
  var color = colorDrpDwn.options[colorDrpDwn.selectedIndex].text;

  var typesDrpDwn = document.getElementById('Types');

  var type = typesDrpDwn.options[typesDrpDwn.selectedIndex].text;

  var cars = [
    {
      car: 'Maruti S-Presso (Petrol)',
      colour: ['Red 🔴', 'Blue 🔵', 'Black ⚫', 'White ⚪'],
      colr: '🔴 🔵 ⚫ ⚪',
      type: 'SUV',
      price: 4.7,
    },
    {
      car: 'Maruti',
      colour: ['Red 🔴', 'Blue 🔵'],
      colr: '🔴 🔵',
      type: 'SUV',
      price: 18,
    },
    {
      car: 'H City',
      colour: ['Red 🔴', 'Blue 🔵', 'Black ⚫'],
      colr: '🔴 🔵 ⚫',
      type: 'SUV',
      price: 12,
    },
  ];

  let resultCars = [];
  let resultPrices = [];
  let j = 0;
  let carSuggestions = '';

  for (let i = 0; i < cars.length; i++) {
    let match = false;

    if (
      cars[i]['price'] >= fPrice &&
      cars[i]['price'] <= tPrice &&
      cars[i]['type'] == type
    ) {
      for (let k = 0; k < cars[i].colour.length; k++)
        if (cars[i].colour[k] == color) match = true;
      if (match) {
        resultCars[j] = cars[i]['car'];
        resultPrices[j++] = cars[i]['price'] + ' lacs ' + ' | ' + cars[i].colr;
        match = false;
      }
    }
  }

  for (let i = 0; i < resultCars.length; i++) {
    carSuggestions += resultCars[i] + ' : Rs. ' + resultPrices[i] + '\n';
  }

  document.querySelector('#demo').textContent = carSuggestions;
}

let carListContainer = document.getElementById('carList');
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
      link: 'https://www.marutisuzuki.com/alto-k10?utm_source=google&utm_medium=cpc&utm_campaign=18478007953&utm_term=maruti%20alto%20k10&utm_content=m&gclid=EAIaIQobChMIsYye1PXp-gIVn5NmAh1Npwf2EAAYASAAEgKZUvD_BwE'
    },
    {
      car: 'Maruti Suzuki Swift (Petrol)',
      seat: 5,
      colr: '🔴 🔵 ⚫ ⚪',
      type: 'Hatchback',
      price: 5.9,
      link: 'https://www.marutisuzuki.com/swift?form=testdrive&utm_source=google&utm_medium=cpc&utm_campaign=13868647135&utm_term=swift&utm_content=m&gclid=EAIaIQobChMInZun-vXp-gIVuINLBR29KQ_LEAAYASAAEgJJDvD_BwE'
    },
    {
      car: 'Tata Punch (Petrol)',
      seat: 5,
      colr: '🔴 🔵 ⚫ ⚪',
      type: 'SUV',
      price: 6,
      link: 'https://cars.tatamotors.com/suv/punch'
    },
    {
      car: 'Mahindra Bolero (Petrol)',
      seat: 7,
      colr: '🔴 🔵 ⚫ ⚪',
      type: 'SUV',
      price: 10,
      link: 'https://www.google.com/amp/s/auto.mahindra.com/suv/bolero%3famp=true'
    },
    {
      car: 'Maruti Suzuki Baleno (Petrol)',
      seat: 5,
      colr: '🔴 🔵 ⚫ ⚪',
      type: 'Hatchback',
      price: 6.5,
      link: ''
    },
    {
      car: 'Maruti Brezza (Petrol)',
      seat: 5,
      colr: '🔴 🔵 ⚫ ⚪',
      type: 'SUV',
      price: 8,
      link: ''
    },
    {
      car: 'Maruti S-Presso (Petrol)',
      seat: 4,
      colr: '🔴 🔵 ⚫ ⚪',
      type: 'Hatchback',
      price: 4.7,
      link: ''
    },
    {
      car: 'Tata Nexon (Petrol)',
      seat: 5,
      colr: '🔴 🔵 ⚫ ⚪',
      type: 'SUV',
      price: 7.6,
      link: ''
    },
    {
      car: 'Honda City (Petrol)',
      seat: 5,
      colr: '🔴 🔵 ⚫ ⚪',
      type: 'Sedan',
      price: 12,
      link: ''
    },
    {
      car: 'Tata Safari (Petrol)',
      seat: 6,
      colr: '🔴 🔵 ⚫ ⚪',
      type: 'SUV',
      price: 16,
      link: ''
    }
    
  ];

 
  let selectedCars = [];
  for (let i = 0; i < cars.length; i++) {

    if (
      cars[i]['price'] >= fPrice &&
      cars[i]['price'] <= tPrice &&
      cars[i]['type'] == type &&
      cars[i]['seat'] >= minseats 
    ) {
        let carObj = {
          car: cars[i]['car'] + ' : Rs. ' + cars[i]['price'] + ' lacs ' + ' | ' + cars[i].colr,
          link: cars[i]['link']
        };
        selectedCars.push(carObj);
    }
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
  carListContainer.innerHTML = '';
}

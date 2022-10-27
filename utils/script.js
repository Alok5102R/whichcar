// adding animation

const animation =()=>{
  gsap.fromTo('.salesman',{x:0},{x:500,duration:1.2})
  // >>>>>ad1 
  gsap.fromTo('.ad1',
    {y:340, opacity: 0},{y:340, opacity:1, duration:.9,delay:.6})
  
  gsap.fromTo('.car1',
    {x:800,y:-100},{x:0,y:0,duration:1.7,delay:2})

  gsap.fromTo('.catch',{x:900},{x:0,duration:3,delay:2})
}
animation()

const ad1 = document.getElementsByClassName('ad1')
setTimeout(ad1.hidden,5000)

let carListContainer = document.getElementById('carList');
let suggestionHeading = document.getElementsByClassName('suggestions')[0];

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
  var fPrice = document.getElementById('fPrice').value;
  var tPrice = document.getElementById('tPrice').value;

  var seatsDrpDwn = document.getElementById('Seats');
  var minseats = seatsDrpDwn.options[seatsDrpDwn.selectedIndex].text;
  minseats = minseats.substring(0,1);

  var typesDrpDwn = document.getElementById('Types');

  var type = typesDrpDwn.options[typesDrpDwn.selectedIndex].text;

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
  if(selectedCars.length > 0) {
    suggestionHeading.style.display = 'block';
    carListContainer.innerHTML = '';
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



'use strict';
// Seattle
console.log ('Hello World');
//store Constructor
const tableData = document.getElementById('table-data');

function CookieStore(name, min, max, avg) {
  this.cityName = name;
  this.custMin = min;
  this.custMax = max;
  this.avgSales =  avg;
  this.storeHoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
  this.salesPerHour = [];
  this.dailySaleTotal = 0;
}

CookieStore.prototype.randomCustPerHour = function () {
  return Math.floor(Math.random() * (this.custMax - this.custMin + 1) + this.custMin);
};

CookieStore.prototype.calcHourlySales = function (){ 
  let randomSales = 0;
  for (let i = 0; i < this.storeHoursArray.length; i++) {
    randomSales = Math.ceil(this.randomCustPerHour() * this.avgSales);
    this.salesPerHour.push(randomSales);
    this.dailySaleTotal += randomSales;
  }
};

  // render: function(){
  //   this.calcHourlySales();
  //   for (let i = 0; i < this.storeHoursArray.length; i++){
  //     let el = document.createElement('li');
  //     el.textContent = `${this.storeHoursArray[i]}: ${this.salesPerHour[i]} Cookies`;
  //     seattleList.appendChild(el);
  //   }
  //   let liTotal = document.createElement('li');
  //   liTotal.textContent = `Daily Total: ${this.dailySaleTotal}`;
  //   seattleList.appendChild(liTotal);
  // }

let seattle = new CookieStore('Seattle', 23, 65, 6.3);
seattle.calcHourlySales();
let tokyo = new CookieStore('Tokyo', 3, 24, 1.2);
tokyo.calcHourlySales();
let dubai = new CookieStore('Dubai', 11, 38, 3.7);
dubai.calcHourlySales();
let paris = new CookieStore('Paris', 20, 38, 2.3);
paris.calcHourlySales();
let lima = new CookieStore('Lima', 2, 16, 4.6);



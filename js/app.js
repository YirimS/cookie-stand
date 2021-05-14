'use strict';
// Seattle
console.log ('Hello World');

const seattleList = document.getElementById('seattle-list');
const tokyoList = document.getElementById('tokyo-list');
const dubaiList = document.getElementById('dubai-list');
const parisList = document.getElementById('paris-list');
const limaList = document.getElementById('lima-list');

let seattle = {
  cityName: 'Seattle',
  custMin: 23,
  custMax: 63,
  avgSales: 6.9,
  storeHoursArray: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  salesPerHour: [],
  dailySaleTotal: 0,

  //math.floor return the largest integer
  //math.random is a number in the range 0 to less than 1 (inclusive of 0, but not 1) 
  randomCustPerHour: function () {
    return Math.floor(Math.random() * (this.custMax - this.custMin + 1) + this.custMin);
  },
  calcHourlySales: function (){ 
    let randomSales = 0;
    for (let i = 0; i < this.storeHoursArray.length; i++) {
      randomSales = Math.ceil(this.randomCustPerHour() * this.avgSales);
      this.salesPerHour.push(randomSales);
      this.dailySaleTotal += randomSales;
    }
  },
  render: function(){
    this.calcHourlySales();
    for (let i = 0; i < this.storeHoursArray.length; i++){
      let el = document.createElement('li');
      el.textContent = `${this.storeHoursArray[i]}: ${this.salesPerHour[i]} Cookies`;
      seattleList.appendChild(el);
    }
    let liTotal = document.createElement('li');
    liTotal.textContent = `Daily Total: ${this.dailySaleTotal}`;
    seattleList.appendChild(liTotal);
  }
};

let tokyo = {
  cityName: 'Tokyo',
  custMin: 3,
  custMax: 24,
  avgSales: 1.2,
  storeHoursArray: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  salesPerHour: [],
  dailySaleTotal: 0,

  //math.floor return the largest integer
  //math.random is a number in the range 0 to less than 1 (inclusive of 0, but not 1) 
  randomCustPerHour: function () {
    return Math.floor(Math.random() * (this.custMax - this.custMin + 1) + this.custMin);
  },
  calcHourlySales: function (){ 
    let randomSales = 0;
    for (let i = 0; i < this.storeHoursArray.length; i++) {
      randomSales = Math.ceil(this.randomCustPerHour() * this.avgSales);
      this.salesPerHour.push(randomSales);
      this.dailySaleTotal += randomSales;
    }
  },
  render: function(){
    this.calcHourlySales();
    for (let i = 0; i < this.storeHoursArray.length; i++){
      let el = document.createElement('li');
      el.textContent = `${this.storeHoursArray[i]}: ${this.salesPerHour[i]} Cookies`;
      tokyoList.appendChild(el);
    }
    let liTotal = document.createElement('li');
    liTotal.textContent = `Daily Total: ${this.dailySaleTotal}`;
    tokyoList.appendChild(liTotal);
  }
};

let dubai = {
  cityName: 'Dubai',
  custMin: 11,
  custMax: 38,
  avgSales: 3.7,
  storeHoursArray: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  salesPerHour: [],
  dailySaleTotal: 0,

  //math.floor return the largest integer
  //math.random is a number in the range 0 to less than 1 (inclusive of 0, but not 1) 
  randomCustPerHour: function () {
    return Math.floor(Math.random() * (this.custMax - this.custMin + 1) + this.custMin);
  },
  calcHourlySales: function (){ 
    let randomSales = 0;
    for (let i = 0; i < this.storeHoursArray.length; i++) {
      randomSales = Math.ceil(this.randomCustPerHour() * this.avgSales);
      this.salesPerHour.push(randomSales);
      this.dailySaleTotal += randomSales;
    }
  },
  render: function(){
    this.calcHourlySales();
    for (let i = 0; i < this.storeHoursArray.length; i++){
      let el = document.createElement('li');
      el.textContent = `${this.storeHoursArray[i]}: ${this.salesPerHour[i]} Cookies`;
      dubaiList.appendChild(el);
    }
    let liTotal = document.createElement('li');
    liTotal.textContent = `Daily Total: ${this.dailySaleTotal}`;
    dubaiList.appendChild(liTotal);
  }
};

let paris = {
  cityName: 'Paris',
  custMin: 20,
  custMax: 38,
  avgSales: 2.3,
  storeHoursArray: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  salesPerHour: [],
  dailySaleTotal: 0,

  //math.floor return the largest integer
  //math.random is a number in the range 0 to less than 1 (inclusive of 0, but not 1) 
  randomCustPerHour: function () {
    return Math.floor(Math.random() * (this.custMax - this.custMin + 1) + this.custMin);
  },
  calcHourlySales: function (){ 
    let randomSales = 0;
    for (let i = 0; i < this.storeHoursArray.length; i++) {
      randomSales = Math.ceil(this.randomCustPerHour() * this.avgSales);
      this.salesPerHour.push(randomSales);
      this.dailySaleTotal += randomSales;
    }
  },
  render: function(){
    this.calcHourlySales();
    for (let i = 0; i < this.storeHoursArray.length; i++){
      let el = document.createElement('li');
      el.textContent = `${this.storeHoursArray[i]}: ${this.salesPerHour[i]} Cookies`;
      parisList.appendChild(el);
    }
    let liTotal = document.createElement('li');
    liTotal.textContent = `Daily Total: ${this.dailySaleTotal}`;
    parisList.appendChild(liTotal);
  }
};
//study codes thoroughly
let lima = {
  cityName: 'Lima',
  custMin: 2,
  custMax: 16,
  avgSales: 4.6,
  storeHoursArray: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  salesPerHour: [],
  dailySaleTotal: 0,

  //math.floor return the largest integer
  //math.random is a number in the range 0 to less than 1 (inclusive of 0, but not 1) 
  randomCustPerHour: function () {
    return Math.floor(Math.random() * (this.custMax - this.custMin + 1) + this.custMin);
  },
  calcHourlySales: function (){ 
    let randomSales = 0;
    for (let i = 0; i < this.storeHoursArray.length; i++) {
      randomSales = Math.ceil(this.randomCustPerHour() * this.avgSales);
      this.salesPerHour.push(randomSales);
      this.dailySaleTotal += randomSales;
    }
  },
  render: function(){
    this.calcHourlySales();
    for (let i = 0; i < this.storeHoursArray.length; i++){
      let el = document.createElement('li');
      el.textContent = `${this.storeHoursArray[i]}: ${this.salesPerHour[i]} Cookies`;
      limaList.appendChild(el);
    }
    let liTotal = document.createElement('li');
    liTotal.textContent = `Daily Total: ${this.dailySaleTotal}`;
    limaList.appendChild(liTotal);
  }
};


seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

'use strict';
// Seattle
console.log('Hello World');
//store Constructor
const tableData = document.getElementById('table-data');
const storeHoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let tfoot = document.getElementById('table-data');

// this is for my forms
const myForm = document.getElementById('form');
console.log(myForm);
let allCities = [];


const myContainer = document.getElementById('container');
let allStores = [];

function CookieStore(name, min, max, avg) {
  this.name = name;
  this.custMin = min;
  this.custMax = max;
  this.avgSales = avg;
  this.salesPerHour = [];
  this.dailySaleTotal = 0;
  allStores.push(this);
}

CookieStore.prototype.randomCustPerHour = function () {
  return Math.floor(Math.random() * (this.custMax - this.custMin + 1) + this.custMin);
};
CookieStore.prototype.cookiesSold = function () {
  for (let i = 0; i < storeHoursArray.length; i++) {
    let sales = Math.ceil(this.avgSales * this.randomCustPerHour());
    console.log(sales);
    this.salesPerHour.push(sales);
    this.dailySaleTotal = this.dailySaleTotal + sales;
  }
};
// function CookieStore(name, dailySaleTotal, imgSrc) {
//   this.name = name;
//   this.dailySaleTotalArray = dailySaleTotal;
//   this.imgSrc = imgSrc;
//   this.dailySaleTotal = 0;
//  dailySaleTotal.push(this);
// }
// CookieStore.prototype.calcHourlySales = function (){
//   let randomSales = 0;
//   for (let i = 0; i < storeHoursArray.length; i++) {
//     randomSales = Math.ceil(this.randomCustPerHour() * this.avgSales);
//     this.salesPerHour.push(randomSales);
//     this.dailySaleTotal += randomSales;
//   }
// };

// create elements

// event handle function
function handleSubmit(event){
  event.preventDefault();
  // console.log(event.target.city.value);
  // console.log(event.target.min.value);
  // console.log(event.target.max.value);
  // console.log(event.target.avg.value);
  let city = event.target.city.value;
  let min = parseInt(event.target.min.value);
  let max = parseInt(event.target.max.value);
  let avg = parseInt(event.target.avg.value);

  allCities.push(city, min,max, avg);
  
  // let new CookieStore = new Store(city, min, max, avg);
  // newCookieStore.render();
  
}

function renderHeader() {
  let container = document.getElementById('table-data');
  let tableHeadEl = document.createElement('thead');
  let tableHeadRowEl = document.createElement('tr');
  let tableHeaderEl = document.createElement('th');
  //container.appendChild(tableHeadEl);
  tableHeadRowEl.appendChild(tableHeaderEl);
  tableHeadEl.appendChild(tableHeadRowEl);
  for (let i = 0; i < storeHoursArray.length; i++) {
    tableHeaderEl = document.createElement('th');
    tableHeaderEl.textContent = storeHoursArray[i];
    tableHeadRowEl.appendChild(tableHeaderEl);
  }
  let tableHeaderTotalEl = document.createElement('th');
  tableHeaderTotalEl.textContent = 'Total';
  tableHeadRowEl.appendChild(tableHeaderTotalEl);
  container.appendChild(tableHeadEl);
}

CookieStore.prototype.render = function () {
  this.cookiesSold();
  let container = document.getElementById('table-data');
  // let table = document.createElement('table');
  let tr = document.createElement('tr');
  let td = document.createElement('td');
  td.textContent = this.name;
  tr.appendChild(td);
  for (let i = 0; i < this.salesPerHour.length; i++) {
    let td = document.createElement('td');
    td.textContent = this.salesPerHour[i];
    tr.appendChild(td);
    // this.dailySaleTotal += this.dailySaleTotal[i];
  }
  td = document.createElement('td');
  td.textContent = this.dailySaleTotal;
  tr.appendChild(td);
  container.appendChild(tr);
  // container.appendChild(table);
  // append to the DOM
  //  CookieStore.appendChild(tr);
};
// // render sections
// CookieStore.prototype.sectionRender = function () {
//   let section = document.createElement('section');
//   myContainer.appendChild(section);
// }
// // image
// let img = document.createElement('img');
//   // given content
//   img.src = this.imgSrc;
//   img.alt = 'salmon';
//   // append it to the dom
//   section.appendChild(img);
//   //  remember - PROOF OF LIFE

//   let article = document.createElement('article');
//   section.appendChild(article);

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

function totalFooter() {

  let tr = document.createElement('tr');
  let td = document.createElement('td');
  td.textContent = 'Total';
  tr.appendChild(td);
  let grandTotal = 0;

  for (let i = 0; i < storeHoursArray.length; i++) {
    let td = document.createElement('td');
    let columnTotal = 0;
    for (let j = 0; j < allStores.length; j++) {
      columnTotal += allStores[j].salesPerHour[i];
    }
    td.textContent = columnTotal;
    grandTotal += columnTotal;
    tr.appendChild(td);
  }
  td = document.createElement('td');
  td.textContent = grandTotal;
  tr.appendChild(td);
  tfoot.appendChild(tr);
}

let seattle = new CookieStore('Seattle', 23, 65, 6.3);
console.log(seattle);
let tokyo = new CookieStore('Tokyo', 3, 24, 1.2);
let dubai = new CookieStore('Dubai', 11, 38, 3.7);
let paris = new CookieStore('Paris', 20, 38, 2.3);
let lima = new CookieStore('Lima', 2, 16, 4.6);


renderHeader();
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
totalFooter();

console.log(allStores);

myForm.addEventListener('submit', handleSubmit);

// another way to render all
// function renderAll(){
//   for (let i = 0; i < allHives.length; i++){
//     allHives[i].render();
//     allHives[i].sectionRender();
//   }
// }

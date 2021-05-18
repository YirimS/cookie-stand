'use strict';
// Seattle
console.log ('Hello World');
//store Constructor
const tableData = document.getElementById('table-data');
const storeHoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

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
CookieStore.prototype.cookiesSold = function(){
  for (let i =0; i < storeHoursArray.length; i++){
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

CookieStore.prototype.render = function() {
  this.cookiesSold();
  let container = document.getElementById('table-data');
  let table = document.createElement('table');
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
  table.appendChild (tr);
  container.appendChild(table);
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

let seattle = new CookieStore('Seattle', 23, 65, 6.3);
console.log(seattle);
let tokyo = new CookieStore('Tokyo', 3, 24, 1.2);
let dubai = new CookieStore('Dubai', 11, 38, 3.7);
let paris = new CookieStore('Paris', 20, 38, 2.3);
let lima = new CookieStore('Lima', 2, 16, 4.6);

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

// another way to render all
// function renderAll(){
//   for (let i = 0; i < allHives.length; i++){
//     allHives[i].render();
//     allHives[i].sectionRender();
//   }
// }

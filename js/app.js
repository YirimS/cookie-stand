'use strict';
// Seattle
console.log ('Hello World')

const myContainer = document.getElementById('Container');
const seattleList = document.getElementById('seattle-list');  

let Seattle = {
  cityName: 'Seattle',
  custMin: 23,
  custMax: 63,
  avgSales: 6.9,
  storeHoursArray: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
  salesPerHour: [],
  dailySaleTotal: 0,

  randomCustPerHour: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);

}
}


let Tokyo = {
  cityName: 'Tokyo',
  custMin: 3,
  custMax: 24,
  avgSales: 1.2,
  storeHoursArray: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
  salesPerHour: [],
  dailySaleTotal: 0,
  


let Dunbai = {
  cityName: 'Seattle',
  custMin: 11,
  custMax: 38,
  avgSales: 3.7,
  storeHoursArray: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
  salesPerHour: [],
  dailySaleTotal: 0,
  


let Paris = {
  cityName: 'Seattle',
  custMin: 20,
  custMax: 38,
  avgSales: 2.3,
  storeHoursArray: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
  salesPerHour: [],
  dailySaleTotal: 0,
  


let Lima = {
  cityName: 'Seattle',
  custMin: 2,
  custMax: 16,
  avgSales: 4.6,
  storeHoursArray: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
  salesPerHour: [],
  dailySaleTotal: 0,
  
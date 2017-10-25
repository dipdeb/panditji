/* This script and many more are available free online at
The JavaScript Source!! http://www.javascriptsource.com
Created by: Michael J. Damato | http://developing.damato.net/ */
// State lists
var cities = new Array();

cities['Assam'] = new Array('--Select City--','Guwahati','Jorhat','Sibsagar');
cities['West Bengal'] = new Array('--Select City--','Kolkata','Siliguri');
cities['Karnataka'] = new Array('--Select City--','Bengaluru','Mysore','Mangalore');


// City lists
var locations = new Array();

locations['Assam'] = new Array();
locations['Assam']['Guwahati']          = new Array('--Select Location--','Maligaon','Rehabari');
locations['Assam']['Jorhat'] = new Array('--Select Location--','Garmur','Jorhat Town');
locations['Assam']['Sibsagar']          = new Array('--Select Location--','Bishnu Nagar','Milon Nagar');

locations['West Bengal'] = new Array();
locations['West Bengal']['Kolkata'] = new Array('--Select Location--','Baranagar','Bally');
locations['West Bengal']['Siliguri']       = new Array('--Select Location--','Ciudad Juárez','Chihuahua');

locations['Karnataka'] = new Array();
locations['Karnataka']['Bengaluru'] = new Array('--Select Location--','Los Angeles','San Francisco');
locations['Karnataka']['Mysore']    = new Array('--Select Location--','Miami','Orlando');
locations['Karnataka']['Mangalore']   = new Array('--Select Location--','Buffalo','new York');


function setCities() {
  stateSel = document.getElementById('state');
  cityList = cities[stateSel.value];
  changeSelect('city', cityList, cityList);
  setLocations();
}

function setLocations() {
  stateSel = document.getElementById('state');
  citySel = document.getElementById('city');
  locationList = locations[stateSel.value][citySel.value];
  changeSelect('location', locationList, locationList);
}

function changeSelect(fieldID, newOptions, newValues) {
  selectField = document.getElementById(fieldID);
  selectField.options.length = 0;
  for (i=0; i<newOptions.length; i++) {
    selectField.options[selectField.length] = new Option(newOptions[i], newValues[i]);
  }
}

// Multiple onload function created by: Simon Willison
// http://simonwillison.net/2004/May/26/addLoadEvent/
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}

addLoadEvent(function() {
  setCities();
});

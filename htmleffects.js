const seatPicker = document.getElementById('seatPicker');
var carSelect;
var rentTotal;
var daysRented;
const allCars = ["There are no 0 seated cars in existence", "BAC Mono", "MX5", "i30", "Mini", "Falcon", "Prado", "Outlander", "Estima"];
/** 
This function runs a loop which sorts through an array
and makes each individual value of it an option for a select tag using innerHTML.
**/
function seatsDropDown() {
    let seatsInCarCounter = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    for (let i = 0; i < seatsInCarCounter.length; i++) {
        var newOption = '<option value="' + seatsInCarCounter[i] + '">' + seatsInCarCounter[i] + '</option>';
        seatPicker.innerHTML += newOption;
    }
}

/**
This function reads the value selected on the carSeats dropdown and apends that to the message variable.
This value is then displayed through a paragraph tag using innerHTML.
**/

function updateCarDetails() {
    let carResult = document.getElementById('carResult');
    carResult.innerHTML = "Preffered number of seats: " + seatPicker.value;

    let carModel = document.getElementById('carModel');
    carModel.innerHTML = "Suggested car model: " + allCars[seatPicker.value];

}

/**
When activated, this function updates ID "nameInput"
to the value entered in the "name input" form.
 */
function nameInput() {

    var userName = document.getElementById('userName');
    var userNameMessage = document.getElementById('userNameMessage');
    var nameMessage = "User Name: ";
    if (userName.value == "" || userName.value == " " || !isNaN(userName.value)) {
        nameMessage = "Invalid input! <br>Input must be a word!";
        userNameMessage.innerHTML = nameMessage;
    } else {
        nameMessage = nameMessage + userName.value;
        userNameMessage.innerHTML = nameMessage;
    }
}

/**
When activated, this function updates ID "daysRented"
to the value entered in the "days rented" form.
 */
function rentInput() {
    const minDays = 1;
    const maxDays = 31;
    daysRented = document.getElementById('daysRented');
    var daysRentedMessage = document.getElementById('daysRentedMessage');
    var rentFor = "Renting for: ";
    if (daysRented.value == "" || daysRented.value == " " || daysRented.value > maxDays) {
        rentFor = "Invalid input! <br>Input must be a number between 1 and 31!";
        daysRented.value = 31;
        daysRentedMessage.innerHTML = rentFor;
    } else if (daysRented.value == "" || daysRented.value == " " || daysRented.value < minDays) {
        rentFor = "Invalid input! <br>Input must be a number between 1 and 31!";
        daysRented.value = 1;
        daysRentedMessage.innerHTML = rentFor;
    } else {
        rentFor = rentFor + daysRented.value + " days";
        daysRentedMessage.innerHTML = rentFor;
    }
}

//These functions create the images of each car

//Bac-mono image javascript
var img = document.createElement('img');
img.src = 'images/BAC-mono.png';
img.alt = 'Placeholder image';
img.className = 'my-image';
img.id = 'image1';

document.getElementById('BAC-mono').appendChild(img);

//MX5 image javascript
var img = document.createElement('img');
img.src = 'images/MX5.png';
img.alt = 'Placeholder image';
img.className = 'my-image';
img.id = 'image2';

document.getElementById('MX5').appendChild(img);

//i30 image javascript
var img = document.createElement('img');
img.src = 'images/i30.png';
img.alt = 'Placeholder image';
img.className = 'my-image';
img.id = 'image3';

document.getElementById('i30').appendChild(img);

//MINI image javascript        
var img = document.createElement('img');
img.src = 'images/MINI.png';
img.alt = 'Placeholder image';
img.className = 'my-image';
img.id = 'image4';

document.getElementById('MINI').appendChild(img);

//Falcon image javascript
var img = document.createElement('img');
img.src = 'images/Falcon.png';
img.alt = 'Placeholder image';
img.className = 'my-image';
img.id = 'image5';

document.getElementById('Falcon').appendChild(img);

//Prado image javascript
var img = document.createElement('img');
img.src = 'images/Prado.png';
img.alt = 'Placeholder image';
img.className = 'my-image';
img.id = 'image6';

document.getElementById('Prado').appendChild(img);

//Outlander image javascript
var img = document.createElement('img');
img.src = 'images/Outlander.png';
img.alt = 'Placeholder image';
img.className = 'my-image';
img.id = 'image7';

document.getElementById('Outlander').appendChild(img);

//Estima image javascript        
var img = document.createElement('img');
img.src = 'images/Estima.png';
img.alt = 'Placeholder image';
img.className = 'my-image';
img.id = 'image8';

document.getElementById('Estima').appendChild(img);

//These functions update id "selectedCar" so that it displays what car teh user has selected.
function carOutPut1() {
    carSelect = "BAC Mono";
    let message = "You have selected the " + carSelect + ".";
    document.getElementById('selectedCar').innerHTML = message;
}


function carOutPut2() {
    carSelect = "MX5";
    let message = "You have selected the " + carSelect + ".";
    document.getElementById('selectedCar').innerHTML = message;
}


function carOutPut3() {
    carSelect = "i30";
    let message = "You have selected the " + carSelect + ".";
    document.getElementById('selectedCar').innerHTML = message;
}

function carOutPut4() {
    carSelect = "Mini";
    let message = "You have selected the " + carSelect + ".";
    document.getElementById('selectedCar').innerHTML = message;
}


function carOutPut5() {
    carSelect = "Falcon";
    let message = "You have selected the " + carSelect + ".";
    document.getElementById('selectedCar').innerHTML = message;
}


function carOutPut6() {
    carSelect = "Prado";
    let message = "You have selected the " + carSelect + ".";
    document.getElementById('selectedCar').innerHTML = message;
}


function carOutPut7() {
    carSelect = "Outlander";
    let message = "You have selected the " + carSelect + ".";
    document.getElementById('selectedCar').innerHTML = message;
}


function carOutPut8() {
    carSelect = "Estima";
    let message = "You have selected the " + carSelect + ".";
    document.getElementById('selectedCar').innerHTML = message;
}
/********************************************************************************************************************************/


/**makes it so that when the insurance checkbox is ticked and unticked
 the insurance cost is added or deducted from the final cost as needed.*/
var insVal = 0;
function insUpdate() {
    var checkBox = document.getElementById("insuranceBox");
    var insResult = document.getElementById("insResult");
    if (checkBox.checked == true) {
        insResult.style.display = "block";
        insVal = 15;
    } else {
        insResult.style.display = "none";
        insVal = 0;
    }
}

//calculates the cost of renting a the car. Then prints a receipt displaying the details of teh users purchase
function checkOut() {
    var totalCost = document.getElementById("totalCost");
    rentTotal = parseInt(daysRented.value, 10) * 10 + insVal;
    var userReceipt = "Your final cost totals at $" + rentTotal + ". You are now renting the " + carSelect + " for " + daysRented.value + " Days.";
    totalCost.innerHTML = userReceipt;
}

seatsDropDown();

// when the selection is changed this updates its details
seatPicker.addEventListener('change', updateCarDetails);

// Also update details on page load (if we want values shown on first load then uncomment this)
//updateCarDetails();

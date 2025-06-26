const seatPicker = document.getElementById('seatPicker');

const minDays = 1;
const allCars = ["place holder", "BAC Mono", "MX5", "place holder", "Mini", "Falcon", "place holder", "Outlander", "Estima"];
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
    carResult.innerHTML = "Number of seats: " + seatPicker.value;

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

    var daysRented = document.getElementById('daysRented');
    var daysRentedMessage = document.getElementById('daysRentedMessage');
    var Message = "Renting for: ";
    if (daysRented.value == "" || daysRented.value == " " || daysRented.value < minDays) {
        Message = "Invalid input! <br>Input must be a number 1 or larger!";
        daysRentedMessage.innerHTML = Message;
    } else {
        Message = Message + daysRented.value + " days";
        daysRentedMessage.innerHTML = Message;
    }
}

/** 
//Bac-mono image javascript
var img = document.createElement('img');
img.src = 'BAC-mono.png';
img.alt = 'Placeholder image';
img.className = 'my-image';
img.id = 'image1';

document.getElementById('BAC-mono').appendChild(img);

//MX5 image javascript
var img = document.createElement('img');
img.src = 'MX5.png';
img.alt = 'Placeholder image';
img.className = 'my-image';
img.id = 'image1';

document.getElementById('MX5').appendChild(img);

//MINI image javascript        
var img = document.createElement('img');
img.src = 'MINI.png';
img.alt = 'Placeholder image';
img.className = 'my-image';
img.id = 'image1';

document.getElementById('MINI').appendChild(img);

//Falcon image javascript
var img = document.createElement('img');
img.src = 'Falcon.png';
img.alt = 'Placeholder image';
img.className = 'my-image';
img.id = 'image1';

document.getElementById('Falcon').appendChild(img);

//Outlander image javascript
var img = document.createElement('img');
img.src = 'Outlander.png';
img.alt = 'Placeholder image';
img.className = 'my-image';
img.id = 'image1';

document.getElementById('Outlander').appendChild(img);

//Estima image javascript        
var img = document.createElement('img');
img.src = 'Estima.png';
img.alt = 'Placeholder image';
img.className = 'my-image';
img.id = 'image1';

document.getElementById('Estima').appendChild(img);
*/
const carImages = document.getElementById('carImages');


function imagesTest() {
    let imageCars = ["BAC-ono", "MX5", "MINI", "Falcon", "Outlander", "Estima"];
    for (let i = 0; i < imageCars.length; i++) {
        var newImage = '<div id="' + imageCars[i] + '">' + '</div>';
        carImages.innerHTML += newImage;
    }
}
imagesTest();    

seatsDropDown();

// when the selection is changed this updates its details
seatPicker.addEventListener('change', updateCarDetails);

// Also update details on page load (if we want values shown on first load then uncomment this)
//updateCarDetails();

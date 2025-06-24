const seatPicker = document.getElementById('seatPicker');

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

function rentInput() {
    var daysRented = document.getElementById('daysRented');
    var daysRentedMessage = document.getElementById('daysRentedMessage');
    var Message = "Renting for: ";
    Message = Message + daysRented.value + " days";
    daysRentedMessage.innerHTML = Message;
}

seatsDropDown();

// when the selection is changed this updates its details
seatPicker.addEventListener('change', updateCarDetails);

// Also update details on page load (if we want values shown on first load then uncomment this)
//updateCarDetails();

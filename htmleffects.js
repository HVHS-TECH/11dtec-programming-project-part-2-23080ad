const seatsInCarCounter = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const seatPicker = document.getElementById('seatPicker');
const carResult = document.getElementById('carResult');

function seatsDropDown() {
    for (let i = 0; i < seatsInCarCounter.length; i++) {
        var newOption = '<option value="' + seatsInCarCounter[i] + '">' + seatsInCarCounter[i] + '</option>';
        seatPicker.innerHTML += newOption;
    }
}

function confirmCarSeats(){
    var message = "Number of seats: " + seatPicker.value;
    carResult.innerHTML = message;
}

window.onload = seatsDropDown;
console.log(htmleffects.js)
let seatsInCarCounter = [0, 1, 2, 3, 4, 5, 6, 7, 8];

function seatsDropDown() {
    let seatPicker = document.getElementById('seatPicker');
    for (let i = 0; i < seatsInCarCounter.length; i++) {
        var newOption = '<option value="' + seatsInCarCounter[i] + '">' + seatsInCarCounter[i] + '</option>';
        seatPicker.innerHTML += newOption;
    }
}


function confirmCarSeats(){
    var seatPicker = document.getElementById('seatPicker');
    var carResult = document.getElementById('carResult');
    var message = "Number of seats: " + seatPicker.value;
    carResult.innerHTML = message;
    console.log(message);
}

//window.onload = seatsDropDown;
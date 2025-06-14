let seatsInCarCounter = [0, 1, 2, 3, 4, 5, 6, 7, 8];

function seatsDropDown() {
    for (i = 0; i < seatsInCarCounter.length; i++) {
        var newOption = '<option value="' + seatsInCarCounter[i] + '>"' + seatsInCarCounter[i] + '</option>';
        fruitselect += newOption;
    };

}
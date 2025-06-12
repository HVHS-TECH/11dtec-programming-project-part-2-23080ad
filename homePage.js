//Title

//Arrays
let carSuggestions = ["so you dont want a car?", "May I suggest the BAC Mono?", "May I suggest the MX5?", "We have no three seated cars sorry",
    "May I suggest the Mini?", "May I suggest the Falcon?", "We have no six seated cars sorry", "May I suggest the Outlander?", "May I suggest the Estima?", "w"];
let allCars = ["place holder", "BAC Mono", "MX5", "place holder", "Mini", "Falcon", "place holder", "Outlander", "Estima"];
var seatsInCarCounter = [0, 1, 2, 3, 4, 5, 6, 7, 8];

//Variables
const MINSEATS = 0;
const MAXSEATS = 8;
var carReselect;
var viewerName;
var userSeats;
/*****************************
Main code
*****************************/
console.log("Running homePage.css");


/***************************** 
Functions 
*****************************/
function askViewerName() {
    viewerName = prompt("What is your name friend?");
    testName = viewerName;
}


//This asks the user how many seats they would like in their car, and then reads the array to see what car is currently avaliable with that many seats.

function askUserSeats() {
    userSeats = prompt("hello " + testName + ", please enter how many seats you would like in your car" +
        "\nso that we can try and find a model that matches your reqirements?");
    if (userSeats == "" || userSeats == " " || userSeats == null || userSeats < MINSEATS || userSeats > MAXSEATS || isNaN(userSeats)) {
        alert("invalid! \nYour input wasnt a number in the range 1-8.");
        userSeats = askUserSeats();
    } else {
        alert(carSuggestions[userSeats]);
        console.log(userSeats)
        console.log(seatsInCarCounter)
        if (seatsInCarCounter == [3] || seatsInCarCounter == [6]) {
            carReselect = askCarReselect();

        } else {
            if (confirm("does this car interest you?")) {
                allCars = carSuggestions[i]
                checkOut = carCheckOut();
            } else {
                carReselect = askCarReselect();
            }

        }
    }
}




/***************************************************************************************
This function asks the user if they like their car and stores their answer in a variable.
If they do not like their car it asks them if they would likr to look at another car.
if they still say no it directs them off the site.
***************************************************************************************/
function askCarReselect() {
    if (seatsInCarCounter == [3] || seatsInCarCounter == [6]) {
        if (confirm("would you like to rent a different car?")) {
            userSeats = askUserSeats();
        } else if (seatsInCarCounter[0]) {
            alert("get out")
        } else {
            alert("Thank you for shopping at robs rentals! \nWe will notify you when we restock our garrage.")
        }

    }

}

/********************************************************************************************************
 This function activstes once the user confirms that they are happy with the car they have purchased.
 Once this happens the user will be proceded to checkout where the price of their car will be calculated.
 *******************************************************************************************************/
function carCheckOut() {
    alert("You have ordered the")
}

/*************************************************************************************
This function activates when the rent a car button is pressed
and procedes to call afew other functions which determine the right car for the user.
*************************************************************************************/
function rentACar() {
    viewerName = askViewerName();
    userSeats = askUserSeats();
}


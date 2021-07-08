var userinput = document.querySelector("#input");
var userinput2 = document.querySelector("#input2");
var buttoncheck = document.querySelector("#button")
var outputDiv = document.querySelector("#output")
var maxmonth = 12;
var maxdate = 31;


function checkprime(input) {

    var isPrime = true;
    var number = parseInt(input);
    if (number > 1) {
        for (var i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            outputDiv.innerHTML = number + "this is a prime number"
        } else {
            outputDiv.innerHTML = number + "this is not a prime number"
        }
    }

}

function clickEventHandler() {
    var date = userinput.value;
    var month = userinput2.value;
    var input = date + month;
    if (input == "") {
        outputDiv.innerHTML = "please enter a valid number"
    } else if (isNaN(date) || isNaN(month)) {
        outputDiv.innerHTML = "please enter a number"
    } else if (date > maxdate || month > maxmonth) {
        outputDiv.innerHTML = `date should not exceed ${maxdate} and month should not exceed ${maxmonth}`;
    } else {
        checkprime(input)
    }
}
buttoncheck.addEventListener("click", clickEventHandler)
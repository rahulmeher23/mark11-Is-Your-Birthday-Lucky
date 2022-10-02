const dob = document.querySelector("#enter-dob");
const luckynumber = document.querySelector("#enter-number");
const checkBtn = document.querySelector(".check-button");
const message = document.querySelector(".display-msg");

function showMessage (outputMessage) {
    message.innerText = outputMessage;
}


function calculateSum (date) {
    date = date.replaceAll("-","");
    var Datesum = 0;
    for (var i =0; i < date.length; i++) {
        Datesum = Datesum + Number (date.charAt([i]) );
    }        
    return Datesum;
}

function checkLucky (sum, luckyNo) {
    var lucky = sum % luckyNo;
    if (lucky == 0) {
        showMessage("Your Birthday Is Lucky!!");
    } else {
        showMessage("Your Birthday Is Not Lucky!!");
    }
}

function checkIfBirthdayIsLucky () {
    const date = dob.value;
    const luckyNo = Number(luckynumber.value);
    const sum = calculateSum(date);
    if (sum && date) {
        checkLucky(sum, luckyNo);
    } else {
        showMessage("Please enter both the fields!");
    }
}

checkBtn.addEventListener("click", checkIfBirthdayIsLucky);

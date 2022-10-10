const dob = document.querySelector("#enter-dob");
const luckynumber = document.querySelector("#enter-number");
const checkBtn = document.querySelector(".check-button");
const message = document.querySelector(".display-msg");

function showMessage (outputMessage) {
    message.innerHTML = outputMessage;
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
        showMessage(`<span style="color: #65a30d"> Yay! Your Birthday Is Lucky!!</span>`);
    } else {
        showMessage("Your Birthday Is Not Lucky!!");
    }
}

function checkIfBirthdayIsLucky () {
    const date = dob.value;
    const luckyNo = Number(luckynumber.value);
    const sum = calculateSum(date);

    console.log(dob.value, luckynumber.value, date, luckyNo, typeof(luckynumber.value));

        if (sum && date) {
            if (luckyNo === 0) {
                showMessage("Please enter your lucky number.");
            } else if (luckyNo < 0) {
                showMessage("Please enter a valid lucky number.");
            } else {
                checkLucky(sum, luckyNo);
            }
            
        } else {
            showMessage("Please enter both the fields!");
        }
}
        

checkBtn.addEventListener("click", checkIfBirthdayIsLucky);

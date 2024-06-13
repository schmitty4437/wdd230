const pwd1 = document.querySelector("#pwd");
const pwd2 = document.querySelector("#pwd2");
const message = document.querySelector("#formmessage");

pwd2.addEventListener("focusout", checkSame);

function checkSame() {
    if (pwd1.value !== pwd2.value) {
        message.textContent = "Password Does Not Match";
        message.computedStyleMap.visibility = "show";
        pwd2.style.backgroundColor = "#fff0f3";
        pwd2.value = "";
        pwd2.focus();
    } else {
        message.style.display = "none";
        pwd2.style.backgroundColor = "#fff";
        pwd2.style.color = "#000";
    }
}


// email input validation
document.addEventListener("DOMContentLoaded", function() {
    //function to handle form submission
    function handleSubmit(event) {
        //prevent default form submission
        event.preventDefault();

        //access form elements
        let formt = event.target;
        let formData = new FormData(formt);

        //display form element values
        for (let pair of formData.entries()) {
            console.log(pair[0] + ": " + pair[1]);
        }
    }

    const form = document.querySelector("form");
    form.addEventListener("submit", handleSubmit);
});



// Range selector
const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("rating");

//range event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}
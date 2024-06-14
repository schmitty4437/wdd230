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

// Range selector
const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("rating");

//range event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}
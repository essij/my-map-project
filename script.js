const currentAddressInput = document.getElementById("address-input");
const currentCommentInput = document.getElementById("comment-input");

// Get the form (pop up window)
var modalForm = document.getElementById("modal-form");

// Get the button that opens the form
var buttonOpenForm = document.getElementById("button-open-form");

// Get the button that closes the pop up window
var buttonCloseForm = document.getElementsByClassName("button-modal-close")[0];

//Get the address input and comment input fields
var userAddressInput = document.getElementById("address-input");
// var userCommentInput = document.getElementsById("comment-input");

// When the user clicks on the button, open the form in a pop up window
buttonOpenForm.onclick = function () {
  //currentLatitude.textContent = "";
  //currentLongitude.textContent = "";
  //currentAddressInput.value = null;
  //currentCommentInput.value = null;
  modalForm.style.display = "block";
};

// When the user clicks on (x) button, close the pop up window
buttonCloseForm.onclick = function () {
  modalForm.style.display = "none";
};

// Get the "thank you" pop up window
var modalThankYou = document.getElementById("modal-thank-you");

// When the user clicks on the "send" button, open the thank you window
document.getElementById("button-send").onclick = () => {
  //Check that all required fields are filled
  //By default: alert message is empty
  let alertMessage = "";
  //Check if address input field is empty
  //"currentAddressInput.value" returns TRUE if value is NOT empty/null/undefined
  if (!currentAddressInput.value) {
    //If field is empty -> set alert message with a line feed
    alertMessage = "Address is missing! \n";
  }
  //Check if comment input field is empty
  if (!currentCommentInput.value) {
    //If field is empty -> set new alert message
    //alertMessage = alertMessage + "Vikailmoituksen syy puuttuu!" can be written as below
    alertMessage += "Comment section is empty!";
  }
  //Check if alert message was set -> show message
  if (alertMessage) {
    alert(alertMessage);
    //If alert message was empty -> send data
  } else {
    //lat = currentLatLng.lat();
    //long = currentLatLng.lng();
    //address = document.getElementById("address-input").value;
    //value = document.getElementById("comment-input").value;
    //email = document.getElementById("email-input").value;

    modalForm.style.display = "none";
    modalThankYou.style.display = "block";
    //addMarkerAndPanTo(currentLatLng, address, map, value);
  }
};

// Get the button that closes the pop up window
var buttonCloseThankYou =
  document.getElementsByClassName("button-modal-close")[1];

// When the user clicks on (x), close the pop up window
buttonCloseThankYou.onclick = function () {
  modalThankYou.style.display = "none";
};

// Get the help pop up window
var modalHelp = document.getElementById("modal-help");

// Get the button that opens the help pop up window
var buttonOpenHelp = document.getElementById("button-open-help");

// Get the (x) element that closes the pop up window
var buttonCloseHelp = document.getElementsByClassName("button-modal-close")[2];

// When the user clicks on the button, open the help pop up window
buttonOpenHelp.onclick = function () {
  // Pop-up window open
  modalHelp.style.display = "block";
  modalHelp.addEventListener(
    "click",
    function (event) {
      // User clicks outside window -> close
      // "Closest" returns modal-content-ohje and all its child elements (e.g. modal-header)
      if (!event.target.closest(".modal-content-ohje")) {
        modalHelp.style.display = "none";
      }
    },
    false
  );
};

// When the user clicks on (x), close the pop up window
buttonCloseHelp.onclick = function () {
  modalHelp.style.display = "none";
};

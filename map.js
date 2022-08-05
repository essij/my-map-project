const currentLatitude = document.getElementById("current-latitude");
const currentLongitude = document.getElementById("current-longitude");

let userAddress;

let currentLatLng;
let map;
let geocoder;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 61.494, lng: 23.776 },
    zoom: 14,
    //mapId: "MAP_ID"
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
  });

  //queryFirebaseData();

  //Initialize geocoder
  geocoder = new google.maps.Geocoder();

  // When the user clicks (anywhere) on the map, open the form in a pop up window
  map.addListener("click", (e) => {
    currentLatLng = e.latLng;
    currentLatitude.textContent = currentLatLng.lat();
    currentLongitude.textContent = currentLatLng.lng();
    getAddress(currentLatLng);
    currentCommentInput.value = null;
    modalForm.style.display = "block";
  });
}

//Get coordinates from the API
function codeAddress(userAddress) {
  geocoder.geocode({ address: userAddress }, (results, status) => {
    if (status == google.maps.GeocoderStatus.OK) {
      //center the map over the result
      map.setCenter(results[0].geometry.location);
      //Display response in the console
      console.log(results);
      //Get latitude and longitude from the results
      currentLatitude.textContent = results[0].geometry.location.lat();
      currentLongitude.textContent = results[0].geometry.location.lng();
      currentLatLng = new google.maps.LatLng(
        results[0].geometry.location.lat(),
        results[0].geometry.location.lng()
      );
    } else {
      alert("Geocode error: " + status);
    }
  });
}

//Get street address after clicked the map
function getAddress(mapCoordinates) {
  geocoder.geocode({ location: mapCoordinates }, (results, status) => {
    if (status == google.maps.GeocoderStatus.OK) {
      //Display response in the console
      console.log(results[0].formatted_address);
      //Show address in address input field
      currentAddressInput.value = results[0].formatted_address;
    } else {
      alert("Geocode error: " + status);
    }
  });
}

//Add a new marker and center
function addMarkerAndPanTo(latLng, markerAddress, map, message) {
  //Create a new marker
  var marker = new google.maps.Marker({
    position: latLng,
    title: markerAddress,
    map: map,
  });
  //Create a info window attached to the marker
  var infoWindow = new google.maps.InfoWindow({
    content: message,
  });
  //When user clicks the marker info window will open
  google.maps.event.addListener(marker, "click", function () {
    infoWindow.open(map, marker);
  });
  map.panTo(latLng);
}

//Add a new marker
function addMarkerAndInfoWindow(latLng, markerAddress, map, message) {
  //Create a new marker
  var marker = new google.maps.Marker({
    position: latLng,
    title: markerAddress,
    map: map,
  });
  //Create a info window attached to the marker
  var infoWindow = new google.maps.InfoWindow({
    content: message,
  });
  //When user clicks the marker info window will open
  google.maps.event.addListener(marker, "click", function () {
    infoWindow.open(map, marker);
  });
}

// When the user clicks on the "send" button, open the thank you window
/*
buttonSend.onclick = function () {
  modalForm.style.display = "none";
  modalThankYou.style.display = "block";
  placeMarkerAndPanTo(currentLatLng, map);
};*/

//When the address input field changes
userAddressInput.onchange = function () {
  //Get the value from the user in "address-input"
  userAddress = currentAddressInput.value;
  //Use codeAddrsss function to get the coordinates
  codeAddress(userAddress);
};

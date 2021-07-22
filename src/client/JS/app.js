// Global functions

import { postData, getData, updateUI } from "./helperFunction";

/* Global Variables */
const travelCard = document.getElementById("travel-wrapper");
const travelResults = document.getElementById("travel-results");

export async function handleSubmit(event) {
  event.preventDefault();
  console.log("The trip begins");

  // Create a new date instance dynamically with JS
  const currentDate = new Date();
  const newDate =
    currentDate.getMonth() +
    "-" +
    currentDate.getDate() +
    "-" +
    currentDate.getFullYear();
  console.log(`newDate: ${newDate}`);

  const destination = document.getElementById("location").value;
  const departureDate = document.getElementById("departure-date").value;
  const returnDate = document.getElementById("return-date").value;

  // Calculate the travel duration
  const startDate = new Date(departureDate);
  const endDate = new Date(returnDate);

  const tripDuration = endDate.getTime() - startDate.getTime();
  const daysInTravel = tripDuration / (1000 * 3600 * 24);
  console.log(daysInTravel);

  // Find the time between now and departure
  const timeTillTripStart = startDate.getTime() - currentDate.getTime();
  const timeTillTravel = Math.round(timeTillTripStart / (1000 * 3600 * 24));
  console.log(`timeTillTravel: ${timeTillTravel}`);

  const travelCard = document.getElementById("travel-card");
  const travelResults = document.getElementById("travel-results");

  await postData("http://localhost:3000/createTrip", {
    location: destination,
    startDate: startDate,
    endDate: endDate,
    duration: daysInTravel,
    timeTillTravel: timeTillTravel,
  });

  await getData("http://localhost:3000/geonames");
  await getData("http://localhost:3000/weatherBit");
  await getData("http://localhost:3000/pixabay");
  await updateUI("http://localhost:3000/all");
  travelCard.style.display = "none";
  travelResults.style.display = "flex";
}

export const closeButtonEvent = () => {
  travelCard.style.display = "flex";
  travelResults.style.display = "none";
};

export const saveButtonEvent = () => {
  const savedTravelResults = document.getElementById("saved-travel-results");
  const savedResultsImage = document.getElementById("results-image").src;
  const savedResultDestination =
    document.getElementById("result-destination").innerHTML;
  const savedResultDeparture =
    document.getElementById("result-departure").innerHTML;
  const savedResultReturn = document.getElementById("result-return").innerHTML;
  const savedResultDuration =
    document.getElementById("result-duration").innerHTML;
  const savedTripStart = document.getElementById("trip-start").innerHTML;
  const savedResultTemp = document.getElementById("result-temp").innerHTML;
  const savedResultDescription =
    document.getElementById("result-description").innerHTML;

  const savedTrip = `<div class="saved-results-box">
  <div class="saved-results">
    <figure>
      <img id="saved-results-image" class="saved-results-image" src=${savedResultsImage} alt='London Skyline'>
      <figcaption class="">Enjoy your Trip!</figcaption>
    </figure>
    <div class="saved-results-entry">
      <h4 id="saved-result-destination">${savedResultDestination}</h4>
      <div id="saved-result-departure">${savedResultDeparture}</div>
      <div id="saved-result-return">${savedResultReturn}</div>
      <div id="saved-result-duration">${savedResultDuration}</div>
      <div id="saved-trip-start">${savedTripStart}</div>
      <div>The current weather:</div>
      <div id="saved-result-temp">${savedResultTemp}</div>
      <div id="saved-result-description">${savedResultDescription}</div>
    </div>
    <div class='saved-results-footer'>
    </div>`;

  // Add the trip to the section
  savedTravelResults.insertAdjacentHTML("beforeend", savedTrip);

  travelCard.style.display = "flex";
  travelResults.style.display = "none";
};

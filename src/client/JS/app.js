// Global imports
import { postData, getData, updateUI } from "./sub-app";

/* Global Variables */
const travelCard = document.getElementById("travel-wrapper");
const travelResults = document.getElementById("travel-results");

async function handleSubmit(event) {
  event.preventDefault();
  console.log("The trip begins");

  // obtain a new date instance dynamically with JS
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

  // obtain travel duration
  const startDate = new Date(departureDate);
  const endDate = new Date(returnDate);

  const tripDuration = endDate.getTime() - startDate.getTime();
  const daysInTravel = tripDuration / (1000 * 3600 * 24);
  console.log(daysInTravel);

  // Find the time between travel
  const timeTillTripStart = startDate.getTime() - currentDate.getTime();
  const timeTillTravel = Math.round(timeTillTripStart / (1000 * 3600 * 24));
  console.log(`timeTillTravel: ${timeTillTravel}`);

  const travelCard = document.getElementById("travel-wrapper");
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

const closeButtonEvent = () => {
  travelCard.style.display = "flex";
  travelResults.style.display = "none";
};

const saveButtonEvent = () => {
  const savedTravelOutcomes = document.getElementById("saved-travel-outcomes");
  const savedResultsImage = document.getElementById("results-image").src;
  const savedResultDestination = document.getElementById(
    "outcome-destination"
  ).innerHTML;
  const savedResultDeparture =
    document.getElementById("outcome-departure").innerHTML;
  const savedResultReturn = document.getElementById("outcome-return").innerHTML;
  const savedResultDuration =
    document.getElementById("outcome-duration").innerHTML;
  const savedTripStart = document.getElementById("start-date").innerHTML;
  const savedResultTemp = document.getElementById("outcome-temp").innerHTML;
  const savedResultDescription = document.getElementById(
    "outcome-description"
  ).innerHTML;

  const savedTrip = `<div class="saved-results-box">
  <div class="saved-results">
    <figure>
      <img id="saved-results-image" class="saved-results-image" src=${savedResultsImage} alt='London Skyline'>
      <figcaption class="">Enjoy your Trip!</figcaption>
    </figure>
    <div class="saved-outcomes">
      <h4 id="saved-outcome-destination">${savedResultDestination}</h4>
      <div id="saved-outcome-departure">${savedResultDeparture}</div>
      <div id="saved-outcome-return">${savedResultReturn}</div>
      <div id="saved-outcome-duration">${savedResultDuration}</div>
      <div id="saved-start-date">${savedTripStart}</div>
      <div>current weather:</div>
      <div id="saved-outcome-temp">${savedResultTemp}</div>
      <div id="saved-outcome-description">${savedResultDescription}</div>
    </div>
    <div class='saved-results-footer'>
    </div>`;

  savedTravelOutcomes.insertAdjacentHTML("beforeend", savedTrip);

  travelCard.style.display = "flex";
  travelResults.style.display = "none";
};
export { closeButtonEvent, handleSubmit, saveButtonEvent };

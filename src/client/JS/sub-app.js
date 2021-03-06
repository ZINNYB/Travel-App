const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    // Body data type must match "Content-Type" header
    body: JSON.stringify(data),
  });
  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

const getData = async (url) => {
  const response = await fetch(url);
  try {
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

// Function to update the UI settings
const updateUI = async (url) => {
  const response = await fetch(url);
  try {
    const data = await response.json();
    document.getElementById("results-image").src = data.img;
    document.getElementById(
      "outcome-destination"
    ).innerHTML = `Trip to: ${data.location}`;
    document.getElementById(
      "outcome-departure"
    ).innerHTML = `Departure: ${data.startDate}`;
    document.getElementById(
      "outcome-return"
    ).innerHTML = `Return: ${data.endDate}`;
    document.getElementById(
      "outcome-duration"
    ).innerHTML = `Duration: ${data.duration} days`;
    document.getElementById(
      "start-date"
    ).innerHTML = `Your trip is ${data.timeTillTravel} days from now`;
    document.getElementById("outcome-temp").innerHTML = `${data.temp}°F`;
    document.getElementById(
      "outcome-description"
    ).innerHTML = `${data.description}`;
  } catch (error) {
    console.log("error", error);
  }
};
export { postData, getData, updateUI };

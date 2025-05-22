// Create one function named as showweatherDetails
function showweatherDetails(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    const apiKey = 'b173aabb713cd8d1d6c38389c25582b7'; // Replace 'YOUR_API_KEY' with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                              <p>Temperature: ${data.main.temp} &#8451;</p>
                              <p>Weather: ${data.weather[0].description}</p>`;
    })
    // catch method to catch error if user enters wrong citry name
    .catch(error => {
        console.error('Error fetching weather:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
      });
}

// attaches an event listener to the 'weatherForm' element, listening for a
// 'submit' event and triggering the showweatherDetails function upon form
// submission, enabling customized handling or manipulation of the form's
// behavior.
document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );


const apiKey = "2af1482b64acf10066705d34548b1a74";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const infoData = {
    weather: {
        title: "Weather Forecast",
        content: "Stay updated with the latest weather forecasts to plan your farming activities efficiently."
    },
    prices: {
        title: "Crop Prices",
        content: "Check the current market prices of crops to make informed selling decisions."
    },
    techniques: {
        title: "Farming Techniques",
        content: "Learn about modern and traditional farming techniques to boost your crop yield."
    }
};

function showInfo(type) {
    document.getElementById("info-title").innerText = infoData[type].title;
    document.getElementById("info-content").innerText = infoData[type].content;
    document.getElementById("info-section").classList.remove("hidden");
}

function closeInfo() {
    document.getElementById("info-section").classList.add("hidden");
}

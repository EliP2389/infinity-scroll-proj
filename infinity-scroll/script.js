

// Unsplash API
const count = 15;
const apiKey = 'PfAKg3uROx6GtFDW4HJ06y6-aZA1j-jMhkSWCMQeDBI';
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

// Get photos from API
async function getPhotos() {
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        // Catch Error
    }
}

// On Load
getPhotos();
const imgContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// Unsplash API
const count = 15;
const apiKey = 'PfAKg3uROx6GtFDW4HJ06y6-aZA1j-jMhkSWCMQeDBI';
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

// Get photos from API
async function getPhotos() {
    try {
        const response = await fetch(apiURL);
        photosArray = await response.json();
    } catch (error) {
        // Catch Error
    }
}

// On Load
getPhotos();
const imgContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArray = [];

// Helper Function to Set Attributes on DOM Elements
setAttributes = (element, attributes) => {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
};

// Create Elements for Links & Photos, Add to document
displayPhotos = () => {
  // Run function for each pbject in photosArray
  photosArray.forEach((photo) => {
    // Create <a> to link to Unsplash
    const item = document.createElement("a");
    item.setAttribute("href", photo.links.html);
    item.setAttribute("target", "_blank");
    // Create <img> for photo
    const img = document.createElement("img");
    img.setAttribute("src", photo.urls.regular);
    img.setAttribute("alt", photo.alt_description);
    img.setAttribute("title", photo.alt_description);
    // Put <img> inside <a>, then put both inside imgContainer Element
    item.appendChild(img);
    imgContainer.appendChild(item);
  });
};

// Unsplash API
const count = 15;
const apiKey = "KDvQNdCstwIOfToXwyFQT9v14_WaNgPies1BPioq630";
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from API
async function getPhotos() {
  try {
    const response = await fetch(apiURL);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    // Catch Error
  }
}
console.log();
// On Load
getPhotos();

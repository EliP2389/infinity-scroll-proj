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
    setAttributes(item, {
        href: photo.links.html,
        target: '_blank',
    });
    // Create <img> for photo
    const img = document.createElement("img");
    setAttributes(img, {
        src: photo.urls.regular,
        alt: photo.alt_description,
        title: photo.alt_description,
    });
    // Event Listener, check when each img is finished Loading
    img.addEventListener('load', imageLoaded);
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
    displayPhotos()
  } catch (error) {
    // Catch Error
  }
}

// Check to see if scrolling near bottom of page, Load More Photos
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
        getPhotos();
        console.log('load more')
    }
});

// On Load
getPhotos();

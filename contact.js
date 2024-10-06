var layer = new ol.layer.Tile({
    source: new ol.source.OSM()
});

// Define coordinates for Rivers, Lagos, and Abuja Offices
var rivers = ol.proj.transform([7.005413, 4.815648], 'EPSG:4326', 'EPSG:3857'); // Rivers (Head Office)
var lagos = ol.proj.transform([3.348839, 6.602523], 'EPSG:4326', 'EPSG:3857'); // Lagos Office
var abuja = ol.proj.transform([7.440021, 9.083339], 'EPSG:4326', 'EPSG:3857'); // Abuja Office (Accurate Coordinates)

// Create a view centered on Rivers
var view = new ol.View({
    center: rivers,
    zoom: 6
});

// Initialize the map with the tile layer and view
var map = new ol.Map({
    target: 'map',
    layers: [layer],
    view: view
});

// Function to add a marker at the specified location
function addMarker(location) {
    // Remove previous markers
    document.querySelectorAll('.pin, .pulse').forEach(el => el.remove());

    // Create new marker
    var marker = document.createElement('div');
    marker.className = 'pin';

    var pulse = document.createElement('div');
    pulse.className = 'pulse';

    // Set marker position based on location
    var markerPosition = new ol.Overlay({
        position: location,
        positioning: 'center-center',
        element: marker,
        stopEvent: false
    });

    var pulsePosition = new ol.Overlay({
        position: location,
        positioning: 'center-center',
        element: pulse,
        stopEvent: false
    });

    map.addOverlay(markerPosition);
    map.addOverlay(pulsePosition);
}

// Function to bounce the map to a location and add a marker
function doBounce(location) {
    addMarker(location);  // Add marker at the location

    // Bounce by zooming out one level and back in
    var bounce = ol.animation.bounce({
        resolution: map.getView().getResolution() * 2
    });
    var pan = ol.animation.pan({
        source: map.getView().getCenter()
    });
    map.beforeRender(bounce);
    map.beforeRender(pan);
    map.getView().setCenter(location);
}

// Function to pan the map to a location and add a marker
function doPan(location) {
    addMarker(location);  // Add marker at the location

    var pan = ol.animation.pan({
        source: map.getView().getCenter()
    });
    map.beforeRender(pan);
    map.getView().setCenter(location);
}

// Function to rotate the map
function doRotate() {
    var rotate = ol.animation.rotate({
        rotation: Math.PI * 2
    });
    map.beforeRender(rotate);
}

// Function to zoom the map in or out
function doZoom(factor) {
    var zoom = ol.animation.zoom({
        resolution: map.getView().getResolution()
    });
    map.beforeRender(zoom);
    map.getView().setResolution(map.getView().getResolution() * factor);
}
  // AOS Initialization
  AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true
    });


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from redirecting

    // Submit the form data using Fetch API to FormSubmit
    fetch(this.action, {
        method: this.method,
        body: new FormData(this),
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            // Show thank you message
            document.querySelector('.thank-you-message').style.display = 'block';
            // Optionally, reset the form after successful submission
            this.reset();
        } else {
            alert('There was a problem submitting your form. Please try again.');
        }
    }).catch(error => {
        alert('There was an error sending your form. Please try again.');
    });
});


  // Change Navbar Style on Scroll
  window.addEventListener('scroll', function () {
        const navbar = document.getElementById('mainNavbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });




    // Back-to-top button functionality
    const backToTopBtn = document.querySelector(".back-to-top");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 600) {
            backToTopBtn.style.opacity = "1";
            backToTopBtn.style.visibility = "visible";
        } else {
            backToTopBtn.style.opacity = "0";
            backToTopBtn.style.visibility = "hidden";
        }
    });

    backToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });


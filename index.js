document.addEventListener("DOMContentLoaded", () => {
const navLinks = document.querySelector('#navLinks');
const navToggleBtn = document.querySelector('#navToggleBtn');
navToggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
});

//For destination page
document.addEventListener("DOMContentLoaded", function() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const planetImage = document.getElementById('planet-img');
            const nameElement = document.getElementById('moon-name');
            const descElement = document.getElementById('moon-desc');
            const distanceElement = document.getElementById('dis-value');
            const timeElement = document.getElementById('time-value');

            function updateContent(destination) {
                planetImage.src = destination.images.png;
                nameElement.textContent = destination.name.toUpperCase();
                descElement.textContent = destination.description;
                distanceElement.textContent = destination.distance.toUpperCase();
                timeElement.textContent = destination.travel.toUpperCase();
            }

            document.getElementById('moon-btn').addEventListener('click', () => updateContent(data.destinations[0]));
            document.getElementById('mars-btn').addEventListener('click', () => updateContent(data.destinations[1]));
            document.getElementById('europa-btn').addEventListener('click', () => updateContent(data.destinations[2]));
            document.getElementById('titan-btn').addEventListener('click', () => updateContent(data.destinations[3]));
        })
        .catch(error => console.error('Error loading JSON:', error));
});
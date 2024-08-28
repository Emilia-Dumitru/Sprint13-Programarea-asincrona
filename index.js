document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelector('#navLinks');
    const navToggleBtn = document.querySelector('#navToggleBtn');
    navToggleBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

//For destination page
document.addEventListener("DOMContentLoaded", function () {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const planetImage = document.getElementById('planet-img');
            const nameElement = document.getElementById('moon-name');
            const descElement = document.getElementById('moon-desc');
            const distanceElement = document.getElementById('dis-value');
            const timeElement = document.getElementById('time-value');
            const buttons = document.querySelectorAll('.planet-list li');

            function updateContent(destination, clickedButton) {
                planetImage.src = destination.images.png;
                nameElement.textContent = destination.name.toUpperCase();
                descElement.textContent = destination.description;
                distanceElement.textContent = destination.distance.toUpperCase();
                timeElement.textContent = destination.travel.toUpperCase();
                buttons.forEach(button => button.classList.remove('selected-planet'));
                clickedButton.classList.add('selected-planet');
            }

            document.getElementById('moon-btn').addEventListener('click', function () {
                updateContent(data.destinations[0], this);
            });
            document.getElementById('mars-btn').addEventListener('click', function () {
                updateContent(data.destinations[1], this);
            });
            document.getElementById('europa-btn').addEventListener('click', function () {
                updateContent(data.destinations[2], this);
            });
            document.getElementById('titan-btn').addEventListener('click', function () {
                updateContent(data.destinations[3], this);
            });
        })
        .catch(error => console.error('Error loading JSON:', error));
});
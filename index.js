document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelector('#navLinks');
    const navToggleBtn = document.querySelector('#navToggleBtn');
    navToggleBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

//for destination page
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

//for crew page 
function extractCrewData(crewIndex) {
    fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
        const crewData = data.crew[crewIndex];
        const crewImgElement = document.getElementById("crew-img"); 
        crewImgElement.src = crewData.images.png;

        const bioElement = document.querySelector(".crew-desc");
        bioElement.textContent = crewData.bio;

        const nameElement = document.querySelector(".crew-name");
        nameElement.textContent = crewData.name;

        const roleElement = document.querySelector(".crew-position");
        roleElement.textContent = crewData.role;
    })
    .catch((error) => console.error("Error reading JSON file:", error));
}

function renderCrewList() {
    fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
        const crewList = data.crew;
        const crewListEl = document.querySelector("#crew-list");
        crewList.forEach((crew, index) => {
            const crewElHtml = `<a href="#"><button id="crew-${index}" class="crew-btn listbtn"></button></a>`;
            const crewEl = document.createElement("li");
            crewEl.innerHTML = crewElHtml;
            crewListEl.appendChild(crewEl);

            const buttonEl = crewEl.querySelector("button"); 
            buttonEl.addEventListener("click", crewBtnEvenListener);
        });
        setActiveCrew(0);
    })
    .catch((error) => console.error("Error reading JSON file:", error));
}

function setActiveCrew(crewIndex) {
    const crewEls = document.querySelectorAll(".crew-btn");
    crewEls.forEach((el) => el.classList.remove("active"));
    const crewEl = document.querySelector(`#crew-${crewIndex}`);
    if (!crewEl) {
        console.error("Cannot find crew index " + crewIndex);
        return;
    }
    crewEl.classList.add("active");
    extractCrewData(crewIndex);
}

const crewBtnEvenListener = (event) => {
    const crewEl = event.target;
    const crewIndex = parseInt(crewEl.id.replace("crew-", ""), 10); 
    setActiveCrew(crewIndex);
}

document.addEventListener("DOMContentLoaded", () => {
    renderCrewList();
});

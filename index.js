document.getElementById('btn-explore').addEventListener('click', function() {
    var overlay = document.getElementById('overlay');
    overlay.classList.add('overlay-active');
    
    setTimeout(() => {
        overlay.classList.remove('overlay-active');
    }, 500); 
});

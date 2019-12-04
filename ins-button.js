const button = document.getElementById('ins');

// HANDLER FOR WHEN BUTTON IS PRESSED
const darkenBackground = () => {
    button.style.backgroundColor = '#B89323';

}


// EVENT FOR THE USER INTERACTIONS 
button.onmousedown = darkenBackground;
// Select the div by its ID
const lightSwitch = document.getElementById('light-switch');

// Add a click event listener to the div
lightSwitch.addEventListener('click', function () {
    // Use classList.toggle() to switch between "on" and "off" classes
    lightSwitch.classList.toggle('on');
    lightSwitch.classList.toggle('off');

    // Check if the div now has the "on" class and update text accordingly
    if (lightSwitch.classList.contains('on')) {
        lightSwitch.textContent = 'Click to turn OFF';
    } else {
        lightSwitch.textContent = 'Click to turn ON';
    }
});
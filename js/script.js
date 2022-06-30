/* Global constants */
let DARK_BRIGHT_MODE = "dark-mode";
let COLOR_PRIMARY_BRIGHT = "#E0E0E0";
let COLOR_PRIMARY_DARK = "#111111";

let BLINK_STATUS = true;


/* Functions */
const BodyLoaded = () => {
    DarkBrightModeToggle();
    BlinkingCharacter();
}

// Toggles viewing mode, callback function for viewing mode button toggle
const DarkBrightModeToggle = () => {
    let _div = document.getElementById('dark-bright-mode-span');
    if (DARK_BRIGHT_MODE == "dark-mode") {
        _div.style.backgroundColor = COLOR_PRIMARY_BRIGHT;
        _div.innerHTML = "&#9680;";  // Dark mode moon
        DARK_BRIGHT_MODE = "bright-mode"
    }
    else {
        _div.style.backgroundColor = COLOR_PRIMARY_DARK
        _div.innerHTML = "&#9728;";  // Bright mode sun
        DARK_BRIGHT_MODE = "dark-mode";
    }

    document.body.classList.toggle("dark-mode");
}

const BlinkingCharacter = () => {
    document.getElementById("blinking-character");
    setInterval(() => {
        BLINK_STATUS = !BLINK_STATUS;
        document.getElementById("blinking-character").innerHTML = BLINK_STATUS ? "&#9619" : "";
    }, 500)
}
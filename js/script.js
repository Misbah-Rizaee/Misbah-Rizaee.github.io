// Import other JavaScript modules
import { setupNavigation } from "./navigation.js";
import { initAnimations } from "./animations.js";
import { setupFormHandlers } from "./form.js";
import { loadContent } from "./loadContent.js";

// Main initialization function
function init() {
    // Load dynamic content first
    loadContent().then(() => {
        console.log("Content loaded");

        // Once content is loaded, initialize other modules
        setupNavigation();
        initAnimations();
        setupFormHandlers();
    });

    console.log("Website initialized.");
}

// Run the initialization when the DOM is ready
document.addEventListener("DOMContentLoaded", init);

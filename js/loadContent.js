export function loadContent() {
    // Load all content dynamically
    const loadContentPromises = [
        loadHTML("partials/header.html", "header"),
        loadHTML("partials/about.html", "about"),
        loadHTML("partials/skills.html", "skills"),
        loadHTML("partials/otherSkills.html", "otherSkills"),
        loadHTML("partials/experience.html", "experience"),
        loadHTML("partials/work.html", "work"),
        loadHTML("partials/footer.html", "footer")
    ];

    // Ensure all content is loaded before dispatching the event
    return Promise.all(loadContentPromises);
}

// Helper function to load HTML into specific elements
function loadHTML(file, id) {
    return fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error(`Error loading ${file}:`, error));
}

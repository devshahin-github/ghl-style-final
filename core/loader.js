
// Function to dynamically load CSS
function loadCSS(filename) {
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = filename;
    document.head.appendChild(link);
}

loadCSS("style.css");

// Function GHL Dhashboard Load
export function loadDashboard() {
    fetch("core/ghl-dhashboard.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok: " + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("GHL-Dhashboard-Dynamic-Loader").innerHTML = data;
        })
        .catch(error => {
            console.error("Error loading the dashboard:", error);
            document.getElementById("GHL-Dhashboard-Dynamic-Loader").innerHTML =
                `<p style="color:red;">Failed to load dashboard: ${error.message}</p>`;
        });
}


// Function to dynamically load customInteract.js
export async function loadCustomInteractions() {
    try {
        const module = await import("./customInteract.js");
        if (module && typeof module.setupInteractions === "function") {
            module.setupInteractions();
        }
    } catch (error) {
        console.error("Failed to load customInteract.js:", error);
    }
}

loadCustomInteractions();









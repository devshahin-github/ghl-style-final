import { applyRootCSS, updateRootCSSVariable, generateCSS, copyCSS, downloadCSS } from "./rootCss.js"; // ✅ Import Root CSS Functions

document.addEventListener("DOMContentLoaded", function () {
    applyRootCSS();  // ✅ Load Root CSS First with latest values
    initTweakpane(); // ✅ Initialize Tweakpane UI
});

// ✅ Menu Text JavaScript Variables (Stored Inside an Object)
// ✅ Include Background Colors in JS Object

const MENU_TEXT_VARS = {

    /* ✅ Brand Theme */
    brand_logo: "https://storage.googleapis.com/msgsndr/Ll80aLqvCGY7RHke6mMj/media/67c6b5da3b8faf7c503685f3.png",
    brand_primaryColor: "#00854d",
    brand_secondaryColor: "#0075fb",

    /* ✅ Background Colors (Prefix: bgColor_) */
    bgColor_topbar: "#00854d",
    bgColor_sidebar: "#00854d",
    bgColor_menuHover: "#007644",
    bgColor_bottomToggle: "#a5bd21",
    bgColor_widgets: "#005c36",
    bgColor_funnelState: "#00854d",
    bgColor_counterStates: "#005c36",
    bgColor_dashboard: "#f4f5f8",

    /* ✅ Icon & Text Colors (Prefix: textColor_) */
    textColor_topbar: "#ffffff",
    textColor_topbarIcon: "#ffffff",
    textColor_menu: "#ffffff",
    textColor_widgets: "#ffffff",
    textColor_dashboardIcon: "#83878f",
    textColor_widgetsIcon: "#ffffff",

    /* ✅ Menu Text (Prefix: menuText_) */
    menuText_launchPad: "Launch Pad",
    menuText_dashboard: "Dashboard",
    menuText_conversations: "Conversations",
    menuText_calendar: "Calendars",
    menuText_contacts: "Contacts",
    menuText_opportunities: "Opportunities",
    menuText_payments: "Payments & Contracts",
    menuText_marketing: "Social Media & Emails",
    menuText_automations: "Automations",
    menuText_sites: "Sites & Funnels",
    menuText_memberships: "Courses",
    menuText_mediaStorage: "Media Storage",
    menuText_reputation: "Online Reviews",
    menuText_reporting: "Reports",
    menuText_appMarketplace: "App Marketplace",
    menuText_mobileApp: "Mobile App",
    menuText_settings: "Settings",

    /* ✅ Menu Icons (Prefix: menuIcon_) */
    menuIcon_launchPad: "https://storage.googleapis.com/msgsndr/Ll80aLqvCGY7RHke6mMj/media/67c56a151d9ea6391ca54ffa.png",
    menuIcon_dashboard: "https://storage.googleapis.com/msgsndr/Ll80aLqvCGY7RHke6mMj/media/67c56a151d9ea6e030a54ff7.png",
    menuIcon_conversations: "https://storage.googleapis.com/msgsndr/Ll80aLqvCGY7RHke6mMj/media/67c56a15af5c20624595fc7d.png",
    menuIcon_calendar: "https://storage.googleapis.com/msgsndr/Ll80aLqvCGY7RHke6mMj/media/67c56a151d9ea65f18a54ff8.png",
    menuIcon_contacts: "https://storage.googleapis.com/msgsndr/Ll80aLqvCGY7RHke6mMj/media/67c56a155c7165cf2a251dfa.png",
    menuIcon_opportunities: "https://storage.googleapis.com/msgsndr/Ll80aLqvCGY7RHke6mMj/media/67c56a158127e5f854880efb.png",
    menuIcon_payments: "https://storage.googleapis.com/msgsndr/Ll80aLqvCGY7RHke6mMj/media/67c56a155c71653eea251df9.png",
    menuIcon_marketing: "https://storage.googleapis.com/msgsndr/Ll80aLqvCGY7RHke6mMj/media/67c56a15d6b4dba8585df747.png",
    menuIcon_automations: "https://storage.googleapis.com/msgsndr/Ll80aLqvCGY7RHke6mMj/media/67c56a158127e58874880efa.png",
    menuIcon_sites: "https://storage.googleapis.com/msgsndr/Ll80aLqvCGY7RHke6mMj/media/67c56a15d6b4dbbc995df746.png",
    menuIcon_memberships: "https://storage.googleapis.com/msgsndr/Ll80aLqvCGY7RHke6mMj/media/67c56a15af5c20d0d495fc7e.png",
    menuIcon_mediaStorage: "https://storage.googleapis.com/msgsndr/Ll80aLqvCGY7RHke6mMj/media/67c56a155c7165c57d251df8.png",
    menuIcon_reputation: "https://storage.googleapis.com/msgsndr/Ll80aLqvCGY7RHke6mMj/media/67c56a158127e55f65880efc.png",
    menuIcon_reporting: "https://storage.googleapis.com/msgsndr/Ll80aLqvCGY7RHke6mMj/media/67c56a151d9ea6b158a54ff9.png",
    menuIcon_appMarketplace: "https://storage.googleapis.com/msgsndr/Ll80aLqvCGY7RHke6mMj/media/67c56a15af5c200e1495fc7c.png",
    menuIcon_mobileApp: "https://storage.googleapis.com/msgsndr/Ll80aLqvCGY7RHke6mMj/media/67c56a158127e573b6880efd.png",
    menuIcon_settings: "https://storage.googleapis.com/msgsndr/Ll80aLqvCGY7RHke6mMj/media/67c56a15d6b4db6d805df748.png"
};


// ✅ Function to Get Updated Menu Text Values for `rootCss.js`
export function getMenuTextVars() {
    return { ...MENU_TEXT_VARS }; // Return a copy of the object
}

// ✅ AUTO-SAVE FUNCTION: Forces Live Updates Every 10ms
function autoSaveCSS() {
    setInterval(() => {
        let cssCode = generateCSS(); // Get latest CSS
        applyRootCSS(); // Apply the new CSS variables
    }, 10); // Runs every 10 milliseconds (nanosecond update speed)
}

// ✅ Start Auto-Save Function When Tweakpane Loads
document.addEventListener("DOMContentLoaded", function () {
    applyRootCSS();
    initTweakpane();
    autoSaveCSS(); // Starts Auto-Saving Automatically
});

// ✅ Function to Export Theme as JSON File
function exportTheme() {
    const themeData = { ...MENU_TEXT_VARS }; // ✅ Copy current settings
    const jsonString = JSON.stringify(themeData, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "theme-settings.json";
    link.click();
}

// ✅ Function to Import Theme from JSON File
function importTheme(file) {
    const reader = new FileReader();
    reader.onload = function (event) {
        try {
            const importedData = JSON.parse(event.target.result);
            Object.keys(importedData).forEach(key => {
                if (MENU_TEXT_VARS.hasOwnProperty(key)) {
                    MENU_TEXT_VARS[key] = importedData[key]; // ✅ Update variables
                }
            });

            applyRootCSS(); // ✅ Apply changes
            initTweakpane(); // ✅ Refresh UI
            alert("✅ Theme Imported Successfully!");
        } catch (error) {
            alert("❌ Invalid JSON File!");
        }
    };
    reader.readAsText(file);
}


export function initTweakpane() {
    if (typeof Tweakpane === "undefined") return;

    let tweakpaneContainer = document.getElementById("tweakpane");
    if (!tweakpaneContainer) {
        tweakpaneContainer = document.createElement("div");
        tweakpaneContainer.id = "tweakpane";
        document.body.appendChild(tweakpaneContainer);
    } else {
        tweakpaneContainer.innerHTML = ""; // Prevents duplicate UI
    }

    const pane = new Tweakpane({ container: tweakpaneContainer });

    // ✅ Create "Menu Text" Folder (Always Expanded)
    const menuFolder = pane.addFolder({ title: "Menu Text", expanded: true });

    Object.keys(MENU_TEXT_VARS).forEach((key) => {
        if (!key.startsWith("menuText_")) return; // ✅ Only menu text fields

        let cssVarName = `--${key.replace("menuText_", "").replace(/\s+/g, "-")}-Text`;
        let formattedLabel = formatLabel(key.replace("menuText_", ""));

        let input = menuFolder.addInput(MENU_TEXT_VARS, key, { label: formattedLabel });

        input.on("input", (ev) => {
            if (!ev.value || ev.value.trim() === "") return;
            document.documentElement.style.setProperty(cssVarName, `"${ev.value}"`);
        });
    });

    // ✅ Create "Menu Icons" Folder (Collapsed by Default)
    const menuIconsFolder = pane.addFolder({ title: "Menu Icons", expanded: false });

    Object.keys(MENU_TEXT_VARS).forEach((key) => {
        if (!key.startsWith("menuIcon_")) return; // ✅ Only menu icons

        let cssVarName = `--${key.replace("menuIcon_", "").replace(/\s+/g, "-")}`;
        let formattedLabel = formatLabel(key.replace("menuIcon_", ""));

        let input = menuIconsFolder.addInput(MENU_TEXT_VARS, key, { label: formattedLabel });

        input.on("input", (ev) => {
            if (!ev.value || ev.value.trim() === "") return;
            document.documentElement.style.setProperty(cssVarName, `url(${ev.value})`);
        });
    });

    // ✅ Create "Background Colors" Folder (Collapsed by Default)
    const bgFolder = pane.addFolder({ title: "Background Colors", expanded: false });

    Object.keys(MENU_TEXT_VARS).forEach((key) => {
        if (!key.startsWith("bgColor_")) return; // ✅ Only background colors

        let cssVarName = `--ghl-${key.replace("bgColor_", "").replace(/\s+/g, "-")}`;
        let formattedLabel = formatLabel(key.replace("bgColor_", ""));

        let input = bgFolder.addInput(MENU_TEXT_VARS, key, { label: formattedLabel, view: "color" });

        input.on("input", (ev) => {
            document.documentElement.style.setProperty(cssVarName, ev.value);
        });
    });

    // ✅ Create "Icon & Text Colors" Folder (Collapsed by Default)
    const iconTextFolder = pane.addFolder({ title: "Icon & Text Colors", expanded: false });

    Object.keys(MENU_TEXT_VARS).forEach((key) => {
        if (!key.startsWith("textColor_")) return; // ✅ Only text/icon colors

        let cssVarName = `--ghl-${key.replace("textColor_", "").replace(/\s+/g, "-")}`;
        let formattedLabel = formatLabel(key.replace("textColor_", ""));

        let input = iconTextFolder.addInput(MENU_TEXT_VARS, key, { label: formattedLabel, view: "color" });

        input.on("input", (ev) => {
            document.documentElement.style.setProperty(cssVarName, ev.value);
        });
    });

    // ✅ Create "Brand Theme" Folder (Collapsed by Default)
    const brandFolder = pane.addFolder({ title: "Brand Theme", expanded: false });

    // ✅ Add Inputs for Brand Theme
    Object.keys(MENU_TEXT_VARS).forEach((key) => {
        if (!key.startsWith("brand_")) return; // ✅ Filter only brand-related fields

        let cssVarName = `--${key.replace(/_/g, "-")}`; // Convert `brand_logo` → `--brand-logo`
        let formattedLabel = key.replace("brand_", "").replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase()); 
        // Converts `brand_logo` → `Logo`, `brand_primaryColor` → `Primary Color`

        // ✅ Handle Brand Logo (URL input)
        if (key.includes("logo")) {
            brandFolder.addInput(MENU_TEXT_VARS, key, { label: formattedLabel }).on("input", (ev) => {
                document.documentElement.style.setProperty(cssVarName, `url(${ev.value})`);
            });
        }
        // ✅ Handle Brand Colors (Color Picker)
        else {
            brandFolder.addInput(MENU_TEXT_VARS, key, { label: formattedLabel, view: "color" }).on("input", (ev) => {
                document.documentElement.style.setProperty(cssVarName, ev.value);
            });
        }
    });

    // ✅ Create "Setting Export" Folder (Collapsed by Default)
    const settingFolder = pane.addFolder({ title: "Setting Export", expanded: false });

    // ✅ Add Export Button (Download JSON)
    settingFolder.addButton({ title: "📤 Export Theme" }).on("click", () => {
        exportTheme();
    });

    // ✅ Add Import Button (Upload JSON)
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".json";
    fileInput.style.display = "none";
    document.body.appendChild(fileInput);

    fileInput.addEventListener("change", function (event) {
        const file = event.target.files[0];
        if (file) {
            importTheme(file);
        }
    });

    settingFolder.addButton({ title: "📥 Import Theme" }).on("click", () => {
        fileInput.click();
    });


    pane.addButton({ title: "📋 Copy CSS" }).on("click", copyCSS);
    pane.addButton({ title: "📂 Download CSS" }).on("click", downloadCSS);
}

// ✅ Function to Format Labels (e.g., "topbarTextColor" → "Topbar Text Color")
function formatLabel(key) {
    return key.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase()).trim();
}
















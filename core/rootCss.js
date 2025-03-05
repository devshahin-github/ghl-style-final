import { getMenuTextVars } from "./engine.js"; // ✅ Import Function to Get Menu Text Values

// ✅ Function to Generate Dynamic Root CSS Variables
function getDynamicRootCSSVars() {
    let menuTextValues = getMenuTextVars(); // ✅ Always fetch latest values

    return {

        /* ✅ Brand Theme */
        "--brand-logo": `url(${menuTextValues.brand_logo})`,
        "--brand-primary-color": menuTextValues.brand_primaryColor,
        "--brand-secondary-color": menuTextValues.brand_secondaryColor,

        
        /* ✅ Background Colors */
        "--ghl-topbar-color": menuTextValues.bgColor_topbar,
        "--ghl-sidebar-color": menuTextValues.bgColor_sidebar,
        "--menu-hover-color": menuTextValues.bgColor_menuHover,
        "--sidebar-bottom-toggle": menuTextValues.bgColor_bottomToggle,
        "--ghl-widgets-color": menuTextValues.bgColor_widgets,
        "--funnel-state-box-color": menuTextValues.bgColor_funnelState,
        "--counter-states-color": menuTextValues.bgColor_counterStates,
        "--ghl-white-label-dashboard-color": menuTextValues.bgColor_dashboard,

       /* ✅ Icon & Text Colors */
       "--ghl-topbar-text-color": menuTextValues.textColor_topbar,
       "--menu-text-color": menuTextValues.textColor_menu,
       "--ghl-widgets-text-color": menuTextValues.textColor_widgets,
       "--ghl-topbar-icon-color": menuTextValues.textColor_topbarIcon,
       "--ghl-dashboard-icon-color": menuTextValues.textColor_dashboardIcon,
       "--ghl-widgets-icon-color": menuTextValues.textColor_widgetsIcon,

        /* ✅ Menu Text Dynamic */
        "--Launch-Pad-Text": `"${menuTextValues.menuText_launchPad}"`,
        "--Dashboard-Text": `"${menuTextValues.menuText_dashboard}"`,
        "--Conversations-Text": `"${menuTextValues.menuText_conversations}"`,
        "--Calendar-Text": `"${menuTextValues.menuText_calendar}"`,
        "--Contacts-Text": `"${menuTextValues.menuText_contacts}"`,
        "--Opportunities-Text": `"${menuTextValues.menuText_opportunities}"`,
        "--Payments-Text": `"${menuTextValues.menuText_payments}"`,
        "--Marketing-Text": `"${menuTextValues.menuText_marketing}"`,
        "--Automations-Text": `"${menuTextValues.menuText_automations}"`,
        "--Sites-Text": `"${menuTextValues.menuText_sites}"`,
        "--Memberships-Text": `"${menuTextValues.menuText_memberships}"`,
        "--Media-Storage-Text": `"${menuTextValues.menuText_mediaStorage}"`,
        "--Reputation-Text": `"${menuTextValues.menuText_reputation}"`,
        "--Reporting-Text": `"${menuTextValues.menuText_reporting}"`,
        "--App-Marketplace-Text": `"${menuTextValues.menuText_appMarketplace}"`,
        "--Mobile-App-Text": `"${menuTextValues.menuText_mobileApp}"`,
        "--Settings-Text": `"${menuTextValues.menuText_settings}"`,

        /* ✅ Menu Icons */
        "--launch-pad-icon": `url(${menuTextValues.menuIcon_launchPad})`,
        "--dashboard-icon": `url(${menuTextValues.menuIcon_dashboard})`,
        "--conversations-icon": `url(${menuTextValues.menuIcon_conversations})`,
        "--calendars-icon": `url(${menuTextValues.menuIcon_calendar})`,
        "--contacts-icon": `url(${menuTextValues.menuIcon_contacts})`,
        "--opportunities-icon": `url(${menuTextValues.menuIcon_opportunities})`,
        "--payments-icon": `url(${menuTextValues.menuIcon_payments})`,
        "--marketing-icon": `url(${menuTextValues.menuIcon_marketing})`,
        "--automations-icon": `url(${menuTextValues.menuIcon_automations})`,
        "--sites-icon": `url(${menuTextValues.menuIcon_sites})`,
        "--memberships-icon": `url(${menuTextValues.menuIcon_memberships})`,
        "--media-storage-icon": `url(${menuTextValues.menuIcon_mediaStorage})`,
        "--reputation-icon": `url(${menuTextValues.menuIcon_reputation})`,
        "--reporting-icon": `url(${menuTextValues.menuIcon_reporting})`,
        "--app-marketplace-icon": `url(${menuTextValues.menuIcon_appMarketplace})`,
        "--mobile-app-icon": `url(${menuTextValues.menuIcon_mobileApp})`,
        "--settings-icon": `url(${menuTextValues.menuIcon_settings})`
    };
}

// ✅ Function to Apply Root CSS Variables
function applyRootCSS() {
    let ROOT_CSS_VARS = getDynamicRootCSSVars();

    Object.keys(ROOT_CSS_VARS).forEach(key => {
        document.documentElement.style.setProperty(key, ROOT_CSS_VARS[key]);
    });
}

// ✅ AUTO-SAVE ENFORCED: Updates CSS Instantly
function updateRootCSSVariable(name, value) {
    document.documentElement.style.setProperty(name, value);
    document.documentElement.style.display = "none";
    void document.documentElement.offsetHeight; // Force Reflow
    document.documentElement.style.display = "";
}

// ✅ Extra CSS (Only for Copy/Download)
const EXTRA_CSS = `

/* Button styles */
#navigation-btn,
.location-dashboard_header .w-full .cursor-pointer {
    background-color: var(--bg-color);
    background-image: var(--primary-gradient);
}


`;

// ✅ Function to Generate CSS for Copy & Download
function generateCSS(includeExtra = false) {
    let ROOT_CSS_VARS = getDynamicRootCSSVars();
    let cssCode = `:root {\n`;

    Object.keys(ROOT_CSS_VARS).forEach(key => {
        cssCode += `  ${key}: ${ROOT_CSS_VARS[key]};\n`;
    });

    cssCode += `}\n`;

    // ✅ Append Extra CSS Only When Copying/Downloading
    if (includeExtra) {
        cssCode += EXTRA_CSS;
    }

    return cssCode;
}


// ✅ Function to Copy CSS to Clipboard
function copyCSS() {
    let cssCode = generateCSS(true); // ✅ Include extra CSS in copy
    applyRootCSS(); // ✅ Apply updates when copying

    navigator.clipboard.writeText(cssCode).then(() => {
        alert("✅ CSS Code Copied Successfully!");
    }).catch(() => {
        alert("❌ Failed to Copy CSS");
    });
}

// ✅ Function to Download CSS as File
function downloadCSS() {
    let cssCode = generateCSS(true); // ✅ Include extra CSS in download
    applyRootCSS(); // ✅ Apply updates when downloading

    let blob = new Blob([cssCode], { type: "text/css" });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "ghl-dashboard-customize.css";
    link.click();
}

// ✅ Export functions (No Duplicates)
export { applyRootCSS, updateRootCSSVariable, generateCSS, copyCSS, downloadCSS };

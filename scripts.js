import { loadDashboard } from "./core/loader.js";

document.addEventListener("DOMContentLoaded", function() {
    loadDashboard();  // 📌 Load function call
});


import { applyRootCSS } from "./core/rootCss.js";
import { initTweakpane } from "./core/engine.js";

// ✅ Load Root CSS Variables & Initialize Tweakpane
document.addEventListener("DOMContentLoaded", function () {
    applyRootCSS();   // ✅ Apply default CSS variables
    initTweakpane();  // ✅ Initialize Tweakpane UI
});




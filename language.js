document.addEventListener("DOMContentLoaded", () => {
    const langToggle = document.getElementById("lang-toggle");
    const comingSoonText = document.getElementById("coming-soon-text");

    if (!langToggle || !comingSoonText) return;

    // Get language from localStorage, default to 'En'
    let currentLang = localStorage.getItem("lang") || "En";

    const updateLanguage = () => {
        if (currentLang === "Ar") {
            langToggle.textContent = "En";
            comingSoonText.textContent = "قريباً";
            comingSoonText.style.fontFamily = "'Tajawal', sans-serif";
            comingSoonText.style.fontWeight = "700";
            document.body.style.direction = "rtl";
            langToggle.style.right = "auto";
            langToggle.style.left = "30px";
        } else {
            langToggle.textContent = "Ar";
            comingSoonText.textContent = "Coming Soon";
            comingSoonText.style.fontFamily = "";
            comingSoonText.style.fontWeight = "";
            document.body.style.direction = "ltr";
            langToggle.style.left = "auto";
            langToggle.style.right = "30px";
        }
    };

    // Initialize with the saved or default language
    updateLanguage();

    langToggle.addEventListener("click", (e) => {
        e.preventDefault();
        // Toggle language
        currentLang = currentLang === "En" ? "Ar" : "En";
        // Save to localStorage
        localStorage.setItem("lang", currentLang);
        // Apply changes
        updateLanguage();
    });
});

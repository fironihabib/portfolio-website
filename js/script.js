// Test if JavaScript is loading
console.log("JavaScript file loaded successfully");

// ===== PAGE LOADING SCREEN FUNCTIONALITY =====
document.addEventListener("DOMContentLoaded", function () {
  console.log("🚀 Page loading screen initialized");

  const pageLoadingScreen = document.getElementById("page-loading-screen");
  const heroSection = document.querySelector(".hero-section");

  // Hide hero section initially
  if (heroSection) {
    heroSection.style.display = "none";
  }

  // Show loading screen for 3 seconds, then transition to welcome page
  setTimeout(() => {
    console.log("⏰ Loading complete, transitioning to welcome page");

    // Start fade out animation
    if (pageLoadingScreen) {
      pageLoadingScreen.classList.add("hidden");

      // After fade out completes, show hero section and remove loading screen
      setTimeout(() => {
        pageLoadingScreen.style.display = "none";
        if (heroSection) {
          heroSection.style.display = "flex";

          // Add entrance animation to hero section
          heroSection.style.opacity = "0";
          heroSection.style.transform = "translateY(20px)";

          // Animate hero section entrance
          setTimeout(() => {
            heroSection.style.transition =
              "opacity 0.8s ease, transform 0.8s ease";
            heroSection.style.opacity = "1";
            heroSection.style.transform = "translateY(0)";

            // Start typewriter effect after hero section is visible
            setTimeout(() => {
              const typewriterText = document.getElementById("typewriter-text");
              if (typewriterText) {
                const initialText = "Welcome To My Portfolio!";
                updateTypewriterText(initialText);
              }
            }, 500); // Start typewriter 500ms after hero section appears
          }, 50);
        }
      }, 800); // Wait for fade out animation
    }
  }, 3000); // 3 seconds loading time
});

// ===== PAGE LOADING PROGRESS SIMULATION =====
document.addEventListener("DOMContentLoaded", function () {
  const progressBar = document.querySelector(".page-loading-progress-bar");
  const loadingText = document.querySelector(".page-loading-text");

  if (progressBar && loadingText) {
    const loadingSteps = [
      { progress: 20, text: "Loading assets..." },
      { progress: 40, text: "Preparing interface..." },
      { progress: 70, text: "Loading portfolio..." },
      { progress: 90, text: "Almost ready..." },
      { progress: 100, text: "Welcome!" },
    ];

    let currentStep = 0;

    const updateProgress = () => {
      if (currentStep < loadingSteps.length) {
        const step = loadingSteps[currentStep];
        loadingText.textContent = step.text;
        currentStep++;

        if (currentStep < loadingSteps.length) {
          setTimeout(updateProgress, 600);
        }
      }
    };

    // Start progress updates after a short delay
    setTimeout(updateProgress, 500);
  }
});

// Test function to verify all functionality
function runPortfolioTests() {
  console.log("🧪 Running Portfolio Tests...");

  // Test 1: Check if all pages exist
  const pages = {
    hero: document.querySelector(".hero-section"),
    home: document.querySelector(".home-page"),
    about: document.querySelector(".about-page"),
    work: document.querySelector(".work-page"),
    contact: document.querySelector(".contact-page"),
  };

  console.log("📄 Page Elements:", pages);

  // Test 2: Check navigation links
  const navLinks = document.querySelectorAll(".nav-link");
  console.log(`🔗 Found ${navLinks.length} navigation links`);

  // Test 3: Check language dropdowns
  const languageDropdowns = document.querySelectorAll(".language-dropdown");
  console.log(`🌍 Found ${languageDropdowns.length} language dropdowns`);

  // Test 4: Check slide overlay
  const slideOverlay = document.getElementById("slide-overlay");
  console.log("🎬 Slide overlay:", slideOverlay ? "✅ Found" : "❌ Missing");

  // Test 5: Check click here button
  const clickHereBtn = document.getElementById("go-to-home");
  console.log(
    "🔘 Click here button:",
    clickHereBtn ? "✅ Found" : "❌ Missing"
  );

  console.log("✅ Portfolio tests completed!");
}

// Make test function available globally
window.runPortfolioTests = runPortfolioTests;

// Debug function to check page states
function debugPageStates() {
  const pages = {
    hero: document.querySelector(".hero-section"),
    home: document.querySelector(".home-page"),
    about: document.querySelector(".about-page"),
    work: document.querySelector(".work-page"),
    contact: document.querySelector(".contact-page"),
  };

  console.log("=== PAGE STATES ===");
  Object.entries(pages).forEach(([name, page]) => {
    if (page) {
      const display = window.getComputedStyle(page).display;
      const hasActive = page.classList.contains("active");
      console.log(`${name}: display=${display}, active=${hasActive}`);
    } else {
      console.log(`${name}: NOT FOUND`);
    }
  });
  console.log("==================");
}

// Make debug function available globally
window.debugPageStates = debugPageStates;

// Debug function for language testing
function debugLanguageStates() {
  const dropdowns = document.querySelectorAll(".language-dropdown");
  console.log("=== LANGUAGE STATES ===");
  console.log(`Found ${dropdowns.length} language dropdowns`);

  dropdowns.forEach((dropdown, index) => {
    const selectedText = dropdown.querySelector(".language-text")?.textContent;
    const selectedFlag = dropdown.querySelector(
      ".selected-language .flag-icon"
    )?.src;
    const parentPage = dropdown.closest("section")?.className || "unknown";

    console.log(
      `Dropdown ${index + 1} (${parentPage}): ${selectedText} - ${selectedFlag}`
    );
  });

  const savedLang = localStorage.getItem("selectedLanguage");
  const savedFlag = localStorage.getItem("selectedLanguageFlag");
  const savedCode = localStorage.getItem("selectedLanguageCode");

  console.log("Saved preferences:", { savedLang, savedFlag, savedCode });
  console.log("======================");
}

// Make language debug function available globally
window.debugLanguageStates = debugLanguageStates;

// Test function to manually trigger dropdown
function testLanguageDropdown(pageIndex = 0) {
  const dropdowns = document.querySelectorAll(".language-dropdown");
  console.log(`Found ${dropdowns.length} total dropdowns`);

  if (dropdowns[pageIndex]) {
    const selectedLanguage =
      dropdowns[pageIndex].querySelector(".selected-language");
    const parentPage =
      dropdowns[pageIndex].closest("section")?.className || "unknown";

    console.log(`Testing dropdown ${pageIndex + 1} on page: ${parentPage}`);

    if (selectedLanguage) {
      selectedLanguage.click();
      console.log(`Clicked dropdown ${pageIndex + 1}`);
      return true;
    } else {
      console.log(
        `Selected language element not found in dropdown ${pageIndex + 1}`
      );
    }
  }
  console.log(`Dropdown ${pageIndex + 1} not found`);
  return false;
}

// Make test function available globally
window.testLanguageDropdown = testLanguageDropdown;

// Advanced debug function
function debugDropdownIssues() {
  console.log("🔍 ADVANCED DROPDOWN DEBUGGING");
  console.log("================================");

  const allDropdowns = document.querySelectorAll(".language-dropdown");

  allDropdowns.forEach((dropdown, index) => {
    const parentSection = dropdown.closest("section");
    const selectedLanguage = dropdown.querySelector(".selected-language");
    const languageOptions = dropdown.querySelector(".language-options");

    console.log(`\n📋 Dropdown ${index + 1}:`);
    console.log(`  Parent section: ${parentSection?.className || "none"}`);
    console.log(
      `  Section display: ${
        parentSection ? window.getComputedStyle(parentSection).display : "none"
      }`
    );
    console.log(
      `  Section visibility: ${
        parentSection
          ? window.getComputedStyle(parentSection).visibility
          : "none"
      }`
    );
    console.log(`  Has selected-language: ${!!selectedLanguage}`);
    console.log(`  Has language-options: ${!!languageOptions}`);
    console.log(
      `  Dropdown z-index: ${window.getComputedStyle(dropdown).zIndex}`
    );
    console.log(
      `  Options z-index: ${
        languageOptions
          ? window.getComputedStyle(languageOptions).zIndex
          : "none"
      }`
    );
    console.log(`  Is active: ${dropdown.classList.contains("active")}`);

    if (selectedLanguage) {
      console.log(
        `  Selected language clickable: ${
          window.getComputedStyle(selectedLanguage).pointerEvents !== "none"
        }`
      );

      // Test click programmatically
      try {
        selectedLanguage.click();
        console.log(`  ✅ Click test successful`);
        setTimeout(() => {
          console.log(
            `  Active after click: ${dropdown.classList.contains("active")}`
          );
          dropdown.classList.remove("active"); // Clean up
        }, 100);
      } catch (error) {
        console.log(`  ❌ Click test failed: ${error.message}`);
      }
    }
  });

  console.log("\n================================");
}

// Make advanced debug function available globally
window.debugDropdownIssues = debugDropdownIssues;

// Test function to check all dropdowns on page load
function testAllDropdownsOnLoad() {
  console.log("🧪 Testing all dropdowns on page load...");

  const allDropdowns = document.querySelectorAll(".language-dropdown");
  console.log(`Found ${allDropdowns.length} dropdowns total`);

  allDropdowns.forEach((dropdown, index) => {
    const parentSection = dropdown.closest("section");
    const selectedLanguage = dropdown.querySelector(".selected-language");
    const languageOptions = dropdown.querySelector(".language-options");
    const parentClass = parentSection?.className || "unknown";

    console.log(`\n🔍 Dropdown ${index + 1} (${parentClass}):`);
    console.log(`  - Has selected-language: ${!!selectedLanguage}`);
    console.log(`  - Has language-options: ${!!languageOptions}`);
    console.log(
      `  - Parent section visible: ${
        parentSection
          ? window.getComputedStyle(parentSection).display !== "none"
          : false
      }`
    );
    console.log(
      `  - Parent section active: ${
        parentSection?.classList.contains("active") || false
      }`
    );

    if (selectedLanguage) {
      // Try to click it programmatically
      console.log(`  - Testing click on dropdown ${index + 1}...`);
      selectedLanguage.click();

      setTimeout(() => {
        const isActive = dropdown.classList.contains("active");
        console.log(`  - After click, active: ${isActive}`);

        // Close it
        dropdown.classList.remove("active");
      }, 100);
    }
  });
}

// Make test function available globally
window.testAllDropdownsOnLoad = testAllDropdownsOnLoad;

// ===== CONTACT FORM FUNCTIONALITY =====
// Define functions immediately and make them globally available

// Show contact form
window.showContactForm = function () {
  console.log("📧 Showing contact form...");

  const defaultView = document.querySelector(".contact-default-view");
  const formView = document.querySelector(".contact-form-view");
  const thankYouView = document.querySelector(".contact-thank-you-view");

  console.log("Elements found:", {
    defaultView: !!defaultView,
    formView: !!formView,
    thankYouView: !!thankYouView,
  });

  if (defaultView && formView) {
    defaultView.style.display = "none";
    formView.style.display = "flex";
    if (thankYouView) thankYouView.style.display = "none";

    // Focus on first input
    setTimeout(() => {
      const emailInput = document.getElementById("email");
      if (emailInput) emailInput.focus();
    }, 100);
  } else {
    console.error("Contact form elements not found!");
  }
};

// Show contact default view
window.showContactDefault = function () {
  console.log("🏠 Showing contact default view...");

  const defaultView = document.querySelector(".contact-default-view");
  const formView = document.querySelector(".contact-form-view");
  const thankYouView = document.querySelector(".contact-thank-you-view");

  if (defaultView && formView && thankYouView) {
    defaultView.style.display = "flex";
    formView.style.display = "none";
    thankYouView.style.display = "none";
  }
};

// Show thank you view
window.showThankYou = function () {
  console.log("🎉 Showing thank you view...");

  const defaultView = document.querySelector(".contact-default-view");
  const formView = document.querySelector(".contact-form-view");
  const thankYouView = document.querySelector(".contact-thank-you-view");

  if (defaultView && formView && thankYouView) {
    defaultView.style.display = "none";
    formView.style.display = "none";
    thankYouView.style.display = "flex";
  }
};

// EmailJS Configuration
const EMAILJS_CONFIG = {
  publicKey: "yA99ZL1FBDOb9RwLn", // EmailJS Public Key
  serviceId: "service_7ofhalv", // Outlook service ID
  templateId: "template_mw3bkqb", // Template ID
};

// Initialize EmailJS
function initEmailJS() {
  if (typeof emailjs !== "undefined") {
    emailjs.init(EMAILJS_CONFIG.publicKey);
    console.log("📧 EmailJS initialized");
  } else {
    console.error("❌ EmailJS library not loaded");
  }
}

// Handle form submission
function handleContactFormSubmit(event) {
  event.preventDefault();

  console.log("📤 Contact form submitted");

  // Show loading state
  const submitBtn = event.target.querySelector(".submit-btn");
  const originalText = submitBtn.innerHTML;
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  submitBtn.disabled = true;

  // Get form data
  const formData = new FormData(event.target);
  const email = formData.get("email");
  const countryCode = formData.get("countryCode");
  const mobile = formData.get("mobile");
  const message = formData.get("message");

  // Combine country code with mobile number (only if mobile is provided)
  let fullPhoneNumber = "";
  if (mobile && mobile.trim() !== "") {
    fullPhoneNumber = countryCode + " " + mobile.trim();
  }

  // Prepare email parameters
  const emailParams = {
    from_name: email, // Sender's email as name
    from_email: email,
    phone_number: fullPhoneNumber || "Not provided",
    message: message,
    to_email: "gabibzadeh03@gmail.com", // Your email
  };

  console.log("Sending email with params:", emailParams);

  // Send email via EmailJS
  if (typeof emailjs !== "undefined") {
    emailjs
      .send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, emailParams)
      .then(
        function (response) {
          console.log(
            "✅ Email sent successfully!",
            response.status,
            response.text
          );

          // Show success
          showThankYou();

          // Reset form
          event.target.reset();

          // Reset button
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
        },
        function (error) {
          console.error("❌ Email sending failed:", error);

          // Show error message
          alert(
            "Sorry, there was an error sending your message. Please try again."
          );

          // Reset button
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
        }
      );
  } else {
    // Fallback - show thank you without sending email
    console.warn(
      "⚠️ EmailJS not available, showing thank you page without sending email"
    );
    setTimeout(() => {
      showThankYou();
      event.target.reset();
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }, 500);
  }
}

// Initialize contact form when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Initialize EmailJS
  initEmailJS();

  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", handleContactFormSubmit);
    console.log("📧 Contact form initialized");
  }

  // Phone number formatting and validation
  const phoneInput = document.getElementById("mobile");
  const countryCodeSelect = document.getElementById("countryCode");

  if (phoneInput && countryCodeSelect) {
    // Phone number formatting patterns for different countries
    const phoneFormats = {
      "+90": { pattern: "### ### ## ##", maxLength: 10 }, // Turkey
      "+994": { pattern: "## ### ## ##", maxLength: 9 }, // Azerbaijan
      "+7": { pattern: "### ### ## ##", maxLength: 10 }, // Russia/Kazakhstan
      "+1": { pattern: "### ### ####", maxLength: 10 }, // USA/Canada
      "+44": { pattern: "#### ### ###", maxLength: 10 }, // UK
      "+49": { pattern: "### ### ####", maxLength: 10 }, // Germany
      "+33": { pattern: "# ## ## ## ##", maxLength: 9 }, // France
      "+39": { pattern: "### ### ####", maxLength: 10 }, // Italy
      "+34": { pattern: "### ### ###", maxLength: 9 }, // Spain
      "+31": { pattern: "# #### ####", maxLength: 9 }, // Netherlands
      "+91": { pattern: "##### #####", maxLength: 10 }, // India
      "+86": { pattern: "### #### ####", maxLength: 11 }, // China
      "+81": { pattern: "## #### ####", maxLength: 10 }, // Japan
      "+82": { pattern: "## #### ####", maxLength: 10 }, // South Korea
      default: { pattern: "### ### ####", maxLength: 10 },
    };

    function formatPhoneNumber(value, countryCode) {
      // Remove all non-digit characters
      const digits = value.replace(/\D/g, "");

      // Remove leading zero if present
      const cleanDigits = digits.replace(/^0+/, "");

      // Get format for selected country
      const format = phoneFormats[countryCode] || phoneFormats["default"];

      // Limit to max length for the country
      const limitedDigits = cleanDigits.substring(0, format.maxLength);

      // Apply formatting pattern
      let formatted = "";
      let digitIndex = 0;

      for (
        let i = 0;
        i < format.pattern.length && digitIndex < limitedDigits.length;
        i++
      ) {
        if (format.pattern[i] === "#") {
          formatted += limitedDigits[digitIndex];
          digitIndex++;
        } else {
          formatted += format.pattern[i];
        }
      }

      return formatted;
    }

    phoneInput.addEventListener("input", function (e) {
      // Remove any "+" characters
      let value = e.target.value.replace(/\+/g, "");

      // Get selected country code
      const selectedCountryCode = countryCodeSelect.value;

      // Format the phone number
      const formatted = formatPhoneNumber(value, selectedCountryCode);

      // Update input value
      e.target.value = formatted;
    });

    // Also format when country code changes
    countryCodeSelect.addEventListener("change", function () {
      if (phoneInput.value) {
        const selectedCountryCode = countryCodeSelect.value;
        const formatted = formatPhoneNumber(
          phoneInput.value,
          selectedCountryCode
        );
        phoneInput.value = formatted;
      }
    });

    phoneInput.addEventListener("keydown", function (e) {
      // Prevent typing "+" character
      if (e.key === "+" || e.key === "=") {
        e.preventDefault();
      }
    });

    phoneInput.addEventListener("paste", function (e) {
      // Handle paste events
      setTimeout(() => {
        const selectedCountryCode = countryCodeSelect.value;
        const formatted = formatPhoneNumber(
          e.target.value,
          selectedCountryCode
        );
        e.target.value = formatted;
      }, 0);
    });
  }
});

// Contact functions are now defined as window properties above

// Debug: Test that functions are available
console.log("🔧 Contact functions loaded:", {
  showContactForm: typeof window.showContactForm,
  showContactDefault: typeof window.showContactDefault,
  showThankYou: typeof window.showThankYou,
});

// ===== AUTO CAROUSEL FUNCTIONALITY =====
function initAutoCarousel() {
  const carousels = document.querySelectorAll(".auto-carousel");

  carousels.forEach((carousel) => {
    const images = carousel.querySelectorAll(".carousel-image");
    let currentIndex = 0;

    if (images.length <= 1) return; // Skip if only one image

    function showNextImage() {
      // Add exit class to current image (slide left)
      images[currentIndex].classList.add("exit");
      images[currentIndex].classList.remove("active");

      // Move to next image
      currentIndex = (currentIndex + 1) % images.length;

      // Reset next image position and show it (slide from right)
      images[currentIndex].classList.remove("exit");

      // Small delay to ensure smooth transition
      setTimeout(() => {
        images[currentIndex].classList.add("active");
      }, 50);

      // Clean up exit class after transition
      setTimeout(() => {
        images.forEach((img) => img.classList.remove("exit"));
      }, 800);
    }

    // Start auto rotation every 3 seconds
    setInterval(showNextImage, 3000);
  });
}

// Initialize carousel when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  initAutoCarousel();
});


// ===== MOBILE SCROLL INDICATOR =====
document.addEventListener("DOMContentLoaded", function () {
  const grid = document.getElementById("portfolioGrid");
  const hint = document.getElementById("scrollHint");
  if (!grid || !hint) return;

  const dots = hint.querySelectorAll("span");
  if (dots.length === 0) return;

  function updateDots() {
    if (window.innerWidth > 767) return;
    const scrollLeft = grid.scrollLeft;
    const cardWidth = grid.querySelector(".project-card-modern")?.offsetWidth || 300;
    const gap = parseFloat(getComputedStyle(grid).gap) || 16;
    const activeIndex = Math.round(scrollLeft / (cardWidth + gap));
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === activeIndex);
    });
  }

  grid.addEventListener("scroll", updateDots);
  window.addEventListener("resize", updateDots);
  setTimeout(updateDots, 300);
});

// ===== SMOOTH SCROLL FUNCTIONALITY =====
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll for click here button (fixed selector)
  const clickHereBtn = document.querySelector(".portfolio-button");
  if (clickHereBtn) {
    clickHereBtn.addEventListener("click", function (e) {
      e.preventDefault();

      // Get href attribute and validate it
      const href = this.getAttribute("href");
      if (href && href !== "#" && href.length > 1) {
        try {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });

            // Trigger social icons animation when scrolling to about section
            setTimeout(() => {
              const socialContainer = document.querySelector(
                ".social-icons-container"
              );
              if (socialContainer) {
                socialContainer.classList.add("animate");
              }
            }, 500); // Wait for scroll to complete
          }
        } catch (error) {
          console.log("Invalid selector:", href, error.message);
        }
      } else {
        // If href is just "#", treat it as a navigation to home page
        console.log("Portfolio button clicked - navigating to home");
      }
    });
  }
});

// ===== AUTO-TRIGGER SOCIAL ICONS ANIMATION =====
window.addEventListener("load", function () {
  const aboutSection = document.querySelector("#next-section");
  if (aboutSection) {
    // Check if about section is visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const socialContainer = document.querySelector(
              ".social-icons-container"
            );
            if (
              socialContainer &&
              !socialContainer.classList.contains("animate")
            ) {
              setTimeout(() => {
                socialContainer.classList.add("animate");
              }, 800); // Delay for page load
            }
            observer.unobserve(entry.target); // Only trigger once
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(aboutSection);
  }
});

// ===== LANGUAGE DROPDOWN FUNCTIONALITY =====
document.addEventListener("DOMContentLoaded", function () {
  console.log("🌍 DOM loaded, setting up language functionality...");

  // Initialize language dropdowns for all pages
  initializeLanguageDropdowns();

  // Test all dropdowns after a short delay
  setTimeout(() => {
    testAllDropdownsOnLoad();
  }, 500);
});

// Global variables to track event listeners
let dropdownListenersAttached = false;
let outsideClickListenerAttached = false;

function initializeLanguageDropdowns() {
  console.log("🌍 Initializing language dropdowns...");

  // Use event delegation for better performance and reliability
  setupEventDelegation();

  // Load saved language preference
  loadSavedLanguage();
}

function setupEventDelegation() {
  // Remove existing delegated listeners if any
  document.removeEventListener("click", handleLanguageDropdownClick);
  document.removeEventListener("click", handleOutsideClick);

  // Add event delegation for dropdown clicks
  document.addEventListener("click", handleLanguageDropdownClick);

  // Add outside click handler
  document.addEventListener("click", handleOutsideClick);

  console.log("🌍 Event delegation setup complete");
}

function handleLanguageDropdownClick(e) {
  // Handle selected language clicks
  if (e.target.closest(".selected-language")) {
    e.stopPropagation();
    e.preventDefault();

    const dropdown = e.target.closest(".language-dropdown");
    const parentPage = dropdown.closest("section")?.className || "unknown";

    console.log(`🖱️ Dropdown clicked on page: ${parentPage}`);

    // Close all other dropdowns
    document.querySelectorAll(".language-dropdown").forEach((otherDropdown) => {
      if (otherDropdown !== dropdown) {
        otherDropdown.classList.remove("active");
      }
    });

    // Toggle current dropdown
    dropdown.classList.toggle("active");

    // Mobile handling - only for very small screens and not on contact page
    const isContactPage = dropdown.closest(".contact-page");
    if (window.innerWidth <= 480 && !isContactPage) {
      if (dropdown.classList.contains("active")) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    }

    console.log(`Dropdown active: ${dropdown.classList.contains("active")}`);
    return;
  }

  // Handle language option clicks
  if (e.target.closest(".language-option")) {
    e.stopPropagation();
    e.preventDefault();

    const option = e.target.closest(".language-option");
    const lang = option.getAttribute("data-lang");
    const flagSrc = option.querySelector(".flag-icon").src;
    const langName = option.querySelector("span").textContent;

    console.log(`🌍 Language selected: ${lang} (${langName})`);

    // Update language
    selectLanguage(lang, flagSrc, langName);
    return;
  }
}

function handleOutsideClick(e) {
  if (!e.target.closest(".language-dropdown")) {
    document.querySelectorAll(".language-dropdown").forEach((dropdown) => {
      dropdown.classList.remove("active");
    });

    // Restore body scroll on mobile - but not on contact page
    const isContactPage =
      document.querySelector(".contact-page.active") ||
      document.querySelector('.contact-page[style*="flex"]');
    if (window.innerWidth <= 480 && !isContactPage) {
      document.body.style.overflow = "";
    }
  }
}

function selectLanguage(lang, flagSrc, langName) {
  const langCodes = {
    en: "EN",
    az: "AZ",
    tr: "TR",
    ru: "RU",
  };

  // Update all language dropdowns
  updateAllLanguageDropdowns(flagSrc, langCodes[lang]);

  // Close all dropdowns
  document.querySelectorAll(".language-dropdown").forEach((dd) => {
    dd.classList.remove("active");
  });

  // Restore body scroll on mobile - but not on contact page
  const isContactPage =
    document.querySelector(".contact-page.active") ||
    document.querySelector('.contact-page[style*="flex"]');
  if (window.innerWidth <= 480 && !isContactPage) {
    document.body.style.overflow = "";
  }

  // Store selected language
  localStorage.setItem("selectedLanguage", lang);
  localStorage.setItem("selectedLanguageFlag", flagSrc);
  localStorage.setItem("selectedLanguageCode", langCodes[lang]);

  // Update translations
  console.log(`🔄 Updating translations to: ${lang}`);
  if (typeof window.setLanguage === "function") {
    window.setLanguage(lang);
  } else if (typeof updatePageContent === "function") {
    // Update currentLanguage and call updatePageContent
    currentLanguage = lang;
    if (typeof window !== "undefined") {
      window.currentLanguage = lang;
    }
    updatePageContent();
  }
}

// Re-initialize dropdowns when page changes
function reinitializeDropdowns() {
  console.log("🔄 Reinitializing dropdowns for page change...");
  // Event delegation handles all pages automatically, just load saved language
  loadSavedLanguage();
}

// Helper function for dropdown click handling
function handleDropdownClick(e) {
  e.stopPropagation();
}

function updateAllLanguageDropdowns(flagSrc, langCode) {
  // Update all language dropdowns on all pages
  const allLanguageTexts = document.querySelectorAll(".language-text");
  const allFlagIcons = document.querySelectorAll(
    ".selected-language .flag-icon"
  );

  allLanguageTexts.forEach((text) => {
    text.textContent = langCode;
  });

  allFlagIcons.forEach((icon) => {
    icon.src = flagSrc;
  });
}

function loadSavedLanguage() {
  const savedLang = localStorage.getItem("selectedLanguage");
  const savedFlag = localStorage.getItem("selectedLanguageFlag");
  const savedCode = localStorage.getItem("selectedLanguageCode");

  if (savedLang && savedFlag && savedCode) {
    console.log(`🔄 Loading saved language: ${savedLang}`);

    // Update dropdown display
    updateAllLanguageDropdowns(savedFlag, savedCode);

    // Update currentLanguage
    if (typeof window !== "undefined") {
      window.currentLanguage = savedLang;
    }

    // Update translations using the function from translations.js
    if (typeof window.setLanguage === "function") {
      window.setLanguage(savedLang);
    } else if (typeof updatePageContent === "function") {
      // Update currentLanguage and call updatePageContent
      currentLanguage = savedLang;
      updatePageContent();
    }
  }
}

// Removed unused setupGlobalLanguageEvents function

// ===== SPARKLE ANIMATION ENHANCEMENT =====
document.addEventListener("DOMContentLoaded", function () {
  const sparkles = document.querySelectorAll(".sparkle");

  sparkles.forEach((sparkle) => {
    // Add random rotation variations
    const randomRotation = Math.random() * 360;
    sparkle.style.setProperty("--random-rotate", `${randomRotation}deg`);

    // Add slight random delays to make animation more natural
    const randomDelay = Math.random() * 0.5;
    sparkle.style.animationDelay = `${randomDelay}s`;
  });
});

// ===== TYPEWRITER EFFECT =====
let typewriterInterval;

function updateTypewriterText(newText) {
  const typewriterText = document.getElementById("typewriter-text");
  if (!typewriterText) return;

  // Clear existing text and stop any running animation
  if (typewriterInterval) {
    clearTimeout(typewriterInterval);
  }
  typewriterText.textContent = "";

  let index = 0;

  function typeWriter() {
    if (index < newText.length) {
      typewriterText.textContent += newText.charAt(index);
      index++;
      typewriterInterval = setTimeout(typeWriter, 100); // 100ms delay between each character
    }
  }

  // Start typewriter effect
  typeWriter();
}

// Typewriter effect is now triggered from the page loading screen functionality
// to ensure proper timing with hero section visibility

// ===== CLICK HERE BUTTON NAVIGATION WITH SLIDE TRANSITION =====
document.addEventListener("DOMContentLoaded", function () {
  const clickHereBtn = document.getElementById("go-to-home");
  const homePage = document.querySelector(".home-page");
  const heroSection = document.querySelector(".hero-section");
  const slideOverlay = document.getElementById("slide-overlay");

  if (clickHereBtn && homePage && heroSection && slideOverlay) {
    clickHereBtn.addEventListener("click", function (e) {
      e.preventDefault();

      // Show and start slide transition (slide in from left)
      slideOverlay.style.display = "flex";

      // Force reflow to ensure display change takes effect
      slideOverlay.offsetHeight;

      // Add active class to trigger slide in
      slideOverlay.classList.add("active");

      // After 2 seconds, slide out to right and show home page
      setTimeout(() => {
        // Start sliding out to the right
        slideOverlay.classList.add("slide-out");

        // Switch to home page
        heroSection.style.display = "none";
        homePage.classList.add("active");
        document.body.style.overflow = "auto";

        // Trigger social icons animation
        setTimeout(() => {
          const socialContainer = document.querySelector(
            ".social-icons-container"
          );
          if (socialContainer) {
            socialContainer.classList.add("animate");
          }
        }, 500);

        // Clean up overlay after slide out animation completes
        setTimeout(() => {
          slideOverlay.style.display = "none";
          slideOverlay.classList.remove("active", "slide-out");
        }, 1200); // Wait for slide out animation
      }, 2000); // 2 seconds loading screen
    });
  }
});

// ===== PROFILE IMAGE HOVER EFFECT =====
document.addEventListener("DOMContentLoaded", function () {
  const profileImages = document.querySelectorAll(
    ".profile-image, .about-profile-image"
  );

  profileImages.forEach((image) => {
    image.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05)";
    });

    image.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
    });
  });
});

// ===== DOWNLOAD CV BUTTON FUNCTIONALITY =====
document.addEventListener("DOMContentLoaded", function () {
  const downloadBtn = document.querySelector(".download-cv-btn");

  if (downloadBtn) {
    downloadBtn.addEventListener("click", function (e) {
      e.preventDefault();

      // Add click animation
      this.style.transform = "translateY(-2px) scale(0.95)";

      setTimeout(() => {
        this.style.transform = "translateY(-2px) scale(1)";
      }, 150);

      // CV download functionality
      console.log("Download CV clicked");

      // Create download link for CV
      const cvPath = "cv/Fironi-Habibzade-CV.pdf"; // Path to your CV file

      // Create a temporary link element
      const link = document.createElement("a");
      link.href = cvPath;
      link.download = "Fironi-Habibzade-CV.pdf"; // Name for downloaded file

      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Alternative method if the above doesn't work:
      // window.open(cvPath, '_blank');
    });
  }
});

// ===== NAVIGATION LINKS FUNCTIONALITY =====
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const heroSection = document.querySelector(".hero-section");
  const homePage = document.querySelector(".home-page");
  const aboutPage = document.querySelector(".about-page");
  const workPage = document.querySelector(".work-page");
  const contactPage = document.querySelector(".contact-page");
  const slideOverlay = document.getElementById("slide-overlay");

  if (navLinks.length > 0 && slideOverlay) {
    navLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();

        // Remove active class from all links
        document
          .querySelectorAll(".nav-link")
          .forEach((l) => l.classList.remove("active"));

        const targetPage = this.getAttribute("data-page");
        console.log(`Navigation clicked: ${targetPage}`);

        // Handle navigation with slide transition
        if (targetPage) {
          navigateToPage(targetPage);
        }
      });
    });

    // Unified navigation function
    function navigateToPage(targetPage) {
      // Show slide overlay
      slideOverlay.style.display = "flex";
      slideOverlay.offsetHeight;
      slideOverlay.classList.add("active");

      setTimeout(() => {
        slideOverlay.classList.add("slide-out");

        // Hide all pages
        heroSection.style.display = "none";
        homePage.classList.remove("active");
        aboutPage.classList.remove("active");
        if (workPage) workPage.classList.remove("active");
        if (contactPage) contactPage.style.display = "none";

        // Show target page
        switch (targetPage) {
          case "home":
            homePage.classList.add("active");
            updateActiveNavLink(homePage, "home");
            break;
          case "about":
            aboutPage.classList.add("active");
            updateActiveNavLink(aboutPage, "about");
            break;
          case "work":
            if (workPage) {
              workPage.classList.add("active");
              updateActiveNavLink(workPage, "work");
            }
            break;
          case "contact":
            if (contactPage) {
              contactPage.style.display = "flex";
              contactPage.style.position = "fixed";
              contactPage.style.top = "0";
              contactPage.style.left = "0";
              contactPage.style.width = "100%";
              contactPage.style.height = "100vh";
              contactPage.style.zIndex = "1000";
              contactPage.style.background = "#000000";

              // Show default contact view
              const defaultView = contactPage.querySelector(
                ".contact-default-view"
              );
              const formView = contactPage.querySelector(".contact-form-view");
              const thankYouView = contactPage.querySelector(
                ".contact-thank-you-view"
              );

              if (defaultView) defaultView.style.display = "flex";
              if (formView) formView.style.display = "none";
              if (thankYouView) thankYouView.style.display = "none";

              updateActiveNavLink(contactPage, "contact");
              // Contact page should not scroll
              document.body.style.overflow = "hidden";
            }
            break;
        }

        // Set overflow to auto for other pages (not contact)
        if (targetPage !== "contact") {
          document.body.style.overflow = "auto";
        }

        // Re-initialize dropdowns for the new page
        setTimeout(() => {
          reinitializeDropdowns();
        }, 200);

        // Restore saved language preference after page switch
        setTimeout(() => {
          loadSavedLanguage();
          // Re-initialize language dropdowns for the new page
          initializeLanguageDropdowns();
          // Update translations for the new page
          if (typeof updatePageContent === "function") {
            updatePageContent();
          }
        }, 100);

        // Trigger social icons animation for home page
        if (targetPage === "home") {
          setTimeout(() => {
            const socialContainer = document.querySelector(
              ".social-icons-container"
            );
            if (socialContainer) {
              socialContainer.classList.add("animate");
            }
          }, 500);
        }

        setTimeout(() => {
          slideOverlay.style.display = "none";
          slideOverlay.classList.remove("active", "slide-out");
        }, 1200);
      }, 1000);
    }

    // Helper function to update active nav link
    function updateActiveNavLink(page, targetPage) {
      setTimeout(() => {
        const pageNavLinks = page.querySelectorAll(".nav-link");
        pageNavLinks.forEach((l) => l.classList.remove("active"));
        const activeNavLink = Array.from(pageNavLinks).find(
          (l) => l.getAttribute("data-page") === targetPage
        );
        if (activeNavLink) activeNavLink.classList.add("active");
      }, 100);
    }
  }
});

// ===== PERFORMANCE OPTIMIZATION =====
// Debounce function for scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Optimized scroll handler
const handleScroll = debounce(() => {
  // Add any scroll-based functionality here
  const scrollY = window.scrollY;

  // Example: Add parallax effect to background
  const hero = document.querySelector(".hero-section");
  if (hero) {
    hero.style.transform = `translateY(${scrollY * 0.5}px)`;
  }
}, 16); // ~60fps

// Add scroll listener
window.addEventListener("scroll", handleScroll, { passive: true });


// ===== VIEW WORK BUTTON FUNCTIONALITY =====
document.addEventListener("DOMContentLoaded", function () {
  const viewWorkBtns = document.querySelectorAll(".view-work-btn");

  viewWorkBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();

      // Add click animation
      this.style.transform = "translateY(-2px) scale(0.95)";

      setTimeout(() => {
        this.style.transform = "translateY(-2px) scale(1)";
      }, 150);

      // Here you can add actual project navigation functionality
      console.log("View work clicked");

      // Example: You can add project detail page navigation here
      // window.open('project-details.html', '_blank');
    });
  });
});

// Show Contact page function with loading
function showContactPage() {
  const slideOverlay = document.getElementById("slide-overlay");
  const heroSection = document.querySelector(".hero-section");
  const homePage = document.querySelector(".home-page");
  const aboutPage = document.querySelector(".about-page");
  const workPage = document.querySelector(".work-page");
  const contactPage = document.querySelector(".contact-page");

  if (slideOverlay) {
    // Show loading overlay
    slideOverlay.style.display = "flex";
    slideOverlay.offsetHeight;
    slideOverlay.classList.add("active");

    // After 2 seconds, hide loading and show contact page
    setTimeout(() => {
      slideOverlay.classList.add("slide-out");

      // Hide all pages and show contact page
      heroSection.style.display = "none";
      homePage.classList.remove("active");
      aboutPage.classList.remove("active");
      if (workPage) workPage.classList.remove("active");
      contactPage.style.display = "flex";

      // Show default contact view
      const defaultView = contactPage.querySelector(".contact-default-view");
      const formView = contactPage.querySelector(".contact-form-view");
      const thankYouView = contactPage.querySelector(".contact-thank-you-view");

      if (defaultView) defaultView.style.display = "flex";
      if (formView) formView.style.display = "none";
      if (thankYouView) thankYouView.style.display = "none";

      // Prevent scrolling on contact page
      document.body.style.overflow = "hidden";

      // Update active nav link
      setTimeout(() => {
        const contactNavLinks = contactPage.querySelectorAll(".nav-link");
        contactNavLinks.forEach((l) => l.classList.remove("active"));
        const contactNavContact = Array.from(contactNavLinks).find(
          (l) => l.getAttribute("data-page") === "contact"
        );
        if (contactNavContact) contactNavContact.classList.add("active");

        // Restore saved language preference
        loadSavedLanguage();
        // Re-initialize language dropdowns for the new page
        initializeLanguageDropdowns();
        // Update translations for the new page
        if (typeof updatePageContent === "function") {
          updatePageContent();
        }
      }, 100);

      // Hide loading overlay after animation
      setTimeout(() => {
        slideOverlay.style.display = "none";
        slideOverlay.classList.remove("active", "slide-out");
      }, 1000);
    }, 2000);
  } else {
    // Fallback - direct switch
    heroSection.style.display = "none";
    homePage.classList.remove("active");
    aboutPage.classList.remove("active");
    if (workPage) workPage.classList.remove("active");
    contactPage.style.display = "flex";

    // Prevent scrolling on contact page
    document.body.style.overflow = "hidden";
  }
}

// Navigation functions with smart transition
function showHomePage() {
  const slideOverlay = document.getElementById("slide-overlay");
  const heroSection = document.querySelector(".hero-section");
  const homePage = document.querySelector(".home-page");
  const aboutPage = document.querySelector(".about-page");
  const workPage = document.querySelector(".work-page");
  const contactPage = document.querySelector(".contact-page");

  if (slideOverlay) {
    slideOverlay.style.display = "flex";
    slideOverlay.offsetHeight;
    slideOverlay.classList.add("active");

    setTimeout(() => {
      slideOverlay.classList.add("slide-out");

      // Hide all pages and show home page
      heroSection.style.display = "none";
      aboutPage.classList.remove("active");
      if (workPage) workPage.classList.remove("active");
      contactPage.style.display = "none";
      homePage.classList.add("active");

      // Enable scrolling for home page
      document.body.style.overflow = "auto";

      // Update active nav link
      setTimeout(() => {
        const homeNavLinks = homePage.querySelectorAll(".nav-link");
        homeNavLinks.forEach((l) => l.classList.remove("active"));
        const homeNavHome = Array.from(homeNavLinks).find(
          (l) => l.getAttribute("data-page") === "home"
        );
        if (homeNavHome) homeNavHome.classList.add("active");

        // Restore saved language preference
        loadSavedLanguage();
        // Re-initialize language dropdowns for the new page
        initializeLanguageDropdowns();
      }, 100);

      // Trigger social icons animation
      setTimeout(() => {
        const socialContainer = document.querySelector(
          ".social-icons-container"
        );
        if (socialContainer) {
          socialContainer.classList.add("animate");
        }
      }, 500);

      setTimeout(() => {
        slideOverlay.style.display = "none";
        slideOverlay.classList.remove("active", "slide-out");
      }, 1000);
    }, 1000);
  }
}

function showAboutPage() {
  const slideOverlay = document.getElementById("slide-overlay");
  const heroSection = document.querySelector(".hero-section");
  const homePage = document.querySelector(".home-page");
  const aboutPage = document.querySelector(".about-page");
  const workPage = document.querySelector(".work-page");
  const contactPage = document.querySelector(".contact-page");

  if (slideOverlay) {
    slideOverlay.style.display = "flex";
    slideOverlay.offsetHeight;
    slideOverlay.classList.add("active");

    setTimeout(() => {
      slideOverlay.classList.add("slide-out");

      // Hide all pages and show about page
      heroSection.style.display = "none";
      homePage.classList.remove("active");
      if (workPage) workPage.classList.remove("active");
      contactPage.style.display = "none";
      aboutPage.classList.add("active");

      // Enable scrolling for about page
      document.body.style.overflow = "auto";

      // Update active nav link
      setTimeout(() => {
        const aboutNavLinks = aboutPage.querySelectorAll(".nav-link");
        aboutNavLinks.forEach((l) => l.classList.remove("active"));
        const aboutNavAbout = Array.from(aboutNavLinks).find(
          (l) => l.getAttribute("data-page") === "about"
        );
        if (aboutNavAbout) aboutNavAbout.classList.add("active");

        // Restore saved language preference
        loadSavedLanguage();
        // Re-initialize language dropdowns for the new page
        initializeLanguageDropdowns();
        // Update translations for the new page
        if (typeof updatePageContent === "function") {
          updatePageContent();
        }
      }, 100);

      setTimeout(() => {
        slideOverlay.style.display = "none";
        slideOverlay.classList.remove("active", "slide-out");
      }, 1000);
    }, 1000);
  }
}

function showWorkPage() {
  const slideOverlay = document.getElementById("slide-overlay");
  const heroSection = document.querySelector(".hero-section");
  const homePage = document.querySelector(".home-page");
  const aboutPage = document.querySelector(".about-page");
  const workPage = document.querySelector(".work-page");
  const contactPage = document.querySelector(".contact-page");

  if (slideOverlay && workPage) {
    slideOverlay.style.display = "flex";
    slideOverlay.offsetHeight;
    slideOverlay.classList.add("active");

    setTimeout(() => {
      slideOverlay.classList.add("slide-out");

      // Hide all pages and show work page
      heroSection.style.display = "none";
      homePage.classList.remove("active");
      aboutPage.classList.remove("active");
      contactPage.style.display = "none";
      workPage.classList.add("active");

      // Enable scrolling for work page
      document.body.style.overflow = "auto";

      // Update active nav link
      setTimeout(() => {
        const workNavLinks = workPage.querySelectorAll(".nav-link");
        workNavLinks.forEach((l) => l.classList.remove("active"));
        const workNavWork = Array.from(workNavLinks).find(
          (l) => l.getAttribute("data-page") === "work"
        );
        if (workNavWork) workNavWork.classList.add("active");

        // Restore saved language preference
        loadSavedLanguage();
        // Re-initialize language dropdowns for the new page
        initializeLanguageDropdowns();
        // Update translations for the new page
        if (typeof updatePageContent === "function") {
          updatePageContent();
        }
      }, 100);

      setTimeout(() => {
        slideOverlay.style.display = "none";
        slideOverlay.classList.remove("active", "slide-out");
      }, 1000);
    }, 1000);
  }
}

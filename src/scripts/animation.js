// Main Animation Script File

import { onMounted } from "vue";

// Content Observers
// AutoDelete Observer (Removes itself from element)
const switchObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      return;
    }
    entry.target.classList.remove("animate");
  });
});

// Default Observer (Stays on element)
const defaultObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    }
  });
});

// Get Elements and Add to Observer
function toggleAnimationObservers() {
  // Animate_On_Load
  // Preload_Animations_Targets
  const preload = document.querySelectorAll(".preload");
  const preload_l = document.querySelectorAll(".preload-l");
  const preload_r = document.querySelectorAll(".preload-r");
  const preload_rs = document.querySelectorAll(".preload-rs");

  // Loop over the elements and add to Observer
  // switchObserver.observe(element)
  preload.forEach((element) =>
    element.classList.contains("s-anim")
      ? defaultObserver.observe(element)
      : defaultObserver.observe(element)
  );
  preload_l.forEach((element) =>
    element.classList.contains("s-anim")
      ? defaultObserver.observe(element)
      : defaultObserver.observe(element)
  );
  preload_r.forEach((element) =>
    element.classList.contains("s-anim")
      ? defaultObserver.observe(element)
      : defaultObserver.observe(element)
  );
  preload_rs.forEach((element) =>
    element.classList.contains("s-anim")
      ? defaultObserver.observe(element)
      : defaultObserver.observe(element)
  );
}

// Wait App Loading
const isAppLoaded = async (selector) => {
  while (document.querySelector(selector) === null) {
    //iterate...
    await new Promise((resolve) => requestAnimationFrame(resolve));
  }
  return document.querySelector(selector);
};

isAppLoaded("#App").then((selector) => {
  toggleAnimationObservers();
});

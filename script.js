/* ========================================
   Navigation — highlight the current section
   ======================================== */

const navigationLinks = [...document.querySelectorAll('nav a[href^="#"]')];
const navigationSections = navigationLinks.map((link) =>
  document.getElementById(link.hash.slice(1)),
);

function updateCurrentSection() {
  // Follow section headings as they reach the upper part of the viewport.
  const sectionBoundary = Math.min(window.innerHeight * 0.35, 240);
  let currentSection = navigationSections[0];

  for (const section of navigationSections) {
    if (section.getBoundingClientRect().top <= sectionBoundary) {
      currentSection = section;
    }
  }

  for (const link of navigationLinks) {
    if (link.hash === `#${currentSection.id}`) {
      link.setAttribute('aria-current', 'location');
    } else {
      link.removeAttribute('aria-current');
    }
  }
}

let updateScheduled = false;

function scheduleSectionUpdate() {
  if (updateScheduled) return;

  updateScheduled = true;
  window.requestAnimationFrame(() => {
    updateCurrentSection();
    updateScheduled = false;
  });
}

window.addEventListener('scroll', scheduleSectionUpdate, { passive: true });
window.addEventListener('resize', scheduleSectionUpdate);
window.addEventListener('hashchange', scheduleSectionUpdate);
window.addEventListener('pageshow', scheduleSectionUpdate);

updateCurrentSection();

/* ========================================
   Navigation — highlight the current section
   ======================================== */

const navigationLinks = [...document.querySelectorAll('nav a[href^="#"]')];
const navigationSections = navigationLinks.map((link) =>
  document.getElementById(link.hash.slice(1)),
);

let anchorTarget = document.getElementById(window.location.hash.slice(1));
let anchorReached = false;

function trackAnchor() {
  anchorTarget = document.getElementById(window.location.hash.slice(1));
  anchorReached = false;
  scheduleSectionUpdate();
}

function updateCurrentSection() {
  // Follow section headings as they reach the upper part of the viewport.
  const sectionBoundary = Math.min(window.innerHeight * 0.35, 240);
  const scroller = document.scrollingElement;
  const maxScroll = scroller.scrollHeight - scroller.clientHeight;
  const scrollTop = scroller.scrollTop;
  let currentSection = navigationSections[0];

  for (const section of navigationSections) {
    if (section.getBoundingClientRect().top <= sectionBoundary) {
      currentSection = section;
    }
  }

  if (maxScroll > 1 && scrollTop >= maxScroll - 1) {
    currentSection = navigationSections.at(-1);
  }

  if (anchorTarget) {
    const targetSection = navigationSections.find((section) =>
      section.contains(anchorTarget),
    );
    const scrollMargin =
      parseFloat(getComputedStyle(anchorTarget).scrollMarginTop) || 0;
    const targetTop = scrollTop + anchorTarget.getBoundingClientRect().top - scrollMargin;
    const destination = Math.min(maxScroll, Math.max(0, targetTop));

    // Two different anchors can land at the same scroll position near the end.
    if (targetSection && Math.abs(scrollTop - destination) <= 1) {
      currentSection = targetSection;
      anchorReached = true;
    } else if (anchorReached) {
      anchorTarget = null;
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
window.addEventListener('hashchange', trackAnchor);
window.addEventListener('pageshow', scheduleSectionUpdate);
document.addEventListener('click', (event) => {
  const link = event.target.closest('a[href^="#"]');
  if (link && link.hash === window.location.hash) trackAnchor();
});

updateCurrentSection();

/* ========================================
   Projects — load real GitHub star counts
   ======================================== */

const starCacheLifetime = 15 * 60 * 1000;

function readStarCache(repository) {
  try {
    const cached = JSON.parse(
      sessionStorage.getItem(`github-stars:${repository}`),
    );

    if (
      cached &&
      Number.isSafeInteger(cached.count) &&
      cached.count >= 0 &&
      Number.isFinite(cached.savedAt) &&
      Date.now() >= cached.savedAt &&
      Date.now() - cached.savedAt < starCacheLifetime
    ) {
      return cached.count;
    }
  } catch {
    // Storage can be unavailable; fetching the count still works without it.
  }

  return null;
}

function cacheStarCount(repository, count) {
  try {
    sessionStorage.setItem(
      `github-stars:${repository}`,
      JSON.stringify({ count, savedAt: Date.now() }),
    );
  } catch {
    // Caching is optional and must not prevent displaying the count.
  }
}

async function loadStarCount(link) {
  const repository = link.dataset.githubRepo;
  const countElement = link.querySelector('[data-star-count]');

  try {
    let count = readStarCache(repository);

    if (count === null) {
      const response = await fetch(
        `https://api.github.com/repos/${repository}`,
        {
          headers: { Accept: 'application/vnd.github+json' },
          signal: AbortSignal.timeout(8000),
        },
      );

      if (!response.ok) throw new Error('GitHub request failed');

      const data = await response.json();
      count = data.stargazers_count;

      if (!Number.isSafeInteger(count) || count < 0) {
        throw new Error('Invalid GitHub star count');
      }

      cacheStarCount(repository, count);
    }

    countElement.textContent = String(count);
    link.setAttribute(
      'aria-label',
      `${count} GitHub stars for ${repository}; view stargazers`,
    );
  } catch {
    countElement.textContent = '—';
    link.setAttribute(
      'aria-label',
      `View GitHub stars for ${repository}; count unavailable`,
    );
  }
}

document.querySelectorAll('[data-github-repo]').forEach(loadStarCount);

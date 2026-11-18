# Danny Evers — Personal Portfolio

A personal portfolio built with HTML, CSS, and a small JavaScript navigation script to introduce myself, share my background as a BIM Engineer, and showcase my web development projects.

## Website

- [dannyevers.xyz](https://dannyevers.xyz/)
- [Netlify address](https://dannye-portfolio.netlify.app/)

## Features

- About, Experience, and Projects sections
- Responsive layouts for mobile, tablet, and desktop
- Sticky section headings on smaller screens and a sticky introduction on desktop
- Internal navigation with smooth scrolling
- Active section indicators in the desktop navigation that follow scrolling, with `aria-current` for assistive technology
- Project preview images and technology tags
- Oak & Steel Barbers booking demo first, followed by the React/Express and vanilla JavaScript Task Managers, the portfolio, and Google homepage
- The barber demo includes the supplied screenshot, live demo, source link, technology tags, and a live GitHub star counter
- The React/Express card links to both the frontend source and the separate Express API repository
- Independent study details covering React, Express, PostgreSQL, SQL migrations, availability, overlap prevention, testing, Docker, and deployment with Render and Neon
- Links to my résumé, GitHub, and LinkedIn
- Custom favicon and a back-to-top button
- Accessible names for icon links and screen reader text for the project star count
- A keyboard skip link, visible link focus styles, and section headings available to screen readers on desktop
- Semibold links in paragraphs, visible keyboard focus outlines, readable date text, and larger social/back-to-top link targets
- Explicit project image dimensions and lazy loading for lower project thumbnails
- Canonical URL, social sharing metadata, and structured public profile information
- A robots.txt file and XML sitemap for search engine discovery
- Only the Inter font weights used by the stylesheet are requested

GitHub star links open each project's stargazers page. The public GitHub REST API supplies the real counts, including `0` for projects with no stars. Results are cached in sessionStorage for 15 minutes. If JavaScript is disabled or a count cannot be loaded, the star link remains available and displays a dash rather than an invented count. Requests time out after eight seconds. No API token is used; GitHub's unauthenticated rate limits apply.

## Built With

- **HTML5** — page structure and content
- **CSS3** — styling, custom properties, and hover effects
- **JavaScript** — update the current section and fetch GitHub star counts
- **Flexbox and CSS Grid** — layout and alignment
- **Media queries** — responsive styling at 640px and 1024px
- **Google Fonts** — Inter typography
- **Font Awesome** — icons
- **Netlify** — hosting

No framework or build step is required. The page content and links work without JavaScript; the script adds the current-section indicator and GitHub star counts. Smooth scrolling and the indicator animation respect reduced-motion preferences.

## Accessibility Review

See [audit-report.txt](audit-report.txt) for the local accessibility and technical review, fixes, contrast calculations, and remaining manual checks. This review is not a WCAG conformance certification. Browser layout, screen reader behavior, the deployed website, and full PDF accessibility still require separate verification.

## Search Engine Discovery

The canonical address is `https://dannyevers.xyz/`. The page includes a descriptive title, meta description, Open Graph sharing information, and JSON-LD describing the same public profile shown on the page. The sharing image uses the existing portfolio screenshot.

`robots.txt` allows crawling and points to `sitemap.xml`, which lists the homepage. The About, Experience, and Projects sections are anchors within that page, so they do not need separate sitemap entries. Submit `https://dannyevers.xyz/sitemap.xml` in Google Search Console after deployment, then inspect the homepage and request indexing. These settings help search engines discover and understand the site; they do not guarantee indexing, rankings, or a rich result.

## Run Locally

1. Download or clone this repository.
2. Open the project folder in Visual Studio Code.
3. Use the Live Server extension to open `index.html`.

Serve the project folder as the website root so the `/public/` paths work correctly. An internet connection is required to load Google Fonts and Font Awesome.

## Project Structure

```text
.
├── index.html
├── script.js
├── styles.css
├── robots.txt
├── sitemap.xml
├── public/
│   ├── barber-booking.png
│   ├── danny-resume.pdf
│   ├── favicon-32x32.png
│   ├── html-css-google-homepage.png
│   ├── html-css-portfolio.png
│   ├── task-manager-react.png
│   └── task-manager.png
├── .gitignore
└── README.md
```

## What I Practiced

- Building responsive layouts with Flexbox and CSS Grid
- Using sticky positioning and internal section links
- Styling reusable cards, links, and tags
- Organizing CSS into clearly labeled sections
- Adding accessible labels and visually hidden text
- Preparing a static website for deployment

## Author

[Danny Evers](https://github.com/dannyevers83) — Junior Full-Stack Developer

## Acknowledgments

Built as a learning project while following a tutorial, with layout and design inspiration from Brittany Chiang's portfolio. The content and project examples describe my own background and work.

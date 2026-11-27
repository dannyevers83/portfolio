# Danny Evers — Python AI Engineering Portfolio

A portfolio documenting my transition from BIM engineering to applied AI. I’m building Python and data analysis skills through hands-on projects while working as a BIM engineer at Klictet.

## Featured Project

**Oisterwijk Weather Analysis.** A Python learning project that retrieves daily high and low temperatures from Open-Meteo, converts the JSON response into a pandas DataFrame, and exports a CSV and a Matplotlib chart.

[View the screenshot](public/oisterwijk-weather.png) · [View the source on GitHub](https://github.com/dannyevers83/oisterwijk-weather-analysis)

## Website

- [dannyevers.xyz](https://dannyevers.xyz/)
- [Netlify address](https://dannye-portfolio.netlify.app/)

## Features

- About, Experience, and Projects sections
- Responsive layouts for mobile, tablet, and desktop
- Sticky section headings on smaller screens and a sticky introduction on desktop
- Internal navigation with smooth scrolling
- Active section indicators in the desktop navigation that follow scrolling, with `aria-current` for assistive technology
- Links to GitHub and LinkedIn
- Custom favicon and a back-to-top button
- Accessible names for icon links and alternative text for the weather chart
- A keyboard skip link, visible link focus styles, and section headings available to screen readers on desktop
- Semibold links in paragraphs, visible keyboard focus outlines, readable date text, and larger social/back-to-top link targets
- Canonical URL, social sharing metadata, and structured public profile information
- A robots.txt file and XML sitemap for search engine discovery
- Only the Inter font weights used by the stylesheet are requested

## Built With

- **HTML5** — page structure and content
- **CSS3** — styling, custom properties, and hover effects
- **JavaScript** — update the current section indicator
- **Flexbox and CSS Grid** — layout and alignment
- **Media queries** — responsive styling at 640px and 1024px
- **Google Fonts** — Inter typography
- **Font Awesome** — icons
- **Netlify** — hosting

No framework or build step is required. The page content and links work without JavaScript. Smooth scrolling and the current-section indicator animation respect reduced-motion preferences.

## Accessibility Review

See [audit-report.txt](audit-report.txt) for the accessibility review of an earlier version of the site.

## Search Engine Discovery

The canonical address is `https://dannyevers.xyz/`. The page includes a descriptive title, meta description, Open Graph sharing information, and JSON-LD describing the same public profile shown on the page. The sharing image uses the weather chart.

`robots.txt` allows crawling and points to `sitemap.xml`, which lists the homepage. The About, Experience, and Projects sections are anchors within that page, so they do not need separate sitemap entries. Submit `https://dannyevers.xyz/sitemap.xml` in Google Search Console after deployment, then inspect the homepage and request indexing. These settings help search engines discover and understand the site; they do not guarantee indexing, rankings, or a rich result.

## Run Locally

1. Download or clone this repository.
2. Open the project folder in Visual Studio Code.
3. Use the Live Server extension to open `index.html`.

Serve the project folder as the website root so the `/public/` paths work correctly. An internet connection is required to load Google Fonts and Font Awesome.

## Main Files

```text
.
├── index.html
├── script.js
├── styles.css
├── robots.txt
├── sitemap.xml
├── public/
│   ├── favicon-32x32.png
│   └── oisterwijk-weather.png
├── .gitignore
└── README.md
```

## Author

[Danny Evers](https://github.com/dannyevers83) — BIM engineer and aspiring Python AI engineer

## Acknowledgments

Built as a learning project while following a tutorial, with layout and design inspiration from Brittany Chiang's portfolio. The content and project examples describe my own background and work.

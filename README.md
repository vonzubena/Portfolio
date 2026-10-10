# Andrew Von Zuben - Personal Portfolio

**INFR 3120 - Web and Script Programming | Ontario Tech University**

This project is a four page personal portfolio with a Cyberpunk inspired theme.
It is built with HTML5 and CSS3 primarily with a short javascript file.
It uses fuild design and media queries.
The layout uses floats with percentage widths as demonstrated in the course material.

- **Live Site:** https://vonzubena.github.io/Portfolio/
- **Repository** https://github.com/vonzubena/Portfolio

## Pages

| Home | `index.html` | Hero banner with my name and tagline, plus three cards linking to the other pages |
| About Me | `about-me.html` | My photo with a caption, a Quick Facts box, skills chips, and an introduction video with controls, a poster image and a JavaScript play/pause button |
| Projects | `projects.html` | Six projects, each with a heading and a 2–3 line description |
| Contact | `contact.html` | A contact form with validation, plus a side box with other ways to reach me |

Every page shares the same header (name and navigation, with the current page highlighted).
Every page also has the same footer (email link and copyright).

### Semantic tags used
`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<figure>`, `<figcaption>`, `<footer>`, `<address>`

## Folder Structure

```
Portfolio/
├── index.html
├── about-me.html
├── projects.html
├── contact.html
├── README.md
├── cssfiles/
│    ├── base.css      → shared styles for every screen size
│    ├── mobile.css    → 600px and below
│    ├── tablet.css    → 601px – 1024px
│    └── laptop.css    → 1025px and above
├── js/
│    └── video.js      → play/pause button (Week 2 lecture code)
├── images/
│    ├── profile.jpeg
│    ├── video-poster.jpg
│    └── intro.mp4
```

## Fluid and Responsive Design

`.wrapper` is 90% wide with a max-width of 1200px, this makes it so that content stretches and shrinks with the window.
Columns use percentage widths:
    └──31.33% for three columns
    └──48% for two columns
    └──62% / 34% for the contact form and info box
`<img>` and `<video>` use `width: 100%` and `max-width` respectively so that the content doesnt overflow the containers

### Viewport sizes (media queries)

html:
<link rel="stylesheet" href="cssfiles/base.css">
<link rel="stylesheet" href="cssfiles/mobile.css" media="screen and (max-width: 600px)">
<link rel="stylesheet" href="cssfiles/tablet.css" media="screen and (min-width: 601px) and (max-width: 1024px)">
<link rel="stylesheet" href="cssfiles/laptop.css" media="screen and (min-width: 1025px)">


| Device | Width | Layout |
|--------|-------|--------|
| Mobile | ≤ 600px | One column; the menu becomes large 2×2 tap buttons; the photo is centred; form buttons are full width |
| Tablet | 601 – 1024px | Centred header; cards and projects 2 across; contact form and info box stacked |
| Laptop | ≥ 1025px | Name on the left and menu on the right; cards and projects 3 across; form and info box side by side |

The reason i changed the sizes from the lecture's exampls is due to the changes of modern phones. Modern phones tend to be wider and larger phones
when held sideways can go in the range of ~600px. Most modern tablets like Ipads are larger as well. After some research I found that having 
breakpoints at 600px and 1024px are closer to what people use today.
_________________________________________

## Gradients

| Type | Where | Code |
|------|-------|------|
| **Linear (top to bottom)** | Site header | `linear-gradient(to bottom, #1C1C2B 0%, #0A0A0F 100%)` |
| **Angled −45deg** | Hero banner, buttons, active nav tab, play/pause and form buttons; cuts the bottom-right corner | `linear-gradient(-45deg, transparent 12px, #FCEE0A 12px)` |
| **Angled 225deg** | Home cards, Quick Facts, project boxes, contact form and info box; cuts the top-right corner | `linear-gradient(225deg, transparent 20px, #12121C 20px)` |
| **Angled 135deg** | Profile photo frame; cuts the top-left corner | `linear-gradient(135deg, transparent 14px, #00F0FF 14px)` |
| **Repeating linear** | Footer hazard stripes | `repeating-linear-gradient(-45deg, #FCEE0A 0px, #FCEE0A 12px, #0A0A0F 12px, #0A0A0F 24px)` |

After looking into some websites that fit the aesthetics I was looking for, I found a design where some elements had a cut corner. After looking around I found a method where the gradient starts as `transparent` for the first few pixels and then changes sharply to the solid colour at the same stop. What this does is it turns one corner into what resembles a diagonal cut.
I had a solid `background` color declared first for older browsers.

## Colour Scheme

Created in Adobe Color using a custom colour scheme (screenshot below).
I chose a high-contrast neon palette to match the Cyberpunk 2077 style:
bright yellow, cyan and red as accent colours on a near-black background.
Yellow is the main colour (headings, buttons, borders), cyan is for links and highlights,
and red is used sparingly for warnings, hovers and the "glitch" effect.

- **Adobe Color link:** ([Screenshot](docs/adobe-color.jpeg))

| Colour | Hex | Used for |
|--------|-----|----------|
| Yellow | `#FCEE0A` | Headings, hero banner, buttons, active tab, borders |
| Cyan | `#00F0FF` | Links, photo frame, video glow, form borders |
| Red | `#FF003C` | Page-title underline, project tags, button hover, glitch shadow |
| Black | `#0A0A0F` | Page background |
| Dark grey | `#12121C` | Card and panel backgrounds |

## Form Validation (Contact Page)


## Form Validation (Contact page)

- `required` on Name, Email, Subject and Message
- `type="email"` makes the browser check the email format
- `type="tel"` brings up the number keypad on phones (I left the phone field as optional intentionally)
- `maxlength` limits the length of each field
- `<select>` has an empty first option, so a subject must be chosen
- Every `<label for>` matches its input's `id`
- The form uses `action="mailto:..."`, `method="post"` and `enctype="text/plain"`



## Testing

| Test | Tool | Result |
|------|------|--------|
| HTML validation | W3C Markup Validator | 0 errors on all 4 pages ([screenshot](docs/w3c-html.png)) |
| CSS validation | W3C CSS Validator | 0 errors in all 4 CSS files ([screenshot](docs/w3c-css.png)) |
| Link check | W3C Link Checker | No broken links; the mailto link is skipped by the checker, as expected ([screenshot](docs/link-check.png)) |
| Accessibility | WAVE | 0 errors; fixed "possible heading" and "redundant link" alerts by changing the site name to a `<div>` without a link ([screenshot](docs/wave.png)) |
| Spelling | VS Code spell check | No spelling errors


## Code Not Covered in the Course (10% Rule)
| Code | What it does | Where I got it | Marked with | Lines |
|------|------|------|--------|------:|
| `text-transform: uppercase;` | Shows text in capitals (headings, menu, buttons) | Google Search | `/* EXTRA */` | 3 |
| `letter-spacing: 1px;` | Adds space between heading letters | Google Search | `/* EXTRA */` | 1 |
| `font-weight: bold;` | Makes my name bold | Google Search | `/* EXTRA */` | 1 |
| `text-shadow: 2px 0px #FF003C, -2px 0px #00F0FF;` | Red and cyan "glitch" effect on my name and page titles | https://www.youtube.com/watch?v=GslwnN4agzo | `/* EXTRA */` | 2 |
| `repeating-linear-gradient(...)` | Draws the hazard stripes in the footer | Google Search | `/* EXTRA */` | 1 |
| `<meta name="description">` | Page summary shown by search engines (all 4 pages) | Google Search | `<!-- EXTRA -->` | 4 |
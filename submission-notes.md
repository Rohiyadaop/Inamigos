# InAmigos React Website Notes

## Files

- `index.html`
- `package.json`
- `vite.config.js`
- `src/main.jsx`
- `src/App.jsx`
- `src/styles.css`

## How to run

```bash
npm install
npm run dev
```

Open the local URL shown by Vite, usually `http://localhost:5173/`.

## How to build

```bash
npm run build
```

The production files will be generated in `dist/`.

## What changed

- Converted the original HTML/CSS awareness page into a React + Vite website.
- Added reusable React sections for header, hero, trust badges, about, programs, impact, stories, volunteer form, FAQ, contact, and footer.
- Added interactive program filters.
- Added a responsive mobile navigation menu.
- Added a front-end volunteer interest form with a confirmation message.
- Reworked the visual design into a fuller NGO website experience.

## Sources Used

- Official home page: https://inamigosfoundation.org.in/
- Official About page: https://inamigosfoundation.org.in/page/About-Us
- Official Contact page: https://inamigosfoundation.org.in/contact
- Public LinkedIn page: https://www.linkedin.com/company/inamigos-foundation

## Key facts used in the website

- InAmigos Foundation was founded on September 23, 2020.
- Founder and CEO: Mr. Govind Shukla.
- The NGO is presented as Section 8 registered, 80G and 12A certified, CSR-1 registered, NITI Aayog registered, and IAF ISO 9001:2015 certified.
- Official projects highlighted:
  - Project SEVA
  - Project Bachpanshala
  - Project JEEV
  - Project UDAAN
  - Project PRAKRITI
  - Project VIKAS
- Impact numbers used from official pages:
  - 50,000+ meals and clothing support under SEVA
  - 50+ stray animals fed daily under JEEV
  - 20,000+ saplings under PRAKRITI
  - 30,000+ interns trained under VIKAS
  - 200 volunteers, 28 states, 6 causes, 50,000 beneficiaries shown on the home page

## Submission note

- This is now a React project, so it should be run through Vite instead of opening `index.html` directly.
- If screenshots are needed, run `npm run dev`, open the Vite URL, and capture the browser view.

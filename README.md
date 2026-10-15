# Property Repair & Solutions website

This repository contains a static landing page scaffold for the Property Repair & Solutions website.

## Structure

- `index.html` – homepage markup
- `css/styles.css` – site styles
- `js/main.js` – quote form behavior
- `assets/` – images and logo placeholders

## Notes

- The quote form is connected to Formspree: `https://formspree.io/f/mwlpggrj`
- File uploads are enabled in the form via `enctype="multipart/form-data"`
- Formspree file uploads must be enabled and configured in the Formspree dashboard
- The current CSP allows the required form endpoint and Google Fonts

## Local preview

Open `index.html` in a browser, or serve the folder locally using a simple static server.

## Deployment checklist

- Confirm the Formspree form is live and receiving submissions
- Replace placeholder asset files in `assets/` with final design assets
- Verify contact details, review text, and service copy are approved
- Confirm the domain is wired to the hosting provider and HTTPS is enabled

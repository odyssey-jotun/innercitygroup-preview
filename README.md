# The Inner City Group

A one-page site for The Inner City Group, a Latter-day Saint faith community in
inner-city Little Rock, Arkansas.

Static HTML, CSS and vanilla JS. No build step. Open `index.html` or serve the
folder with anything (`python3 -m http.server`).

## Where the copy came from

All body copy is taken from the "The Inner City Group" Google Doc, **Wayne's
Draft** (revised May 2026). Wording was not rewritten. The only change was
punctuation: em dashes were replaced with commas, colons or periods to match
house style. Nothing was added, invented or embellished.

## Before this goes live

1. **Connect the forms.** `main.js` has an empty `FORM_ENDPOINT`. Until it is
   set, the form deliberately refuses to show a success message and tells the
   visitor it is not connected. This is intentional: someone may be sending a
   prayer request or asking for a ride, and a fake "we got it" would be worse
   than an honest "not yet."
   Set `FORM_ENDPOINT` to a Formspree, Google Forms, Netlify or Basin URL, and
   set `CONTACT_FALLBACK` to a phone number or email as a backup.
2. **Replace `https://example.com`** with the real domain in `index.html`
   (canonical, Open Graph, Twitter, JSON-LD), `robots.txt` and `sitemap.xml`.
3. **Add the meeting address and phone** to the `Church` JSON-LD block in
   `index.html`. They were left out rather than guessed. Adding them is the
   single biggest local-SEO win, since it makes the group eligible to show up
   in "church near me" style searches.
4. **Decide on service times.** The dinner (last Thursday, 6:30 PM) is on the
   page. Sunday service time is referenced but never stated.
5. **Add photos** if and when you have them. The design runs on type and color
   on purpose: the copy is about people seeing themselves reflected, and stock
   photos of strangers would work against that.

## Notes

- Not an official site of The Church of Jesus Christ of Latter-day Saints. The
  footer says so, and no Church logos or trademarks are used.
- All 13 text/background color pairs were checked and pass WCAG AA contrast.
- Checked for layout overflow and console errors at 1280px and 390px.

## Files

```
index.html     markup, head tags, JSON-LD
styles.css     all styles, mobile first
main.js        request-type switching and form handling
images/        favicon, apple touch icon, social share image
sitemap.xml    single URL, update the domain
robots.txt     update the sitemap URL
.nojekyll      so GitHub Pages serves the files as-is
```

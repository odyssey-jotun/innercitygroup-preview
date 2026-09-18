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
5. **Replace the stock photos with real ones.** Four Pexels photos are in place
   (see CREDITS.md). They are honest placeholders, but they are placeholders.
   This page argues that people should walk in and see themselves reflected.
   If a visitor later learns the faces were stock, that argument is the exact
   thing that breaks. Real photos of the group matter more here than on a
   typical site.
6. **Decide on artwork of Jesus Christ.** Nothing is on the page yet, on
   purpose. See "Artwork of Jesus Christ" below.

## Artwork of Jesus Christ

Requested, not shipped, because the three constraints do not currently
intersect: Latter-day Saint in style, openly licensed, and not a European
looking Christ.

- Official Church artwork (Del Parson, the Christus, the newer commissioned
  pieces showing a Middle Eastern Christ) is copyright Intellectual Reserve,
  Inc. The Terms of Use allow posting Gospel Media items to another website
  "for your own personal, noncommercial use." A public outreach site for a
  congregation is not clearly personal use, and the same terms say other
  materials "may not be posted from this site to another website or computer
  network without our prior written permission." Publishing that art here
  without asking would be a coin flip on someone else's copyright.
- Genuinely open alternatives do exist and are clearly not European: Ethiopian
  Orthodox, Coptic and Byzantine icons of Christ, many of them public domain
  on Wikimedia Commons. They are stylistically iconographic, which may read as
  foreign next to Latter-day Saint visual culture.

Three ways forward, in the order I would try them:

1. Email permissions@ChurchofJesusChrist.org, or ask the stake, and use
   official Church art once you have an answer in writing.
2. Use a public domain non-European icon and accept the change in visual register.
3. Leave it out. Latter-day Saint meetinghouses are visually sparse by
   design, so no artwork is a defensible choice rather than a gap.

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

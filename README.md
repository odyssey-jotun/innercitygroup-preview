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
6. **Confirm the artwork of Jesus Christ** is what you want. See "Artwork of
   Jesus Christ" below.

## Artwork of Jesus Christ

**Christ Pantocrator**, Saint Catherine's Monastery, Sinai, 6th century, in the
closing section. Public domain by age. Full reasoning in CREDITS.md.

Why this one: it is not Anglo (olive skin, dark hair and eyes, Semitic
features, and it predates the blonde European Jesus by about a thousand
years), it is public domain so no permission is pending with Intellectual
Reserve, and it shows a living Christ blessing and holding the gospels rather
than a crucifixion, which matters because Latter-day Saint practice does not
use the cross.

It reads Mediterranean rather than Black. If you want something more
distinctly African, *Christ in Glory* from the Ethiopic Gospels (British
Library Or. MS 481) is also public domain, but it is a stylised manuscript
illumination and the best available scan is only 630x613.

If you would rather use official Church artwork, that is still a live option,
but get written permission from permissions@ChurchofJesusChrist.org first. The
Terms of Use do not clearly cover posting it to a public congregation site.

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

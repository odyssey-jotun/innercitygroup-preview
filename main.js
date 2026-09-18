/* The Inner City Group ---------------------------------------------------
 *
 * BEFORE LAUNCH: set FORM_ENDPOINT and CONTACT_FALLBACK below.
 *
 * Until FORM_ENDPOINT is a real URL, the form deliberately does NOT show a
 * success message. People using this page may be sending a prayer request or
 * asking for a ride, and telling them "we got it" when nothing was sent would
 * be worse than telling them the form is not ready. Instead it shows the
 * fallback contact info.
 *
 * Easiest options for a static site on GitHub Pages:
 *   - Formspree:    https://formspree.io/f/xxxxxxxx
 *   - Google Forms: use the formResponse POST URL
 *   - Netlify Forms, Basin, Getform, etc.
 * ---------------------------------------------------------------------- */

var FORM_ENDPOINT = '';                    // e.g. 'https://formspree.io/f/abcdwxyz'
var CONTACT_FALLBACK = '';                 // e.g. 'call or text (501) 555-0134'

(function () {
  'use strict';

  var choices   = Array.prototype.slice.call(document.querySelectorAll('.choice'));
  var typeInput = document.getElementById('request_type');
  var msgLabel  = document.getElementById('message-label');
  var form      = document.getElementById('contact-form');
  var status    = document.getElementById('form-status');

  var PROMPTS = {
    visit:        "Anything you'd like us to know? <span class=\"hint\">Optional</span>",
    prayer:       "What's on your heart? <span class=\"hint\">We'll keep it between us and the Lord</span>",
    missionaries: "Anything you'd like them to know? <span class=\"hint\">Optional</span>"
  };

  function select(type) {
    if (!PROMPTS[type]) { type = 'visit'; }
    if (typeInput) { typeInput.value = type; }

    choices.forEach(function (c) {
      c.setAttribute('aria-pressed', String(c.dataset.request === type));
    });

    document.querySelectorAll('[data-show-for]').forEach(function (el) {
      el.classList.toggle('is-shown', el.dataset.showFor === type);
    });

    if (msgLabel) { msgLabel.innerHTML = PROMPTS[type]; }
  }

  choices.forEach(function (c) {
    c.addEventListener('click', function () { select(c.dataset.request); });
  });

  // Links that jump to the form with a type preselected.
  document.querySelectorAll('a[data-request]').forEach(function (a) {
    a.addEventListener('click', function () { select(a.dataset.request); });
  });

  select('visit');

  if (!form) { return; }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    status.className = 'form-status';

    var name    = form.elements.name.value.trim();
    var contact = form.elements.contact.value.trim();

    if (!name || !contact) {
      status.classList.add('is-error');
      status.textContent = 'Please add your name and a way for us to reach you.';
      (name ? form.elements.contact : form.elements.name).focus();
      return;
    }

    if (!FORM_ENDPOINT) {
      status.classList.add('is-error');
      status.textContent = CONTACT_FALLBACK
        ? 'This form is not connected yet, so nothing was sent. Please ' + CONTACT_FALLBACK + ' and we will take good care of you.'
        : 'This form is not connected yet, so nothing was sent. Please reach out to us directly and we will take good care of you.';
      return;
    }

    var btn = form.querySelector('button[type=submit]');
    btn.disabled = true;
    status.textContent = 'Sending...';

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(form)
    })
      .then(function (res) {
        if (!res.ok) { throw new Error('Bad response'); }
        form.innerHTML =
          '<h3>Thank you!</h3>' +
          '<p>We received your request. Someone from our group will be in touch soon.</p>';
      })
      .catch(function () {
        btn.disabled = false;
        status.classList.add('is-error');
        status.textContent = CONTACT_FALLBACK
          ? 'Something went wrong on our end and your message did not send. Please ' + CONTACT_FALLBACK + '.'
          : 'Something went wrong on our end and your message did not send. Please try again in a moment.';
      });
  });
})();

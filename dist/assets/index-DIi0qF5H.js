(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const i=document.querySelector("#app");i.innerHTML=`
  <main class="page">
    <section class="hero">
      <div class="copy">
        <p class="eyebrow">d0g.ai</p>
        <h1>A premium domain for the future of Pet Tech.</h1>
        <p class="lead">
          Build a brand around smart pet products, AI-powered care, or the next Pet Tech marketplace.
        </p>
        <div class="actions">
          <a class="button primary" href="mailto:hello@d0g.ai">Contact for offer</a>
          <a class="button secondary" href="#why">Why this domain</a>
        </div>
      </div>
      <div class="card" aria-label="pet tech concept">
        <img
          src="/dog-hero.png"
          alt="Happy dog in natural light"
        />
      </div>
    </section>

    <section class="grid" id="why">
      <article>
        <h2>Memorable</h2>
        <p>Short, brandable, and instantly connected to dogs.</p>
      </article>
      <article>
        <h2>Flexible</h2>
        <p>Works for Pet Tech products, services, AI tools, or a marketplace.</p>
      </article>
      <article>
        <h2>Premium</h2>
        <p>A strong .ai domain that signals trust, innovation, and future value.</p>
      </article>
    </section>

    <section id="form" class="form-section" aria-label="Contact form">
      <div class="form-card">
        <h2>Contact for an offer</h2>
        <p class="form-lead">Send us a short message — we’ll get back to you.</p>

        <form
          class="contact-form"
          method="POST"
          action="https://formspree.io/f/YOUR_FORM_ID"
        >
          <label>
            <span>Name</span>
            <input name="name" type="text" autocomplete="name" required />
          </label>
          <label>
            <span>Email</span>
            <input name="email" type="email" autocomplete="email" required />
          </label>
          <label>
            <span>Message</span>
            <textarea name="message" rows="4" required></textarea>
          </label>

          <button class="button primary submit" type="submit">Send</button>
          <p class="fineprint">By submitting, you agree to be contacted about this inquiry.</p>
        </form>
      </div>
    </section>
  </main>
`;

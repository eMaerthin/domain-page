(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function m(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=m(e);fetch(e.href,t)}})();const r=document.querySelector("#app");r.innerHTML=`
  <main class="page">
    <section class="hero">
      <div class="copy">
        <p class="eyebrow">d0g.ai</p>
        <h1>A premium domain for the future of Pet Tech.</h1>
        <p class="lead">
          Build a brand around smart pet products, AI-powered care, or the next Pet Tech marketplace.
        </p>
        <div class="actions">
          <a class="button primary" href="#form">Contact for offer</a>
          <a class="button secondary" href="#why">Why this domain</a>
        </div>
      </div>
      <div class="card" aria-label="pet tech concept">
        <img
          src="./dog-hero.png"
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
          action="https://formspree.io/f/xpqorgdp"
        >
          <label>
            <span>Name</span>
            <input name="name" type="text" autocomplete="name" />
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
`;const s=r.querySelector('img[alt="Happy dog in natural light"]');s&&(s.src="./dog-hero.png");const i=(n,o={})=>{typeof window.gtag=="function"&&window.gtag("event",n,o)},l=r.querySelector('a.button.primary[href="#form"]');l&&l.addEventListener("click",()=>{i("click_contact_for_offer",{location:"hero",target:"#form"})});const d=r.querySelector('a.button.secondary[href="#why"]');d&&d.addEventListener("click",()=>{i("click_why_this_domain",{location:"hero",target:"#why"})});const p=r.querySelector(".contact-form");p&&p.addEventListener("submit",()=>{i("submit_contact_form",{location:"form",form_id:"contact-offer"})});

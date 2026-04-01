import './style.css';

const app = document.querySelector('#app');

app.innerHTML = `
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
`;

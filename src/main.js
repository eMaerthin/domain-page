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
  </main>
`;

(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}})();const n=document.querySelector("#app");n.innerHTML=`
  <main class="site-shell">
    <nav class="nav">
      <a class="wordmark" href="/" aria-label="d0g.ai home">
        <span>d0g</span><b>.ai</b>
      </a>
      <div class="nav-links">
        <a href="#principles">Principles</a>
        <a href="#direction">Product direction</a>
        <a href="#acquisition">Acquisition</a>
      </div>
      <a class="nav-cta" href="mailto:hello@d0g.ai?subject=d0g.ai%20acquisition">Get the brief <span>↗</span></a>
    </nav>

    <section class="hero">
      <div class="hero-copy">
        <p class="kicker"><span class="live-dot"></span> Brand concept / available for acquisition</p>
        <h1>Build for the<br /><em>unknown.</em></h1>
        <p class="hero-lead">
          <strong>Day Zero Guard</strong> is a security-first operating model for teams building AI systems, infrastructure, and software that cannot afford to wait for a known threat.
        </p>
        <div class="hero-actions">
          <a class="button button-primary" href="#principles">Explore the model <span>↓</span></a>
          <a class="button button-quiet" href="#acquisition">Acquire d0g.ai <span>↗</span></a>
        </div>
      </div>
      <div class="hero-mark" aria-hidden="true">
        <div class="crosshair crosshair-top"></div>
        <div class="crosshair crosshair-bottom"></div>
        <div class="target">
          <span class="target-ring ring-outer"></span>
          <span class="target-ring ring-inner"></span>
          <span class="target-core"></span>
        </div>
        <span class="hero-mark-label">D0G / 001</span>
      </div>
    </section>

    <section class="intro-strip">
      <span class="strip-label">The premise</span>
      <p>Security should begin at the first architectural decision — not at the first incident.</p>
    </section>

    <section class="section" id="principles">
      <div class="section-heading">
        <p class="kicker">01 / Principles</p>
        <h2>A simple model for safer software.</h2>
        <p>Four ideas give the name a useful point of view without pretending to be an existing product.</p>
      </div>
      <div class="principle-grid">
        <article>
          <span class="number">01</span>
          <h3>Model exposure</h3>
          <p>Map dependencies, identities, data flows, and privileged paths before they become attack paths.</p>
        </article>
        <article>
          <span class="number">02</span>
          <h3>Harden defaults</h3>
          <p>Make least privilege, secret hygiene, dependency review, and safe configuration part of the normal developer path.</p>
        </article>
        <article>
          <span class="number">03</span>
          <h3>Verify continuously</h3>
          <p>Test assumptions in code, infrastructure, and AI agent behavior before each meaningful release.</p>
        </article>
        <article>
          <span class="number">04</span>
          <h3>Respond with evidence</h3>
          <p>Preserve useful logs, tested rollback paths, and a clear record of what changed and why.</p>
        </article>
      </div>
    </section>

    <section class="section direction" id="direction">
      <div class="section-heading">
        <p class="kicker">02 / Product direction</p>
        <h2>What this could become.</h2>
      </div>
      <div class="direction-layout">
        <div class="terminal-card">
          <div class="terminal-bar"><span></span><span></span><span></span><code>day-zero-guard / workflow</code></div>
          <div class="terminal-body">
            <p><span class="prompt">$</span> d0g init --system=production</p>
            <p class="muted">› mapping attack surface</p>
            <p class="muted">› checking release guardrails</p>
            <p class="muted">› verifying recovery evidence</p>
            <p class="success">✓ baseline ready</p>
          </div>
        </div>
        <div class="direction-list">
          <div><span>01</span><p><strong>Secure delivery</strong><br />Release-readiness checks for teams shipping fast.</p></div>
          <div><span>02</span><p><strong>AI runtime protection</strong><br />Guardrails for agents, tools, permissions, and data.</p></div>
          <div><span>03</span><p><strong>Exposure intelligence</strong><br />A living view of what can change and what can break.</p></div>
        </div>
      </div>
    </section>

    <section class="standards">
      <div class="section-heading">
        <p class="kicker">03 / Standards-informed</p>
        <h2>Familiar principles.<br /><em>Sharper story.</em></h2>
        <p>Day Zero Guard is a brand concept, not a certification or a new compliance framework. Its product direction can be expressed through practices security teams already recognize.</p>
      </div>
      <div class="standards-grid">
        <a class="standard-card" href="https://www.nist.gov/publications/zero-trust-architecture" target="_blank" rel="noreferrer">
          <span class="number">NIST SP 800-207</span>
          <h3>Zero Trust Architecture <span>↗</span></h3>
          <p>Protect resources, verify explicitly, and grant no implicit trust based on network location.</p>
        </a>
        <a class="standard-card" href="https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final" target="_blank" rel="noreferrer">
          <span class="number">NIST SP 800-53</span>
          <h3>Security & privacy controls <span>↗</span></h3>
          <p>A catalog of controls that can turn the operating model into an enterprise-ready control plane.</p>
        </a>
        <a class="standard-card" href="https://csrc.nist.gov/pubs/sp/800/218/final" target="_blank" rel="noreferrer">
          <span class="number">NIST SP 800-218</span>
          <h3>Secure Software Development Framework <span>↗</span></h3>
          <p>A practical foundation for making secure delivery part of the software lifecycle.</p>
        </a>
        <a class="standard-card" href="https://www.iso.org/standard/27001" target="_blank" rel="noreferrer">
          <span class="number">ISO/IEC 27001</span>
          <h3>Information security management <span>↗</span></h3>
          <p>The recognizable enterprise language for governing information security as a management system.</p>
        </a>
      </div>
    </section>

    <section class="acquisition" id="acquisition">
      <div class="acquisition-copy">
        <p class="kicker">04 / Strategic acquisition</p>
        <h2>The foundation for<br /><em>Day Zero Guard.</em></h2>
        <p>d0g.ai is a compact, memorable .ai identity with a ready-made story for cybersecurity, AI infrastructure, developer tooling, or autonomous defense.</p>
      </div>
      <div class="acquisition-card">
        <span class="card-label">Asset</span>
        <strong>d0g.ai</strong>
        <span class="card-label">Positioning</span>
        <b>Day Zero Guard</b>
        <a class="button button-dark" href="mailto:hello@d0g.ai?subject=d0g.ai%20acquisition">Request acquisition brief <span>↗</span></a>
      </div>
    </section>

    <footer>
      <span>© d0g.ai / Day Zero Guard concept</span>
      <span>Built for the unknown.</span>
    </footer>
  </main>
`;const c=(s,r={})=>{typeof window.gtag=="function"&&window.gtag("event",s,r)};n.querySelectorAll("a").forEach(s=>{s.addEventListener("click",()=>{c("link_click",{label:s.textContent.trim()})})});

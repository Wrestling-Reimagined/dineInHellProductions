const CALENDLY_URL = "https://calendly.com/your-placeholder-link";
const INTRO_VIDEO_URL =
  "https://www.youtube.com/embed/l5wU3B79BQA?si=7mAwv2xc6H8nIXQ6";

function App() {
  return (
    <div className="page">
      <header className="site-header">
        <div className="brand">Dine in Hell Productions</div>
        <nav className="nav">
          <a href="#video">Reel</a>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-content">
            <p className="eyebrow">
              Media Studio for Brands That Don&apos;t Play Safe
            </p>
            <h1 id="hero-title">Dine in Hell Productions</h1>
            <p className="hero-subtitle">
              We craft cinematic visuals that burn into memory and move your
              audience to act.
            </p>
            <div className="hero-actions">
              <a
                className="btn btn-primary"
                href={CALENDLY_URL}
                target="_blank"
                rel="noreferrer"
              >
                Book a Call
              </a>
              <a className="btn btn-ghost" href="#video">
                Watch the Reel
              </a>
            </div>
          </div>
        </section>

        <section id="video" className="section section-video">
          <div className="section-header">
            <p className="eyebrow">Featured Reel</p>
            <h2>The work speaks first.</h2>
            <p className="section-subtitle">
              A quick hit of what we do when brands hand us the match and the
              fuel.
            </p>
          </div>
          <div className="video-frame">
            <div className="video-inner">
              <iframe
                title="Intro reel"
                src={INTRO_VIDEO_URL}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section id="about" className="section section-split">
          <div className="section-content">
            <p className="eyebrow">About the Studio</p>
            <h2>We turn brands into stories people can&apos;t shake.</h2>
            <p>
              Dine in Hell Productions is a media studio built for businesses
              that refuse to be forgettable. We blend cinematic storytelling
              with strategic thinking, so every frame pulls its weight.
            </p>
            <p>
              From first spark to final export, we keep the process sharp,
              focused, and unapologetically creative.
            </p>
          </div>
          <aside className="stats">
            <div className="stat">
              <span className="stat-label">Years Shooting</span>
              <span className="stat-value">10+</span>
            </div>
            <div className="stat">
              <span className="stat-label">Brand Films</span>
              <span className="stat-value">80+</span>
            </div>
            <div className="stat">
              <span className="stat-label">Cities Lit Up</span>
              <span className="stat-value">25+</span>
            </div>
          </aside>
        </section>

        <section id="services" className="section">
          <div className="section-header">
            <p className="eyebrow">Services</p>
            <h2>
              Built for brands that need more than &quot;just a video&quot;.
            </h2>
          </div>
          <div className="grid services-grid">
            <article className="card">
              <h3>Brand Films</h3>
              <p>
                High-impact narratives that define who you are and why you
                matter, in under three minutes.
              </p>
            </article>
            <article className="card">
              <h3>Commercial Spots</h3>
              <p>
                Tight, punchy ads built for launch moments, product reveals, and
                campaigns that demand attention.
              </p>
            </article>
            <article className="card">
              <h3>Social Content &amp; Campaigns</h3>
              <p>
                Thumb-stopping short-form built for feeds, stories, and paid
                media that actually converts.
              </p>
            </article>
            <article className="card">
              <h3>Documentary &amp; Event</h3>
              <p>
                On-location storytelling that captures the real stakes, real
                people, and real moments behind your brand.
              </p>
            </article>
          </div>
        </section>

        <section id="work" className="section">
          <div className="section-header">
            <p className="eyebrow">Featured Work</p>
            <h2>Stories we&apos;ve set on fire.</h2>
          </div>
          <div className="grid work-grid">
            <article className="card card-work">
              <div className="chip-row">
                <span className="chip">Launch Spot</span>
                <span className="chip">Commercial</span>
              </div>
              <h3>Inferno Launch</h3>
              <p className="work-client">Client Name</p>
              <p className="work-copy">
                30-second product launch film built to light up feeds and
                timelines.
              </p>
            </article>
            <article className="card card-work">
              <div className="chip-row">
                <span className="chip">Brand Film</span>
                <span className="chip">Story</span>
              </div>
              <h3>Into the Fire</h3>
              <p className="work-client">Client Name</p>
              <p className="work-copy">
                A cinematic origin story that turns company history into a
                gripping arc.
              </p>
            </article>
            <article className="card card-work">
              <div className="chip-row">
                <span className="chip">Social</span>
                <span className="chip">Campaign</span>
              </div>
              <h3>Embers Daily</h3>
              <p className="work-client">Client Name</p>
              <p className="work-copy">
                A series of short-form cuts engineered for repeat views and
                shares.
              </p>
            </article>
          </div>
        </section>

        <section id="process" className="section section-process">
          <div className="section-header">
            <p className="eyebrow">Process</p>
            <h2>No guesswork. Just a sharp, tested workflow.</h2>
          </div>
          <ol className="process-steps">
            <li>
              <h3>1. Discovery Call</h3>
              <p>
                We dig into your brand, goals, and non-negotiables so we know
                exactly what the video needs to do.
              </p>
            </li>
            <li>
              <h3>2. Concept &amp; Treatment</h3>
              <p>
                We build the story, visuals, and structure—no vague ideas, just
                a clear plan you can react to.
              </p>
            </li>
            <li>
              <h3>3. Production</h3>
              <p>
                On set, we keep it lean, focused, and professional. Every shot
                serves the story and the strategy.
              </p>
            </li>
            <li>
              <h3>4. Edit &amp; Delivery</h3>
              <p>
                We cut, grade, sound design, and deliver export-ready files for
                every platform you care about.
              </p>
            </li>
          </ol>
        </section>

        <section id="testimonials" className="section">
          <div className="section-header">
            <p className="eyebrow">Testimonials</p>
            <h2>What clients say when the smoke clears.</h2>
          </div>
          <div className="grid testimonials-grid">
            <article className="card card-quote">
              <p className="quote">
                &quot;They didn&apos;t just make a video. They built the
                centerpiece of our entire campaign.&quot;
              </p>
              <p className="quote-meta">Client Name, CMO at Brand</p>
            </article>
            <article className="card card-quote">
              <p className="quote">
                &quot;Fast, focused, and deadly accurate with the creative.
                We&apos;ll be back.&quot;
              </p>
              <p className="quote-meta">Client Name, Founder</p>
            </article>
          </div>
        </section>

        <section id="contact" className="section section-contact">
          <div className="section-header">
            <p className="eyebrow">Contact</p>
            <h2>Ready to light the fuse?</h2>
            <p className="section-subtitle">
              Book a 20-minute call and let&apos;s talk about the next piece
              your brand needs.
            </p>
          </div>
          <div className="contact-actions">
            <a
              className="btn btn-primary"
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
            >
              Book a Call
            </a>
            <p className="contact-email">
              Prefer email? Reach out at{" "}
              <a href="mailto:hello@dineinhellproductions.com">
                hello@dineinhellproductions.com
              </a>
              .
            </p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p className="footer-brand">Dine in Hell Productions</p>
        <p className="footer-meta">
          © {new Date().getFullYear()} Dine in Hell Productions. All rights
          reserved.
        </p>
        <div className="footer-links">
          <a href="#video">Reel</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </div>
  );
}

export default App;

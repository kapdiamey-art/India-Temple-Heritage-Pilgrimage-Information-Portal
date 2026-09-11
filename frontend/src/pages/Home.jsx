function Home() {
  return (
    <section className="page page-home">
      <section className="intro-panel">
        <div className="intro-copy">
          <span className="eyebrow">Dharohar Bharat</span>
          <h1>Temple Heritage & Pilgrimage</h1>
          <p>
            A cultural guide to sacred spaces, regional traditions, pilgrim routes,
            and celebration across India.
          </p>
          <div className="cta-row">
            <a className="primary-button" href="/temples">Explore Temples</a>
            <a className="secondary-button" href="/circuits">Pilgrimage Routes</a>
          </div>
        </div>
        <div className="intro-image">
          <span className="image-label">Sacred India</span>
        </div>
      </section>

      <section className="feature-list">
        <article className="feature-card">
          <span className="feature-icon">?</span>
          <div>
            <h3>Temples</h3>
            <p>Explore heritage temples and sacred spaces.</p>
          </div>
        </article>
        <article className="feature-card">
          <span className="feature-icon">?</span>
          <div>
            <h3>Pilgrimage</h3>
            <p>Plan meaningful heritage journeys.</p>
          </div>
        </article>
        <article className="feature-card">
          <span className="feature-icon">?</span>
          <div>
            <h3>Festivals</h3>
            <p>Discover rituals, celebration and seasonal rhythm.</p>
          </div>
        </article>
      </section>
    </section>
  )
}

export default Home

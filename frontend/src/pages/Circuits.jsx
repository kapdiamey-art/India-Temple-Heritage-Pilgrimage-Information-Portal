function Circuits() {
  return (
    <section className="page page-circuits">
      <section className="page-hero compact-hero">
        <div className="page-hero-content">
          <span className="eyebrow light">Pilgrimage Routes</span>
          <h1>Heritage Circuits</h1>
          <p>Design sacred journeys that connect temple towns, riverfronts, and cultural landscapes.</p>
        </div>
      </section>

      <section className="cards-grid circuits-grid">
        <article className="place-card plain-card">
          <div className="place-content">
            <span className="place-state">North India</span>
            <h3>Ganga Heritage Circuit</h3>
            <p className="place-description">Varanasi, Prayagraj, and sacred river traditions.</p>
          </div>
        </article>
        <article className="place-card plain-card">
          <div className="place-content">
            <span className="place-state">South India</span>
            <h3>Dravidian Temple Circuit</h3>
            <p className="place-description">Temples, mandapas, carvings, and regional culture.</p>
          </div>
        </article>
        <article className="place-card plain-card">
          <div className="place-content">
            <span className="place-state">East & West</span>
            <h3>Coastal Heritage Circuit</h3>
            <p className="place-description">Konark, Puri, and coastal sacred landscapes.</p>
          </div>
        </article>
      </section>
    </section>
  )
}

export default Circuits

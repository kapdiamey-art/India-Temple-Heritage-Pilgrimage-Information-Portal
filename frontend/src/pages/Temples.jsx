import { Link } from 'react-router-dom'
import temples from '../data/temples.js'

function Temples() {
  return (
    <section className="page page-temples">
      <section className="page-hero compact-hero">
        <div className="page-hero-content">
          <span className="eyebrow light">Temple Directory</span>
          <h1>Temples of India</h1>
          <p>Explore selected sacred sites and living heritage traditions.</p>
        </div>
      </section>

      <section className="cards-grid temples-grid">
        {temples.map((temple) => (
          <article className="place-card" key={temple.id}>
            <div className="place-image" style={{ backgroundImage: `url(${temple.image})` }}></div>
            <div className="place-content">
              <span className="place-state">{temple.state}</span>
              <h3>{temple.name}</h3>
              <p className="place-city">{temple.city}</p>
              <p className="place-description">{temple.shortDescription}</p>
              <div className="place-meta">
                <span>{temple.deity}</span>
                {temple.featured && <span className="featured-chip">Featured</span>}
              </div>
              <Link className="card-button" to={`/temples/${temple.id}`}>View Details</Link>
            </div>
          </article>
        ))}
      </section>
    </section>
  )
}

export default Temples

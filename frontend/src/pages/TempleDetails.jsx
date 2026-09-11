import { Link, useParams } from 'react-router-dom'
import temples from '../data/temples.js'

function TempleDetails() {
  const { id } = useParams()
  const temple = temples.find((item) => item.id === id) || temples[0]

  return (
    <section className="page page-detail">
      <Link className="back-link" to="/temples">? Back to Temples</Link>

      <section className="detail-layout">
        <div className="detail-image-wrap">
          <div className="detail-image" style={{ backgroundImage: `url(${temple.image})` }}></div>
        </div>

        <article className="detail-content">
          <span className="eyebrow">{temple.state}</span>
          <h1>{temple.name}</h1>
          <p className="detail-city">{temple.city}, {temple.state}</p>
          <p className="detail-description">{temple.shortDescription}</p>

          <div className="detail-meta">
            <div>
              <span className="meta-label">Deity</span>
              <span className="meta-value">{temple.deity}</span>
            </div>
            <div>
              <span className="meta-label">City</span>
              <span className="meta-value">{temple.city}</span>
            </div>
            <div>
              <span className="meta-label">Featured</span>
              <span className="meta-value">{temple.featured ? 'Yes' : 'Demo'}</span>
            </div>
          </div>

          <div className="detail-actions">
            <Link className="primary-button" to="/circuits">Plan a Pilgrimage</Link>
            <Link className="secondary-button" to="/festivals">Festival Guide</Link>
          </div>
        </article>
      </section>
    </section>
  )
}

export default TempleDetails

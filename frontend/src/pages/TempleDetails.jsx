import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock, MapPin, Landmark, Info, Shield } from 'lucide-react'
import temples from '../data/temples.js'

const fallbackImage = 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80'

function TempleDetails() {
  const { id } = useParams()
  const temple = temples.find((item) => item.id === id)

  if (!temple) {
    return (
      <section className="page page-detail">
        <section className="page-hero compact-hero">
          <div className="page-hero-content">
            <span className="eyebrow light">Temple Record</span>
            <h1>Temple not found</h1>
            <p>The requested temple record is not part of the current sample directory.</p>
            <span className="sample-data-note">Temporary demo information only</span>
            <div className="detail-not-found-actions">
              <Link className="primary-button" to="/temples">
                <ArrowLeft size={16} /> Back to Temples
              </Link>
            </div>
          </div>
        </section>
      </section>
    )
  }

  const relatedTemples = temples.filter((item) => item.id !== temple.id).slice(0, 3)

  return (
    <section className="page page-detail">
      <section className="detail-hero">
        <div className="detail-hero-image">
          <img src={temple.image || fallbackImage} alt={temple.name} onError={(event) => {
            event.currentTarget.onerror = null
            event.currentTarget.src = fallbackImage
          }} />
        </div>

        <div className="detail-hero-content">
          <div className="detail-hero-top">
            <span className="section-kicker light">{temple.state}</span>
            <Link className="back-link" to="/temples">
              <ArrowLeft size={16} /> Back to Temples
            </Link>
          </div>

          <div className="detail-title-block">
            <h1>{temple.name}</h1>
            <div className="detail-location-line">
              <MapPin size={16} />
              <span>{temple.city}, {temple.state}</span>
            </div>
            <div className="detail-deity-line">
              <Landmark size={16} />
              <span>{temple.deity}</span>
            </div>
          </div>

          <div className="detail-hero-actions">
            <Link className="primary-button detail-button" to="/temples">Explore more temples</Link>
            <span className="demo-note">{temple.demoNote}</span>
          </div>
        </div>
      </section>

      <section className="detail-main-grid">
        <main className="detail-main-column">
          <section className="detail-card">
            <span className="section-kicker dark-kicker">Overview</span>
            <h2>Overview</h2>
            <p className="detail-summary">{temple.shortDescription}</p>
            <div className="detail-copy-grid">
              <div>
                <span className="detail-label">Historical background</span>
                <p>{temple.history}</p>
              </div>
              <div>
                <span className="detail-label">Religious and cultural significance</span>
                <p>{temple.significance}</p>
              </div>
            </div>
          </section>

          <section className="detail-card">
            <span className="section-kicker dark-kicker">Darshan & Timings</span>
            <h2>Darshan & Timings</h2>
            <div className="timing-grid">
              <div className="timing-card">
                <Clock size={20} />
                <span className="timing-label">Darshan timing</span>
                <span className="timing-value">{temple.darshan}</span>
              </div>
              <div className="timing-card">
                <Calendar size={20} />
                <span className="timing-label">Daily ritual</span>
                <span className="timing-value">{temple.dailyRitual}</span>
              </div>
            </div>
            <div className="demo-timing-note">
              <Info size={16} />
              <span>{temple.demoNote}</span>
            </div>
          </section>

          <section className="detail-card">
            <span className="section-kicker dark-kicker">Festivals</span>
            <h2>Important Festivals</h2>
            <div className="festival-list">
              {temple.festivals.map((festival) => (
                <article className="festival-item" key={festival.name}>
                  <div className="festival-heading">
                    <Calendar size={16} />
                    <h3>{festival.name}</h3>
                  </div>
                  <p>{festival.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="detail-card">
            <span className="section-kicker dark-kicker">Visitor Information</span>
            <h2>Visitor Information</h2>
            <div className="visitor-grid">
              <div className="visitor-row">
                <span className="visitor-label">Dress code</span>
                <span className="visitor-value">{temple.visitorInfo.dressCode}</span>
              </div>
              <div className="visitor-row">
                <span className="visitor-label">Guidelines</span>
                <span className="visitor-value">{temple.visitorInfo.guidelines}</span>
              </div>
              <div className="visitor-row">
                <span className="visitor-label">Best time to visit</span>
                <span className="visitor-value">{temple.visitorInfo.bestTimeToVisit}</span>
              </div>
              <div className="visitor-row">
                <span className="visitor-label">Facilities</span>
                <span className="visitor-value">{temple.visitorInfo.facilities}</span>
              </div>
            </div>
          </section>

          <section className="detail-card">
            <span className="section-kicker dark-kicker">Location</span>
            <h2>Location</h2>
            <div className="location-row">
              <MapPin size={22} />
              <div>
                <p className="location-city">{temple.city}, {temple.state}</p>
                <p className="location-note">{temple.locationNote}</p>
              </div>
            </div>
          </section>
        </main>

        <aside className="detail-side-column">
          <section className="detail-card side-card">
            <span className="section-kicker dark-kicker">Pilgrimage Snapshot</span>
            <div className="side-list">
              <div className="side-list-item">
                <Landmark size={16} />
                <span><b>Deity:</b> {temple.deity}</span>
              </div>
              <div className="side-list-item">
                <MapPin size={16} />
                <span><b>City:</b> {temple.city}</span>
              </div>
              <div className="side-list-item">
                <Shield size={16} />
                <span><b>Visitor note:</b> {temple.demoNote}</span>
              </div>
            </div>
          </section>
        </aside>
      </section>

      <section className="detail-card related-card">
        <div className="related-heading">
          <span className="section-kicker dark-kicker">Related Temples</span>
          <h2>Explore more sacred places</h2>
        </div>

        <section className="cards-grid temples-grid detail-related-grid">
          {relatedTemples.map((item) => (
            <article className="place-card" key={item.id}>
              <div className="place-image-wrap">
                <img
                  className="place-image"
                  src={item.image || fallbackImage}
                  alt={item.name}
                  onError={(event) => {
                    event.currentTarget.onerror = null
                    event.currentTarget.src = fallbackImage
                  }}
                />
              </div>
              <div className="place-content">
                <span className="place-state">{item.state}</span>
                <h3>{item.name}</h3>
                <p className="place-city">{item.city}</p>
                <p className="place-description">{item.shortDescription}</p>
                <div className="place-meta">
                  <span className="deity-text">{item.deity}</span>
                  {item.featured && <span className="featured-chip">Featured</span>}
                </div>
                <Link className="card-button" to={`/temples/${item.id}`}>View Temple</Link>
              </div>
            </article>
          ))}
        </section>
      </section>
    </section>
  )
}

export default TempleDetails

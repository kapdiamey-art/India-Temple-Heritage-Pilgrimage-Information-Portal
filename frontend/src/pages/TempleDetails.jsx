import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock, MapPin, Landmark, Info, Shield, ExternalLink, CheckCircle, Loader2 } from 'lucide-react'
import { fetchTempleById, fetchTemples } from '../services/api.js'

const fallbackImage = '/images/temples/kashi-vishwanath.jpg'

function TempleDetails() {
  const { id } = useParams()
  const [temple, setTemple] = useState(null)
  const [relatedTemples, setRelatedTemples] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)
    
    // Fetch main temple by ID
    fetchTempleById(id)
      .then((data) => {
        setTemple(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Failed to load temple details:', err)
        setError('Temple record not found or server unavailable.')
        setLoading(false)
      })

    // Fetch related temples for bottom recommendation grid
    fetchTemples()
      .then((data) => {
        setRelatedTemples(data.filter((item) => String(item.id) !== String(id)).slice(0, 3))
      })
      .catch(() => {})
  }, [id])

  if (loading) {
    return (
      <section className="page page-detail" style={{ padding: '6rem 0', textAlign: 'center' }}>
        <Loader2 className="animate-spin" size={40} style={{ margin: '0 auto', color: '#B8860B' }} />
        <p style={{ marginTop: '1rem', color: '#555', fontSize: '1.1rem' }}>Loading temple heritage record...</p>
      </section>
    )
  }

  if (error || !temple) {
    return (
      <section className="page page-detail">
        <section className="page-hero compact-hero">
          <div className="page-hero-content">
            <span className="eyebrow light">Temple Record</span>
            <h1>Temple Not Found</h1>
            <p>{error || 'The requested temple record could not be retrieved.'}</p>
            <div className="detail-not-found-actions" style={{ marginTop: '1.5rem' }}>
              <Link className="primary-button" to="/temples">
                <ArrowLeft size={16} /> Back to Temples
              </Link>
            </div>
          </div>
        </section>
      </section>
    )
  }

  return (
    <section className="page page-detail">
      <section className="detail-hero">
        <div className="detail-hero-image">
          <img
            src={temple.image || fallbackImage}
            alt={temple.name}
            onError={(event) => {
              event.currentTarget.onerror = null
              event.currentTarget.src = fallbackImage
            }}
          />
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
            <Link className="primary-button detail-button" to="/temples">Explore More Temples</Link>
          </div>
        </div>
      </section>

      <section className="detail-main-grid">
        <main className="detail-main-column">
          <section className="detail-card">
            <span className="section-kicker dark-kicker">Overview</span>
            <h2>Overview</h2>
            <p className="detail-summary">{temple.short_description}</p>
            <div className="detail-copy-grid">
              <div>
                <span className="detail-label">Historical Background</span>
                <p>{temple.historical_background}</p>
              </div>
              <div>
                <span className="detail-label">Religious & Cultural Significance</span>
                <p>{temple.religious_cultural_significance}</p>
              </div>
            </div>
          </section>

          <section className="detail-card">
            <span className="section-kicker dark-kicker">Darshan & Timings</span>
            <h2>Darshan & Daily Rituals</h2>
            
            {Array.isArray(temple.darshan_timings) && temple.darshan_timings.length > 0 && (
              <div style={{ marginBottom: '1.5rem' }}>
                <span className="detail-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <Clock size={16} color="#B8860B" /> Darshan Schedule
                </span>
                <ul style={{ listStyle: 'disc', paddingLeft: '1.25rem', color: '#444', lineHeight: '1.7' }}>
                  {temple.darshan_timings.map((timing, idx) => (
                    <li key={idx}>{timing}</li>
                  ))}
                </ul>
              </div>
            )}

            {Array.isArray(temple.daily_rituals) && temple.daily_rituals.length > 0 && (
              <div>
                <span className="detail-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <Calendar size={16} color="#B8860B" /> Daily Rituals
                </span>
                <ul style={{ listStyle: 'disc', paddingLeft: '1.25rem', color: '#444', lineHeight: '1.7' }}>
                  {temple.daily_rituals.map((ritual, idx) => (
                    <li key={idx}>{ritual}</li>
                  ))}
                </ul>
              </div>
            )}
          </section>

          {Array.isArray(temple.festivals) && temple.festivals.length > 0 && (
            <section className="detail-card">
              <span className="section-kicker dark-kicker">Festivals</span>
              <h2>Key Festivals & Celebrations</h2>
              <div className="festival-list">
                {temple.festivals.map((festival, idx) => (
                  <article className="festival-item" key={idx}>
                    <div className="festival-heading">
                      <Calendar size={16} />
                      <h3>{festival}</h3>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          <section className="detail-card">
            <span className="section-kicker dark-kicker">Visitor Information</span>
            <h2>Visitor Information</h2>
            <div className="visitor-grid">
              <div className="visitor-row">
                <span className="visitor-label">Dress Code</span>
                <span className="visitor-value">{temple.dress_code}</span>
              </div>
              <div className="visitor-row">
                <span className="visitor-label">Guidelines</span>
                <span className="visitor-value">{temple.visitor_guidelines}</span>
              </div>
              <div className="visitor-row">
                <span className="visitor-label">Best Time to Visit</span>
                <span className="visitor-value">{temple.best_time_to_visit}</span>
              </div>
              <div className="visitor-row">
                <span className="visitor-label">Facilities</span>
                <span className="visitor-value">
                  {Array.isArray(temple.facilities) ? temple.facilities.join(', ') : temple.facilities}
                </span>
              </div>
            </div>
          </section>

          <section className="detail-card">
            <span className="section-kicker dark-kicker">Location</span>
            <h2>Location & Access</h2>
            <div className="location-row">
              <MapPin size={22} />
              <div>
                <p className="location-city">{temple.city}, {temple.state}</p>
                <p className="location-note">{temple.location_information}</p>
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
                <span><b>State:</b> {temple.state}</span>
              </div>
            </div>
          </section>

          {/* Internal Source Tracking / Provenance Section */}
          {(temple.source_name || temple.source_url || temple.last_verified_at) && (
            <section className="detail-card side-card" style={{ borderTop: '3px solid #B8860B' }}>
              <span className="section-kicker dark-kicker" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle size={14} color="#2E7D32" /> Data Provenance
              </span>
              <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '0.75rem' }}>
                Record sourced from official public knowledge repositories:
              </p>
              <div className="side-list">
                {temple.source_name && (
                  <div className="side-list-item">
                    <span><b>Source:</b> {temple.source_name}</span>
                  </div>
                )}
                {temple.last_verified_at && (
                  <div className="side-list-item">
                    <span><b>Verified Date:</b> {temple.last_verified_at}</span>
                  </div>
                )}
                {temple.source_url && (
                  <div className="side-list-item" style={{ marginTop: '0.5rem' }}>
                    <a
                      href={temple.source_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#B8860B', display: 'inline-flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.88rem', fontWeight: '500' }}
                    >
                      Visit Official Reference <ExternalLink size={13} />
                    </a>
                  </div>
                )}
              </div>
            </section>
          )}
        </aside>
      </section>

      {relatedTemples.length > 0 && (
        <section className="detail-card related-card">
          <div className="related-heading">
            <span className="section-kicker dark-kicker">Related Temples</span>
            <h2>Explore More Sacred Places</h2>
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
                  <p className="place-description">{item.short_description}</p>
                  <div className="place-meta">
                    <span className="deity-text">{item.deity}</span>
                  </div>
                  <Link className="card-button" to={`/temples/${item.id}`}>View Temple</Link>
                </div>
              </article>
            ))}
          </section>
        </section>
      )}
    </section>
  )
}

export default TempleDetails

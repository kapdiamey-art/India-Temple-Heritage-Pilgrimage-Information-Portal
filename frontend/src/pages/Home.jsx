import { useState, useEffect, useMemo } from 'react'

import { Link } from 'react-router-dom'
import { Search, MapPin, Landmark, Calendar, Route, ArrowRight, Loader2 } from 'lucide-react'
import { fetchTemples } from '../services/api.js'

const states = [
  { name: 'Goa', count: 15 },
  { name: 'Maharashtra', count: 26 },
  { name: 'Karnataka', count: 20 },
  { name: 'Tamil Nadu', count: 31 },
  { name: 'Kerala', count: 18 },
  { name: 'Uttar Pradesh', count: 24 },
  { name: 'Gujarat', count: 19 },
  { name: 'Rajasthan', count: 23 },
]

const deities = [
  { name: 'Shiva', icon: '♨' },
  { name: 'Vishnu', icon: '✦' },
  { name: 'Krishna', icon: '♬' },
  { name: 'Rama', icon: '✤' },
  { name: 'Ganesha', icon: 'ॐ' },
  { name: 'Hanuman', icon: '♞' },
  { name: 'Durga', icon: '✹' },
  { name: 'Lakshmi', icon: '✧' },
]

const circuits = [
  { title: 'Char Dham', description: 'A sacred Himalayan journey through four living spiritual destinations.', sites: 4 },
  { title: 'Jyotirlinga', description: 'A Shiva circuit across the major Jyotirlinga temples of India.', sites: 12 },
  { title: 'Shakti Peethas', description: 'A route dedicated to Shakti traditions and revered goddess temples.', sites: 51 },
  { title: 'Krishna Circuit', description: 'Experience Krishna-connected sites, pilgrim towns and traditions.', sites: 8 },
]

const festivals = [
  { name: 'Kumbh Mela', month: 'Jan 2027', location: 'Prayagraj', description: 'A large sacred gathering of devotees and river traditions.' },
  { name: 'Mahashivaratri', month: 'Feb 2027', location: 'Varanasi', description: 'A night of Shiva worship, prayers, and temple celebration.' },
  { name: 'Rath Yatra', month: 'Jul 2027', location: 'Puri', description: 'A grand chariot procession honoring Lord Jagannath.' },
  { name: 'Navaratri', month: 'Oct 2027', location: 'Across India', description: 'Nine nights of devotion, dance and cultural celebration.' },
]

const stories = [
  { title: 'The Story Behind India\'s Ancient Temples', text: 'From stone symbolism to sacred landscapes, temples tell stories of devotion and design.', image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Architecture of South Indian Temples', text: 'Gopurams, mandapas and sculptural traditions shaped distinct regional faith spaces.', image: 'https://images.unsplash.com/photo-1602216583309-6491bf994602?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Why Pilgrimage Routes Matter', text: 'Pilgrimage connects memory, movement and communities across sacred geographies.', image: 'https://images.unsplash.com/photo-1572559644213-99ad13557e9e?auto=format&fit=crop&w=1200&q=80' },
]

function Home() {
  const [temples, setTemples] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    fetchTemples()
      .then((data) => {
        setTemples(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Failed to load temples:', err)
        setLoading(false)
      })
  }, [])

  // Calculate dynamic state counts from live backend records
  const dynamicStates = useMemo(() => {
    if (!temples || temples.length === 0) return states
    const map = {}
    temples.forEach((t) => {
      map[t.state] = (map[t.state] || 0) + 1
    })
    return Object.keys(map).map((stateName) => ({
      name: stateName,
      count: map[stateName],
    })).sort((a, b) => b.count - a.count)
  }, [temples])

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-backdrop">
          <div className="hero-overlay">
            <div className="hero-content">
              <span className="section-kicker">Dharohar Bharat</span>
              <h1>Discover the Spiritual Heritage of India</h1>
              <p>
                Explore temples, history, rituals, festivals and pilgrimage information
                across India through a living heritage guide.
              </p>

              <form
                className="hero-search"
                onSubmit={(e) => {
                  e.preventDefault()
                  if (searchQuery.trim()) {
                    window.location.href = `/temples?search=${encodeURIComponent(searchQuery.trim())}`
                  }
                }}
              >
                <Search size={18} />
                <input
                  type="text"
                  value={searchQuery}
                  placeholder="Search temples, cities, states or deities..."
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </form>

              <div className="hero-buttons">
                <Link className="primary-button" to="/temples">Explore Temples</Link>
                <Link className="secondary-button" to="/circuits">Plan a Pilgrimage</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block featured-section">
        <div className="section-head">
          <div>
            <span className="section-kicker dark-kicker">Sacred Places</span>
            <h2>Featured Temples</h2>
            <p className="section-subtitle">Explore landmarks shaped by faith, memory and craft.</p>
          </div>
          <Link className="link-button" to="/temples">View all temples <ArrowRight size={16} /></Link>
        </div>

        <div className="temple-card-grid">
          {loading ? (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '2rem 0' }}>
              <Loader2 className="animate-spin" size={32} style={{ margin: '0 auto', color: '#B8860B' }} />
              <p style={{ marginTop: '0.5rem', color: '#666' }}>Loading temple heritage records...</p>
            </div>
          ) : (
            temples.slice(0, 4).map((temple) => (
              <article className="temple-card-home" key={temple.id}>
                <Link className="temple-image-link" to={`/temples/${temple.id}`}> 
                  <img className="temple-card-image" src={temple.image} alt={temple.name}
                    onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/images/temples/kashi-vishwanath.jpg'; }}
                  />
                </Link>
                <div className="temple-card-content">
                  <span className="city-state"><MapPin size={14} /> {temple.city}, {temple.state}</span>
                  <h3>{temple.name}</h3>
                  <span className="deity-label"><Landmark size={14} /> {temple.deity}</span>
                  <p>{temple.short_description}</p>
                  <Link className="card-button" to={`/temples/${temple.id}`}>Explore Temple</Link>
                </div>
              </article>
            ))
          )}
        </div>

      </section>

      <section className="section-block state-section">
        <div className="section-head centered-head">
          <div>
            <span className="section-kicker dark-kicker">Temple Geography</span>
            <h2>Explore India's Temple Heritage</h2>
            <p className="section-subtitle">Discover sacred traditions across India's living temple landscape.</p>
          </div>
        </div>

        <div className="state-grid">
          {dynamicStates.map((state) => (
            <article className="state-card" key={state.name}>
              <div className="state-card-top">
                <span className="state-name">{state.name}</span>
                <span className="state-count">{state.count} {state.count === 1 ? 'temple' : 'temples'}</span>
              </div>
              <div className="state-card-bottom">
                <span className="state-card-icon"><Landmark size={22} /></span>
                <Link className="state-button" to={`/temples?state=${encodeURIComponent(state.name)}`}>Explore</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block deity-section">
        <div className="section-head centered-head">
          <div>
            <span className="section-kicker dark-kicker">Sacred Forms</span>
            <h2>Explore by Deity</h2>
          </div>
        </div>

        <div className="deity-grid">
          {deities.map((deity) => (
            <Link className="deity-card" key={deity.name} to={`/temples?deity=${encodeURIComponent(deity.name)}`}>
              <span className="deity-icon">{deity.icon}</span>
              <span className="deity-name">{deity.name}</span>
            </Link>
          ))}
        </div>
      </section>


      <section className="section-block circuit-section">
        <div className="section-head">
          <div>
            <span className="section-kicker dark-kicker">Pilgrim Routes</span>
            <h2>Popular Pilgrimage Circuits</h2>
          </div>
        </div>

        <div className="circuit-grid">
          {circuits.map((circuit, index) => (
            <article className="circuit-card" key={circuit.title}>
              <span className="circuit-number">0{index + 1}</span>
              <h3>{circuit.title}</h3>
              <p>{circuit.description}</p>
              <div className="circuit-meta">
                <span><Route size={14} /> {circuit.sites} important sites</span>
              </div>
              <Link className="card-button circuit-button" to="/circuits">Explore Circuit</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block festival-section">
        <div className="section-head">
          <div>
            <span className="section-kicker dark-kicker">Seasonal Calendar</span>
            <h2>Upcoming Temple Festivals</h2>
          </div>
          <Link className="link-button" to="/festivals">View Festival Calendar <ArrowRight size={16} /></Link>
        </div>

        <div className="festival-grid">
          {festivals.map((festival) => (
            <article className="festival-card" key={festival.name}>
              <div className="festival-date">
                <Calendar size={16} />
                <span>{festival.month}</span>
              </div>
              <h3>{festival.name}</h3>
              <div className="festival-location"><MapPin size={14} /> {festival.location}</div>
              <p>{festival.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block stories-section">
        <div className="section-head">
          <div>
            <span className="section-kicker dark-kicker">Heritage Journal</span>
            <h2>Stories from India's Heritage</h2>
          </div>
        </div>

        <div className="story-grid">
          {stories.map((story) => (
            <article className="story-card" key={story.title}>
              <div className="story-image" style={{ backgroundImage: `url(${story.image})` }}></div>
              <div className="story-content">
                <span className="story-category">Heritage Story</span>
                <h3>{story.title}</h3>
                <p>{story.text}</p>
                <Link className="read-more" to="/about">Read More <ArrowRight size={14} /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="pilgrimage-cta">
        <div className="cta-panel">
          <div>
            <span className="section-kicker light-kicker">Pilgrimage Planning</span>
            <h2>Plan Your Pilgrimage</h2>
            <p>Discover temples, festivals and heritage experiences for your journey.</p>
          </div>
          <Link className="cta-button" to="/circuits">Start Planning</Link>
        </div>
      </section>
    </div>
  )
}

export default Home

import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

function Festivals() {
  return (
    <section className="page page-festivals">
      <div className="breadcrumb-nav">
        <Link to="/" className="back-home-btn">
          <ArrowLeft size={16} /> Back to Home Page
        </Link>
      </div>
      <section className="page-hero compact-hero">
        <div className="page-hero-content">
          <span className="eyebrow light">Festival Calendar</span>
          <h1>Festivals & Rituals</h1>
          <p>Seasonal celebrations connected with temples, cities, and regional living heritage.</p>
        </div>
      </section>

      <section className="cards-grid festivals-grid">
        <article className="place-card plain-card">
          <div className="place-content">
            <span className="place-state">January</span>
            <h3>Kumbh Mela</h3>
            <p className="place-description">A large sacred gathering connected with river traditions.</p>
          </div>
        </article>
        <article className="place-card plain-card">
          <div className="place-content">
            <span className="place-state">October</span>
            <h3>Navaratri</h3>
            <p className="place-description">A festival of devotion, dance, music, and community celebration.</p>
          </div>
        </article>
        <article className="place-card plain-card">
          <div className="place-content">
            <span className="place-state">August</span>
            <h3>Onam</h3>
            <p className="place-description">Harvest traditions and temple culture in southern India.</p>
          </div>
        </article>
      </section>
    </section>
  )
}

export default Festivals

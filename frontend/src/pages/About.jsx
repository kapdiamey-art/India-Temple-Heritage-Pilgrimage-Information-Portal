import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

function About() {
  return (
    <section className="page page-about">
      <div className="breadcrumb-nav">
        <Link to="/" className="back-home-btn">
          <ArrowLeft size={16} /> Back to Home Page
        </Link>
      </div>
      <section className="page-hero compact-hero">
        <div className="page-hero-content">
          <span className="eyebrow light">About Dharohar Bharat</span>
          <h1>Heritage for the Future</h1>
          <p>We document temples, pilgrim routes, and cultural continuity across India.</p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-copy">
          <h2>Our Vision</h2>
          <p>
            Dharohar Bharat is a simple information portal for learning about India�s
            sacred places, architecture, festivals, and pilgrimage traditions.
          </p>
          <p>
            The platform is designed as a starting point for heritage exploration and
            future guided travel experiences.
          </p>
        </div>
        <aside className="about-aside">
          <div className="about-aside-card">
            <span className="about-number">01</span>
            <h3>Temple Heritage</h3>
            <p>Architecture, history, sacred geography, and traditions.</p>
          </div>
        </aside>
      </section>
    </section>
  )
}

export default About

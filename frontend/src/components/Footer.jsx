import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <h3>Dharohar Bharat</h3>
          <p>
            Discover sacred landmarks, living traditions, and heritage journeys across India.
          </p>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/temples">Temples</Link></li>
            <li><Link to="/circuits">Pilgrimage</Link></li>
            <li><Link to="/festivals">Festivals</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Explore</h4>
          <ul className="footer-links">
            <li><Link to="/temples">Temple Heritage</Link></li>
            <li><Link to="/festivals">Festival Calendar</Link></li>
            <li><Link to="/circuits">Pilgrimage Circuit</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>� 2026 Dharohar Bharat</span>
        <span>Heritage � Pilgrimage � Culture</span>
      </div>
    </footer>
  )
}

export default Footer

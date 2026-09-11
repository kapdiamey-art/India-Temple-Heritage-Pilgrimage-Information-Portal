import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Landmark, Search, Menu, X } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navLinks = [
    { label: 'Temples', to: '/temples' },
    { label: 'Pilgrimage', to: '/circuits' },
    { label: 'Festivals', to: '/festivals' },
    { label: 'About', to: '/about' },
  ]

  return (
    <header className="site-header">
      <Link className="brand" to="/">
        <span className="brand-icon"><Landmark size={22} /></span>
        <span className="brand-text">Dharohar Bharat</span>
      </Link>

      <button className="menu-toggle" onClick={() => setOpen(!open)}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      <nav className={open ? 'main-nav open' : 'main-nav'}>
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            to={link.to}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <button className="search-button" aria-label="Search">
        <Search size={18} />
      </button>
    </header>
  )
}

export default Navbar

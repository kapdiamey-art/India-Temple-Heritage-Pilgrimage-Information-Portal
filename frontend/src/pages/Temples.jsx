import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, X } from 'lucide-react'
import temples from '../data/temples.js'

const fallbackImage = 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80'

function Temples() {
  const [search, setSearch] = useState('')
  const [selectedState, setSelectedState] = useState('')
  const [selectedCity, setSelectedCity] = useState('')
  const [selectedDeity, setSelectedDeity] = useState('')

  const states = useMemo(() => {
    return [...new Set(temples.map((temple) => temple.state))].sort()
  }, [])

  const cities = useMemo(() => {
    const matchingStates = selectedState ? temples.filter((temple) => temple.state === selectedState) : temples
    return [...new Set(matchingStates.map((temple) => temple.city))].sort()
  }, [selectedState])

  const deities = useMemo(() => {
    return [...new Set(temples.map((temple) => temple.deity))].sort()
  }, [])

  const filteredTemples = useMemo(() => {
    return temples.filter((temple) => {
      const matchesSearch = temple.name.toLowerCase().includes(search.trim().toLowerCase())
      const matchesState = selectedState ? temple.state === selectedState : true
      const matchesCity = selectedCity ? temple.city === selectedCity : true
      const matchesDeity = selectedDeity ? temple.deity === selectedDeity : true

      return matchesSearch && matchesState && matchesCity && matchesDeity
    })
  }, [search, selectedState, selectedCity, selectedDeity])

  const clearFilters = () => {
    setSearch('')
    setSelectedState('')
    setSelectedCity('')
    setSelectedDeity('')
  }

  return (
    <section className="page page-temples">
      <section className="page-hero compact-hero">
        <div className="page-hero-content">
          <span className="eyebrow light">Temple Directory</span>
          <h1>Explore Temples</h1>
          <p>Discover sacred temples and heritage destinations across India.</p>
          <span className="sample-data-note">Sample UI data for testing only</span>
        </div>
      </section>

      <section className="explore-panel">
        <div className="explore-toolbar">
          <div className="search-bar">
            <Search size={16} />
            <input
              type="text"
              value={search}
              placeholder="Search by temple name"
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>

          <div className="filter-row">
            <div className="filter-control">
              <label htmlFor="stateFilter">State</label>
              <select id="stateFilter" value={selectedState} onChange={(event) => {
                setSelectedState(event.target.value)
                setSelectedCity('')
              }}>
                <option value="">All States</option>
                {states.map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>

            <div className="filter-control">
              <label htmlFor="cityFilter">City</label>
              <select id="cityFilter" value={selectedCity} onChange={(event) => setSelectedCity(event.target.value)}>
                <option value="">All Cities</option>
                {cities.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>

            <div className="filter-control">
              <label htmlFor="deityFilter">Deity</label>
              <select id="deityFilter" value={selectedDeity} onChange={(event) => setSelectedDeity(event.target.value)}>
                <option value="">All Deities</option>
                {deities.map((deity) => (
                  <option key={deity} value={deity}>{deity}</option>
                ))}
              </select>
            </div>

            <button className="clear-filters" onClick={clearFilters}>
              <X size={14} /> Clear Filters
            </button>
          </div>
        </div>

        <div className="results-summary">
          <span>Showing {filteredTemples.length} {filteredTemples.length === 1 ? 'temple' : 'temples'}</span>
        </div>

        {filteredTemples.length > 0 ? (
          <section className="cards-grid temples-grid">
            {filteredTemples.map((temple) => (
              <article className="place-card" key={temple.id}>
                <div className="place-image-wrap">
                  <img
                    className="place-image"
                    src={temple.image}
                    alt={temple.name}
                    onError={(event) => {
                      event.currentTarget.onerror = null
                      event.currentTarget.src = fallbackImage
                    }}
                  />
                </div>
                <div className="place-content">
                  <span className="place-state">{temple.state}</span>
                  <h3>{temple.name}</h3>
                  <p className="place-city">{temple.city}</p>
                  <p className="place-description">{temple.shortDescription}</p>
                  <div className="place-meta">
                    <span className="deity-text">{temple.deity}</span>
                    {temple.featured && <span className="featured-chip">Featured</span>}
                  </div>
                  <Link className="card-button" to={`/temples/${temple.id}`}>View Temple</Link>
                </div>
              </article>
            ))}
          </section>
        ) : (
          <section className="empty-state">
            <div className="empty-content">
              <Search size={30} />
              <h3>No temples found</h3>
              <p>Try changing your searches or filters.</p>
              <button className="clear-filters empty-button" onClick={clearFilters}>
                <X size={14} /> Clear Filters
              </button>
            </div>
          </section>
        )}
      </section>
    </section>
  )
}

export default Temples

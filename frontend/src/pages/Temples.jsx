import { useMemo, useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Search, X, Loader2, ArrowLeft } from 'lucide-react'
import { fetchTemples } from '../services/api.js'

const fallbackImage = '/images/temples/kashi-vishwanath.jpg'

function Temples() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [temples, setTemples] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState(searchParams.get('search') || '')
  const [selectedState, setSelectedState] = useState(searchParams.get('state') || '')
  const [selectedCity, setSelectedCity] = useState(searchParams.get('city') || '')
  const [selectedDeity, setSelectedDeity] = useState(searchParams.get('deity') || '')

  useEffect(() => {
    // Keep internal filters in sync if URL search params change
    if (searchParams.has('state')) setSelectedState(searchParams.get('state'))
    if (searchParams.has('deity')) setSelectedDeity(searchParams.get('deity'))
    if (searchParams.has('search')) setSearch(searchParams.get('search'))
    if (searchParams.has('city')) setSelectedCity(searchParams.get('city'))
  }, [searchParams])

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



  const states = useMemo(() => {
    return [...new Set(temples.map((temple) => temple.state))].sort()
  }, [temples])

  const cities = useMemo(() => {
    const matchingStates = selectedState ? temples.filter((temple) => temple.state === selectedState) : temples
    return [...new Set(matchingStates.map((temple) => temple.city))].sort()
  }, [selectedState, temples])

  const deities = useMemo(() => {
    return [...new Set(temples.map((temple) => temple.deity))].sort()
  }, [temples])

  const filteredTemples = useMemo(() => {
    return temples.filter((temple) => {
      const query = search.trim().toLowerCase()
      const matchesSearch = !query ||
        temple.name.toLowerCase().includes(query) ||
        temple.city.toLowerCase().includes(query) ||
        temple.state.toLowerCase().includes(query)

      const matchesState = selectedState ? temple.state.toLowerCase() === selectedState.toLowerCase() : true
      const matchesCity = selectedCity ? temple.city.toLowerCase() === selectedCity.toLowerCase() : true
      const matchesDeity = selectedDeity ? temple.deity.toLowerCase() === selectedDeity.toLowerCase() : true

      return matchesSearch && matchesState && matchesCity && matchesDeity
    })
  }, [search, selectedState, selectedCity, selectedDeity, temples])


  const clearFilters = () => {
    setSearch('')
    setSelectedState('')
    setSelectedCity('')
    setSelectedDeity('')
    setSearchParams({})
  }


  return (
    <section className="page page-temples">
      <div className="breadcrumb-nav">
        <Link to="/" className="back-home-btn">
          <ArrowLeft size={16} /> Back to Home Page
        </Link>
      </div>
      <section className="page-hero compact-hero">
        <div className="page-hero-content">
          <span className="eyebrow light">Temple Directory</span>
          <h1>Explore Temples</h1>
          <p>Discover sacred temples and heritage destinations across India.</p>
        </div>
      </section>

      <section className="explore-panel">
        <div className="explore-toolbar">
          <div className="search-bar">
            <Search size={16} />
            <input
              id="searchInput"
              type="text"
              value={search}
              placeholder="Search by temple, city or state"
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

        {loading ? (
          <div style={{ textAlign: 'center', padding: '4rem 0' }}>
            <Loader2 className="animate-spin" size={36} style={{ margin: '0 auto', color: '#B8860B' }} />
            <p style={{ marginTop: '0.75rem', color: '#666' }}>Fetching temple heritage records from database...</p>
          </div>
        ) : filteredTemples.length > 0 ? (
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
                  <p className="place-description">{temple.short_description}</p>
                  <div className="place-meta">
                    <span className="deity-text">{temple.deity}</span>
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

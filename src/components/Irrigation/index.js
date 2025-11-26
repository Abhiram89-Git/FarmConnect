import './index.css'
import { Component } from 'react'
import { BiSearch } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { FaFilter, FaRedo, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

// Enhanced Irrigation Systems Data
const irrigationSystems = [
  {
    id: 1,
    category: 'Surface Irrigation',
    icon: '💧',
    categoryEmoji: '🌊',
    description: 'Traditional gravity-based water distribution systems',
    systems: [
      {
        id: 1,
        name: 'Furrow Irrigation',
        emoji: '〰️',
        type: 'Surface',
        description: 'Water flows in furrows between crop rows',
        waterSavings: '60-70%',
        costPerAcre: '₹5,000-8,000',
        efficiency: '75%',
        bestFor: ['Row Crops', 'Vegetables', 'Cotton'],
        suitable: ['Sandy Loam', 'Loamy Soils'],
        waterRequirement: '40-60mm per irrigation',
        applications: '4-6 times per season',
        rating: 4.4,
        reviews: 234,
        suppliers: '12 suppliers',
        contact: '9876543222',
        recommended: true,
        maintenance: 'Regular furrow cleaning and leveling'
      },
      {
        id: 2,
        name: 'Border Irrigation',
        emoji: '📏',
        type: 'Surface',
        description: 'Long narrow strips with border dykes',
        waterSavings: '70-80%',
        costPerAcre: '₹6,000-9,000',
        efficiency: '80%',
        bestFor: ['Sugarcane', 'Fodder', 'Cereals'],
        suitable: ['All soil types', 'Flat terrain'],
        waterRequirement: '50-70mm per irrigation',
        applications: '3-5 times per season',
        rating: 4.5,
        reviews: 189,
        suppliers: '10 suppliers',
        contact: '9876543223',
        recommended: true,
        maintenance: 'Border upkeep and slope adjustment'
      },
      {
        id: 3,
        name: 'Basin Irrigation',
        emoji: '⬜',
        type: 'Surface',
        description: 'Self-contained basins for water ponding',
        waterSavings: '80-90%',
        costPerAcre: '₹7,000-10,000',
        efficiency: '85%',
        bestFor: ['Orchards', 'Fruits', 'Rice'],
        suitable: ['Well-leveled land', 'Loamy soils'],
        waterRequirement: '60-80mm per irrigation',
        applications: '2-4 times per season',
        rating: 4.6,
        reviews: 267,
        suppliers: '8 suppliers',
        contact: '9876543224',
        recommended: false,
        maintenance: 'Basin embankment reinforcement'
      }
    ]
  },
  {
    id: 2,
    category: 'Pressurized Irrigation',
    icon: '💨',
    categoryEmoji: '🔄',
    description: 'Modern mechanized water delivery systems',
    systems: [
      {
        id: 4,
        name: 'Center Pivot Sprinkler',
        emoji: '🔄',
        type: 'Pressurized',
        description: 'Rotating pipe system covering circular area',
        waterSavings: '85-95%',
        costPerAcre: '₹80,000-150,000',
        efficiency: '90%',
        bestFor: ['All crops', 'Large farms', 'Uniform watering'],
        suitable: ['All soil types', 'Square/rectangular fields'],
        waterRequirement: '25-40mm per irrigation',
        applications: '10-15 days interval',
        rating: 4.8,
        reviews: 445,
        suppliers: '15 suppliers',
        contact: '9876543225',
        recommended: true,
        maintenance: 'Seasonal servicing and nozzle replacement'
      },
      {
        id: 5,
        name: 'Portable Sprinklers',
        emoji: '💦',
        type: 'Pressurized',
        description: 'Movable sprinkler systems for flexible coverage',
        waterSavings: '75-85%',
        costPerAcre: '₹15,000-30,000',
        efficiency: '80%',
        bestFor: ['Small farms', 'Vegetables', 'Nurseries'],
        suitable: ['All terrains', 'Small to medium plots'],
        waterRequirement: '30-45mm per irrigation',
        applications: '7-10 days interval',
        rating: 4.3,
        reviews: 312,
        suppliers: '18 suppliers',
        contact: '9876543226',
        recommended: true,
        maintenance: 'Regular hose inspection and nozzle cleaning'
      },
      {
        id: 6,
        name: 'Drip Irrigation',
        emoji: '💧',
        type: 'Pressurized',
        description: 'Precise water delivery directly to plant roots',
        waterSavings: '95%+',
        costPerAcre: '₹25,000-40,000',
        efficiency: '95%',
        bestFor: ['Drip crops', 'Vegetables', 'Orchards'],
        suitable: ['Sandy soils', 'Hill slopes', 'Water-scarce areas'],
        waterRequirement: '15-25mm per irrigation',
        applications: '1-3 days interval',
        rating: 4.9,
        reviews: 578,
        suppliers: '20 suppliers',
        contact: '9876543227',
        recommended: true,
        maintenance: 'Regular filter cleaning and dripper replacement'
      }
    ]
  },
  {
    id: 3,
    category: 'Smart Irrigation',
    icon: '📱',
    categoryEmoji: '🤖',
    description: 'IoT-enabled automated irrigation management',
    systems: [
      {
        id: 7,
        name: 'Manual Valve Systems',
        emoji: '🚰',
        type: 'Manual/Smart',
        description: 'User-controlled water release with flow meters',
        waterSavings: '65-75%',
        costPerAcre: '₹8,000-15,000',
        efficiency: '78%',
        bestFor: ['Budget farms', 'Small holdings', 'Training'],
        suitable: ['All soil types', 'Any terrain'],
        waterRequirement: 'Variable',
        applications: 'As needed',
        rating: 4.2,
        reviews: 156,
        suppliers: '12 suppliers',
        contact: '9876543228',
        recommended: false,
        maintenance: 'Valve lubrication and meter calibration'
      },
      {
        id: 8,
        name: 'Smart Sensor Irrigation',
        emoji: '📡',
        type: 'Manual/Smart',
        description: 'Automated system with soil moisture sensors',
        waterSavings: '90-95%',
        costPerAcre: '₹35,000-60,000',
        efficiency: '93%',
        bestFor: ['Premium crops', 'Water scarcity', 'Large farms'],
        suitable: ['All soil types', 'All terrains'],
        waterRequirement: '20-30mm per irrigation',
        applications: 'Automatic on schedule',
        rating: 4.9,
        reviews: 612,
        suppliers: '10 suppliers',
        contact: '9876543229',
        recommended: true,
        maintenance: 'Monthly sensor check and battery replacement'
      }
    ]
  }
]

class EnhancedIrrigation extends Component {
  state = {
    searchInput: '',
    selectedCategory: 'All',
    sortBy: 'recommended',
    expandedCategories: {
      0: true,
      1: false,
      2: false
    },
    prices: {}
  }

  componentDidMount() {
    this.fetchAllPrices()
    this.priceInterval = setInterval(this.fetchAllPrices, 300000)
  }

  componentWillUnmount() {
    clearInterval(this.priceInterval)
  }

  fetchAllPrices = () => {
    irrigationSystems.forEach(category => {
      category.systems.forEach(system => {
        this.fetchPrice(system)
      })
    })
  }

  fetchPrice = (system) => {
    setTimeout(() => {
      const costRange = system.costPerAcre.match(/₹([\d,]+)-([\d,]+)/)
      const min = parseInt(costRange[1].replace(/,/g, ''))
      const max = parseInt(costRange[2].replace(/,/g, ''))
      const price = Math.floor(Math.random() * (max - min + 1)) + min
      const change = Math.random() > 0.5 ? 'up' : 'down'
      const changePercent = (Math.random() * 4).toFixed(1)

      this.setState(prevState => ({
        prices: { ...prevState.prices, [system.id]: { current: price, change, changePercent } }
      }))
    }, 300)
  }

  onSearch = (event) => {
    this.setState({ searchInput: event.target.value })
  }

  onFilterChange = (category) => {
    this.setState({ selectedCategory: category, searchInput: '' })
  }

  onClearFilters = () => {
    this.setState({ selectedCategory: 'All', searchInput: '', sortBy: 'recommended' })
  }

  toggleCategory = (index) => {
    this.setState(prevState => ({
      expandedCategories: {
        ...prevState.expandedCategories,
        [index]: !prevState.expandedCategories[index]
      }
    }))
  }

  getFilteredSystems = () => {
    let systems = []
    irrigationSystems.forEach(category => {
      systems = [...systems, ...category.systems]
    })

    systems = systems.filter(system => {
      const matchesSearch = system.name.toLowerCase().includes(this.state.searchInput.toLowerCase()) ||
                           system.description.toLowerCase().includes(this.state.searchInput.toLowerCase()) ||
                           system.bestFor.some(c => c.toLowerCase().includes(this.state.searchInput.toLowerCase()))
      const matchesCategory = this.state.selectedCategory === 'All' || system.type === this.state.selectedCategory
      return matchesSearch && matchesCategory
    })

    return systems.sort((a, b) => {
      if (this.state.sortBy === 'recommended') {
        return b.recommended - a.recommended
      } else if (this.state.sortBy === 'rating') {
        return b.rating - a.rating
      } else if (this.state.sortBy === 'efficiency') {
        return parseInt(b.efficiency) - parseInt(a.efficiency)
      }
      return 0
    })
  }

  renderSystemCard = (system) => {
    const { prices } = this.state
    const priceData = prices[system.id]

    return (
      <div key={system.id} className='irrigation-system-card'>
        {system.recommended && <div className='irrigation-recommended-badge'>⭐ Recommended</div>}
        
        <div className='irrigation-card-header'>
          <span className='irrigation-emoji-large'>{system.emoji}</span>
          <div className='irrigation-header-info'>
            <h3 className='irrigation-name'>{system.name}</h3>
            <div className='irrigation-rating'>
              {'⭐'.repeat(Math.floor(system.rating))} 
              <span className='irrigation-reviews'>({system.reviews})</span>
            </div>
          </div>
        </div>

        <p className='irrigation-description'>{system.description}</p>

        <div className='irrigation-specs'>
          <div className='spec-row'>
            <span className='spec-label'>💨 Efficiency</span>
            <div className='efficiency-bar-small'>
              <div className='efficiency-fill-small' style={{width: system.efficiency}}></div>
            </div>
            <span className='spec-value'>{system.efficiency}</span>
          </div>
          <div className='spec-row'>
            <span className='spec-label'>💧 Water Savings</span>
            <span className='spec-value'>{system.waterSavings}</span>
          </div>
          <div className='spec-row'>
            <span className='spec-label'>📊 Requirement</span>
            <span className='spec-value'>{system.waterRequirement}</span>
          </div>
          <div className='spec-row'>
            <span className='spec-label'>🌾 Applications</span>
            <span className='spec-value'>{system.applications}</span>
          </div>
        </div>

        <div className='irrigation-benefits'>
          {system.bestFor.map((benefit, idx) => (
            <span key={idx} className='irrigation-benefit-tag'>{benefit}</span>
          ))}
        </div>

        <div className='irrigation-suitable'>
          <span className='suitable-label'>🌱 Suitable Soils:</span>
          <div className='soil-tags'>
            {system.suitable.map((soil, idx) => (
              <span key={idx} className='soil-tag'>{soil}</span>
            ))}
          </div>
        </div>

        <div className='irrigation-price-info'>
          <span className='price-label'>💰 Cost per Acre</span>
          <div className='price-content'>
            <span className='price-range'>{system.costPerAcre}</span>
            {priceData && (
              <span className={`price-trend ${priceData.change}`}>
                {priceData.change === 'up' ? '📈' : '📉'} ₹{priceData.current.toLocaleString('en-IN')}
              </span>
            )}
          </div>
        </div>

        <div className='irrigation-contact'>
          <div className='contact-badge'>
            <FaMapMarkerAlt /> {system.suppliers}
          </div>
          <div className='contact-badge'>
            <FaPhone /> {system.contact}
          </div>
        </div>

        <div className='irrigation-maintenance'>
          <span className='maintenance-label'>🔧 Maintenance:</span>
          <p className='maintenance-text'>{system.maintenance}</p>
        </div>
      </div>
    )
  }

  render() {
    const { searchInput, selectedCategory, expandedCategories } = this.state
    const currentPath = window.location.pathname
    const filteredSystems = this.getFilteredSystems()
    const categories = ['All', 'Surface', 'Pressurized', 'Manual/Smart']

    return (
      <div className='enhanced-irrigation-container'>
        {/* HEADER */}
        <header className='header'>
          <div className='img-logo'>
            <img
              src='https://ik.imagekit.io/wer9cus16/Gemini_Generated_Image_hxzmtlhxzmtlhxzm.png?updatedAt=1761411100421'
              className='logo'
              alt='FarmConnect'
            />
            <h1 className='heading'>
              Farm<span className='connect'>Connect</span>
            </h1>
          </div>
          <div className='search-bar'>
            <input
              type='search'
              value={searchInput}
              onChange={this.onSearch}
              placeholder='Search irrigation systems...'
              className='search-input'
            />
            <BiSearch className='search-icon' />
          </div>
        </header>

        {/* FILTER BAR */}
        <div className='irrigation-filter-bar'>
          <span className='filter-label-main'><FaFilter /> Filter By Type:</span>
          <div className='filter-buttons-group'>
            {categories.map(category => (
              <button
                key={category}
                className={`irrigation-filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => this.onFilterChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className='sort-clear-group'>
            <select 
              className='irrigation-sort-select'
              value={this.state.sortBy}
              onChange={(e) => this.setState({ sortBy: e.target.value })}
            >
              <option value='recommended'>⭐ Recommended</option>
              <option value='rating'>🌟 Highest Rated</option>
              <option value='efficiency'>⚡ Most Efficient</option>
            </select>
            <button className='irrigation-clear-btn' onClick={this.onClearFilters}>
              <FaRedo /> Reset
            </button>
          </div>
        </div>

        {/* RESULTS INFO */}
        <div className='irrigation-results-info'>
          <p>📊 Found <strong>{filteredSystems.length}</strong> irrigation systems</p>
        </div>

        {/* SYSTEMS BY CATEGORY */}
        <div className='irrigation-systems-container'>
          {irrigationSystems.map((category, idx) => (
            <div key={idx} className='irrigation-category-section'>
              <button 
                className='irrigation-category-toggle'
                onClick={() => this.toggleCategory(idx)}
              >
                <span className='category-emoji'>{category.categoryEmoji}</span>
                <div className='category-info'>
                  <h2>{category.category}</h2>
                  <p>{category.description}</p>
                </div>
                <span className='toggle-chevron'>{expandedCategories[idx] ? '▼' : '▶'}</span>
              </button>

              {expandedCategories[idx] && (
                <div className='irrigation-systems-grid'>
                  {category.systems
                    .filter(system => filteredSystems.includes(system))
                    .map(system => this.renderSystemCard(system))}
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredSystems.length === 0 && (
          <div className='irrigation-no-results'>
            <p>🔍 No irrigation systems found. Try adjusting your filters.</p>
          </div>
        )}

        {/* FOOTER */}
        <footer className='footer'>
          <Link to='/'><button>Home</button></Link>
          <Link to='/marketplace'><button>MarketPlace</button></Link>
          <Link to='/plants'><button>Plants</button></Link>
          <Link to='/tools'><button>Tools</button></Link>
          <Link to='/irrigation'><button>Irrigation</button></Link>
          <Link to='/crops'><button>Crops</button></Link>
        </footer>

        {/* MOBILE NAV */}
        <nav className='mobile-nav'>
          <div className='mobile-nav-grid'>
            <Link to='/' className={`mobile-nav-item ${currentPath === '/' ? 'active' : ''}`}>
              <span className='mobile-nav-icon'>🏠</span>
              <span className='mobile-nav-label'>Home</span>
            </Link>
            <Link to='/marketplace' className={`mobile-nav-item ${currentPath === '/marketplace' ? 'active' : ''}`}>
              <span className='mobile-nav-icon'>🛒</span>
              <span className='mobile-nav-label'>MarketPlace</span>
            </Link>
            <Link to='/plants' className={`mobile-nav-item ${currentPath === '/plants' ? 'active' : ''}`}>
              <span className='mobile-nav-icon'>🌱</span>
              <span className='mobile-nav-label'>Plants</span>
            </Link>
            <Link to='/tools' className={`mobile-nav-item ${currentPath === '/tools' ? 'active' : ''}`}>
              <span className='mobile-nav-icon'>🔧</span>
              <span className='mobile-nav-label'>Tools</span>
            </Link>
            <Link to='/irrigation' className={`mobile-nav-item ${currentPath === '/irrigation' ? 'active' : ''}`}>
              <span className='mobile-nav-icon'>💧</span>
              <span className='mobile-nav-label'>Irrigation</span>
            </Link>
            <Link to='/crops' className={`mobile-nav-item ${currentPath === '/crops' ? 'active' : ''}`}>
              <span className='mobile-nav-icon'>🌾</span>
              <span className='mobile-nav-label'>Crops</span>
            </Link>
          </div>
        </nav>
      </div>
    )
  }
}

export default EnhancedIrrigation
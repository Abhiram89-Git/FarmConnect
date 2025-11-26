import './index.css'
import { Component } from 'react'
import { BiSearch } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { FaFilter, FaRedo, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

// Enhanced Agriculture Data with Local Relevance
const enhancedData = [
  {
    id: 1,
    category: 'Input Materials',
    icon: '🧪',
    categoryEmoji: '🧪',
    items: [
      {
        id: 1,
        name: 'Nitrogen Fertilizer (Urea)',
        emoji: '🧪',
        type: 'Input Materials',
        priceRange: { min: 500, max: 800 },
        season: 'Year-round',
        recommended: true,
        description: 'High-nitrogen fertilizer for leafy vegetables and cereals',
        dosage: '100-150 kg/acre',
        application: 'Before sowing & top dressing',
        benefits: ['Increases leaf growth', 'Improves yield', 'Cost-effective'],
        soilType: ['Loamy', 'Sandy', 'Clay'],
        crops: ['Rice', 'Wheat', 'Vegetables'],
        localSuppliers: '5 suppliers nearby',
        contact: '☎️ 9876543210',
        rating: 4.5,
        reviews: 148
      },
      {
        id: 2,
        name: 'Organic Compost',
        emoji: '♻️',
        type: 'Input Materials',
        priceRange: { min: 300, max: 600 },
        season: 'Year-round',
        recommended: true,
        description: 'Eco-friendly organic compost enriched with nutrients',
        dosage: '5-10 tons/acre',
        application: 'Mix with soil before planting',
        benefits: ['Improves soil health', 'Sustainable', 'No chemicals'],
        soilType: ['All types'],
        crops: ['All crops'],
        localSuppliers: '8 suppliers nearby',
        contact: '☎️ 9876543211',
        rating: 4.8,
        reviews: 256
      },
      {
        id: 3,
        name: 'Neem Oil Pesticide',
        emoji: '🌿',
        type: 'Input Materials',
        priceRange: { min: 400, max: 1000 },
        season: 'Summer',
        recommended: true,
        description: 'Organic neem-based pest control - safe for humans',
        dosage: '3-5% solution',
        application: 'Spray on leaves',
        benefits: ['Organic certified', 'Safe for families', 'Effective control'],
        soilType: ['All types'],
        crops: ['Vegetables', 'Fruits', 'Pulses'],
        localSuppliers: '4 suppliers nearby',
        contact: '☎️ 9876543212',
        rating: 4.6,
        reviews: 189
      },
      {
        id: 4,
        name: 'NPK Fertilizer (20:20:20)',
        emoji: '⚗️',
        type: 'Input Materials',
        priceRange: { min: 800, max: 1200 },
        season: 'Year-round',
        recommended: false,
        description: 'Balanced NPK for general crop nutrition',
        dosage: '80-120 kg/acre',
        application: 'During growth stage',
        benefits: ['Balanced nutrients', 'Improved quality', 'Better yield'],
        soilType: ['Loamy', 'Sandy'],
        crops: ['Cotton', 'Sugarcane', 'Vegetables'],
        localSuppliers: '6 suppliers nearby',
        contact: '☎️ 9876543213',
        rating: 4.3,
        reviews: 127
      }
    ]
  },
  {
    id: 2,
    category: 'Seeds & Saplings',
    icon: '🌱',
    categoryEmoji: '🌱',
    items: [
      {
        id: 5,
        name: 'Certified Paddy Seeds (IR-64)',
        emoji: '🌾',
        type: 'Seeds & Saplings',
        priceRange: { min: 1200, max: 2000 },
        season: 'Monsoon',
        recommended: true,
        description: 'High-yielding paddy variety suitable for Tamil Nadu',
        dosage: '20-25 kg/acre',
        application: 'Direct sowing',
        benefits: ['High germination (95%)', 'Disease resistant', 'Government certified'],
        soilType: ['All types'],
        crops: ['Rice'],
        localSuppliers: '10 suppliers nearby',
        contact: '☎️ 9876543214',
        rating: 4.9,
        reviews: 412
      },
      {
        id: 6,
        name: 'Tomato F1 Hybrid Seeds',
        emoji: '🍅',
        type: 'Seeds & Saplings',
        priceRange: { min: 800, max: 1500 },
        season: 'Year-round',
        recommended: true,
        description: 'High-yielding hybrid tomato - disease resistant',
        dosage: '500g/acre',
        application: 'Nursery sowing',
        benefits: ['Heavy yield', 'Long shelf life', 'Market preference'],
        soilType: ['Loamy', 'Sandy loam'],
        crops: ['Tomato'],
        localSuppliers: '7 suppliers nearby',
        contact: '☎️ 9876543215',
        rating: 4.7,
        reviews: 334
      },
      {
        id: 7,
        name: 'Mango Saplings (Alphonso)',
        emoji: '🥭',
        type: 'Seeds & Saplings',
        priceRange: { min: 300, max: 500 },
        season: 'Summer',
        recommended: false,
        description: 'Premium grafted mango saplings - 1 year old',
        dosage: '100-150 saplings/acre',
        application: 'Transplanting',
        benefits: ['Early fruiting (3 years)', 'Quality assured', 'High value'],
        soilType: ['Sandy loam', 'Loamy'],
        crops: ['Mango'],
        localSuppliers: '3 suppliers nearby',
        contact: '☎️ 9876543216',
        rating: 4.8,
        reviews: 198
      },
      {
        id: 8,
        name: 'Onion Seedlings',
        emoji: '🧅',
        type: 'Seeds & Saplings',
        priceRange: { min: 40, max: 80 },
        season: 'Oct-Dec',
        recommended: true,
        description: 'Ready-to-transplant onion seedlings',
        dosage: '60,000-80,000 seedlings/acre',
        application: 'Direct transplanting',
        benefits: ['Early harvest', 'Reduced risk', 'Time-saving'],
        soilType: ['Well-drained'],
        crops: ['Onion'],
        localSuppliers: '9 suppliers nearby',
        contact: '☎️ 9876543217',
        rating: 4.6,
        reviews: 267
      }
    ]
  },
  {
    id: 3,
    category: 'Farm Equipment',
    icon: '🔧',
    categoryEmoji: '🔧',
    items: [
      {
        id: 9,
        name: 'Drip Irrigation System',
        emoji: '💧',
        type: 'Farm Equipment',
        priceRange: { min: 8000, max: 15000 },
        season: 'Year-round',
        recommended: true,
        description: 'Water-saving drip system for 1 acre',
        dosage: '1 complete setup/acre',
        application: 'Installation',
        benefits: ['60-70% water saving', 'Fertilizer saving', 'Labor saving'],
        soilType: ['All types'],
        crops: ['All crops'],
        localSuppliers: '5 suppliers nearby',
        contact: '☎️ 9876543218',
        rating: 4.8,
        reviews: 456
      },
      {
        id: 10,
        name: 'Power Sprayer',
        emoji: '🚜',
        type: 'Farm Equipment',
        priceRange: { min: 3000, max: 6000 },
        season: 'Year-round',
        recommended: true,
        description: 'Portable battery-operated sprayer for pesticides',
        dosage: '1 unit/farm',
        application: 'Pest/disease management',
        benefits: ['Easy operation', 'Uniform spray', 'Safe for operator'],
        soilType: ['All types'],
        crops: ['All crops'],
        localSuppliers: '6 suppliers nearby',
        contact: '☎️ 9876543219',
        rating: 4.5,
        reviews: 289
      },
      {
        id: 11,
        name: 'Soil Testing Kit',
        emoji: '🧬',
        type: 'Farm Equipment',
        priceRange: { min: 2000, max: 4000 },
        season: 'Year-round',
        recommended: true,
        description: 'DIY soil testing for pH, NPK, organic matter',
        dosage: '1 kit/farm',
        application: 'Soil analysis',
        benefits: ['Precise fertilizer use', 'Cost savings', 'Better yield'],
        soilType: ['All types'],
        crops: ['All crops'],
        localSuppliers: '4 suppliers nearby',
        contact: '☎️ 9876543220',
        rating: 4.7,
        reviews: 178
      },
      {
        id: 12,
        name: 'Weather Monitoring Station',
        emoji: '🌡️',
        type: 'Farm Equipment',
        priceRange: { min: 5000, max: 10000 },
        season: 'Year-round',
        recommended: false,
        description: 'IoT device for real-time weather & crop alerts',
        dosage: '1 unit/farm',
        application: 'Monitoring',
        benefits: ['Pest prediction', 'Crop planning', 'Mobile alerts'],
        soilType: ['All types'],
        crops: ['All crops'],
        localSuppliers: '2 suppliers nearby',
        contact: '☎️ 9876543221',
        rating: 4.9,
        reviews: 312
      }
    ]
  }
]

class Plants extends Component {
  state = {
    searchInput: '',
    selectedCategory: 'All',
    sortBy: 'recommended',
    sortOrder: 'asc',
    selectedSeason: 'All',
    expandedSections: {
      0: true,
      1: false,
      2: false
    },
    prices: {},
    loading: {}
  }

  componentDidMount() {
    this.fetchAllPrices()
    this.priceInterval = setInterval(this.fetchAllPrices, 300000)
  }

  componentWillUnmount() {
    clearInterval(this.priceInterval)
  }

  fetchAllPrices = () => {
    enhancedData.forEach(category => {
      category.items.forEach(item => {
        this.fetchPrice(item)
      })
    })
  }

  fetchPrice = (item) => {
    this.setState(prevState => ({
      loading: { ...prevState.loading, [item.id]: true }
    }))

    setTimeout(() => {
      const price = Math.floor(Math.random() * (item.priceRange.max - item.priceRange.min + 1)) + item.priceRange.min
      const change = Math.random() > 0.5 ? 'up' : 'down'
      const changePercent = (Math.random() * 8).toFixed(1)

      this.setState(prevState => ({
        prices: { ...prevState.prices, [item.id]: { current: `₹${price}`, change, changePercent } },
        loading: { ...prevState.loading, [item.id]: false }
      }))
    }, 300)
  }

  onSearch = (event) => this.setState({ searchInput: event.target.value })
  onClearFilters = () => this.setState({ searchInput: '', selectedSeason: 'All', sortBy: 'recommended' })
  toggleSection = (index) => {
    this.setState(prevState => ({
      expandedSections: {
        ...prevState.expandedSections,
        [index]: !prevState.expandedSections[index]
      }
    }))
  }

  getFilteredItems = () => {
    let items = []
    enhancedData.forEach(category => {
      items = [...items, ...category.items]
    })

    items = items.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(this.state.searchInput.toLowerCase()) ||
                           item.description.toLowerCase().includes(this.state.searchInput.toLowerCase()) ||
                           item.crops.some(c => c.toLowerCase().includes(this.state.searchInput.toLowerCase()))
      const matchesSeason = this.state.selectedSeason === 'All' || item.season === this.state.selectedSeason
      return matchesSearch && matchesSeason
    })

    return items.sort((a, b) => {
      if (this.state.sortBy === 'recommended') {
        return b.recommended - a.recommended
      } else if (this.state.sortBy === 'rating') {
        return b.rating - a.rating
      } else if (this.state.sortBy === 'price') {
        return this.state.sortOrder === 'asc' ? a.priceRange.min - b.priceRange.min : b.priceRange.max - a.priceRange.max
      }
      return 0
    })
  }

  renderProductCard = (item) => {
    const { prices } = this.state
    const priceData = prices[item.id]

    return (
      <div key={item.id} className='enhanced-product-card'>
        {item.recommended && <div className='recommended-badge'>⭐ Recommended</div>}
        
        <div className='product-header-enhanced'>
          <span className='product-emoji-large'>{item.emoji}</span>
          <div className='product-info-header'>
            <h3 className='product-name'>{item.name}</h3>
            <div className='product-rating'>
              {'⭐'.repeat(Math.floor(item.rating))} <span className='rating-text'>({item.reviews} reviews)</span>
            </div>
          </div>
        </div>

        <p className='product-description'>{item.description}</p>

        <div className='product-details-grid'>
          <div className='detail-item'>
            <span className='detail-label'>📋 Dosage</span>
            <span className='detail-value'>{item.dosage}</span>
          </div>
          <div className='detail-item'>
            <span className='detail-label'>🌾 Application</span>
            <span className='detail-value'>{item.application}</span>
          </div>
          <div className='detail-item'>
            <span className='detail-label'>🗓️ Season</span>
            <span className='detail-value'>{item.season}</span>
          </div>
          <div className='detail-item'>
            <span className='detail-label'>🌱 Best for</span>
            <span className='detail-value'>{item.crops.join(', ')}</span>
          </div>
        </div>

        <div className='product-benefits'>
          <p className='benefits-title'>✅ Key Benefits:</p>
          <div className='benefits-tags'>
            {item.benefits.map((benefit, idx) => (
              <span key={idx} className='benefit-tag-enhanced'>{benefit}</span>
            ))}
          </div>
        </div>

        <div className='product-price-section'>
          <div className='price-info'>
            <span className='price-label'>💰 Price Range</span>
            <span className='price-range'>₹{item.priceRange.min} - ₹{item.priceRange.max}</span>
            {priceData && <span className={`live-price ${priceData.change}`}>
              {priceData.change === 'up' ? '📈' : '📉'} {priceData.current}
            </span>}
          </div>
        </div>

        <div className='product-contact'>
          <div className='contact-item'>
            <FaMapMarkerAlt /> <span>{item.localSuppliers}</span>
          </div>
          <div className='contact-item'>
            <FaPhone /> <span>{item.contact}</span>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const currentPath = window.location.pathname
    const filteredItems = this.getFilteredItems()
    const seasons = ['All', 'Year-round', 'Monsoon', 'Summer', 'Oct-Dec', 'Winter']

    return (
      <div className='enhanced-plants-container'>
        {/* HEADER */}
        <header className='header'>
          <div className="img-logo">
            <img 
              src="https://ik.imagekit.io/wer9cus16/Gemini_Generated_Image_hxzmtlhxzmtlhxzm.png?updatedAt=1761411100421" 
              className="logo" 
              alt="FarmConnect"
            />
            <h1 className="heading">Farm<span className='connect'>Connect</span></h1>
          </div>
          <div className='search-bar'>
            <input
              type='search'
              value={this.state.searchInput}
              onChange={this.onSearch}
              placeholder='Search products, crops, or suppliers...'
              className='search-input'
            />
            <BiSearch className='search-icon' />
          </div>
        </header>

        {/* FILTERS */}
        <div className='enhanced-filter-bar'>
          <div className='filter-group'>
            <span className='filter-label'><FaFilter /> Season:</span>
            <div className='filter-buttons'>
              {seasons.map(season => (
                <button
                  key={season}
                  className={`filter-btn ${this.state.selectedSeason === season ? 'active' : ''}`}
                  onClick={() => this.setState({ selectedSeason: season })}
                >
                  {season}
                </button>
              ))}
            </div>
          </div>

          <div className='filter-group'>
            <span className='filter-label'>Sort By:</span>
            <select 
              className='sort-select'
              value={this.state.sortBy}
              onChange={(e) => this.setState({ sortBy: e.target.value })}
            >
              <option value='recommended'>⭐ Recommended</option>
              <option value='rating'>🌟 Highest Rated</option>
              <option value='price'>💰 Price (Low to High)</option>
            </select>
          </div>

          <button className='clear-filters-btn' onClick={this.onClearFilters}>
            <FaRedo /> Reset All
          </button>
        </div>

        {/* RESULTS INFO */}
        <div className='results-info'>
          <p>📊 Found <strong>{filteredItems.length}</strong> products matching your criteria</p>
        </div>

        {/* PRODUCTS BY CATEGORY */}
        <div className='products-container'>
          {enhancedData.map((category, idx) => {
            const categoryItems = filteredItems.filter(item => item.type === category.categoryEmoji || 
              category.items.some(cat => cat.id === item.id))
            return (
              <div key={idx} className='category-section'>
                <button 
                  className='category-toggle-btn'
                  onClick={() => this.toggleSection(idx)}
                >
                  <span className='category-icon'>{category.icon}</span>
                  <div className='category-text'>
                    <h2>{category.category}</h2>
                    <p>{categoryItems.length} products available</p>
                  </div>
                  <span className='toggle-icon'>{this.state.expandedSections[idx] ? '▼' : '▶'}</span>
                </button>

                {this.state.expandedSections[idx] && (
                  <div className='products-grid'>
                    {category.items
                      .filter(item => filteredItems.includes(item))
                      .map(item => this.renderProductCard(item))}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {filteredItems.length === 0 && (
          <div className='no-results-message'>
            <p>🔍 No products found. Try adjusting your filters or search terms.</p>
          </div>
        )}

        {/* FOOTER */}
        <footer className='footer'>
          <Link to='/'><button>Home</button></Link>
          <Link to="/marketplace"><button>MarketPlace</button></Link>
          <Link to='/plants'><button>Plants</button></Link>
          <Link to='/tools'><button>Tools</button></Link>
          <Link to='/irrigation'><button>Irrigation</button></Link>
          <Link to='/crops'><button>Crops</button></Link>
        </footer>

        {/* MOBILE NAV */}
        <nav className="mobile-nav">
          <div className="mobile-nav-grid">
            <Link to="/" className={`mobile-nav-item ${currentPath === '/' ? 'active' : ''}`}>
              <span className="mobile-nav-icon">🏠</span>
              <span className="mobile-nav-label">Home</span>
            </Link>
            <Link to="/marketplace" className={`mobile-nav-item ${currentPath === '/marketplace' ? 'active' : ''}`}>
              <span className="mobile-nav-icon">🛒</span>
              <span className="mobile-nav-label">MarketPlace</span>
            </Link>
            <Link to="/plants" className={`mobile-nav-item ${currentPath === '/plants' ? 'active' : ''}`}>
              <span className="mobile-nav-icon">🌱</span>
              <span className="mobile-nav-label">Plants</span>
            </Link>
            <Link to="/tools" className={`mobile-nav-item ${currentPath === '/tools' ? 'active' : ''}`}>
              <span className="mobile-nav-icon">🔧</span>
              <span className="mobile-nav-label">Tools</span>
            </Link>
            <Link to="/irrigation" className={`mobile-nav-item ${currentPath === '/irrigation' ? 'active' : ''}`}>
              <span className="mobile-nav-icon">💧</span>
              <span className="mobile-nav-label">Irrigation</span>
            </Link>
            <Link to="/crops" className={`mobile-nav-item ${currentPath === '/crops' ? 'active' : ''}`}>
              <span className="mobile-nav-icon">🌾</span>
              <span className="mobile-nav-label">Crops</span>
            </Link>
          </div>
        </nav>
      </div>
    )
  }
}

export default Plants
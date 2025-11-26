import './index.css'
import { Component } from 'react'
import { BiSearch } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { FaFilter, FaRedo, FaMapMarkerAlt, FaPhone} from 'react-icons/fa'

// Enhanced Crops Data
const enhancedCropsList = [
  {
    id: 1,
    name: 'Rice',
    emoji: '🍚',
    type: 'Cereal',
    category: 'Kharif (Monsoon)',
    description: 'Staple food crop with high yield potential',
    varieties: ['Basmati', 'IR-64', 'Sona Masuri'],
    season: 'Jun-Oct',
    waterRequired: '1000-2000mm',
    soilType: ['Clay', 'Loamy'],
    cycleDays: '120-150',
    avgYield: '50-60 quintals/acre',
    marketPrice: '₹2000-3000/quintal',
    suitableDist: 'Tamil Nadu, Andhra Pradesh',
    suppliers: '18 suppliers',
    contact: '9876543230',
    rating: 4.6,
    reviews: 234,
    recommended: true,
    tips: 'Ensure puddled fields and proper water management',
    healthBenefits: 'Rich in carbs, energy booster',
    exportPotential: 'High'
  },
  {
    id: 2,
    name: 'Cotton',
    emoji: '🌾',
    type: 'Cash Crop',
    category: 'Kharif',
    description: 'Premium cash crop with market demand',
    varieties: ['Bt Cotton', 'MCU 5', 'H-777'],
    season: 'May-Dec',
    waterRequired: '600-900mm',
    soilType: ['Black Soil', 'Sandy Loam'],
    cycleDays: '160-180',
    avgYield: '15-20 quintals/acre',
    marketPrice: '₹5000-7000/quintal',
    suitableDist: 'Andhra Pradesh, Karnataka',
    suppliers: '12 suppliers',
    contact: '9876543231',
    rating: 4.4,
    reviews: 189,
    recommended: true,
    tips: 'Monitor pest attacks, especially bollworm',
    healthBenefits: 'Textile & industrial use',
    exportPotential: 'Very High'
  },
  {
    id: 3,
    name: 'Chilli',
    emoji: '🌶️',
    type: 'Cash Crop',
    category: 'Rabi (Winter)',
    description: 'High-value spice crop with global demand',
    varieties: ['Guntur 561', 'Byadagi', 'LCA 334'],
    season: 'Aug-Mar',
    waterRequired: '400-600mm',
    soilType: ['Well-drained', 'Fertile Loam'],
    cycleDays: '150-180',
    avgYield: '8-12 quintals/acre',
    marketPrice: '₹10000-15000/quintal',
    suitableDist: 'Andhra Pradesh, Karnataka',
    suppliers: '15 suppliers',
    contact: '9876543232',
    rating: 4.7,
    reviews: 267,
    recommended: true,
    tips: 'Drip irrigation recommended for better yield',
    healthBenefits: 'Vitamin C, antioxidants, metabolism boost',
    exportPotential: 'Very High'
  },
  {
    id: 4,
    name: 'Barley',
    emoji: '🌾',
    type: 'Cereal',
    category: 'Rabi',
    description: 'Winter cereal with protein richness',
    varieties: ['RD-2552', 'K-125', 'Jyoti'],
    season: 'Oct-Mar',
    waterRequired: '400-500mm',
    soilType: ['All types', 'Loamy Soil'],
    cycleDays: '125-135',
    avgYield: '35-45 quintals/acre',
    marketPrice: '₹1800-2200/quintal',
    suitableDist: 'Madhya Pradesh, Rajasthan',
    suppliers: '10 suppliers',
    contact: '9876543233',
    rating: 4.3,
    reviews: 156,
    recommended: false,
    tips: 'Frost management during flowering stage',
    healthBenefits: 'High protein, minerals',
    exportPotential: 'Medium'
  },
  {
    id: 5,
    name: 'Millets',
    emoji: '🌰',
    type: 'Millets',
    category: 'Kharif',
    description: 'Nutritious crop, climate-resilient',
    varieties: ['Pearl Millet', 'Finger Millet', 'Sorghum'],
    season: 'Jun-Sep',
    waterRequired: '300-400mm',
    soilType: ['Sandy', 'All types'],
    cycleDays: '70-100',
    avgYield: '10-15 quintals/acre',
    marketPrice: '₹2500-3500/quintal',
    suitableDist: 'All regions (drought-prone areas)',
    suppliers: '8 suppliers',
    contact: '9876543234',
    rating: 4.5,
    reviews: 198,
    recommended: true,
    tips: 'Drought-tolerant, minimal water requirement',
    healthBenefits: 'Gluten-free, high fiber, energy rich',
    exportPotential: 'High'
  },
  {
    id: 6,
    name: 'Soybean',
    emoji: '🫘',
    type: 'Oilseed',
    category: 'Kharif',
    description: 'Protein-rich oilseed crop',
    varieties: ['JS-20-29', 'MACS 1407', 'Indira Soybean'],
    season: 'Jun-Oct',
    waterRequired: '600-700mm',
    soilType: ['Fertile Loam', 'Clay Loam'],
    cycleDays: '95-120',
    avgYield: '15-20 quintals/acre',
    marketPrice: '₹5000-6500/quintal',
    suitableDist: 'Maharashtra, Madhya Pradesh',
    suppliers: '14 suppliers',
    contact: '9876543235',
    rating: 4.6,
    reviews: 223,
    recommended: true,
    tips: 'Crop rotation beneficial, pest monitoring needed',
    healthBenefits: 'High protein, omega fatty acids',
    exportPotential: 'Very High'
  },
  {
    id: 7,
    name: 'Maize',
    emoji: '🌽',
    type: 'Cereal',
    category: 'Kharif/Rabi',
    description: 'Versatile crop for food & feed',
    varieties: ['Rajendra Composite-2', 'PM-6', 'NK-40'],
    season: 'Apr-Aug / Oct-Jan',
    waterRequired: '500-750mm',
    soilType: ['Well-drained', 'Loamy'],
    cycleDays: '80-120',
    avgYield: '40-60 quintals/acre',
    marketPrice: '₹1800-2400/quintal',
    suitableDist: 'Pan India',
    suppliers: '16 suppliers',
    contact: '9876543236',
    rating: 4.7,
    reviews: 289,
    recommended: true,
    tips: 'Hybrid varieties recommended for higher yields',
    healthBenefits: 'Carbs, B vitamins, antioxidants',
    exportPotential: 'High'
  },
  {
    id: 8,
    name: 'Sugarcane',
    emoji: '🎋',
    type: 'Cash Crop',
    category: 'Year-round',
    description: 'Long-duration sugar crop',
    varieties: ['Co-86032', 'Co-94008', 'CoJ-64'],
    season: 'Dec-Nov (12 months)',
    waterRequired: '1200-1500mm',
    soilType: ['Fertile Black', 'Well-drained'],
    cycleDays: '365-375',
    avgYield: '50-70 tonnes/acre',
    marketPrice: '₹2500-3500/quintal',
    suitableDist: 'Uttar Pradesh, Maharashtra',
    suppliers: '11 suppliers',
    contact: '9876543237',
    rating: 4.5,
    reviews: 245,
    recommended: false,
    tips: 'Heavy feeder, requires frequent irrigation',
    healthBenefits: 'Sugar production, jaggery making',
    exportPotential: 'Medium'
  }
]

class EnhancedCrops extends Component {
  state = {
    searchInput: '',
    selectedCategory: 'All',
    sortBy: 'recommended',
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
    enhancedCropsList.forEach(crop => {
      this.fetchPrice(crop)
    })
  }

  fetchPrice = (crop) => {
    setTimeout(() => {
      const priceMatch = crop.marketPrice.match(/₹([\d,]+)-([\d,]+)/)
      const min = parseInt(priceMatch[1].replace(/,/g, ''))
      const max = parseInt(priceMatch[2].replace(/,/g, ''))
      const price = Math.floor(Math.random() * (max - min + 1)) + min
      const change = Math.random() > 0.5 ? 'up' : 'down'
      const changePercent = (Math.random() * 6).toFixed(1)

      this.setState(prevState => ({
        prices: { ...prevState.prices, [crop.id]: { current: price, change, changePercent } }
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

  getFilteredCrops = () => {
    let crops = enhancedCropsList.filter(crop => {
      const matchesSearch = crop.name.toLowerCase().includes(this.state.searchInput.toLowerCase()) ||
                           crop.type.toLowerCase().includes(this.state.searchInput.toLowerCase())
      const matchesCategory = this.state.selectedCategory === 'All' || crop.type === this.state.selectedCategory
      return matchesSearch && matchesCategory
    })

    return crops.sort((a, b) => {
      if (this.state.sortBy === 'recommended') {
        return b.recommended - a.recommended
      } else if (this.state.sortBy === 'rating') {
        return b.rating - a.rating
      } else if (this.state.sortBy === 'yield') {
        return parseInt(b.avgYield) - parseInt(a.avgYield)
      }
      return 0
    })
  }

  renderCropCard = (crop) => {
    const { prices } = this.state
    const priceData = prices[crop.id]

    return (
      <div key={crop.id} className='crop-card-enhanced'>
        {crop.recommended && <div className='crop-recommended-badge'>⭐ Recommended</div>}

        <div className='crop-card-header'>
          <span className='crop-emoji-large'>{crop.emoji}</span>
          <div className='crop-header-info'>
            <h3 className='crop-name'>{crop.name}</h3>
            <p className='crop-type-badge'>{crop.type}</p>
            <div className='crop-rating'>
              {'⭐'.repeat(Math.floor(crop.rating))}
              <span className='rating-count'>({crop.reviews})</span>
            </div>
          </div>
        </div>

        <p className='crop-description'>{crop.description}</p>

        <div className='crop-specs-grid'>
          <div className='crop-spec-item'>
            <span className='spec-emoji'>🌾</span>
            <span className='spec-label'>Season</span>
            <span className='spec-value'>{crop.season}</span>
          </div>
          <div className='crop-spec-item'>
            <span className='spec-emoji'>💧</span>
            <span className='spec-label'>Water Need</span>
            <span className='spec-value'>{crop.waterRequired}</span>
          </div>
          <div className='crop-spec-item'>
            <span className='spec-emoji'>📏</span>
            <span className='spec-label'>Cycle</span>
            <span className='spec-value'>{crop.cycleDays}</span>
          </div>
          <div className='crop-spec-item'>
            <span className='spec-emoji'>📈</span>
            <span className='spec-label'>Avg Yield</span>
            <span className='spec-value'>{crop.avgYield}</span>
          </div>
        </div>

        <div className='crop-varieties'>
          <span className='varieties-label'>🌱 Varieties:</span>
          <div className='varieties-list'>
            {crop.varieties.map((v, idx) => (
              <span key={idx} className='variety-tag'>{v}</span>
            ))}
          </div>
        </div>

        <div className='crop-soil-info'>
          <span className='soil-label'>🌍 Suitable Soil:</span>
          <div className='soil-list'>
            {crop.soilType.map((soil, idx) => (
              <span key={idx} className='soil-badge'>{soil}</span>
            ))}
          </div>
        </div>

        <div className='crop-benefits'>
          <span className='benefits-label'>💪 Health Benefits:</span>
          <p className='benefits-text'>{crop.healthBenefits}</p>
        </div>

        <div className='crop-price-info'>
          <div className='price-item'>
            <span className='price-label'>💰 Market Price</span>
            <span className='price-display'>{crop.marketPrice}</span>
            {priceData && (
              <span className={`price-change ${priceData.change}`}>
                {priceData.change === 'up' ? '📈' : '📉'} ₹{priceData.current} ({priceData.changePercent}%)
              </span>
            )}
          </div>
          <div className='export-badge' style={{ borderLeft: `4px solid ${crop.exportPotential === 'Very High' ? '#10b981' : '#f59e0b'}` }}>
            <span className='export-label'>📊 Export:</span>
            <span className='export-value'>{crop.exportPotential}</span>
          </div>
        </div>

        <div className='crop-tips'>
          <span className='tips-label'>💡 Pro Tips:</span>
          <p className='tips-text'>{crop.tips}</p>
        </div>

        <div className='crop-contact'>
          <div className='contact-item'>
            <FaMapMarkerAlt /> {crop.suitableDist}
          </div>
          <div className='contact-item'>
            <FaPhone /> {crop.contact}
          </div>
          <div className='contact-item'>
            <span className='suppliers-count'>{crop.suppliers}</span>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const { searchInput, selectedCategory, sortBy } = this.state
    const currentPath = window.location.pathname
    const filteredCrops = this.getFilteredCrops()
    const categories = ['All', ...new Set(enhancedCropsList.map(crop => crop.type))]

    return (
      <div className='enhanced-crops-container'>
        {/* HEADER */}
        <header className='header'>
          <div className='img-logo'>
            <img
              src='https://ik.imagekit.io/wer9cus16/Gemini_Generated_Image_hxzmtlhxzmtlhxzm.png?updatedAt=1761411100421'
              className='logo'
              alt='FarmConnect'
            />
            <h1 className='heading'>Farm<span className='connect'>Connect</span></h1>
          </div>
          <div className='search-bar'>
            <input
              type='search'
              value={searchInput}
              onChange={this.onSearch}
              placeholder='Search crops by name or type...'
              className='search-input'
            />
            <BiSearch className='search-icon' />
          </div>
        </header>

        {/* FILTER BAR */}
        <div className='crops-filter-bar'>
          <div className='filter-section'>
            <span className='filter-label-text'><FaFilter /> Filter By Type:</span>
            <div className='filter-buttons-container'>
              {categories.map(category => (
                <button
                  key={category}
                  className={`crop-filter-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => this.onFilterChange(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className='sort-section'>
            <select
              className='crop-sort-select'
              value={sortBy}
              onChange={(e) => this.setState({ sortBy: e.target.value })}
            >
              <option value='recommended'>⭐ Recommended</option>
              <option value='rating'>🌟 Highest Rated</option>
              <option value='yield'>📈 Best Yield</option>
            </select>
            <button className='crop-clear-btn' onClick={this.onClearFilters}>
              <FaRedo /> Reset
            </button>
          </div>
        </div>

        {/* RESULTS INFO */}
        <div className='crops-results-info'>
          <p>🌾 Found <strong>{filteredCrops.length}</strong> crops matching your search</p>
        </div>

        {/* CROPS GRID */}
        <div className='crops-main-container'>
          {filteredCrops.length > 0 ? (
            <div className='crops-grid'>
              {filteredCrops.map(crop => this.renderCropCard(crop))}
            </div>
          ) : (
            <div className='crops-no-results'>
              <p>🔍 No crops found. Try adjusting your filters.</p>
            </div>
          )}
        </div>

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

export default EnhancedCrops
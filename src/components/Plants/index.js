import './index.css'
import { Component } from 'react'
import { BiSearch } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { FaFilter, FaRedo, FaSortAlphaDown, FaSortAlphaUp } from 'react-icons/fa'

// Input Materials Data
const inputData = {
  category: 'Input Materials',
  icon: '🧪',
  description: 'Fertilizers, pesticides, and crop inputs',
  types: [
    {
      id: 1,
      name: 'Fertilizers',
      emoji: '🧪',
      badge: 'Essential',
      description: 'Organic & inorganic fertilizers',
      metrics: {
        usage: 'Nitrogen, Phosphate, Potash',
        application: '2-4 times per season',
        coverage: '1-2 bags per acre'
      },
      benefits: ['Increases yield', 'Improves soil', 'Cost-effective'],
      maintenance: 'Store in dry place, follow dosage instructions',
      apiUrl: 'https://api.example.com/prices/fertilizer'
    },
    {
      id: 2,
      name: 'Pesticides',
      emoji: '🐛',
      badge: 'Protection',
      description: 'Organic & chemical pest control',
      metrics: {
        usage: 'Insecticides, fungicides, herbicides',
        application: 'As per infestation',
        coverage: '1 liter per acre'
      },
      benefits: ['Pest control', 'Disease prevention', 'Higher yield'],
      maintenance: 'Wear safety gear, follow label instructions',
      apiUrl: 'https://api.example.com/prices/pesticide'
    },
    {
      id: 3,
      name: 'Herbicides',
      emoji: '🌿',
      badge: 'Weed Control',
      description: 'Selective weed killers',
      metrics: {
        usage: 'Pre and post-emergent',
        application: 'Early growth stage',
        coverage: '500ml per acre'
      },
      benefits: ['Weed elimination', 'Crop protection', 'Time-saving'],
      maintenance: 'Store safely away from children',
      apiUrl: 'https://api.example.com/prices/herbicide'
    },
    {
      id: 4,
      name: 'Micronutrients',
      emoji: '⚗️',
      badge: 'Supplementary',
      description: 'Zinc, Iron, Boron, Manganese',
      metrics: {
        usage: 'Trace elements',
        application: 'Foliar spray',
        coverage: '250ml per acre'
      },
      benefits: ['Enhanced growth', 'Better quality', 'Disease resistance'],
      maintenance: 'Mix with water before application',
      apiUrl: 'https://api.example.com/prices/micronutrient'
    }
  ]
};

// Planting Material Data
const plantingMaterialData = {
  category: 'Planting Materials',
  icon: '🌱',
  description: 'Seeds, saplings, and propagation materials',
  types: [
    {
      id: 5,
      name: 'Seeds',
      emoji: '🌰',
      badge: 'High Germination',
      description: 'Certified quality seeds',
      metrics: {
        germination: '85-95%',
        shelf_life: '1-2 years',
        sowing: '10-20 kg per acre'
      },
      benefits: ['High yield', 'Disease resistant', 'Certified quality'],
      maintenance: 'Store in cool, dry place at 15°C',
      apiUrl: 'https://api.example.com/prices/seeds'
    },
    {
      id: 6,
      name: 'Saplings',
      emoji: '🌳',
      badge: 'Ready to Plant',
      description: 'Fruit and timber tree saplings',
      metrics: {
        age: '1-2 years old',
        height: '3-5 feet',
        spacing: '20-30 feet apart'
      },
      benefits: ['Early fruiting', 'Higher survival', 'Quality assured'],
      maintenance: 'Water regularly, protect from frost',
      apiUrl: 'https://api.example.com/prices/saplings'
    },
    {
      id: 7,
      name: 'Vegetable Seedlings',
      emoji: '🥬',
      badge: 'Ready to Transplant',
      description: 'Pre-grown vegetable seedlings',
      metrics: {
        age: '25-35 days',
        hardening: '7-10 days',
        transplanting: 'Ready to field'
      },
      benefits: ['Early harvest', 'Reduced risk', 'Time-saving'],
      maintenance: 'Harden before transplanting',
      apiUrl: 'https://api.example.com/prices/seedlings'
    },
    {
      id: 8,
      name: 'Rootstocks',
      emoji: '🌿',
      badge: 'Grafting Material',
      description: 'Grafting and budding rootstocks',
      metrics: {
        type: 'Mango, Guava, Citrus',
        thickness: '8-12 mm',
        age: '1-2 years'
      },
      benefits: ['Disease resistant', 'Higher yield', 'Early maturity'],
      maintenance: 'Keep moist, protect from sun',
      apiUrl: 'https://api.example.com/prices/rootstock'
    }
  ]
};

// Produce Data
const produceData = {
  category: 'Produce & Crops',
  icon: '🍅',
  description: 'Vegetables, fruits, and herbs',
  types: [
    {
      id: 9,
      name: 'Vegetables',
      emoji: '🥕',
      badge: 'Fresh Daily',
      description: 'Seasonal fresh vegetables',
      metrics: {
        varieties: 'Tomato, Onion, Potato, Cabbage',
        season: 'Year-round',
        shelf_life: '5-15 days'
      },
      benefits: ['Fresh produce', 'Nutritious', 'Market demand'],
      maintenance: 'Cold storage recommended',
      apiUrl: 'https://api.example.com/prices/vegetables'
    },
    {
      id: 10,
      name: 'Fruits',
      emoji: '🍎',
      badge: 'Premium Quality',
      description: 'Seasonal fresh fruits',
      metrics: {
        varieties: 'Mango, Apple, Orange, Guava',
        season: 'Seasonal',
        shelf_life: '7-30 days'
      },
      benefits: ['High nutrition', 'Premium price', 'Export quality'],
      maintenance: 'Proper ripening, cold storage',
      apiUrl: 'https://api.example.com/prices/fruits'
    },
    {
      id: 11,
      name: 'Herbs',
      emoji: '🌿',
      badge: 'Organic',
      description: 'Medicinal and culinary herbs',
      metrics: {
        varieties: 'Basil, Mint, Coriander, Thyme',
        season: 'Year-round',
        shelf_life: '3-7 days'
      },
      benefits: ['Medicinal value', 'Culinary use', 'High margin'],
      maintenance: 'Dry storage for dried herbs',
      apiUrl: 'https://api.example.com/prices/herbs'
    },
    {
      id: 12,
      name: 'Spices',
      emoji: '🌶️',
      badge: 'Premium Spices',
      description: 'Dried spices and condiments',
      metrics: {
        varieties: 'Chilli, Turmeric, Coriander, Cumin',
        season: 'Post-harvest',
        shelf_life: '6-12 months'
      },
      benefits: ['Long shelf life', 'High value', 'Export ready'],
      maintenance: 'Dry storage below 15°C',
      apiUrl: 'https://api.example.com/prices/spices'
    }
  ]
};

// Equipment Data
const equipmentData = {
  category: 'Equipment',
  icon: '🔧',
  description: 'Gardening and farming tools',
  types: [
    {
      id: 13,
      name: 'Gardening Tools',
      emoji: '🛠️',
      badge: 'Essential',
      description: 'Hand tools for gardening',
      metrics: {
        types: 'Spade, Hoe, Rake, Fork',
        usage: 'Year-round',
        durability: '5-10 years'
      },
      benefits: ['Durable', 'Affordable', 'Easy to use'],
      maintenance: 'Clean after use, oil handles',
      apiUrl: 'https://api.example.com/prices/tools'
    },
    {
      id: 14,
      name: 'Irrigation Equipment',
      emoji: '💧',
      badge: 'Water Saving',
      description: 'Drip and sprinkler systems',
      metrics: {
        types: 'Drip, Sprinkler, Micro-spray',
        coverage: 'Up to 1 acre',
        efficiency: '60-90%'
      },
      benefits: ['Water efficient', 'Cost-saving', 'Uniform watering'],
      maintenance: 'Regular cleaning, filter change',
      apiUrl: 'https://api.example.com/prices/irrigation'
    },
    {
      id: 15,
      name: 'Mulching Materials',
      emoji: '🗂️',
      badge: 'Soil Protection',
      description: 'Organic and plastic mulch',
      metrics: {
        types: 'Straw, Leaves, Black plastic',
        thickness: '2-4 inches',
        coverage: '200-500 kg per acre'
      },
      benefits: ['Moisture retention', 'Weed control', 'Soil health'],
      maintenance: 'Replace annually',
      apiUrl: 'https://api.example.com/prices/mulch'
    },
    {
      id: 16,
      name: 'Greenhouse Materials',
      emoji: '🏠',
      badge: 'Climate Control',
      description: 'Netting, shade cloth, plastic sheets',
      metrics: {
        materials: 'UV film, shade nets, mesh',
        sizes: 'Custom available',
        lifespan: '3-5 years'
      },
      benefits: ['Temperature control', 'Pest prevention', 'All season'],
      maintenance: 'Annual inspection and repair',
      apiUrl: 'https://api.example.com/prices/greenhouse'
    }
  ]
};

const plantlist = [
  { id: 1, name: 'Fertilizers', type: 'Input' },
  { id: 2, name: 'Pesticides', type: 'Input' },
  { id: 3, name: 'Seeds', type: 'Planting Material' },
  { id: 4, name: 'Herbs', type: 'Produce' },
  { id: 5, name: 'Vegetables', type: 'Produce' },
  { id: 6, name: 'Fruits', type: 'Produce' },
  { id: 7, name: 'Saplings', type: 'Planting Material' },
  { id: 8, name: 'Gardening Tools', type: 'Equipment' },
]

class Plants extends Component {
  state = { 
    searchInput: '', 
    selectedCategory: 'All',
    sortOrder: 'asc',
    showInput: false,
    showPlantingMaterial: false,
    showProduce: false,
    showEquipment: false,
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
    const allPlants = [
      ...inputData.types,
      ...plantingMaterialData.types,
      ...produceData.types,
      ...equipmentData.types
    ]
    allPlants.forEach(plant => {
      this.fetchPrice(plant)
    })
  }

  fetchPrice = (plant) => {
    this.setState(prevState => ({
      loading: { ...prevState.loading, [plant.id]: true }
    }))

    setTimeout(() => {
      const mockPrice = this.generateMockPrice(plant.id)
      this.setState(prevState => ({
        prices: { ...prevState.prices, [plant.id]: mockPrice },
        loading: { ...prevState.loading, [plant.id]: false }
      }))
    }, 500)
  }

  generateMockPrice = (plantId) => {
    const priceRanges = {
      1: { min: 500, max: 2000 },
      2: { min: 300, max: 1500 },
      3: { min: 1000, max: 5000 },
      4: { min: 800, max: 3000 },
      5: { min: 20, max: 100 },
      6: { min: 40, max: 150 },
      7: { min: 50, max: 200 },
      8: { min: 100, max: 500 },
      9: { min: 30, max: 200 },
      10: { min: 50, max: 300 },
      11: { min: 100, max: 500 },
      12: { min: 200, max: 1000 },
      13: { min: 500, max: 2000 },
      14: { min: 5000, max: 50000 },
      15: { min: 1000, max: 5000 },
      16: { min: 2000, max: 10000 }
    }

    const range = priceRanges[plantId] || { min: 100, max: 1000 }
    const price = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min
    const change = Math.random() > 0.5 ? 'up' : 'down'
    const changePercent = (Math.random() * 10).toFixed(2)

    return {
      current: `₹${price.toLocaleString('en-IN')}`,
      change: change,
      changePercent: changePercent,
      lastUpdated: new Date().toLocaleTimeString('en-IN')
    }
  }

  onSearch = event => this.setState({ searchInput: event.target.value })
  onFilterChange = category => this.setState({ selectedCategory: category, searchInput: '' })
  onClearFilters = () => this.setState({ selectedCategory: 'All', searchInput: '' })
  
  toggleSort = () => {
    this.setState(prevState => ({
      sortOrder: prevState.sortOrder === 'asc' ? 'desc' : 'asc'
    }))
  }

  toggleInput = () => this.setState(prevState => ({ showInput: !prevState.showInput }))
  togglePlantingMaterial = () => this.setState(prevState => ({ showPlantingMaterial: !prevState.showPlantingMaterial }))
  toggleProduce = () => this.setState(prevState => ({ showProduce: !prevState.showProduce }))
  toggleEquipment = () => this.setState(prevState => ({ showEquipment: !prevState.showEquipment }))

  renderPlantCard = (plant) => {
    const { prices, loading } = this.state
    const priceData = prices[plant.id]
    const isLoading = loading[plant.id]

    return (
      <div key={plant.id} className='plant-card-premium'>
        <div className='plant-card-badge'>{plant.badge}</div>
        
        <div className='plant-card-header-premium'>
          <div className='plant-card-emoji'>{plant.emoji}</div>
          <div className='plant-card-header-text'>
            <h3 className='plant-card-title'>{plant.name}</h3>
            <p className='plant-card-subtitle'>{plant.description}</p>
          </div>
        </div>

        <div className='plant-card-metrics'>
          {Object.entries(plant.metrics).slice(0, 3).map(([key, value]) => (
            <div key={key} className='metric-box'>
              <span className='metric-icon'>📊</span>
              <div>
                <p className='metric-label'>{key.replace('_', ' ')}</p>
                <p className='metric-value'>{value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className='plant-card-price'>
          <div className='price-content'>
            <span className='price-label'>📈 Live Price</span>
            {isLoading ? (
              <span className='price-value loading'>Loading...</span>
            ) : priceData ? (
              <div className='price-display'>
                <span className='price-value'>{priceData.current}</span>
                <span className={`price-change ${priceData.change}`}>
                  {priceData.change === 'up' ? '📈' : '📉'} {priceData.changePercent}%
                </span>
              </div>
            ) : (
              <span className='price-value'>Fetching...</span>
            )}
          </div>
          {priceData && (
            <p className='price-updated'>Last: {priceData.lastUpdated}</p>
          )}
        </div>

        <div className='plant-card-benefits'>
          <p className='benefits-title'>✨ Key Benefits:</p>
          <div className='benefits-list'>
            {plant.benefits.map((benefit, idx) => (
              <span key={idx} className='benefit-tag'>{benefit}</span>
            ))}
          </div>
        </div>

        <div className='plant-card-maintenance'>
          <p className='maintenance-label'>🛠️ Care & Usage:</p>
          <p className='maintenance-text'>{plant.maintenance}</p>
        </div>
      </div>
    )
  }

  render() {
    const { searchInput, selectedCategory, sortOrder, showInput, showPlantingMaterial, showProduce, showEquipment } = this.state

    let filteredPlants = plantlist.filter(each => {
      const matchesSearch = each.name.toLowerCase().includes(searchInput.trim().toLowerCase())
      const matchesCategory = selectedCategory === 'All' || each.type === selectedCategory
      return matchesSearch && matchesCategory
    })

    if (sortOrder) {
      filteredPlants = filteredPlants.sort((a, b) => 
        sortOrder === 'asc' 
          ? a.name.localeCompare(b.name) 
          : b.name.localeCompare(a.name)
      )
    }

    const categories = ['All', ...new Set(plantlist.map(plant => plant.type))]
    const currentPath = window.location.pathname

    return (
      <div className='plant'>
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
              value={searchInput}
              onChange={this.onSearch}
              placeholder='Search Plants...'
              className='search-input'
            />
            <BiSearch className='search-icon' />
          </div>
        </header>

        <div className='filter-bar'>
          <span className='filter-label'><FaFilter /> Filter By:</span>
          {categories.map(category => (
            <button
              key={category}
              className={`filter-button ${selectedCategory === category ? 'active-filter' : ''}`}
              onClick={() => this.onFilterChange(category)}
            >
              {category}
            </button>
          ))}
          <button className='clear-button' onClick={this.onClearFilters}>
            <FaRedo /> Clear
          </button>
          <button className='sort-button' onClick={this.toggleSort}>
            {sortOrder === 'asc' ? <FaSortAlphaDown /> : <FaSortAlphaUp />}
            Sort
          </button>
        </div>

        <ul className='plant-list'>
          {filteredPlants.length > 0 ? (
            filteredPlants.map(each => (
              <li key={each.id} className='plant-li'>
                <Link to={`/plants/${each.id}`} className='plant-categories'>
                  {each.name}
                </Link>
              </li>
            ))
          ) : (
            <p className='no-results'>No plants found</p>
          )}
        </ul>

        {/* INPUT MATERIALS SECTION */}
        <div className='plant-section-container input-section'>
          <button className='section-toggle-btn' onClick={this.toggleInput}>
            <div className='section-btn-content'>
              <span className='section-icon'>{inputData.icon}</span>
              <div className='section-btn-text'>
                <h2>{inputData.category} </h2>
                <p>{inputData.description}</p>
              </div>
            </div>
            <span className='toggle-arrow'>{showInput ? '▼' : '▶'}</span>
          </button>
          {showInput && (
            <div className='plant-section-content'>
              <div className='plant-cards-grid'>
                {inputData.types.map(plant => this.renderPlantCard(plant))}
              </div>
            </div>
          )}
        </div>

        {/* PLANTING MATERIAL SECTION */}
        <div className='plant-section-container planting-section'>
          <button className='section-toggle-btn' onClick={this.togglePlantingMaterial}>
            <div className='section-btn-content'>
              <span className='section-icon'>{plantingMaterialData.icon}</span>
              <div className='section-btn-text'>
                <h2>{plantingMaterialData.category} </h2>
                <p>{plantingMaterialData.description}</p>
              </div>
            </div>
            <span className='toggle-arrow'>{showPlantingMaterial ? '▼' : '▶'}</span>
          </button>
          {showPlantingMaterial && (
            <div className='plant-section-content'>
              <div className='plant-cards-grid'>
                {plantingMaterialData.types.map(plant => this.renderPlantCard(plant))}
              </div>
            </div>
          )}
        </div>

        {/* PRODUCE SECTION */}
        <div className='plant-section-container produce-section'>
          <button className='section-toggle-btn' onClick={this.toggleProduce}>
            <div className='section-btn-content'>
              <span className='section-icon'>{produceData.icon}</span>
              <div className='section-btn-text'>
                <h2>{produceData.category} </h2>
                <p>{produceData.description}</p>
              </div>
            </div>
            <span className='toggle-arrow'>{showProduce ? '▼' : '▶'}</span>
          </button>
          {showProduce && (
            <div className='plant-section-content'>
              <div className='plant-cards-grid'>
                {produceData.types.map(plant => this.renderPlantCard(plant))}
              </div>
            </div>
          )}
        </div>

        {/* EQUIPMENT SECTION */}
        <div className='plant-section-container equipment-section'>
          <button className='section-toggle-btn' onClick={this.toggleEquipment}>
            <div className='section-btn-content'>
              <span className='section-icon'>{equipmentData.icon}</span>
              <div className='section-btn-text'>
                <h2>{equipmentData.category} </h2>
                <p>{equipmentData.description}</p>
              </div>
            </div>
            <span className='toggle-arrow'>{showEquipment ? '▼' : '▶'}</span>
          </button>
          {showEquipment && (
            <div className='plant-section-content'>
              <div className='plant-cards-grid'>
                {equipmentData.types.map(plant => this.renderPlantCard(plant))}
              </div>
            </div>
          )}
        </div>

        {/* Desktop Footer */}
        <footer className='footer'>
          <Link to='/'><button>Home</button></Link>
          <Link to='/animals'><button>Animals</button></Link>
          <Link to='/plants'><button>Plants</button></Link>
          <Link to='/tools'><button>Tools</button></Link>
          <Link to='/irrigation'><button>Irrigation</button></Link>
          <Link to='/crops'><button>Crops</button></Link>
        </footer>

        {/* Mobile Navigation Bar */}
        <nav className="mobile-nav">
          <div className="mobile-nav-grid">
            <Link to="/" className={`mobile-nav-item ${currentPath === '/' ? 'active' : ''}`}>
              <span className="mobile-nav-icon">🏠</span>
              <span className="mobile-nav-label">Home</span>
            </Link>
            <Link to="/animals" className={`mobile-nav-item ${currentPath === '/animals' ? 'active' : ''}`}>
              <span className="mobile-nav-icon">🐄</span>
              <span className="mobile-nav-label">Animals</span>
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
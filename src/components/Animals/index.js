import './index.css'
import { Component } from 'react'
import { BiSearch } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { FaFilter, FaRedo, FaSortAlphaDown, FaSortAlphaUp } from 'react-icons/fa'

// Extended Livestock Animals Data with API
const livestockData = {
  category: 'Livestock',
  icon: '🐄',
  description: 'Large domesticated animals for farming and production',
  types: [
    {
      id: 1,
      name: 'Cows',
      emoji: '🐄',
      badge: 'High Yield',
      description: 'Dairy and beef production',
      metrics: {
        production: 'Milk: 15-20 L/day',
        lifespan: '18-22 years',
        feedCost: '₹400-500/day'
      },
      benefits: ['High milk yield', 'Dual purpose', 'Strong immunity'],
      maintenance: 'Daily cleaning, regular vaccination',
      apiUrl: 'https://api.example.com/prices/cow'
    },
    {
      id: 2,
      name: 'Buffaloes',
      emoji: '🐃',
      badge: 'Premium Milk',
      description: 'Premium milk and farming',
      metrics: {
        production: 'Milk: 10-16 L/day',
        lifespan: '20-25 years',
        feedCost: '₹600-800/day'
      },
      benefits: ['Premium milk', 'Strong build', 'Long lifespan'],
      maintenance: 'Wallowing facilities, regular health checkups',
      apiUrl: 'https://api.example.com/prices/buffalo'
    },
    {
      id: 3,
      name: 'Goats',
      emoji: '🐐',
      badge: 'Cost Effective',
      description: 'Multi-purpose farm animals',
      metrics: {
        production: 'Milk: 1-3 L/day',
        lifespan: '15-18 years',
        feedCost: '₹50-80/day'
      },
      benefits: ['Low maintenance', 'Weed control', 'Quick returns'],
      maintenance: 'Basic shelter, regular feeding',
      apiUrl: 'https://api.example.com/prices/goat'
    },
    {
      id: 4,
      name: 'Sheep',
      emoji: '🐑',
      badge: 'Wool Producer',
      description: 'Wool, meat, and milk source',
      metrics: {
        production: 'Wool: 4-6 kg/year',
        lifespan: '12-14 years',
        feedCost: '₹40-60/day'
      },
      benefits: ['Wool quality', 'Lean meat', 'Efficient grazer'],
      maintenance: 'Shearing, pasture management',
      apiUrl: 'https://api.example.com/prices/sheep'
    },
    {
      id: 5,
      name: 'Poultry',
      emoji: '🐔',
      badge: 'High Return',
      description: 'Egg and meat production',
      metrics: {
        production: 'Eggs: 250-300/year',
        lifespan: '5-10 years',
        feedCost: '₹5-10/day'
      },
      benefits: ['Quick income', 'Space efficient', 'Easy management'],
      maintenance: 'Clean coops, daily feeding',
      apiUrl: 'https://api.example.com/prices/poultry'
    },
    {
      id: 6,
      name: 'Pigs',
      emoji: '🐷',
      badge: 'Fast Growth',
      description: 'Meat production',
      metrics: {
        production: 'Meat: 100-120 kg/year',
        lifespan: '15-20 years',
        feedCost: '₹80-120/day'
      },
      benefits: ['Fast growth', 'Good feed conversion', 'High demand'],
      maintenance: 'Clean housing, proper feeding',
      apiUrl: 'https://api.example.com/prices/pig'
    }
  ]
};

// Extended Utility Animals Data
const utilityData = {
  category: 'Utility',
  icon: '🐴',
  description: 'Working animals for farm operations and transport',
  types: [
    {
      id: 7,
      name: 'Horses',
      emoji: '🐴',
      badge: 'Work Horse',
      description: 'Transport and farm work',
      metrics: {
        production: 'Capacity: 300-500 kg',
        lifespan: '25-30 years',
        feedCost: '₹300-400/day'
      },
      benefits: ['Strong and reliable', 'Long working life', 'Versatile'],
      maintenance: 'Farrier care, regular exercise',
      apiUrl: 'https://api.example.com/prices/horse'
    },
    {
      id: 8,
      name: 'Donkeys',
      emoji: '🫏',
      badge: 'Sure Footed',
      description: 'Transport in hilly areas',
      metrics: {
        production: 'Capacity: 100-150 kg',
        lifespan: '25-30 years',
        feedCost: '₹50-80/day'
      },
      benefits: ['Sturdy', 'Low maintenance', 'Cost-effective'],
      maintenance: 'Basic care, seasonal checkups',
      apiUrl: 'https://api.example.com/prices/donkey'
    },
    {
      id: 9,
      name: 'Camels',
      emoji: '🐫',
      badge: 'Desert Ready',
      description: 'Desert transportation',
      metrics: {
        production: 'Capacity: 300-500 kg',
        lifespan: '40-50 years',
        feedCost: '₹100-150/day'
      },
      benefits: ['Desert adaptation', 'Long lifespan', 'Economical'],
      maintenance: 'Specialized care, climate control',
      apiUrl: 'https://api.example.com/prices/camel'
    },
    {
      id: 10,
      name: 'Mules',
      emoji: '🐴',
      badge: 'Hybrid Strength',
      description: 'Strong hybrid animals',
      metrics: {
        production: 'Capacity: 200-300 kg',
        lifespan: '25-30 years',
        feedCost: '₹150-200/day'
      },
      benefits: ['Strong', 'Intelligent', 'Long-lived'],
      maintenance: 'Good farrier care needed',
      apiUrl: 'https://api.example.com/prices/mule'
    }
  ]
};

// Extended Pets Animals Data
const petsData = {
  category: 'Pets & Others',
  icon: '🐕',
  description: 'Companion animals and specialty farm animals',
  types: [
    {
      id: 11,
      name: 'Dogs',
      emoji: '🐕',
      badge: 'Protector',
      description: 'Farm protection and companion',
      metrics: {
        production: 'Guard duty 24/7',
        lifespan: '12-15 years',
        feedCost: '₹50-150/day'
      },
      benefits: ['Excellent guardian', 'Loyal companion', 'Alert watchdog'],
      maintenance: 'Regular exercise, veterinary care',
      apiUrl: 'https://api.example.com/prices/dog'
    },
    {
      id: 12,
      name: 'Cats',
      emoji: '🐈',
      badge: 'Pest Control',
      description: 'Pest control and companion',
      metrics: {
        production: 'Rodent control',
        lifespan: '15-20 years',
        feedCost: '₹30-50/day'
      },
      benefits: ['Independent', 'Excellent hunters', 'Low maintenance'],
      maintenance: 'Basic feeding, occasional vet checkup',
      apiUrl: 'https://api.example.com/prices/cat'
    },
    {
      id: 13,
      name: 'Rabbits',
      emoji: '🐰',
      badge: 'Quick Returns',
      description: 'Meat and fur production',
      metrics: {
        production: 'Meat: 2-3 kg',
        lifespan: '8-12 years',
        feedCost: '₹20-30/day'
      },
      benefits: ['Fast breeding', 'Space efficient', 'Good return'],
      maintenance: 'Hutch care, daily feeding',
      apiUrl: 'https://api.example.com/prices/rabbit'
    },
    {
      id: 14,
      name: 'Guinea Pigs',
      emoji: '🐹',
      badge: 'Easy Care',
      description: 'Small companion animals',
      metrics: {
        production: 'Meat: 1-1.5 kg',
        lifespan: '5-7 years',
        feedCost: '₹15-25/day'
      },
      benefits: ['Easy to handle', 'Social', 'Low cost'],
      maintenance: 'Cage care, regular cleaning',
      apiUrl: 'https://api.example.com/prices/guineapig'
    },
    {
      id: 15,
      name: 'Bees',
      emoji: '🐝',
      badge: 'Pollinator',
      description: 'Honey and pollination',
      metrics: {
        production: 'Honey: 30-60 kg/year',
        lifespan: '3-5 years',
        feedCost: '₹500-1000/hive/year'
      },
      benefits: ['Honey production', 'Pollination', 'Low maintenance'],
      maintenance: 'Hive management, seasonal care',
      apiUrl: 'https://api.example.com/prices/bee'
    }
  ]
};

const animallist = [
  { id: 1, name: 'Cows', type: 'Livestock' },
  { id: 2, name: 'Goats', type: 'Livestock' },
  { id: 3, name: 'Sheep', type: 'Livestock' },
  { id: 4, name: 'Poultry', type: 'Livestock' },
  { id: 5, name: 'Buffaloes', type: 'Livestock' },
  { id: 6, name: 'Horses', type: 'Utility' },
  { id: 7, name: 'Dogs', type: 'Pets' },
  { id: 8, name: 'Cats', type: 'Pets' },
  { id: 9, name: 'Rabbits', type: 'Pets' },
]

class Animals extends Component {
  state = { 
    searchInput: '', 
    selectedCategory: 'All',
    sortOrder: 'asc',
    showLivestock: false,
    showUtility: false,
    showPets: false,
    prices: {}, // Store API prices
    loading: {} // Track loading state
  }

  componentDidMount() {
    this.fetchAllPrices()
    // Refresh prices every 5 minutes (300000 ms)
    this.priceInterval = setInterval(this.fetchAllPrices, 300000)
  }

  componentWillUnmount() {
    clearInterval(this.priceInterval)
  }

  // Fetch prices from API
  fetchAllPrices = () => {
    const allAnimals = [
      ...livestockData.types,
      ...utilityData.types,
      ...petsData.types
    ]

    allAnimals.forEach(animal => {
      this.fetchPrice(animal)
    })
  }

  fetchPrice = (animal) => {
    // Mock API call - Replace with actual API
    this.setState(prevState => ({
      loading: { ...prevState.loading, [animal.id]: true }
    }))

    // Simulating API call with mock data
    setTimeout(() => {
      const mockPrice = this.generateMockPrice(animal.id)
      this.setState(prevState => ({
        prices: { ...prevState.prices, [animal.id]: mockPrice },
        loading: { ...prevState.loading, [animal.id]: false }
      }))
    }, 500)

    // Uncomment below for real API integration:
    // fetch(`${animal.apiUrl}`)
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState(prevState => ({
    //       prices: { ...prevState.prices, [animal.id]: data.price },
    //       loading: { ...prevState.loading, [animal.id]: false }
    //     }))
    //   })
    //   .catch(err => {
    //     console.log('Price fetch failed:', err)
    //     this.setState(prevState => ({
    //       loading: { ...prevState.loading, [animal.id]: false }
    //     }))
    //   })
  }

  // Mock price generator (Remove when using real API)
  generateMockPrice = (animalId) => {
    const priceRanges = {
      1: { min: 50000, max: 150000 }, // Cow
      2: { min: 80000, max: 200000 }, // Buffalo
      3: { min: 8000, max: 20000 },   // Goat
      4: { min: 6000, max: 15000 },   // Sheep
      5: { min: 200, max: 1000 },     // Poultry
      6: { min: 15000, max: 40000 },  // Pig
      7: { min: 20000, max: 100000 }, // Horse
      8: { min: 5000, max: 15000 },   // Donkey
      9: { min: 50000, max: 200000 }, // Camel
      10: { min: 30000, max: 80000 }, // Mule
      11: { min: 5000, max: 30000 },  // Dog
      12: { min: 1000, max: 10000 },  // Cat
      13: { min: 500, max: 5000 },    // Rabbit
      14: { min: 1000, max: 3000 },   // Guinea Pig
      15: { min: 5000, max: 15000 }   // Bee hive
    }

    const range = priceRanges[animalId] || { min: 10000, max: 50000 }
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

  toggleLivestock = () => {
    this.setState(prevState => ({ showLivestock: !prevState.showLivestock }))
  }

  toggleUtility = () => {
    this.setState(prevState => ({ showUtility: !prevState.showUtility }))
  }

  togglePets = () => {
    this.setState(prevState => ({ showPets: !prevState.showPets }))
  }

  renderAnimalCard = (animal) => {
    const { prices, loading } = this.state
    const priceData = prices[animal.id]
    const isLoading = loading[animal.id]

    return (
      <div key={animal.id} className='animal-card-premium'>
        <div className='animal-card-badge'>{animal.badge}</div>
        
        <div className='animal-card-header-premium'>
          <div className='animal-card-emoji'>{animal.emoji}</div>
          <div className='animal-card-header-text'>
            <h3 className='animal-card-title'>{animal.name}</h3>
            <p className='animal-card-subtitle'>{animal.description}</p>
          </div>
        </div>

        <div className='animal-card-metrics'>
          <div className='metric-box'>
            <span className='metric-icon'>📊</span>
            <div>
              <p className='metric-label'>Production</p>
              <p className='metric-value'>{animal.metrics.production}</p>
            </div>
          </div>

          <div className='metric-box'>
            <span className='metric-icon'>⏰</span>
            <div>
              <p className='metric-label'>Lifespan</p>
              <p className='metric-value'>{animal.metrics.lifespan}</p>
            </div>
          </div>

          <div className='metric-box'>
            <span className='metric-icon'>💵</span>
            <div>
              <p className='metric-label'>Daily Feed</p>
              <p className='metric-value'>{animal.metrics.feedCost}</p>
            </div>
          </div>
        </div>

        {/* LIVE PRICE FROM API */}
        <div className='animal-card-price'>
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

        <div className='animal-card-benefits'>
          <p className='benefits-title'>✨ Key Benefits:</p>
          <div className='benefits-list'>
            {animal.benefits.map((benefit, idx) => (
              <span key={idx} className='benefit-tag'>{benefit}</span>
            ))}
          </div>
        </div>

        <div className='animal-card-maintenance'>
          <p className='maintenance-label'>🛠️ Care & Maintenance:</p>
          <p className='maintenance-text'>{animal.maintenance}</p>
        </div>
      </div>
    )
  }

  render() {
    const { searchInput, selectedCategory, sortOrder, showLivestock, showUtility, showPets } = this.state

    let filteredAnimals = animallist.filter(each => {
      const matchesSearch = each.name.toLowerCase().includes(searchInput.trim().toLowerCase())
      const matchesCategory = selectedCategory === 'All' || each.type === selectedCategory
      return matchesSearch && matchesCategory
    })

    if (sortOrder) {
      filteredAnimals = filteredAnimals.sort((a, b) => 
        sortOrder === 'asc' 
          ? a.name.localeCompare(b.name) 
          : b.name.localeCompare(a.name)
      )
    }

    const categories = ['All', ...new Set(animallist.map(animal => animal.type))]

    return (
      <div className='animal'>
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
              placeholder='Search Animals...'
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

        <ul className='animal-list'>
          {filteredAnimals.length > 0 ? (
            filteredAnimals.map(each => (
              <li key={each.id} className='animal-li'>
                <Link to={`/animals/${each.id}`} className='animal-categories'>
                  {each.name}
                </Link>
              </li>
            ))
          ) : (
            <p className='no-results'>No animals found</p>
          )}
        </ul>

        {/* LIVESTOCK SECTION */}
        <div className='animal-section-container livestock-section'>
          <button className='section-toggle-btn' onClick={this.toggleLivestock}>
            <div className='section-btn-content'>
              <div className='section-btn-text'>
                <h2>{livestockData.category} Animals</h2>
                <p>{livestockData.description}</p>
              </div>
            </div>
            <span className='toggle-arrow'>{showLivestock ? '▼' : '▶'}</span>
          </button>
          
          {showLivestock && (
            <div className='animal-section-content'>
              <div className='animal-cards-grid'>
                {livestockData.types.map(animal => this.renderAnimalCard(animal))}
              </div>
            </div>
          )}
        </div>

        {/* UTILITY SECTION */}
        <div className='animal-section-container utility-section'>
          <button className='section-toggle-btn' onClick={this.toggleUtility}>
            <div className='section-btn-content'>
              <div className='section-btn-text'>
                <h2>{utilityData.category} Animals</h2>
                <p>{utilityData.description}</p>
              </div>
            </div>
            <span className='toggle-arrow'>{showUtility ? '▼' : '▶'}</span>
          </button>
          
          {showUtility && (
            <div className='animal-section-content'>
              <div className='animal-cards-grid'>
                {utilityData.types.map(animal => this.renderAnimalCard(animal))}
              </div>
            </div>
          )}
        </div>

        {/* PETS & OTHERS SECTION */}
        <div className='animal-section-container pets-section'>
          <button className='section-toggle-btn' onClick={this.togglePets}>
            <div className='section-btn-content'>
              <div className='section-btn-text'>
                <h2>{petsData.category}</h2>
                <p>{petsData.description}</p>
              </div>
            </div>
            <span className='toggle-arrow'>{showPets ? '▼' : '▶'}</span>
          </button>
          
          {showPets && (
            <div className='animal-section-content'>
              <div className='animal-cards-grid'>
                {petsData.types.map(animal => this.renderAnimalCard(animal))}
              </div>
            </div>
          )}
        </div>
        
        <footer className='footer'>
          <Link to='/'><button>Home</button></Link>
          <Link to='/animals'><button>Animals</button></Link>
          <Link to='/plants'><button>Plants</button></Link>
          <Link to='/tools'><button>Tools</button></Link>
          <Link to='/irrigation'><button>Irrigation</button></Link>
          <Link to='/crops'><button>Crops</button></Link>
        </footer>
      </div>
    )
  }
}

export default Animals
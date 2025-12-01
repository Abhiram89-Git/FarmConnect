import './index.css'
import { Component } from 'react'
import { BiSearch } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { FaFilter, FaRedo, FaSortAlphaDown, FaSortAlphaUp } from 'react-icons/fa'

// Sample crop listings data
const cropListings = [
  {
    id: 1,
    crop: 'Paddy',
    image: '🌾',
    quantity: '500 kg',
    price: '₹2,250/100kg',
    farmer: 'Rajesh Kumar',
    phone: '+91 9876543210',
    email: 'rajesh@farm.com',
    location: 'Chengalpattu, Tamil Nadu',
    description: 'Premium quality paddy, freshly harvested, moisture content 13%'
  },
  {
    id: 2,
    crop: 'Tomato',
    image: '🍅',
    quantity: '200 kg',
    price: '₹40/kg',
    farmer: 'Priya Singh',
    phone: '+91 9123456789',
    email: 'priya@farm.com',
    location: 'Kanchipuram, Tamil Nadu',
    description: 'Fresh organic tomatoes, perfect for market, harvested today'
  },
  {
    id: 3,
    crop: 'Groundnut',
    image: '🥜',
    quantity: '1000 kg',
    price: '₹5,850/100kg',
    farmer: 'Arun Patel',
    phone: '+91 8765432109',
    email: 'arun@farm.com',
    location: 'Tirupati, Andhra Pradesh',
    description: 'High quality groundnut, good yield, 20 days after harvest'
  },
  {
    id: 4,
    crop: 'Chilli',
    image: '🌶️',
    quantity: '150 kg',
    price: '₹9,500/100kg',
    farmer: 'Meera Sharma',
    phone: '+91 7654321098',
    email: 'meera@farm.com',
    location: 'Guntur, Andhra Pradesh',
    description: 'Dry red chilli, spicy variety, perfect for grinding'
  },
  {
    id: 5,
    crop: 'Cotton',
    image: '☁️',
    quantity: '800 kg',
    price: '₹6,500/100kg',
    farmer: 'Vikram Reddy',
    phone: '+91 6543210987',
    email: 'vikram@farm.com',
    location: 'Warangal, Telangana',
    description: 'Pure white cotton, good staple length, just ginned'
  },
  {
    id: 6,
    crop: 'Sugarcane',
    image: '🎋',
    quantity: '2000 kg',
    price: '₹365/100kg',
    farmer: 'Suresh Desai',
    phone: '+91 5432109876',
    email: 'suresh@farm.com',
    location: 'Belgaum, Karnataka',
    description: 'Fresh sugarcane, high brix content (12%), ready to harvest'
  }
];

class Marketplace extends Component {
  state = { 
    searchInput: '', 
    selectedCategory: 'All',
    sortOrder: 'asc',
    showUploadForm: false,
    listings: cropListings,
    newCrop: {
      crop: '',
      quantity: '',
      price: '',
      farmer: '',
      phone: '',
      email: '',
      location: '',
      description: ''
    }
  }

  toggleUploadForm = () => {
    this.setState(prevState => ({
      showUploadForm: !prevState.showUploadForm,
      newCrop: {
        crop: '',
        quantity: '',
        price: '',
        farmer: '',
        phone: '',
        email: '',
        location: '',
        description: ''
      }
    }))
  }

  handleInputChange = (e) => {
    const { name, value } = e.target
    this.setState(prevState => ({
      newCrop: { ...prevState.newCrop, [name]: value }
    }))
  }

  handleCropSubmit = (e) => {
    e.preventDefault()
    const { newCrop, listings } = this.state
    
    if (!newCrop.crop || !newCrop.quantity || !newCrop.price || !newCrop.farmer || !newCrop.phone || !newCrop.location) {
      alert('Please fill all required fields')
      return
    }

    const cropEmojis = {
      'Cotton': '☁️',
      'Chilli': '🌶️',
      'Maize': '🌽',
      'Paddy': '🌾',
      'Groundnut': '🥜',
      'Sugarcane': '🎋',
      'Wheat': '🌾',
      'Tomato': '🍅',
      'Potato': '🥔',
      'Onion': '🧅'
    }

    const newListing = {
      id: listings.length + 1,
      crop: newCrop.crop,
      image: cropEmojis[newCrop.crop] || '🌾',
      quantity: newCrop.quantity,
      price: newCrop.price,
      farmer: newCrop.farmer,
      phone: newCrop.phone,
      email: newCrop.email,
      location: newCrop.location,
      description: newCrop.description
    }

    this.setState(prevState => ({
      listings: [newListing, ...prevState.listings],
      newCrop: {
        crop: '',
        quantity: '',
        price: '',
        farmer: '',
        phone: '',
        email: '',
        location: '',
        description: ''
      },
      showUploadForm: false
    }))

    alert('Crop listing uploaded successfully!')
  }

  onSearch = event => {
    const searchValue = event.target.value
    this.setState({ searchInput: searchValue })
  }

  onFilterChange = category => {
    this.setState({ selectedCategory: category })
  }

  onClearFilters = () => {
    this.setState({ selectedCategory: 'All', searchInput: '' })
  }

  toggleSort = () => {
    this.setState(prevState => ({
      sortOrder: prevState.sortOrder === 'asc' ? 'desc' : 'asc'
    }))
  }

  handleContactFarmer = (email, crop) => {
    alert(`Opening email to contact farmer about ${crop}`)
    // In real implementation: window.location.href = `mailto:${email}`
  }

  handleCallFarmer = (phone) => {
    alert(`Calling ${phone}`)
    // In real implementation: window.location.href = `tel:${phone}`
  }

  render() {
    const { searchInput, selectedCategory, sortOrder, showUploadForm, listings } = this.state
    const currentPath = window.location.pathname

    let filteredListings = listings.filter(listing => {
      const matchesSearch = listing.crop.toLowerCase().includes(searchInput.trim().toLowerCase()) ||
                           listing.farmer.toLowerCase().includes(searchInput.trim().toLowerCase()) ||
                           listing.location.toLowerCase().includes(searchInput.trim().toLowerCase())
      const matchesCategory = selectedCategory === 'All' || listing.crop === selectedCategory
      return matchesSearch && matchesCategory
    })

    if (sortOrder === 'asc') {
      filteredListings = filteredListings.sort((a, b) => a.crop.localeCompare(b.crop))
    } else {
      filteredListings = filteredListings.sort((a, b) => b.crop.localeCompare(a.crop))
    }

    const crops = ['All', ...new Set(listings.map(item => item.crop))]

    return (
      <div className='marketplace'>
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
              placeholder='Search Crops or Farmers...'
              className='search-input'
            />
            <BiSearch className='search-icon' />
          </div>
        </header>

        <div className='sell-buy'>
          <div className='sell-buy-section'>
            <div className='sell-buy-header'>
              <h2>🌾 Buy & Sell Crops</h2>
              <button className='upload-btn' onClick={this.toggleUploadForm}>📤 Upload Your Crops</button>
            </div>

            {showUploadForm && (
              <div className='upload-form-modal'>
                <div className='upload-form-content'>
                  <h3>Upload Your Crop</h3>
                  <form onSubmit={this.handleCropSubmit}>
                    <div className='form-row'>
                      <div className='form-group'>
                        <label>Crop Name *</label>
                        <select name='crop' value={this.state.newCrop.crop} onChange={this.handleInputChange} required>
                          <option value=''>Select Crop</option>
                          <option value='Cotton'>Cotton</option>
                          <option value='Chilli'>Chilli</option>
                          <option value='Maize'>Maize</option>
                          <option value='Paddy'>Paddy</option>
                          <option value='Groundnut'>Groundnut</option>
                          <option value='Sugarcane'>Sugarcane</option>
                          <option value='Wheat'>Wheat</option>
                          <option value='Tomato'>Tomato</option>
                          <option value='Potato'>Potato</option>
                          <option value='Onion'>Onion</option>
                        </select>
                      </div>
                      <div className='form-group'>
                        <label>Quantity *</label>
                        <input type='text' name='quantity' value={this.state.newCrop.quantity} onChange={this.handleInputChange} placeholder='e.g., 500 kg' required />
                      </div>
                    </div>
                    <div className='form-row'>
                      <div className='form-group'>
                        <label>Price *</label>
                        <input type='text' name='price' value={this.state.newCrop.price} onChange={this.handleInputChange} placeholder='e.g., ₹70/kg' required />
                      </div>
                      <div className='form-group'>
                        <label>Your Name *</label>
                        <input type='text' name='farmer' value={this.state.newCrop.farmer} onChange={this.handleInputChange} placeholder='Enter your name' required />
                      </div>
                    </div>
                    <div className='form-row'>
                      <div className='form-group'>
                        <label>Phone Number *</label>
                        <input type='tel' name='phone' value={this.state.newCrop.phone} onChange={this.handleInputChange} placeholder='+91 98765 43210' required />
                      </div>
                      <div className='form-group'>
                        <label>Email</label>
                        <input type='email' name='email' value={this.state.newCrop.email} onChange={this.handleInputChange} placeholder='your.email@farm.com' />
                      </div>
                    </div>
                    <div className='form-group'>
                      <label>Location *</label>
                      <input type='text' name='location' value={this.state.newCrop.location} onChange={this.handleInputChange} placeholder='e.g., Chengalpattu, Tamil Nadu' required />
                    </div>
                    <div className='form-group'>
                      <label>Description</label>
                      <textarea name='description' value={this.state.newCrop.description} onChange={this.handleInputChange} placeholder='Describe your crop quality, harvest date, etc.' rows='3'></textarea>
                    </div>
                    <div className='form-buttons'>
                      <button type='submit' className='btn-submit'>Upload Crop</button>
                      <button type='button' className='btn-cancel' onClick={this.toggleUploadForm}>Cancel</button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            <div className='filter-bar'>
              <span className='filter-label'><FaFilter /> Filter By:</span>
              {crops.map(crop => (
                <button
                  key={crop}
                  className={`filter-button ${selectedCategory === crop ? 'active-filter' : ''}`}
                  onClick={() => this.onFilterChange(crop)}
                >
                  {crop}
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

            <div className='crop-listings-grid'>
              {filteredListings.length > 0 ? (
                filteredListings.map((listing) => (
                  <div key={listing.id} className='crop-listing-card'>
                    <div className='crop-card-header'>
                      <span className='crop-icon-large'>{listing.image}</span>
                      <div className='crop-card-title'>
                        <h3>{listing.crop}</h3>
                        <p className='crop-location'>📍 {listing.location}</p>
                      </div>
                    </div>
                    <div className='crop-card-details'>
                      <div className='detail-row'>
                        <span className='detail-label'>Quantity:</span>
                        <span className='detail-value'>{listing.quantity}</span>
                      </div>
                      <div className='detail-row'>
                        <span className='detail-label'>Price:</span>
                        <span className='detail-value price-highlight'>{listing.price}</span>
                      </div>
                      <div className='detail-row'>
                        <span className='detail-label'>Farmer:</span>
                        <span className='detail-value'>{listing.farmer}</span>
                      </div>
                    </div>
                    <div className='crop-description'>
                      <p>{listing.description}</p>
                    </div>
                    <div className='crop-card-actions'>
                      <button className='contact-btn' onClick={() => this.handleContactFarmer(listing.email, listing.crop)}>📧 Contact</button>
                      <button className='call-btn' onClick={() => this.handleCallFarmer(listing.phone)}>☎️ Call</button>
                    </div>
                  </div>
                ))
              ) : (
                <div className='no-results'>
                  <p>No crops found. Be the first to list!</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Desktop Footer */}
        <footer className='footer'>
          <Link to='/'><button>Home</button></Link>
          <Link to='/marketplace'><button>MarketPlace</button></Link>
          <Link to='/plants'><button>Plants</button></Link>
          <Link to='/tools'><button>Tools</button></Link>
          <Link to='/irrigation'><button>Posts</button></Link>
          <Link to='/crops'><button>Crops</button></Link>
        </footer>

        {/* Mobile Navigation Bar */}
        <nav className="mobile-nav">
          <div className="mobile-nav-grid">
            <Link to="/" className={`mobile-nav-item ${currentPath === '/' ? 'active' : ''}`}>
              <span className="mobile-nav-icon">🏠</span>
              <span className="mobile-nav-label">Home</span>
            </Link>
            <Link to="/marketplace" className={`mobile-nav-item ${currentPath === '/marketplace' ? 'active' : ''}`}>
              <span className="mobile-nav-icon">🛍️</span>
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
              <span className="mobile-nav-icon">📬</span>
              <span className="mobile-nav-label">Posts</span>
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

export default Marketplace
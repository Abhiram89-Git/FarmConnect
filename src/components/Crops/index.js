import './index.css'
import { Component } from 'react'
import { BiSearch } from 'react-icons/bi'
import { Link } from 'react-router-dom'
// NEW: Import icons for the simple feature bar
import { FaFilter, FaRedo } from 'react-icons/fa'

const cropsList = [
  // MODIFIED: Added a 'type' property for simple filtering
  { id: 1, name: 'Rice', type: 'Cereal' },
  { id: 2, name: 'Cotton', type: 'Cash Crop' },
  { id: 3, name: 'Chilli', type: 'Cash Crop' },
  { id: 4, name: 'Barley', type: 'Cereal' },
  { id: 5, name: 'Millets', type: 'Millets' },
  { id: 6, name: 'Soybean', type: 'Oilseed' },
  { id: 7, name: 'Maize', type: 'Cereal' },
  { id: 8, name: 'Sugarcane', type: 'Cash Crop' },
]

class Crops extends Component {
  // MODIFIED: Added state for category filter
  state = { 
    searchInput: '', 
    selectedCategory: 'All', // Default category
  }

  onSearch = event => {
    this.setState({ searchInput: event.target.value })
  }
  
  // NEW: Handler to set the category filter
  onFilterChange = (category) => {
    this.setState({ selectedCategory: category, searchInput: '' })
  }

  // NEW: Handler to clear all filters
  onClearFilters = () => {
    this.setState({ selectedCategory: 'All', searchInput: '' })
  }

  render() {
    const { searchInput, selectedCategory } = this.state

    // MODIFIED: Filtering logic now includes category filter
    const filteredCrops = cropsList.filter(each => {
      const matchesSearch = each.name.toLowerCase().includes(searchInput.trim().toLowerCase())
      // Check if the item's type matches the selected category, or if 'All' is selected
      const matchesCategory = selectedCategory === 'All' || each.type === selectedCategory
      
      return matchesSearch && matchesCategory
    })

    // NEW: Get unique categories for the filter buttons
    const categories = ['All', ...new Set(cropsList.map(crop => crop.type))]
    const currentPath = window.location.pathname
    
    return (
      <div className='crops'>
        {/* Header */}
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
              placeholder='Search Crops...'
              className='search-input'
            />
            <BiSearch className='search-icon' />
          </div>
        </header>

        {/* NEW FEATURE BAR: Category Filters and Clear Button */}
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
        </div>
        
        <ul className='crop-list'>
          {filteredCrops.length > 0 ? (
            filteredCrops.map(each => (
              <li key={each.id} className='crop-li'>
                <Link to={`/crops/${each.id}`} className='crop-categories'>
                  {each.name}
                </Link>
              </li>
            ))
          ) : (
            <p className='no-results'>No crops found</p>
          )}
        </ul>

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

export default Crops
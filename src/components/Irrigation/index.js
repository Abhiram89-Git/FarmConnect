import './index.css'
import { Component } from 'react'
import { BiSearch } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { FaFilter, FaRedo, FaSortAlphaDown, FaSortAlphaUp } from 'react-icons/fa'

const irrigationList = [
  { id: 1, name: 'Furrow Irrigation', type: 'Surface' },
  { id: 2, name: 'Border Irrigation', type: 'Surface' },
  { id: 3, name: 'Basin Irrigation', type: 'Surface' },
  { id: 4, name: 'Center Pivot Sprinkler', type: 'Pressurized' },
  { id: 5, name: 'Portable Sprinklers', type: 'Pressurized' },
  { id: 6, name: 'Drip Irrigation', type: 'Pressurized' },
  { id: 7, name: 'Manual Irrigation', type: 'Manual/Smart' },
  { id: 8, name: 'Smart Sensor Irrigation', type: 'Manual/Smart' },
]

class Irrigation extends Component {
  state = {
    searchInput: '',
    selectedCategory: 'All',
    sortOrder: 'asc',
    showSurface: false,
    showPressurized: false,
    showManualSmart: false,
    prices: {},
    loading: {}
  }

  onSearch = event => {
    this.setState({ searchInput: event.target.value })
  }

  onFilterChange = category => {
    this.setState({ selectedCategory: category, searchInput: '' })
  }

  onClearFilters = () => {
    this.setState({ selectedCategory: 'All', searchInput: '' })
  }

  toggleSort = () => {
    this.setState(prevState => ({
      sortOrder: prevState.sortOrder === 'asc' ? 'desc' : 'asc'
    }))
  }

  render() {
    const { searchInput, selectedCategory, sortOrder } = this.state

    let filteredIrrigation = irrigationList.filter(each => {
      const matchesSearch = each.name.toLowerCase().includes(searchInput.trim().toLowerCase())
      const matchesCategory = selectedCategory === 'All' || each.type === selectedCategory
      return matchesSearch && matchesCategory
    })

    if (sortOrder) {
      filteredIrrigation = filteredIrrigation.sort((a, b) =>
        sortOrder === 'asc'
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name)
      )
    }

    const categories = ['All', ...new Set(irrigationList.map(item => item.type))]

    return (
      <div className='irrigation'>
        {/* Header */}
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
              placeholder='Search Irrigation...'
              className='search-input'
            />
            <BiSearch className='search-icon' />
          </div>
        </header>

        {/* Filter Bar */}
        <div className='filter-bar'>
          <span className='filter-label'>
            <FaFilter /> Filter By:
          </span>
          {categories.map(category => (
            <button
              key={category}
              className={`filter-button ${
                selectedCategory === category ? 'active-filter' : ''
              }`}
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

        {/* Irrigation List */}
        <ul className='irrigation-list'>
          {filteredIrrigation.length > 0 ? (
            filteredIrrigation.map(each => (
              <li key={each.id} className='irrigation-li'>
                <Link to={`/irrigation/${each.id}`} className='irrigation-categories'>
                  {each.name}
                </Link>
              </li>
            ))
          ) : (
            <p className='no-results'>No irrigation systems found</p>
          )}
        </ul>

        

        {/* Footer */}
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

export default Irrigation
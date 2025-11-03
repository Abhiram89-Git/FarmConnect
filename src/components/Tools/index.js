import './index.css';
import { Component } from 'react';
import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';
// NEW: Import icons for the simple feature bar
import { FaFilter, FaRedo } from 'react-icons/fa';

// Forming Tools Data
const formingToolsData = {
    types: [
        {
            id: 1,
            name: 'Shovel',
            icon: '🔨',
            uses: 'Digging, soil movement, land preparation',
            pricePerDay: '₹50-100',
            material: 'Steel & Wood',
            weight: '2-3 kg'
        },
        {
            id: 2,
            name: 'Hoe',
            icon: '⛏️',
            uses: 'Weeding, soil breaking, field preparation',
            pricePerDay: '₹30-60',
            material: 'Iron & Wood',
            weight: '1.5-2 kg'
        },
        {
            id: 3,
            name: 'Rake',
            icon: '🧹',
            uses: 'Leveling soil, removing debris, seedbed prep',
            pricePerDay: '₹40-80',
            material: 'Wood & Metal',
            weight: '1-1.5 kg'
        },
        {
            id: 4,
            name: 'Sickle',
            icon: '🌾',
            uses: 'Harvesting crops, cutting grass and weeds',
            pricePerDay: '₹25-50',
            material: 'Steel & Wood',
            weight: '0.5-0.8 kg'
        },
        {
            id: 5,
            name: 'Spade',
            icon: '🔧',
            uses: 'Digging trenches, transplanting, soil work',
            pricePerDay: '₹60-120',
            material: 'Steel',
            weight: '2.5-3.5 kg'
        },
        {
            id: 6,
            name: 'Fork',
            icon: '🍴',
            uses: 'Turning soil, composting, hay handling',
            pricePerDay: '₹45-90',
            material: 'Steel & Wood',
            weight: '1.8-2.5 kg'
        }
    ]
};

// Tractor Cultivation Tools Data
const tractorData = {
    types: [
        {
            id: 1,
            name: 'Plough',
            icon: '⛏️',
            uses: 'Deep soil turning, breaking hardpan, primary tillage',
            pricePerAcre: '₹800-1000',
            season: 'Pre-monsoon, post-harvest',
            depth: '20-25 cm'
        },
        {
            id: 2,
            name: 'Harrow',
            icon: '📦',
            uses: 'Secondary tillage, soil leveling, clod breaking',
            pricePerAcre: '₹500-700',
            season: 'Year-round',
            depth: '10-15 cm'
        },
        {
            id: 3,
            name: 'Cultivator',
            icon: '🌾',
            uses: 'Inter-cultivation, weed removal, soil aeration',
            pricePerAcre: '₹600-800',
            season: 'Crop growing period',
            depth: '5-10 cm'
        },
        {
            id: 4,
            name: 'Rotavator',
            icon: '🔄',
            uses: 'Fine soil preparation, seedbed formation, mulching',
            pricePerAcre: '₹1000-1200',
            season: 'Pre-monsoon, pre-sowing',
            depth: '15-20 cm'
        },
        {
            id: 5,
            name: 'Disc Plough',
            icon: '💿',
            uses: 'Stubble incorporation, soil inversion in sticky soil',
            pricePerAcre: '₹900-1100',
            season: 'Post-harvest, monsoon',
            depth: '18-22 cm'
        },
        {
            id: 6,
            name: 'Power Tiller',
            icon: '⚙️',
            uses: 'Small field preparation, rice cultivation, garden beds',
            pricePerAcre: '₹700-900',
            season: 'Year-round',
            depth: '12-18 cm'
        }
    ]
};

// MODIFIED: Expanded data for simple categorization
const toolslist = [
    { id: 1, name: 'Shovel', type: 'Manual' },
    { id: 2, name: 'Hoe', type: 'Manual' },
    { id: 3, name: 'Rake', type: 'Manual' },
    { id: 4, name: 'Plough', type: 'Tillage' },
    { id: 5, name: 'Sprayer', type: 'Water' },
    { id: 6, name: 'Watering Can', type: 'Water' },
    { id: 7, name: 'Wheelbarrow', type: 'Manual' },
    { id: 8, name: 'Sickle', type: 'Manual' }
];

class Tools extends Component {
    // MODIFIED: Added state for category filter
    state = { 
        searchInput: '', 
        selectedCategory: 'All', // Default category
        showTractor: false, // NEW: Tractor toggle state
        showFormingTools: false // NEW: Forming Tools toggle state
    };

    onSearch = (event) => {
        this.setState({ searchInput: event.target.value });
    };

    // NEW: Handler to set the category filter
    onFilterChange = (category) => {
        this.setState({ selectedCategory: category, searchInput: '' });
    };

    // NEW: Handler to clear all filters
    onClearFilters = () => {
        this.setState({ selectedCategory: 'All', searchInput: '' });
    };

    // NEW: Handler to toggle tractor section
    toggleTractor = () => {
        this.setState(prevState => ({ showTractor: !prevState.showTractor }));
    };

    // NEW: Handler to toggle forming tools section
    toggleFormingTools = () => {
        this.setState(prevState => ({ showFormingTools: !prevState.showFormingTools }));
    };

    render() {
        const { searchInput, selectedCategory, showTractor, showFormingTools } = this.state;

        // MODIFIED: Filtering logic now includes category filter
        const filteredTools = toolslist.filter(each => {
            const matchesSearch = each.name.toLowerCase().includes(searchInput.trim().toLowerCase());
            // Check if the item's type matches the selected category, or if 'All' is selected
            const matchesCategory = selectedCategory === 'All' || each.type === selectedCategory;
            
            return matchesSearch && matchesCategory;
        });

        // NEW: Get unique categories for the filter buttons
        const categories = ['All', ...new Set(toolslist.map(tool => tool.type))];

        return (
            <div className='tool'>
                <header className="header">
                    <div className="img-logo">
                        <img 
                        src="https://ik.imagekit.io/wer9cus16/Gemini_Generated_Image_hxzmtlhxzmtlhxzm.png?updatedAt=1761411100421" 
                        className="logo" 
                        alt="FarmConnect"
                        />
                        <h1 className="heading">Farm<span className='connect'>Connect</span></h1>
                    </div>
                    <div className="search-bar">
                        <input
                            type="search"
                            value={searchInput}
                            onChange={this.onSearch}
                            placeholder="Search Tools..."
                            className="search-input"
                        />
                        <BiSearch className="search-icon" />
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
                {/* END NEW FEATURE BAR */}

                <ul className='tool-list'>
                    {filteredTools.length > 0 ? (
                        filteredTools.map(each => (
                            <li key={each.id} className='tool-li'>
                                <Link to={`/tools/${each.id}`} className='tool-categories'>
                                    {each.name}
                                </Link>
                            </li>
                        ))
                    ) : (
                        <p className='no-results'>No tools found</p>
                    )}
                </ul>

                {/* NEW: FORMING TOOLS SECTION */}
                <div className='forming-tools-container'>
                    <button className='forming-tools-toggle-btn' onClick={this.toggleFormingTools}>
                        🛠️ Forming Tools Details {showFormingTools ? '▼' : '▶'}
                    </button>
                    
                    {showFormingTools && (
                        <div className='forming-tools'>
                            <h2 className='forming-tools-title'>Hand Forming Tools & Pricing</h2>
                            <div className='forming-tools-grid'>
                                {formingToolsData.types.map(tool => (
                                    <div key={tool.id} className='forming-tools-card'>
                                        <div className='forming-tools-header'>
                                            <span className='forming-tools-big-icon'>{tool.icon}</span>
                                            <h3 className='forming-tools-name'>{tool.name}</h3>
                                        </div>
                                        
                                        <div className='forming-tools-details'>
                                            <div className='forming-detail-item'>
                                                <span className='forming-detail-label'>⚖️ Weight:</span>
                                                <span className='forming-detail-value'>{tool.weight}</span>
                                            </div>
                                            <div className='forming-detail-item'>
                                                <span className='forming-detail-label'>🏭 Material:</span>
                                                <span className='forming-detail-value'>{tool.material}</span>
                                            </div>
                                            <div className='forming-detail-item'>
                                                <span className='forming-detail-label'>💼 Uses:</span>
                                                <span className='forming-detail-value'>{tool.uses}</span>
                                            </div>
                                            <div className='forming-detail-item forming-price-highlight'>
                                                <span className='forming-detail-label'>💰 Price/Day:</span>
                                                <span className='forming-detail-value'>{tool.pricePerDay}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                {/* END FORMING TOOLS SECTION */}

                {/* TRACTOR SECTION */}
                <div className='tractor-container'>
                    <button className='tractor-toggle-btn' onClick={this.toggleTractor}>
                        🚜 Tractor Cultivation Tools {showTractor ? '▼' : '▶'}
                    </button>
                    
                    {showTractor && (
                        <div className='tractor'>
                            <h2 className='tractor-title'>Tractor Cultivation Tools & Pricing</h2>
                            <div className='tractor-grid'>
                                {tractorData.types.map(tool => (
                                    <div key={tool.id} className='tractor-card'>
                                        <div className='tractor-header'>
                                            <span className='tractor-big-icon'>{tool.icon}</span>
                                            <h3 className='tractor-name'>{tool.name}</h3>
                                        </div>
                                        
                                        <div className='tractor-details'>
                                            <div className='detail-item'>
                                                <span className='detail-label'>📏 Depth:</span>
                                                <span className='detail-value'>{tool.depth}</span>
                                            </div>
                                            <div className='detail-item'>
                                                <span className='detail-label'>🌾 Uses:</span>
                                                <span className='detail-value'>{tool.uses}</span>
                                            </div>
                                            <div className='detail-item'>
                                                <span className='detail-label'>📅 Season:</span>
                                                <span className='detail-value'>{tool.season}</span>
                                            </div>
                                            <div className='detail-item price-highlight'>
                                                <span className='detail-label'>💰 Price:</span>
                                                <span className='detail-value'>{tool.pricePerAcre}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                {/* END TRACTOR SECTION */}

                <footer className="footer">
                    <Link to='/'><button>Home</button></Link>
                    <Link to='/animals'><button>Animals</button></Link>
                    <Link to='/plants'><button>Plants</button></Link>
                    <Link to='/tools'><button>Tools</button></Link>
                    <Link to='/irrigation'><button>Irrigation</button></Link>
                    <Link to='/crops'><button>Crops</button></Link>
                </footer>
            </div>
        );
    }
}

export default Tools;
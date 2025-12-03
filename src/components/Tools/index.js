import './index.css';
import { Component } from 'react';
import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { FaFilter, FaRedo, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

// Enhanced Forming Tools Data
const formingToolsData = {
    category: 'Manual Tools',
    icon: '🛠️',
    description: 'Hand tools for everyday farming operations',
    types: [
        {
            id: 1,
            name: 'Shovel',
            emoji: '🔨',
            uses: 'Digging, soil movement, land preparation',
            pricePerDay: { min: 50, max: 100 },
            priceRange: '₹50-100',
            material: 'Steel & Wood',
            weight: '2-3 kg',
            rating: 4.6,
            reviews: 234,
            inStock: true,
            recommended: true,
            suppliers: '12 suppliers nearby',
            contact: '9876543210',
            efficiency: '95%',
            bestFor: ['Soil Work', 'Landscaping', 'Construction']
        },
        {
            id: 2,
            name: 'Hoe',
            emoji: '⛏️',
            uses: 'Weeding, soil breaking, field preparation',
            pricePerDay: { min: 30, max: 60 },
            priceRange: '₹30-60',
            material: 'Iron & Wood',
            weight: '1.5-2 kg',
            rating: 4.5,
            reviews: 189,
            inStock: true,
            recommended: true,
            suppliers: '15 suppliers nearby',
            contact: '9876543211',
            efficiency: '90%',
            bestFor: ['Weeding', 'Field Prep', 'Soil Breaking']
        },
        {
            id: 3,
            name: 'Rake',
            emoji: '🧹',
            uses: 'Leveling soil, removing debris, seedbed prep',
            pricePerDay: { min: 40, max: 80 },
            priceRange: '₹40-80',
            material: 'Wood & Metal',
            weight: '1-1.5 kg',
            rating: 4.3,
            reviews: 156,
            inStock: true,
            recommended: false,
            suppliers: '10 suppliers nearby',
            contact: '9876543212',
            efficiency: '88%',
            bestFor: ['Soil Leveling', 'Debris Removal', 'Seedbed']
        },
        {
            id: 4,
            name: 'Sickle',
            emoji: '🌾',
            uses: 'Harvesting crops, cutting grass and weeds',
            pricePerDay: { min: 25, max: 50 },
            priceRange: '₹25-50',
            material: 'Steel & Wood',
            weight: '0.5-0.8 kg',
            rating: 4.7,
            reviews: 267,
            inStock: true,
            recommended: true,
            suppliers: '18 suppliers nearby',
            contact: '9876543213',
            efficiency: '92%',
            bestFor: ['Harvesting', 'Grass Cutting', 'Weed Cutting']
        },
        {
            id: 5,
            name: 'Spade',
            emoji: '🔧',
            uses: 'Digging trenches, transplanting, soil work',
            pricePerDay: { min: 60, max: 120 },
            priceRange: '₹60-120',
            material: 'Steel',
            weight: '2.5-3.5 kg',
            rating: 4.8,
            reviews: 312,
            inStock: true,
            recommended: true,
            suppliers: '14 suppliers nearby',
            contact: '9876543214',
            efficiency: '96%',
            bestFor: ['Digging', 'Transplanting', 'Trenching']
        },
        {
            id: 6,
            name: 'Fork',
            emoji: '🍴',
            uses: 'Turning soil, composting, hay handling',
            pricePerDay: { min: 45, max: 90 },
            priceRange: '₹45-90',
            material: 'Steel & Wood',
            weight: '1.8-2.5 kg',
            rating: 4.4,
            reviews: 198,
            inStock: true,
            recommended: false,
            suppliers: '11 suppliers nearby',
            contact: '9876543215',
            efficiency: '89%',
            bestFor: ['Soil Turning', 'Composting', 'Hay Handling']
        }
    ]
};

// Enhanced Tractor Tools Data
const tractorData = {
    category: 'Tractor Equipment',
    icon: '🚜',
    description: 'Mechanized farming equipment for large-scale operations',
    types: [
        {
            id: 7,
            name: 'Plough',
            emoji: '⛏️',
            uses: 'Deep soil turning, breaking hardpan, primary tillage',
            pricePerAcre: { min: 800, max: 1000 },
            priceRange: '₹800-1000/acre',
            season: 'Pre-monsoon, post-harvest',
            depth: '20-25 cm',
            rating: 4.7,
            reviews: 445,
            inStock: true,
            recommended: true,
            suppliers: '8 suppliers nearby',
            contact: '9876543216',
            efficiency: '94%',
            bestFor: ['Tillage', 'Soil Preparation', 'Hardpan Breaking']
        },
        {
            id: 8,
            name: 'Harrow',
            emoji: '📦',
            uses: 'Secondary tillage, soil leveling, clod breaking',
            pricePerAcre: { min: 500, max: 700 },
            priceRange: '₹500-700/acre',
            season: 'Year-round',
            depth: '10-15 cm',
            rating: 4.5,
            reviews: 367,
            inStock: true,
            recommended: true,
            suppliers: '10 suppliers nearby',
            contact: '9876543217',
            efficiency: '91%',
            bestFor: ['Secondary Tillage', 'Soil Leveling', 'Clod Breaking']
        },
        {
            id: 9,
            name: 'Cultivator',
            emoji: '🌾',
            uses: 'Inter-cultivation, weed removal, soil aeration',
            pricePerAcre: { min: 600, max: 800 },
            priceRange: '₹600-800/acre',
            season: 'Crop growing period',
            depth: '5-10 cm',
            rating: 4.6,
            reviews: 289,
            inStock: true,
            recommended: false,
            suppliers: '9 suppliers nearby',
            contact: '9876543218',
            efficiency: '93%',
            bestFor: ['Inter-cultivation', 'Weed Removal', 'Aeration']
        },
        {
            id: 10,
            name: 'Rotavator',
            emoji: '🔄',
            uses: 'Fine soil preparation, seedbed formation, mulching',
            pricePerAcre: { min: 1000, max: 1200 },
            priceRange: '₹1000-1200/acre',
            season: 'Pre-monsoon, pre-sowing',
            depth: '15-20 cm',
            rating: 4.8,
            reviews: 512,
            inStock: true,
            recommended: true,
            suppliers: '7 suppliers nearby',
            contact: '9876543219',
            efficiency: '97%',
            bestFor: ['Seedbed Formation', 'Fine Preparation', 'Mulching']
        },
        {
            id: 11,
            name: 'Disc Plough',
            emoji: '💿',
            uses: 'Stubble incorporation, soil inversion in sticky soil',
            pricePerAcre: { min: 900, max: 1100 },
            priceRange: '₹900-1100/acre',
            season: 'Post-harvest, monsoon',
            depth: '18-22 cm',
            rating: 4.6,
            reviews: 398,
            inStock: true,
            recommended: false,
            suppliers: '6 suppliers nearby',
            contact: '9876543220',
            efficiency: '95%',
            bestFor: ['Stubble Incorporation', 'Sticky Soil', 'Inversion']
        },
        {
            id: 12,
            name: 'Power Tiller',
            emoji: '⚙️',
            uses: 'Small field preparation, rice cultivation, garden beds',
            pricePerAcre: { min: 700, max: 900 },
            priceRange: '₹700-900/acre',
            season: 'Year-round',
            depth: '12-18 cm',
            rating: 4.9,
            reviews: 578,
            inStock: true,
            recommended: true,
            suppliers: '11 suppliers nearby',
            contact: '9876543221',
            efficiency: '98%',
            bestFor: ['Small Fields', 'Rice', 'Garden Beds']
        }
    ]
};

class Tools extends Component {
    state = { 
        searchInput: '', 
        selectedCategory: 'All',
        showManualTools: true,
        showTractorTools: false,
        sortBy: 'recommended',
        prices: {}
    };

    componentDidMount() {
        this.fetchAllPrices();
        this.priceInterval = setInterval(this.fetchAllPrices, 300000);
    }

    componentWillUnmount() {
        clearInterval(this.priceInterval);
    }

    fetchAllPrices = () => {
        [...formingToolsData.types, ...tractorData.types].forEach(tool => {
            this.fetchPrice(tool);
        });
    }

    fetchPrice = (tool) => {
        const priceRange = tool.pricePerDay || tool.pricePerAcre;
        setTimeout(() => {
            const price = Math.floor(Math.random() * (priceRange.max - priceRange.min + 1)) + priceRange.min;
            const change = Math.random() > 0.5 ? 'up' : 'down';
            const changePercent = (Math.random() * 5).toFixed(1);

            this.setState(prevState => ({
                prices: { ...prevState.prices, [tool.id]: { current: price, change, changePercent } }
            }));
        }, 300);
    }

    onSearch = (event) => {
        this.setState({ searchInput: event.target.value });
    };

    onFilterChange = (category) => {
        this.setState({ selectedCategory: category, searchInput: '' });
    };

    onClearFilters = () => {
        this.setState({ selectedCategory: 'All', searchInput: '', sortBy: 'recommended' });
    };

    toggleManualTools = () => {
        this.setState(prevState => ({ showManualTools: !prevState.showManualTools }));
    };

    toggleTractorTools = () => {
        this.setState(prevState => ({ showTractorTools: !prevState.showTractorTools }));
    };

    renderToolCard = (tool, isTractor = false) => {
        const { prices } = this.state;
        const priceData = prices[tool.id];

        return (
            <div key={tool.id} className='enhanced-tool-card'>
                {tool.recommended && <div className='tool-recommended-badge'>⭐ Recommended</div>}
                
                <div className='tool-card-header'>
                    <span className='tool-emoji-large'>{tool.emoji}</span>
                    <div className='tool-header-info'>
                        <h3 className='tool-name'>{tool.name}</h3>
                        <div className='tool-rating'>
                            {'⭐'.repeat(Math.floor(tool.rating))} 
                            <span className='rating-count'>({tool.reviews})</span>
                        </div>
                    </div>
                </div>

                <p className='tool-uses'>{tool.uses}</p>

                <div className='tool-specs-grid'>
                    <div className='spec-item'>
                        <span className='spec-label'>⚖️ Weight</span>
                        <span className='spec-value'>{tool.weight}</span>
                    </div>
                    <div className='spec-item'>
                        <span className='spec-label'>🏭 Material</span>
                        <span className='spec-value'>{tool.material}</span>
                    </div>
                    {isTractor && (
                        <>
                            <div className='spec-item'>
                                <span className='spec-label'>📏 Depth</span>
                                <span className='spec-value'>{tool.depth}</span>
                            </div>
                            <div className='spec-item'>
                                <span className='spec-label'>📅 Season</span>
                                <span className='spec-value'>{tool.season}</span>
                            </div>
                        </>
                    )}
                </div>

                <div className='tool-efficiency'>
                    <span className='efficiency-label'>⚡ Efficiency</span>
                    <div className='efficiency-bar'>
                        <div className='efficiency-fill' style={{width: tool.efficiency}}></div>
                    </div>
                    <span className='efficiency-value'>{tool.efficiency}</span>
                </div>

                <div className='tool-price-section'>
                    <span className='price-label'>💰 Price</span>
                    <span className='price-display'>{tool.priceRange}</span>
                    {priceData && (
                        <span className={`live-update ${priceData.change}`}>
                            {priceData.change === 'up' ? '📈' : '📉'} {priceData.changePercent}%
                        </span>
                    )}
                </div>

                <div className='tool-benefits'>
                    {tool.bestFor.map((benefit, idx) => (
                        <span key={idx} className='benefit-badge'>{benefit}</span>
                    ))}
                </div>

                <div className='tool-contact-info'>
                    <div className='contact-item'>
                        <FaMapMarkerAlt /> {tool.suppliers}
                    </div>
                    <div className='contact-item'>
                        <FaPhone /> {tool.contact}
                    </div>
                </div>

                {tool.inStock && <div className='in-stock-badge'>✓ Available</div>}
            </div>
        );
    };

    render() {
        const { searchInput, selectedCategory, showManualTools, showTractorTools, sortBy } = this.state;
        const currentPath = window.location.pathname;

        const categories = ['All', 'Manual', 'Tractor'];

        return (
            <div className='enhanced-tools-container'>
                {/* HEADER */}
                <header className='header'>
                    <div className='img-logo'>
                        <img 
                            src='https://res.cloudinary.com/dydyatmsi/image/upload/v1764740453/ChatGPT_Image_Dec_3_2025_11_10_27_AM_is7jud.png' 
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
                            placeholder='Search tools by name or function...'
                            className='search-input'
                        />
                        <BiSearch className='search-icon' />
                    </div>
                </header>

                {/* FILTER BAR */}
                <div className='enhanced-tools-filter'>
                    <div className='filter-section'>
                        <span className='filter-title'><FaFilter /> Filter & Sort:</span>
                        <div className='filter-buttonss'>
                            {categories.map(category => (
                                <button
                                    key={category}
                                    className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                                    onClick={() => this.onFilterChange(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className='sort-section'>
                        <select 
                            className='sort-select'
                            value={sortBy}
                            onChange={(e) => this.setState({ sortBy: e.target.value })}
                        >
                            <option value='recommended'>⭐ Recommended</option>
                            <option value='rating'>🌟 Highest Rated</option>
                            <option value='price'>💰 Price</option>
                        </select>
                    </div>

                    <button className='clear-btn' onClick={this.onClearFilters}>
                        <FaRedo /> Reset
                    </button>
                </div>

                {/* MANUAL TOOLS SECTION */}
                <div className='tools-section'>
                    <button className='section-toggle-btn manual-toggle' onClick={this.toggleManualTools}>
                        <span className='section-icon'>{formingToolsData.icon}</span>
                        <div className='section-title-group'>
                            <h2>{formingToolsData.category}</h2>
                            <p>{formingToolsData.description}</p>
                        </div>
                        <span className='toggle-icon'>{showManualTools ? '▼' : '▶'}</span>
                    </button>

                    {showManualTools && (
                        <div className='tools-grid'>
                            {formingToolsData.types.map(tool => this.renderToolCard(tool, false))}
                        </div>
                    )}
                </div>

                {/* TRACTOR TOOLS SECTION */}
                <div className='tools-section'>
                    <button className='section-toggle-btn tractor-toggle' onClick={this.toggleTractorTools}>
                        <span className='section-icon'>{tractorData.icon}</span>
                        <div className='section-title-group'>
                            <h2>{tractorData.category}</h2>
                            <p>{tractorData.description}</p>
                        </div>
                        <span className='toggle-icon'>{showTractorTools ? '▼' : '▶'}</span>
                    </button>

                    {showTractorTools && (
                        <div className='tools-grid'>
                            {tractorData.types.map(tool => this.renderToolCard(tool, true))}
                        </div>
                    )}
                </div>

                {/* FOOTER */}
                <footer className='footer'>
                    <Link to='/'><button>Home</button></Link>
                    <Link to='/marketplace'><button>MarketPlace</button></Link>
                    <Link to='/plants'><button>Plants</button></Link>
                    <Link to='/tools'><button>Tools</button></Link>
                    <Link to='/irrigation'><button>Posts</button></Link>
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
                            <span className='mobile-nav-icon'>🛍️</span>
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
                            <span className='mobile-nav-icon'>📬</span>
                            <span className='mobile-nav-label'>Posts</span>
                        </Link>
                        <Link to='/crops' className={`mobile-nav-item ${currentPath === '/crops' ? 'active' : ''}`}>
                            <span className='mobile-nav-icon'>🌾</span>
                            <span className='mobile-nav-label'>Crops</span>
                        </Link>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Tools;
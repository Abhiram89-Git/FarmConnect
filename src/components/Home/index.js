import './index.css';
import { Component } from 'react';
import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';

class Home extends Component {
  statesData = {
    'Tamil Nadu': ['Chengalpattu', 'Kancheepuram', 'Chennai', 'Tiruvallur', 'Vellore', 'Ranipet', 'Tiruppur', 'Coimbatore', 'Erode', 'Namakkal', 'Salem', 'Krishnagiri', 'Dharmapuri', 'Villupuram', 'Cuddalore', 'Perambalur', 'Ariyalur', 'Pudukkottai', 'Tiruchirappalli', 'Madurai', 'Theni', 'Dindigul', 'Virudhunagar', 'Tirunelveli', 'Kanyakumari', 'Thoothukudi', 'Ramanathapuram'],
    'Maharashtra': ['Aurangabad', 'Pune', 'Nashik', 'Ahmednagar', 'Solapur', 'Satara', 'Sangli', 'Kolhapur', 'Belgaum', 'Jalna'],
    'Karnataka': ['Bengaluru', 'Mysore', 'Belgaum', 'Gulbarga', 'Davangere', 'Shimoga', 'Chikmagalur', 'Tumkur', 'Kolar', 'Chitradurga'],
    'Andhra Pradesh': ['Hyderabad', 'Visakhapatnam', 'Vijayawada', 'Guntur', 'Tirupati', 'Nellore', 'Ongole'],
    'Telangana': ['Hyderabad', 'Secunderabad', 'Warangal', 'Karimnagar', 'Nizamabad', 'Medchal', 'Rangareddy', 'Siddipet', 'Kamareddy', 'Khammam', 'Mahabubabad'],
    'Punjab': ['Ludhiana', 'Amritsar', 'Patiala', 'Jalandhar', 'Bathinda', 'Moga'],
    'Haryana': ['Chandigarh', 'Gurgaon', 'Hisar', 'Rohtak', 'Faridabad', 'Karnal']
  };

  state = {
    searchInput: '',
    weather: null,
    locationError: '',
    isLoading: false,
    tipOfTheDay: '',
    marketSellPrices: [],
    marketBuyPrices: [],
    isMarketLoading: true,
    pestAlerts: [],
    districts: [],
    selectedState: 'Tamil Nadu',
    selectedDistrict: 'Chengalpattu',
    showLocationModal: false,
    userLocation: { state: 'Tamil Nadu', district: 'Chengalpattu' },
    landTypes: [
      { id: 1, name: 'Loamy Soil', icon: '🌍', pH: '6.5-7.5', moisture: 'High', drainage: 'Good', fertility: 'Very High', suitableCrops: ['Rice', 'Wheat', 'Maize', 'Potato', 'Sugarcane'], requirements: { rainfall: '600-800 mm', temperature: '20-30°C', depth: '60-100 cm', organic: '3-4%' }, lastHarvest: '2024-09-15', nextPlanting: '2024-11-01', status: 'Excellent' },
      { id: 2, name: 'Sandy Soil', icon: '🏜️', pH: '6.0-7.0', moisture: 'Low', drainage: 'Very Good', fertility: 'Low', suitableCrops: ['Peanut', 'Watermelon', 'Carrot', 'Millets', 'Pulses'], requirements: { rainfall: '400-600 mm', temperature: '25-35°C', depth: '45-60 cm', organic: '1-2%' }, lastHarvest: '2024-08-20', nextPlanting: '2024-10-15', status: 'Good' },
      { id: 3, name: 'Clay Soil', icon: '🏔️', pH: '7.0-8.5', moisture: 'Very High', drainage: 'Poor', fertility: 'High', suitableCrops: ['Cotton', 'Sugarcane', 'Tobacco', 'Linseed', 'Gram'], requirements: { rainfall: '500-750 mm', temperature: '18-28°C', depth: '75-100 cm', organic: '2-3%' }, lastHarvest: '2024-09-10', nextPlanting: '2024-10-20', status: 'Good' },
      { id: 4, name: 'Red Soil', icon: '🔴', pH: '5.5-7.0', moisture: 'Medium', drainage: 'Good', fertility: 'Medium', suitableCrops: ['Groundnut', 'Pigeon Pea', 'Red Chilli', 'Turmeric', 'Ginger'], requirements: { rainfall: '700-900 mm', temperature: '22-32°C', depth: '50-80 cm', organic: '2-2.5%' }, lastHarvest: '2024-09-05', nextPlanting: '2024-10-25', status: 'Excellent' }
    ],
    selectedLand: null,
    sustainabilityMetrics: [
      { label: 'Water Usage', value: 75, target: 80, unit: '%', status: 'good' },
      { label: 'Carbon Footprint', value: 120, target: 100, unit: 'kg CO₂', status: 'warning' },
      { label: 'Organic Ratio', value: 65, target: 70, unit: '%', status: 'good' }
    ],
    aiAdvice: [
      { id: 1, type: 'irrigation', title: 'Optimal Irrigation Schedule', description: 'Based on weather, irrigate tomorrow at 6 AM for best results.', priority: 'high' },
      { id: 2, type: 'pest', title: 'Pest Alert: Aphids Detected', description: 'Monitor tomato plants and consider organic pest control.', priority: 'medium' },
      { id: 3, type: 'fertilizer', title: 'Fertilizer Recommendation', description: 'Apply nitrogen-rich fertilizer within 7 days.', priority: 'medium' }
    ],
    cropCalendar: [],
    showCropCalendar: false,
    governmentSchemes: [],
    showSchemes: false,
    pestGuide: [],
    showPestGuide: false,
    forumPosts: [],
    showForum: false,
    loanAmount: '',
    interestRate: '',
    loanPeriod: '',
    loanResult: { emi: 0, total: 0, interest: 0 },
    showLoanCalculator: false,
    weatherForecast: [],
    showForecast: false,
    activeFeature: null,
    activeTab: 'overview'
  };

  componentDidMount() {
    this.startWatchingLocation();
    this.showTipOfTheDay();
    this.fetchMarketPrices();
    this.setState({ selectedLand: this.state.landTypes[0], districts: this.statesData['Tamil Nadu'] });
    this.initializeCropCalendar();
    this.initializeGovernmentSchemes();
    this.initializePestGuide();
    this.initializeForumPosts();
    this.initializeWeatherForecast();
  }

  componentWillUnmount() {
    if (this.watchId) {
      navigator.geolocation.clearWatch(this.watchId);
    }
  }

  initializeCropCalendar = () => {
    const calendar = [
      { month: 'January', crops: [{ name: 'Wheat', action: 'harvest', icon: '🌾' }, { name: 'Potato', action: 'harvest', icon: '🥔' }, { name: 'Tomato', action: 'plant', icon: '🍅' }] },
      { month: 'February', crops: [{ name: 'Mustard', action: 'harvest', icon: '🌼' }, { name: 'Peas', action: 'harvest', icon: '🟢' }, { name: 'Chilli', action: 'plant', icon: '🌶️' }] },
      { month: 'March', crops: [{ name: 'Rice', action: 'plant', icon: '🍚' }, { name: 'Maize', action: 'plant', icon: '🌽' }, { name: 'Cotton', action: 'plant', icon: '☁️' }] },
      { month: 'April', crops: [{ name: 'Groundnut', action: 'plant', icon: '🥜' }, { name: 'Sugarcane', action: 'plant', icon: '🎋' }, { name: 'Turmeric', action: 'plant', icon: '🟡' }] },
      { month: 'May', crops: [{ name: 'Rice', action: 'maintain', icon: '🍚' }, { name: 'Cotton', action: 'maintain', icon: '☁️' }, { name: 'Vegetables', action: 'plant', icon: '🥬' }] },
      { month: 'June', crops: [{ name: 'Rice', action: 'maintain', icon: '🍚' }, { name: 'Maize', action: 'maintain', icon: '🌽' }, { name: 'Pulses', action: 'plant', icon: '🫘' }] },
      { month: 'July', crops: [{ name: 'Rice', action: 'maintain', icon: '🍚' }, { name: 'Sugarcane', action: 'maintain', icon: '🎋' }, { name: 'Okra', action: 'harvest', icon: '🟢' }] },
      { month: 'August', crops: [{ name: 'Cotton', action: 'maintain', icon: '☁️' }, { name: 'Vegetables', action: 'maintain', icon: '🥬' }, { name: 'Brinjal', action: 'harvest', icon: '🟣' }] },
      { month: 'September', crops: [{ name: 'Rice', action: 'harvest', icon: '🍚' }, { name: 'Groundnut', action: 'harvest', icon: '🥜' }, { name: 'Lentils', action: 'plant', icon: '🫘' }] },
      { month: 'October', crops: [{ name: 'Wheat', action: 'plant', icon: '🌾' }, { name: 'Gram', action: 'plant', icon: '🫘' }, { name: 'Onion', action: 'plant', icon: '🧅' }] },
      { month: 'November', crops: [{ name: 'Mustard', action: 'plant', icon: '🌼' }, { name: 'Barley', action: 'plant', icon: '🌾' }, { name: 'Garlic', action: 'plant', icon: '🧄' }] },
      { month: 'December', crops: [{ name: 'Wheat', action: 'maintain', icon: '🌾' }, { name: 'Potato', action: 'plant', icon: '🥔' }, { name: 'Cabbage', action: 'harvest', icon: '🥬' }] }
    ];
    this.setState({ cropCalendar: calendar });
  };

  initializeGovernmentSchemes = () => {
    const schemes = [
      { id: 1, name: 'PM-Kisan Samman Nidhi', description: 'Direct income support scheme for farmers', eligibility: 'Small and marginal farmers', benefits: '₹6,000 per year in three installments', url: 'https://pmkisan.gov.in/', category: 'Financial Support' },
      { id: 2, name: 'Pradhan Mantri Fasal Bima Yojana', description: 'Crop insurance scheme for farmers', eligibility: 'All farmers growing notified crops', benefits: 'Insurance coverage for crop losses', url: 'https://pmfby.gov.in/', category: 'Insurance' },
      { id: 3, name: 'Soil Health Card Scheme', description: 'Soil testing and health monitoring', eligibility: 'All farmers', benefits: 'Free soil testing every 2 years', url: 'https://soilhealth.dac.gov.in/', category: 'Technical Support' },
      { id: 4, name: 'Kisan Credit Card (KCC)', description: 'Credit facility for agricultural needs', eligibility: 'All farmers including sharecroppers', benefits: 'Up to ₹3 lakh credit limit', url: 'https://www.nabard.org/', category: 'Credit' }
    ];
    this.setState({ governmentSchemes: schemes });
  };

  initializePestGuide = () => {
    const pests = [
      { id: 1, name: 'Aphids', crops: ['Tomato', 'Chilli', 'Cotton', 'Brinjal'], symptoms: ['Yellowing leaves', 'Curling leaves', 'Stunted growth'], treatment: 'Spray neem oil or insecticidal soap.', prevention: 'Remove weeds, monitor regularly.', severity: 'medium', image: '🐛' },
      { id: 2, name: 'Whitefly', crops: ['Cotton', 'Tomato', 'Brinjal', 'Okra'], symptoms: ['Yellowing of leaves', 'Stunted growth'], treatment: 'Use yellow sticky traps.', prevention: 'Maintain proper spacing.', severity: 'high', image: '🪰' },
      { id: 3, name: 'Bollworm', crops: ['Cotton', 'Tomato', 'Chilli'], symptoms: ['Holes in fruits/bolls'], treatment: 'Use BT-based insecticides.', prevention: 'Crop rotation.', severity: 'high', image: '🐛' }
    ];
    this.setState({ pestGuide: pests });
  };

  initializeForumPosts = () => {
    const posts = [
      { id: 1, title: 'Best practices for organic farming in Tamil Nadu', author: 'Ramesh Kumar', category: 'Organic Farming', replies: 23, views: 456, timestamp: '2 hours ago', content: 'I have been practicing organic farming for the past 5 years...' },
      { id: 2, title: 'New drip irrigation system - worth the investment?', author: 'Priya Sharma', category: 'Irrigation', replies: 15, views: 289, timestamp: '5 hours ago', content: 'Considering installing drip irrigation in my 5-acre farm...' },
      { id: 3, title: 'Government scheme application process simplified', author: 'Mohan Reddy', category: 'Government Schemes', replies: 31, views: 678, timestamp: '1 day ago', content: 'Here is a step-by-step guide for applying to PM-Kisan scheme...' }
    ];
    this.setState({ forumPosts: posts });
  };

  initializeWeatherForecast = () => {
    const forecast = [
      { day: 'Mon', temp: 28, condition: 'Sunny', icon: '☀️', precipitation: 0 },
      { day: 'Tue', temp: 26, condition: 'Partly Cloudy', icon: '⛅', precipitation: 10 },
      { day: 'Wed', temp: 24, condition: 'Rainy', icon: '🌧️', precipitation: 80 },
      { day: 'Thu', temp: 25, condition: 'Cloudy', icon: '☁️', precipitation: 30 },
      { day: 'Fri', temp: 27, condition: 'Sunny', icon: '☀️', precipitation: 5 },
      { day: 'Sat', temp: 29, condition: 'Sunny', icon: '☀️', precipitation: 0 },
      { day: 'Sun', temp: 28, condition: 'Partly Cloudy', icon: '⛅', precipitation: 15 }
    ];
    this.setState({ weatherForecast: forecast });
  };

  handleStateChange = (state) => {
    this.setState({ selectedState: state, districts: this.statesData[state] || [], selectedDistrict: this.statesData[state]?.[0] || '' });
  };

  handleDistrictChange = (district) => {
    this.setState({ selectedDistrict: district });
  };

  fetchMarketPrices = () => {
    const { selectedState, selectedDistrict } = this.state;
    const state = selectedState || 'Tamil Nadu';
    const district = selectedDistrict || 'Chengalpattu';
    this.setState({ isMarketLoading: true });

    try {
      const { sellPrices, buyPrices } = this.generateMarketPrices(state, district);
      this.setState({ marketSellPrices: sellPrices, marketBuyPrices: buyPrices, isMarketLoading: false, userLocation: { state, district } });
    } catch (error) {
      const { sellPrices, buyPrices } = this.generateMarketPrices(state, district);
      this.setState({ marketSellPrices: sellPrices, marketBuyPrices: buyPrices, isMarketLoading: false, userLocation: { state, district } });
    }
  };

  generateMarketPrices = (state, district) => {
    const farmSellCrops = { 'Cotton': { min: 55, max: 90 }, 'Paddy': { min: 40, max: 55 }, 'Chilli': { min: 75, max: 140 }, 'Groundnut': { min: 40, max: 60 }, 'Maize': { min: 15, max: 25 }, 'Gram': { min: 50, max: 85 }, 'Wheat': { min: 32, max: 48 }, 'Sugarcane': { min: 380, max: 500 }, 'Soybean': { min: 45, max: 75 }, 'Tobacco': { min: 80, max: 150 }, 'Linseed': { min: 48, max: 80 }, 'Turmeric': { min: 70, max: 130 }, 'Ginger': { min: 65, max: 120 } };
    const farmBuyCrops = { 'Tomato': { min: 25, max: 45 }, 'Green Chilli': { min: 40, max: 80 }, 'Onion': { min: 20, max: 40 }, 'Potato': { min: 22, max: 35 }, 'Carrot': { min: 20, max: 35 }, 'Cabbage': { min: 15, max: 30 }, 'Cucumber': { min: 15, max: 25 }, 'Brinjal': { min: 25, max: 45 }, 'Cauliflower': { min: 30, max: 55 }, 'Radish': { min: 12, max: 25 }, 'Spinach': { min: 10, max: 20 }, 'Garlic': { min: 60, max: 120 } };

    const sellPrices = Object.entries(farmSellCrops).map(([crop, { min, max }]) => {
      const price = Math.floor(Math.random() * (max - min + 1)) + min;
      return { crop, price: `₹${price}/kg`, priceValue: price, type: 'sell', category: 'Farm Produce', icon: '🌾', district, state, updatedAt: new Date().toLocaleDateString() };
    });

    const buyPrices = Object.entries(farmBuyCrops).map(([crop, { min, max }]) => {
      const price = Math.floor(Math.random() * (max - min + 1)) + min;
      return { crop, price: `₹${price}/kg`, priceValue: price, type: 'buy', category: 'Vegetables/Household', icon: '🥬', district, state, updatedAt: new Date().toLocaleDateString() };
    });

    return { sellPrices, buyPrices };
  };

  toggleLocationModal = () => {
    this.setState({ showLocationModal: !this.state.showLocationModal });
  };

  applyLocationSelection = () => {
    this.toggleLocationModal();
    this.fetchMarketPrices();
  };

  toggleFeature = (featureName) => {
    const featureStates = {
      showCropCalendar: featureName === 'calendar',
      showSchemes: featureName === 'schemes',
      showPestGuide: featureName === 'pests',
      showForum: featureName === 'forum',
      showLoanCalculator: featureName === 'loan',
      showForecast: featureName === 'forecast'
    };
    
    // If the same button is clicked, toggle it off. Otherwise, hide all others and show the clicked one.
    if (featureName === 'calendar' && this.state.showCropCalendar) {
      this.setState({ showCropCalendar: false });
    } else if (featureName === 'schemes' && this.state.showSchemes) {
      this.setState({ showSchemes: false });
    } else if (featureName === 'pests' && this.state.showPestGuide) {
      this.setState({ showPestGuide: false });
    } else if (featureName === 'forum' && this.state.showForum) {
      this.setState({ showForum: false });
    } else if (featureName === 'loan' && this.state.showLoanCalculator) {
      this.setState({ showLoanCalculator: false });
    } else if (featureName === 'forecast' && this.state.showForecast) {
      this.setState({ showForecast: false });
    } else {
      // Hide all and show only the clicked one
      this.setState({
        showCropCalendar: false,
        showSchemes: false,
        showPestGuide: false,
        showForum: false,
        showLoanCalculator: false,
        showForecast: false,
        ...featureStates
      });
    }
  };

  handleApplyNow = (url) => {
    try {
      if (url) {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
      }
    } catch (error) {
      console.error('Error opening URL:', error);
    }
  };

  calculateLoan = () => {
    const principal = parseFloat(this.state.loanAmount) || 0;
    const rate = parseFloat(this.state.interestRate) || 0;
    const time = parseFloat(this.state.loanPeriod) || 0;

    if (principal > 0 && rate > 0 && time > 0) {
      const monthlyRate = rate / 12 / 100;
      const emi = principal * monthlyRate * Math.pow(1 + monthlyRate, time) / (Math.pow(1 + monthlyRate, time) - 1);
      this.setState({
        loanResult: {
          emi: Math.round(emi),
          total: Math.round(emi * time),
          interest: Math.round((emi * time) - principal)
        }
      });
    }
  };

  startWatchingLocation = () => {
    if (navigator.geolocation) {
      this.watchId = navigator.geolocation.watchPosition(this.fetchWeather, this.handleLocationError, { enableHighAccuracy: true, maximumAge: 0, timeout: 5000 });
    } else {
      this.setState({ locationError: 'Geolocation not supported' });
    }
  };

  refreshWeather = () => {
    if (navigator.geolocation) {
      this.setState({ isLoading: true });
      navigator.geolocation.getCurrentPosition(this.fetchWeather, this.handleLocationError, { enableHighAccuracy: true, maximumAge: 0, timeout: 5000 });
    }
  };

  fetchWeather = async (position) => {
    const { latitude, longitude } = position.coords;
    const apiKey = 'aacf34f1837d9765f52aa5f899590aad';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data && data.cod === 200) {
        const precipitation = (data.rain && data.rain['1h']) ? data.rain['1h'] : (data.rain && data.rain['3h']) ? data.rain['3h'] : 0;
        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const newWeather = { location: data.name || 'Unknown Location', temperature: data.main?.temp ?? 'N/A', humidity: data.main?.humidity ?? 'N/A', windSpeed: data.wind?.speed ?? 'N/A', condition: data.weather?.[0]?.main ?? 'N/A', icon: `https://openweathermap.org/img/wn/${data.weather?.[0]?.icon}@2x.png`, precipitation, time };
        this.setState({ weather: newWeather, locationError: '', isLoading: false });
        this.checkWeatherAlerts(newWeather);
      } else {
        this.setState({ locationError: 'Weather data not available', isLoading: false });
      }
    } catch (error) {
      this.setState({ locationError: 'Unable to fetch weather data', isLoading: false });
    }
  };

  handleLocationError = () => {
    this.setState({ locationError: 'Location access denied or unavailable', isLoading: false });
  };

  onSearch = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  showTipOfTheDay = () => {
    const tips = ['Use mulch to retain soil moisture.', 'Rotate crops to maintain soil fertility.', 'Water plants early in the morning for best absorption.', 'Use compost instead of chemical fertilizers.', 'Check soil pH regularly for better yield.'];
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    this.setState({ tipOfTheDay: randomTip });
  };

  checkWeatherAlerts = (weatherData) => {
    const alerts = [];
    const { humidity, temperature, condition, precipitation } = weatherData;
    if (humidity > 85) alerts.push('High humidity! Monitor crops for fungal infections.');
    if (temperature > 35) alerts.push('Extreme heat warning. Ensure adequate irrigation for crops.');
    if (condition === 'Rain' && precipitation > 10) alerts.push('Heavy rain expected. Check for potential waterlogging in fields.');
    this.setState({ pestAlerts: alerts });
  };

  selectLand = (land) => {
    this.setState({ selectedLand: land });
  };

  handleTabChange = (tab) => {
    this.setState({ activeTab: tab });
  };

  getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return '#ef4444';
      case 'medium': return '#f59e0b';
      case 'low': return '#10b981';
      default: return '#6b7280';
    }
  };

  getStatusColor = (status) => {
    switch (status) {
      case 'good': return '#10b981';
      case 'warning': return '#f59e0b';
      case 'critical': return '#ef4444';
      case 'Excellent': return '#10b981';
      case 'Good': return '#3b82f6';
      default: return '#6b7280';
    }
  };

  render() {
    const { searchInput, weather, locationError, isLoading, tipOfTheDay, marketSellPrices, marketBuyPrices, isMarketLoading, pestAlerts, landTypes, selectedLand, sustainabilityMetrics, aiAdvice, activeTab, districts, selectedDistrict, showLocationModal, userLocation, cropCalendar, showCropCalendar, governmentSchemes, showSchemes, pestGuide, showPestGuide, forumPosts, showForum, loanAmount, interestRate, loanPeriod, loanResult, showLoanCalculator, weatherForecast, showForecast } = this.state;
    

    return (
      <div className="home-container">
        <header className="header">
          <div className="img-logo">
            <img src="https://ik.imagekit.io/wer9cus16/Gemini_Generated_Image_hxzmtlhxzmtlhxzm.png?updatedAt=1761411100421" className="logo" alt="FarmConnect" />
            <h1 className="heading">Farm<span className='connect'>Connect</span></h1>
          </div>
          <div className="search-bar">
            <input type="search" value={searchInput} onChange={this.onSearch} placeholder="Search here..." />
            <BiSearch className="search-icon" />
          </div>
        </header>

        {showLocationModal && (
          <div className="modal-overlay" onClick={this.toggleLocationModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h3>Select Your Location</h3>
              <div className="location-selector">
                <div className="selector-group">
                  <label>State:</label>
                  <select value={this.state.selectedState} onChange={(e) => this.handleStateChange(e.target.value)}>
                    <option value="">-- Select State --</option>
                    {Object.keys(this.statesData).map((state) => (<option key={state} value={state}>{state}</option>))}
                  </select>
                </div>
                <div className="selector-group">
                  <label>District:</label>
                  <select value={selectedDistrict} onChange={(e) => this.handleDistrictChange(e.target.value)} disabled={!this.state.selectedState}>
                    <option value="">-- Select District --</option>
                    {districts.map((district) => (<option key={district} value={district}>{district}</option>))}
                  </select>
                </div>
              </div>
              <div className="modal-buttons">
                <button className="btn-cancel" onClick={this.toggleLocationModal}>Cancel</button>
                <button className="btn-apply" onClick={this.applyLocationSelection}>Apply</button>
              </div>
            </div>
          </div>
        )}

        <div className="main-content">
          <div className='wel-header'>
            <div className='col-8'>
              <h1 className="welcome-head">Welcome</h1>
              <p className="welcome-para">We explore the lives of farmers, their daily routines, and hard work. We aim to understand their challenges, the tools they need, and the support they require. This insight helps us appreciate their contribution to society.</p>
              <div className="tip-box">🌱 <strong>Tip of the Day:</strong> {tipOfTheDay}</div>
              {pestAlerts.length > 0 && (
                <div className="alerts-section">
                  <h4>⚠️ Weather Alerts</h4>
                  {pestAlerts.map((alert, index) => (<p key={index} className="alert-message">{alert}</p>))}
                </div>
              )}
            </div>
            {isLoading ? (
              <div className="loader">⏳ Updating Weather...</div>
            ) : weather ? (
              <div className="weather-card">
                <h3>{weather.location}</h3>
                <div className="weather-info">
                  <img src={weather.icon} alt={weather.condition} />
                  <p>{weather.temperature}°C — {weather.condition}</p>
                </div>
                <p className='humidity'>💧 Humidity: {weather.humidity}%</p>
                <p className='wind'>🌬 Wind: {weather.windSpeed} m/s</p>
                <p className='par'>🌧 Precipitation: {weather.precipitation} mm</p>
                <p className="weather-time">Time: {weather.time}</p>
                <button onClick={this.refreshWeather} className='refresh water-btn'>🔄 Refresh Location</button>
              </div>
            ) : (
              locationError && <p className="error">{locationError}</p>
            )}
          </div>

          {/* Feature Buttons */}
          <div className="feature-buttons">
            <button 
              className={`feature-btn ${this.state.activeFeature === 'calendar' ? 'active' : ''}`}
              onClick={() => this.toggleFeature('calendar')}
              disabled={this.state.activeFeature && this.state.activeFeature !== 'calendar'}
            >
              📅 Calendar
            </button>
            <button 
              className={`feature-btn ${this.state.activeFeature === 'schemes' ? 'active' : ''}`}
              onClick={() => this.toggleFeature('schemes')}
              disabled={this.state.activeFeature && this.state.activeFeature !== 'schemes'}
            >
              🏛️ Schemes
            </button>
            <button 
              className={`feature-btn ${this.state.activeFeature === 'pests' ? 'active' : ''}`}
              onClick={() => this.toggleFeature('pests')}
              disabled={this.state.activeFeature && this.state.activeFeature !== 'pests'}
            >
              🐛 Pests
            </button>
            <button 
              className={`feature-btn ${this.state.activeFeature === 'forum' ? 'active' : ''}`}
              onClick={() => this.toggleFeature('forum')}
              disabled={this.state.activeFeature && this.state.activeFeature !== 'forum'}
            >
              💬 Forum
            </button>
            <button 
              className={`feature-btn ${this.state.activeFeature === 'loan' ? 'active' : ''}`}
              onClick={() => this.toggleFeature('loan')}
              disabled={this.state.activeFeature && this.state.activeFeature !== 'loan'}
            >
              💰 Loan
            </button>
            <button 
              className={`feature-btn ${this.state.activeFeature === 'forecast' ? 'active' : ''}`}
              onClick={() => this.toggleFeature('forecast')}
              disabled={this.state.activeFeature && this.state.activeFeature !== 'forecast'}
            >
              🌤️ Forecast
            </button>
          </div>

          {showCropCalendar && (
            <div className="crop-calendar">
              <h2>📅 Crop Planting & Harvesting Calendar</h2>
              <div className="calendar-grid">
                {cropCalendar.map((month, index) => (
                  <div key={index} className="calendar-month">
                    <div className="month-title">{month.month}</div>
                    {month.crops.map((crop, cropIndex) => (
                      <div key={cropIndex} className={`crop-item action-${crop.action}`}>
                        <span>{crop.icon}</span>
                        <span>{crop.name} - {crop.action}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}

          {showSchemes && (
            <div className="crop-calendar">
              <h2>🏛️ Government Schemes & Subsidies</h2>
              <div className="schemes-grid">
                {governmentSchemes.map((scheme) => (
                  <div key={scheme.id} className="scheme-card">
                    <div className="scheme-title">{scheme.name}</div>
                    <div className="scheme-category">{scheme.category}</div>
                    <div className="scheme-description">{scheme.description}</div>
                    <div className="scheme-details">
                      <p><strong>Eligibility:</strong> {scheme.eligibility}</p>
                      <p><strong>Benefits:</strong> {scheme.benefits}</p>
                    </div>
                    <button className="scheme-apply">Apply Now</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {showPestGuide && (
            <div className="crop-calendar">
              <h2>🐛 Pest Identification & Treatment Guide</h2>
              <div className="pest-grid">
                {pestGuide.map((pest) => (
                  <div key={pest.id} className="pest-card">
                    <div className="pest-header">
                      <span className="pest-icon">{pest.image}</span>
                      <div>
                        <div className="pest-name">{pest.name}</div>
                        <span className={`pest-severity severity-${pest.severity}`}>{pest.severity.toUpperCase()} SEVERITY</span>
                      </div>
                    </div>
                    <div className="pest-section">
                      <h4>Affects Crops:</h4>
                      <ul className="pest-list">
                        {pest.crops.map((crop, index) => (
                          <li key={index}>{crop}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="pest-section">
                      <h4>Symptoms:</h4>
                      <ul className="pest-list">
                        {pest.symptoms.map((symptom, index) => (
                          <li key={index}>{symptom}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="pest-section">
                      <h4>Treatment:</h4>
                      <p style={{ fontSize: '0.9rem', color: '#6b7280' }}>{pest.treatment}</p>
                    </div>
                    <div className="pest-section">
                      <h4>Prevention:</h4>
                      <p style={{ fontSize: '0.9rem', color: '#6b7280' }}>{pest.prevention}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {showForum && (
            <div className="crop-calendar">
              <h2>💬 Farmer Community Forum</h2>
              <div className="forum-section">
                {forumPosts.map((post) => (
                  <div key={post.id} className="forum-post">
                    <div className="forum-title">{post.title}</div>
                    <div className="forum-meta">
                      <span>By {post.author}</span>
                      <span className="forum-category">{post.category}</span>
                      <span>{post.replies} replies</span>
                      <span>{post.views} views</span>
                      <span>{post.timestamp}</span>
                    </div>
                    <div className="forum-content">{post.content}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {showLoanCalculator && (
            <div className="loan-calculator">
              <h2>💰 Agricultural Loan Calculator</h2>
              <div className="loan-form">
                <div className="form-group">
                  <label>Loan Amount (₹)</label>
                  <input type="number" value={loanAmount} onChange={(e) => this.setState({ loanAmount: e.target.value })} placeholder="Enter amount" />
                </div>
                <div className="form-group">
                  <label>Interest Rate (%)</label>
                  <input type="number" value={interestRate} onChange={(e) => this.setState({ interestRate: e.target.value })} placeholder="Enter rate" />
                </div>
                <div className="form-group">
                  <label>Loan Period (months)</label>
                  <input type="number" value={loanPeriod} onChange={(e) => this.setState({ loanPeriod: e.target.value })} placeholder="Enter months" />
                </div>
              </div>
              <button className="calculate-btn" onClick={this.calculateLoan}>Calculate EMI</button>
              {loanResult.emi > 0 && (
                <div className="loan-results">
                  <h3>Loan Details</h3>
                  <div className="result-item">
                    <span>Monthly EMI:</span>
                    <span className="result-value">₹{loanResult.emi}</span>
                  </div>
                  <div className="result-item">
                    <span>Total Amount:</span>
                    <span className="result-value">₹{loanResult.total}</span>
                  </div>
                  <div className="result-item">
                    <span>Total Interest:</span>
                    <span className="result-value">₹{loanResult.interest}</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {showForecast && (
            <div className="weather-forecast">
              <h2>🌤️ 7-Day Weather Forecast</h2>
              <div className="forecast-grid">
                {weatherForecast.map((day, index) => (
                  <div key={index} className="forecast-day">
                    <div className="forecast-day-name">{day.day}</div>
                    <div className="forecast-icon">{day.icon}</div>
                    <div className="forecast-temp">{day.temp}°C</div>
                    <div className="forecast-condition">{day.condition}</div>
                    <div className="forecast-precipitation">💧 {day.precipitation}%</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="tab-navigation">
            <button className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => this.handleTabChange('overview')}>Overview</button>
            <button className={`tab-button ${activeTab === 'land' ? 'active' : ''}`} onClick={() => this.handleTabChange('land')}>Land Details</button>
            <button className={`tab-button ${activeTab === 'sustainability' ? 'active' : ''}`} onClick={() => this.handleTabChange('sustainability')}>Sustainability</button>
            <button className={`tab-button ${activeTab === 'ai' ? 'active' : ''}`} onClick={() => this.handleTabChange('ai')}>AI Assistant</button>
          </div>

          {activeTab === 'overview' && (
            <div className="tab-content">
              <div className="market-section">
                <div className="market-header">
                  <div><h2>📍 Market Prices - {userLocation.district}, {userLocation.state}</h2></div>
                  <button className="location-btn" onClick={this.toggleLocationModal}>📍 Change Location</button>
                </div>
                {isMarketLoading ? (
                  <div className="loader">📈 Loading Prices...</div>
                ) : (
                  <div className="market-container">
                    <div className="market-half sell-section">
                      <div className="section-header">
                        <h3 className='section-header-heading'>🌾 Farmer SELL (Produce)</h3>
                      </div>
                      <div className="market-grid">
                        {marketSellPrices.map((item, index) => (
                          <div key={index} className="market-card sell-card">
                            <p className="crop-name"><strong>{item.crop}</strong></p>
                            <p className="category-label">{item.category}</p>
                            <div className="price-box sell-price-box">
                              <span className="price-value">{item.price}</span>
                            </div>
                            <p className="update-time">Updated: {item.updatedAt}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="market-half buy-section">
                      <div className="section-header">
                        <h3 className='section-header-heading1'>🛒 Farmer BUY (Consumption)</h3>
                      </div>
                      <div className="market-grid">
                        {marketBuyPrices.map((item, index) => (
                          <div key={index} className="market-card buy-card">
                            <p className="crop-name"><strong>{item.crop}</strong></p>
                            <p className="category-label">{item.category}</p>
                            <div className="price-box buy-price-box">
                              <span className="price-value">{item.price}</span>
                            </div>
                            <p className="update-time">Updated: {item.updatedAt}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="sell-buy">
                
              </div>
            </div>
          )}

          {activeTab === 'land' && (
            <div className="tab-content">
              <div className="land-details-section">
                <h2>🚜 Land Details & Crop Suitability</h2>
                <div className="land-selector">
                  <h3>Select Your Land Type:</h3>
                  <div className="land-type-grid">
                    {landTypes.map((land) => (
                      <div key={land.id} className={`land-type-card ${selectedLand?.id === land.id ? 'active' : ''}`} onClick={() => this.selectLand(land)}>
                        <span className="land-icon">{land.icon}</span>
                        <h4>{land.name}</h4>
                        <p className="land-status" style={{ color: this.getStatusColor(land.status) }}>{land.status}</p>
                      </div>
                    ))}
                  </div>
                </div>
                {selectedLand && (
                  <div className="land-info-container">
                    <div className="land-info-header">
                      <h3>{selectedLand.icon} {selectedLand.name}</h3>
                    </div>
                    <div className="soil-properties">
                      <h4>🧪 Soil Properties</h4>
                      <div className="properties-grid">
                        <div className="property-item"><span className="prop-label">pH Level:</span><span className="prop-value">{selectedLand.pH}</span></div>
                        <div className="property-item"><span className="prop-label">Moisture:</span><span className="prop-value">{selectedLand.moisture}</span></div>
                        <div className="property-item"><span className="prop-label">Drainage:</span><span className="prop-value">{selectedLand.drainage}</span></div>
                        <div className="property-item"><span className="prop-label">Fertility:</span><span className="prop-value">{selectedLand.fertility}</span></div>
                      </div>
                    </div>
                    <div className="requirements-section">
                      <h4>📋 Environmental Requirements</h4>
                      <div className="requirements-grid">
                        <div className="requirement-item"><span className="req-icon">🌧️</span><span className="req-label">Rainfall:</span><span className="req-value">{selectedLand.requirements.rainfall}</span></div>
                        <div className="requirement-item"><span className="req-icon">🌡️</span><span className="req-label">Temperature:</span><span className="req-value">{selectedLand.requirements.temperature}</span></div>
                        <div className="requirement-item"><span className="req-icon">📏</span><span className="req-label">Soil Depth:</span><span className="req-value">{selectedLand.requirements.depth}</span></div>
                        <div className="requirement-item"><span className="req-icon">🌿</span><span className="req-label">Organic Matter:</span><span className="req-value">{selectedLand.requirements.organic}</span></div>
                      </div>
                    </div>
                    <div className="suitable-crops">
                      <h4>🌾 Suitable Crops</h4>
                      <div className="crops-list">
                        {selectedLand.suitableCrops.map((crop, index) => (
                          <div key={index} className="crop-badge">
                            <span className="crop-check">✓</span>
                            {crop}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'sustainability' && (
            <div className="tab-content">
              <div className="sustainability-section">
                <h2>🌱 Sustainability Metrics</h2>
                <p>Track your farm's environmental impact</p>
                <div className="sustainability-grid">
                  {sustainabilityMetrics.map((metric, index) => (
                    <div key={index} className="sustainability-card">
                      <div className="sustainability-header">
                        <span className="sustainability-label">{metric.label}</span>
                        <span className="sustainability-value" style={{ color: this.getStatusColor(metric.status) }}>{metric.value} {metric.unit}</span>
                      </div>
                      <div className="progress-bar">
                        <div className="progress-fill" style={{ width: `${metric.unit === '%' ? metric.value : (metric.value / metric.target) * 100}%`, backgroundColor: this.getStatusColor(metric.status) }}></div>
                      </div>
                      <p className="target-text">Target: {metric.target} {metric.unit}</p>
                    </div>
                  ))}
                </div>
                <div className="tips-section">
                  <h3>💧 Water Conservation Tips</h3>
                  <div className="tips-grid">
                    <div className="tip-card"><h4>Drip Irrigation</h4><p>Save up to 70% water compared to traditional methods.</p></div>
                    <div className="tip-card"><h4>Rainwater Harvesting</h4><p>Collect and store rainwater for dry periods.</p></div>
                    <div className="tip-card"><h4>Mulching</h4><p>Reduce evaporation by up to 50% with proper mulching.</p></div>
                    <div className="tip-card"><h4>Smart Scheduling</h4><p>Water during early morning or late evening.</p></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'ai' && (
            <div className="tab-content">
              <div className="ai-section">
                <h2>🤖 AI-Powered Farming Assistant</h2>
                <p>Personalized recommendations based on your farm data</p>
                <div className="advice-grid">
                  {aiAdvice.map((advice) => (
                    <div key={advice.id} className="advice-card" style={{ borderLeft: `4px solid ${this.getPriorityColor(advice.priority)}` }}>
                      <div className="advice-header">
                        <h4>{advice.title}</h4>
                        <span className="priority-badge" style={{ backgroundColor: this.getPriorityColor(advice.priority) }}>{advice.priority}</span>
                      </div>
                      <p className="advice-description">{advice.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <footer className="footer">
          <Link to="/"><button>Home</button></Link>
          <Link to="/animals"><button>Animals</button></Link>
          <Link to="/plants"><button>Plants</button></Link>
          <Link to="/tools"><button>Tools</button></Link>
          <Link to="/irrigation"><button>Irrigation</button></Link>
          <Link to="/crops"><button>Crops</button></Link>
        </footer>
      </div>
    );
  }
}

export default Home;
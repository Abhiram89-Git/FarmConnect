import './index.css';
import { Component } from 'react';
import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Loader from '../Loader';

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
    isLoading: true,
    searchInput: '',
    weather: null,
    locationError: '',
    isLoadingWeather: false,
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
    showUploadForm: false,
    cropListings: [
      { id: 1, crop: 'Cotton', quantity: '500 kg', price: '₹70/kg', farmer: 'Rajesh Kumar', phone: '+91 98765 43210', email: 'rajesh.kumar@farm.com', location: 'Chengalpattu, Tamil Nadu', description: 'Premium quality organic cotton, ready for immediate pickup', image: '🌾' },
      { id: 2, crop: 'Chilli', quantity: '200 kg', price: '₹110/kg', farmer: 'Priya Sharma', phone: '+91 98765 43211', email: 'priya.sharma@farm.com', location: 'Kancheepuram, Tamil Nadu', description: 'Spicy red chillies, excellent quality for wholesale', image: '🌶️' },
      { id: 3, crop: 'Maize', quantity: '1000 kg', price: '₹20/kg', farmer: 'Mohan Reddy', phone: '+91 98765 43212', email: 'mohan.reddy@farm.com', location: 'Chennai, Tamil Nadu', description: 'Fresh harvest, suitable for animal feed and processing', image: '🌽' },
      { id: 4, crop: 'Paddy', quantity: '800 kg', price: '₹48/kg', farmer: 'Lakshmi Devi', phone: '+91 98765 43213', email: 'lakshmi.devi@farm.com', location: 'Tiruvallur, Tamil Nadu', description: 'High-yield variety, well-dried and cleaned', image: '🍚' },
      { id: 5, crop: 'Groundnut', quantity: '300 kg', price: '₹55/kg', farmer: 'Venkat Rao', phone: '+91 98765 43214', email: 'venkat.rao@farm.com', location: 'Vellore, Tamil Nadu', description: 'Oil-rich groundnuts, perfect for oil extraction', image: '🥜' },
      { id: 6, crop: 'Sugarcane', quantity: '2000 kg', price: '₹450/kg', farmer: 'Arun Kumar', phone: '+91 98765 43215', email: 'arun.kumar@farm.com', location: 'Coimbatore, Tamil Nadu', description: 'Sweet variety, ideal for jaggery production', image: '🎋' }
    ],
    newCrop: { crop: '', quantity: '', price: '', farmer: '', phone: '', email: '', location: '', description: '' },
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
    activeTab: 'overview',
    darkMode: false,
    isAIChatOpen: false,
    aiMessages: [
      {
        role: 'assistant',
        content: 'Hello! I\'m your Farm AI Assistant. Ask me anything about farming, crops, weather, market prices, or agricultural practices.'
      }
    ],
    aiInput: '',
    isAILoading: false
  };

  aiMessagesEndRef = null;

  componentDidMount() {
    // Simulate loading time (3 seconds)
    setTimeout(() => {
      this.startWatchingLocation();
      this.showTipOfTheDay();
      this.fetchMarketPrices();
      this.setState({ 
        selectedLand: this.state.landTypes[0], 
        districts: this.statesData['Tamil Nadu'],
        isLoading: false 
      });
      this.initializeCropCalendar();
      this.initializeGovernmentSchemes();
      this.initializePestGuide();
      this.initializeForumPosts();
      this.initializeWeatherForecast();
      
      const savedDarkMode = localStorage.getItem('darkMode') === 'true';
      this.setState({ darkMode: savedDarkMode });
      if (savedDarkMode) {
        document.body.classList.add('dark-mode');
      }
    }, 3000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.aiMessages.length !== this.state.aiMessages.length) {
      this.scrollAIToBottom();
    }
  }

  componentWillUnmount() {
    if (this.watchId) {
      navigator.geolocation.clearWatch(this.watchId);
    }
  }

  // ===================== SEARCH METHODS =====================
  getSearchResults = () => {
    const { searchInput, cropListings, governmentSchemes, pestGuide, forumPosts, marketSellPrices, marketBuyPrices } = this.state;
    const query = searchInput.toLowerCase().trim();

    if (!query) return null;

    const results = {
      crops: [],
      schemes: [],
      pests: [],
      forum: [],
      market: []
    };

    cropListings.forEach(crop => {
      if (
        crop.crop.toLowerCase().includes(query) ||
        crop.farmer.toLowerCase().includes(query) ||
        crop.location.toLowerCase().includes(query) ||
        crop.description.toLowerCase().includes(query)
      ) {
        results.crops.push(crop);
      }
    });

    governmentSchemes.forEach(scheme => {
      if (
        scheme.name.toLowerCase().includes(query) ||
        scheme.description.toLowerCase().includes(query) ||
        scheme.category.toLowerCase().includes(query) ||
        scheme.benefits.toLowerCase().includes(query)
      ) {
        results.schemes.push(scheme);
      }
    });

    pestGuide.forEach(pest => {
      if (
        pest.name.toLowerCase().includes(query) ||
        pest.crops.some(c => c.toLowerCase().includes(query)) ||
        pest.symptoms.some(s => s.toLowerCase().includes(query)) ||
        pest.treatment.toLowerCase().includes(query)
      ) {
        results.pests.push(pest);
      }
    });

    forumPosts.forEach(post => {
      if (
        post.title.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query) ||
        post.author.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query)
      ) {
        results.forum.push(post);
      }
    });

    const allPrices = [...marketSellPrices, ...marketBuyPrices];
    allPrices.forEach(item => {
      if (item.crop.toLowerCase().includes(query)) {
        results.market.push(item);
      }
    });

    return results;
  };

  renderSearchResults = () => {
    const results = this.getSearchResults();
    
    if (!results) return null;

    const totalResults = results.crops.length + results.schemes.length + results.pests.length + results.forum.length + results.market.length;

    return (
      <div className="search-results-container">
        <div className="search-results-header">
          <h2>Search Results</h2>
          <p className="results-count">Found {totalResults} result(s) for "<strong>{this.state.searchInput}</strong>"</p>
        </div>

        {results.crops.length > 0 && (
          <div className="search-results-section">
            <h3>🌾 Crop Listings ({results.crops.length})</h3>
            <div className="search-results-grid">
              {results.crops.map((crop) => (
                <div key={crop.id} className="search-result-card crop-result">
                  <div className="result-icon">{crop.image}</div>
                  <h4>{crop.crop}</h4>
                  <p className="result-detail"><strong>Farmer:</strong> {crop.farmer}</p>
                  <p className="result-detail"><strong>Price:</strong> <span className="price-highlight">{crop.price}</span></p>
                  <p className="result-detail"><strong>Quantity:</strong> {crop.quantity}</p>
                  <p className="result-detail"><strong>📍 Location:</strong> {crop.location}</p>
                  <div className="search-result-actions">
                    <button className="contact-btn" onClick={() => this.handleContactFarmer(crop.email, crop.crop)}>📧 Contact</button>
                    <button className="call-btn" onClick={() => this.handleCallFarmer(crop.phone)}>☎️ Call</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {results.schemes.length > 0 && (
          <div className="search-results-section">
            <h3>🏛️ Government Schemes ({results.schemes.length})</h3>
            <div className="search-results-grid">
              {results.schemes.map((scheme) => (
                <div key={scheme.id} className="search-result-card scheme-result">
                  <h4>{scheme.name}</h4>
                  <p className="result-category">{scheme.category}</p>
                  <p className="result-detail">{scheme.description}</p>
                  <p className="result-detail"><strong>Eligibility:</strong> {scheme.eligibility}</p>
                  <p className="result-detail"><strong>Benefits:</strong> {scheme.benefits}</p>
                  <button className="apply-btn" onClick={() => this.handleApplyNow(scheme.url)}>Apply Now →</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {results.pests.length > 0 && (
          <div className="search-results-section">
            <h3>🐛 Pests ({results.pests.length})</h3>
            <div className="search-results-grid">
              {results.pests.map((pest) => (
                <div key={pest.id} className="search-result-card pest-result">
                  <div className="result-icon">{pest.image}</div>
                  <h4>{pest.name}</h4>
                  <span className={`pest-severity severity-${pest.severity}`}>{pest.severity.toUpperCase()}</span>
                  <p className="result-detail"><strong>Affects:</strong> {pest.crops.join(', ')}</p>
                  <p className="result-detail"><strong>Treatment:</strong> {pest.treatment}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {results.forum.length > 0 && (
          <div className="search-results-section">
            <h3>💬 Forum Posts ({results.forum.length})</h3>
            {results.forum.map((post) => (
              <div key={post.id} className="search-result-card forum-result">
                <h4>{post.title}</h4>
                <p className="result-meta">By <strong>{post.author}</strong> • {post.category}</p>
                <p className="result-detail">{post.content}</p>
                <p className="result-stats">{post.replies} replies • {post.views} views • {post.timestamp}</p>
              </div>
            ))}
          </div>
        )}

        {results.market.length > 0 && (
          <div className="search-results-section">
            <h3>📊 Market Prices ({results.market.length})</h3>
            <div className="search-results-grid">
              {results.market.map((item, index) => (
                <div key={index} className={`search-result-card market-result ${item.type}-price`}>
                  <div className="result-icon">{item.icon}</div>
                  <h4>{item.crop}</h4>
                  <p className="result-detail"><strong>Price:</strong> <span className="price-highlight">{item.price}</span></p>
                  <p className="result-detail"><strong>Type:</strong> {item.type === 'sell' ? '🌾 Farmer Sells' : '🛒 Farmer Buys'}</p>
                  <p className="result-detail"><strong>Location:</strong> {item.district}, {item.state}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {totalResults === 0 && (
          <div className="no-results">
            <p style={{fontSize: '24px'}}>❌</p>
            <p style={{fontSize: '18px', fontWeight: 'bold'}}>No results found</p>
            <p>Try searching with different keywords like crop names, farmer names, or locations</p>
          </div>
        )}
      </div>
    );
  };

  // ===================== OTHER METHODS =====================
  scrollAIToBottom = () => {
    if (this.aiMessagesEndRef) {
      this.aiMessagesEndRef.scrollIntoView({ behavior: 'smooth' });
    }
  };

  handleAISubmit = async () => {
    const { aiInput, isAILoading } = this.state;
    if (!aiInput.trim() || isAILoading) return;

    const userMessage = aiInput.trim();
    this.setState({ aiInput: '' });
    
    this.setState(prevState => ({
      aiMessages: [...prevState.aiMessages, { role: 'user', content: userMessage }],
      isAILoading: true
    }));

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1024,
          messages: [
            {
              role: 'user',
              content: `You are an expert agricultural assistant with deep knowledge of farming practices in India, especially Tamil Nadu. Provide practical, actionable advice in a friendly tone. Keep responses clear and concise (2-4 paragraphs).\n\nFarmer's question: ${userMessage}`
            }
          ]
        })
      });

      if (!response.ok) {
        throw new Error(`API returned status ${response.status}`);
      }

      const data = await response.json();
      
      if (data.content && Array.isArray(data.content) && data.content.length > 0) {
        const assistantMessage = data.content
          .filter(item => item.type === 'text')
          .map(item => item.text)
          .join('\n\n');
        
        this.setState(prevState => ({
          aiMessages: [...prevState.aiMessages, { role: 'assistant', content: assistantMessage }],
          isAILoading: false
        }));
        return;
      } else {
        throw new Error('No content in API response');
      }
    } catch (error) {
      console.error('API Error:', error.message);
      
      const fallbackMessage = `I'm here to help with farming advice! I can assist with:\n\n• Crop cultivation and planning\n• Pest and disease management\n• Soil health and fertilizers\n• Irrigation techniques\n• Weather-based advice\n• Market information\n• Government schemes\n\nPlease ask a specific question about any of these topics.`;
      
      this.setState(prevState => ({
        aiMessages: [...prevState.aiMessages, { role: 'assistant', content: fallbackMessage }],
        isAILoading: false
      }));
    }
  };

  handleAIKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      this.handleAISubmit();
    }
  };

  handleQuickQuestion = (question) => {
    this.setState({ aiInput: question }, () => {
      this.handleAISubmit();
    });
  };

  toggleAIChat = () => {
    this.setState(prevState => ({ isAIChatOpen: !prevState.isAIChatOpen }));
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
      this.setState({ isLoadingWeather: true });
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
        this.setState({ weather: newWeather, locationError: '', isLoadingWeather: false });
        this.checkWeatherAlerts(newWeather);
      } else {
        this.setState({ locationError: 'Weather data not available', isLoadingWeather: false });
      }
    } catch (error) {
      this.setState({ locationError: 'Unable to fetch weather data', isLoadingWeather: false });
    }
  };

  handleLocationError = () => {
    this.setState({ locationError: 'Location access denied or unavailable', isLoadingWeather: false });
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

  toggleDarkMode = () => {
    this.setState(prevState => {
      const newDarkMode = !prevState.darkMode;
      localStorage.setItem('darkMode', newDarkMode);
      
      if (newDarkMode) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
      
      return { darkMode: newDarkMode };
    });
  };

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

  toggleUploadForm = () => {
    this.setState({ showUploadForm: !this.state.showUploadForm });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ newCrop: { ...this.state.newCrop, [name]: value } });
  };

  handleCropSubmit = (e) => {
    e.preventDefault();
    const { newCrop, cropListings } = this.state;
    const cropIcons = { Cotton: '🌾', Chilli: '🌶️', Maize: '🌽', Paddy: '🍚', Groundnut: '🥜', Sugarcane: '🎋', Wheat: '🌾', Tomato: '🍅', Potato: '🥔', Onion: '🧅' };
    
    if (newCrop.crop && newCrop.quantity && newCrop.price && newCrop.farmer && newCrop.phone) {
      const newListing = {
        id: cropListings.length + 1,
        ...newCrop,
        image: cropIcons[newCrop.crop] || '🌱'
      };
      
      this.setState({
        cropListings: [...cropListings, newListing],
        newCrop: { crop: '', quantity: '', price: '', farmer: '', phone: '', email: '', location: '', description: '' },
        showUploadForm: false
      });
    }
  };

  handleContactFarmer = (email, crop) => {
    window.location.href = `mailto:${email}?subject=Interested in buying ${crop}&body=Hello, I am interested in buying your ${crop}. Please contact me.`;
  };

  handleCallFarmer = (phone) => {
    window.location.href = `tel:${phone}`;
  };

  toggleLocationModal = () => {
    this.setState({ showLocationModal: !this.state.showLocationModal });
  };

  applyLocationSelection = () => {
    this.toggleLocationModal();
    this.fetchMarketPrices();
  };

  toggleFeature = (featureName) => {
    const currentFeature = this.state.activeFeature;
    
    if (currentFeature === featureName) {
      this.setState({ 
        activeFeature: null,
        showCropCalendar: false,
        showSchemes: false,
        showPestGuide: false,
        showForum: false,
        showLoanCalculator: false,
        showForecast: false
      });
    } else {
      this.setState({
        activeFeature: featureName,
        showCropCalendar: featureName === 'calendar',
        showSchemes: featureName === 'schemes',
        showPestGuide: featureName === 'pests',
        showForum: featureName === 'forum',
        showLoanCalculator: featureName === 'loan',
        showForecast: featureName === 'forecast'
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

  render() {
    const { isLoading, darkMode, searchInput, weather, locationError, isLoadingWeather, tipOfTheDay, marketSellPrices, marketBuyPrices, isMarketLoading, pestAlerts, landTypes, selectedLand, sustainabilityMetrics, aiAdvice, activeTab, districts, selectedDistrict, showLocationModal, userLocation, cropCalendar, showCropCalendar, governmentSchemes, showSchemes, pestGuide, showPestGuide, forumPosts, showForum, loanAmount, interestRate, loanPeriod, loanResult, showLoanCalculator, weatherForecast, showForecast, cropListings, showUploadForm, newCrop, isAIChatOpen, aiMessages, aiInput, isAILoading } = this.state;
    
    const currentPath = window.location.pathname;

    const quickQuestions = [
      "How to prevent pest attacks on tomatoes?",
      "Best time to plant rice in Tamil Nadu",
      "How to improve soil fertility naturally?",
      "What are signs of nitrogen deficiency?"
    ];

    // Show loader while page is loading
    if (isLoading) {
      return <Loader />;
    }
    
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
          <button className="dark-mode-toggle" onClick={this.toggleDarkMode} title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
            {darkMode ? <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-sun" viewBox="0 0 16 16"><path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-moon-stars" viewBox="0 0 16 16"><path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/><path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/></svg>}
          </button>
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
          {this.state.searchInput && this.renderSearchResults()}

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
            {isLoadingWeather ? (
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

          <div className="feature-buttons">
            <button className={`feature-btn ${this.state.activeFeature === 'calendar' ? 'active' : ''}`} onClick={() => this.toggleFeature('calendar')} disabled={this.state.activeFeature && this.state.activeFeature !== 'calendar'}>📅 Calendar</button>
            <button className={`feature-btn ${this.state.activeFeature === 'schemes' ? 'active' : ''}`} onClick={() => this.toggleFeature('schemes')} disabled={this.state.activeFeature && this.state.activeFeature !== 'schemes'}>🏛️ Schemes</button>
            <button className={`feature-btn ${this.state.activeFeature === 'pests' ? 'active' : ''}`} onClick={() => this.toggleFeature('pests')} disabled={this.state.activeFeature && this.state.activeFeature !== 'pests'}>🐛 Pests</button>
            <button className={`feature-btn ${this.state.activeFeature === 'forum' ? 'active' : ''}`} onClick={() => this.toggleFeature('forum')} disabled={this.state.activeFeature && this.state.activeFeature !== 'forum'}>💬 Forum</button>
            <button className={`feature-btn ${this.state.activeFeature === 'loan' ? 'active' : ''}`} onClick={() => this.toggleFeature('loan')} disabled={this.state.activeFeature && this.state.activeFeature !== 'loan'}>💰 Loan</button>
            <button className={`feature-btn ${this.state.activeFeature === 'forecast' ? 'active' : ''}`} onClick={() => this.toggleFeature('forecast')} disabled={this.state.activeFeature && this.state.activeFeature !== 'forecast'}>🌤️ Forecast</button>
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
                    <button className="scheme-apply" onClick={() => this.handleApplyNow(scheme.url)}>Apply Now</button>
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
                        {pest.crops.map((crop, index) => (<li key={index}>{crop}</li>))}
                      </ul>
                    </div>
                    <div className="pest-section">
                      <h4>Symptoms:</h4>
                      <ul className="pest-list">
                        {pest.symptoms.map((symptom, index) => (<li key={index}>{symptom}</li>))}
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
                <div className="sell-buy-section">
                  <div className="sell-buy-header">
                    <h2>🌾 Buy & Sell Crops</h2>
                    <button className="upload-btn" onClick={this.toggleUploadForm}>📤 Upload Your Crops</button>
                  </div>

                  {showUploadForm && (
                    <div className="upload-form-modal">
                      <div className="upload-form-content">
                        <h3>Upload Your Crop</h3>
                        <form onSubmit={this.handleCropSubmit}>
                          <div className="form-row">
                            <div className="form-group">
                              <label>Crop Name *</label>
                              <select name="crop" value={newCrop.crop} onChange={this.handleInputChange} required>
                                <option value="">Select Crop</option>
                                <option value="Cotton">Cotton</option>
                                <option value="Chilli">Chilli</option>
                                <option value="Maize">Maize</option>
                                <option value="Paddy">Paddy</option>
                                <option value="Groundnut">Groundnut</option>
                                <option value="Sugarcane">Sugarcane</option>
                                <option value="Wheat">Wheat</option>
                                <option value="Tomato">Tomato</option>
                                <option value="Potato">Potato</option>
                                <option value="Onion">Onion</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label>Quantity *</label>
                              <input type="text" name="quantity" value={newCrop.quantity} onChange={this.handleInputChange} placeholder="e.g., 500 kg" required />
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="form-group">
                              <label>Price *</label>
                              <input type="text" name="price" value={newCrop.price} onChange={this.handleInputChange} placeholder="e.g., ₹70/kg" required />
                            </div>
                            <div className="form-group">
                              <label>Your Name *</label>
                              <input type="text" name="farmer" value={newCrop.farmer} onChange={this.handleInputChange} placeholder="Enter your name" required />
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="form-group">
                              <label>Phone Number *</label>
                              <input type="tel" name="phone" value={newCrop.phone} onChange={this.handleInputChange} placeholder="+91 98765 43210" required />
                            </div>
                            <div className="form-group">
                              <label>Email</label>
                              <input type="email" name="email" value={newCrop.email} onChange={this.handleInputChange} placeholder="your.email@farm.com" />
                            </div>
                          </div>
                          <div className="form-group">
                            <label>Location *</label>
                            <input type="text" name="location" value={newCrop.location} onChange={this.handleInputChange} placeholder="e.g., Chengalpattu, Tamil Nadu" required />
                          </div>
                          <div className="form-group">
                            <label>Description</label>
                            <textarea name="description" value={newCrop.description} onChange={this.handleInputChange} placeholder="Describe your crop quality, harvest date, etc." rows="3"></textarea>
                          </div>
                          <div className="form-buttons">
                            <button type="submit" className="btn-submit">Upload Crop</button>
                            <button type="button" className="btn-cancel" onClick={this.toggleUploadForm}>Cancel</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  )}

                  <div className="crop-listings-grid">
                    {cropListings.map((listing) => (
                      <div key={listing.id} className="crop-listing-card">
                        <div className="crop-card-header">
                          <span className="crop-icon-large">{listing.image}</span>
                          <div className="crop-card-title">
                            <h3>{listing.crop}</h3>
                            <p className="crop-location">📍 {listing.location}</p>
                          </div>
                        </div>
                        <div className="crop-card-details">
                          <div className="detail-row">
                            <span className="detail-label">Quantity:</span>
                            <span className="detail-value">{listing.quantity}</span>
                          </div>
                          <div className="detail-row">
                            <span className="detail-label">Price:</span>
                            <span className="detail-value price-highlight">{listing.price}</span>
                          </div>
                          <div className="detail-row">
                            <span className="detail-label">Farmer:</span>
                            <span className="detail-value">{listing.farmer}</span>
                          </div>
                        </div>
                        <div className="crop-description">
                          <p>{listing.description}</p>
                        </div>
                        <div className="crop-card-actions">
                          <button className="contact-btn" onClick={() => this.handleContactFarmer(listing.email, listing.crop)}>📧 Contact</button>
                          <button className="call-btn" onClick={() => this.handleCallFarmer(listing.phone)}>☎️ Call</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
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
                      </div>
                    ))}
                  </div>
                </div>

                {selectedLand && (
                  <div className="land-details">
                    <h3>Details for {selectedLand.name}</h3>
                    <div className="land-info-grid">
                      <div className="info-card">
                        <h4>Soil Properties</h4>
                        <p><strong>pH Level:</strong> {selectedLand.pH}</p>
                        <p><strong>Moisture:</strong> {selectedLand.moisture}</p>
                        <p><strong>Drainage:</strong> {selectedLand.drainage}</p>
                        <p><strong>Fertility:</strong> {selectedLand.fertility}</p>
                      </div>
                      <div className="info-card">
                        <h4>Requirements</h4>
                        <p><strong>Rainfall:</strong> {selectedLand.requirements.rainfall}</p>
                        <p><strong>Temperature:</strong> {selectedLand.requirements.temperature}</p>
                        <p><strong>Depth:</strong> {selectedLand.requirements.depth}</p>
                        <p><strong>Organic Matter:</strong> {selectedLand.requirements.organic}</p>
                      </div>
                      <div className="info-card">
                        <h4>Farming Schedule</h4>
                        <p><strong>Last Harvest:</strong> {selectedLand.lastHarvest}</p>
                        <p><strong>Next Planting:</strong> {selectedLand.nextPlanting}</p>
                        <p><strong>Status:</strong> <span style={{ color: this.getStatusColor(selectedLand.status) }}>{selectedLand.status}</span></p>
                      </div>
                    </div>
                    <div className="suitable-crops">
                      <h4>Suitable Crops:</h4>
                      <div className="crops-list">
                        {selectedLand.suitableCrops.map((crop, index) => (
                          <span key={index} className="crop-badge">{crop}</span>
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
                <div className="metrics-grid">
                  {sustainabilityMetrics.map((metric, index) => (
                    <div key={index} className="metric-card">
                      <h4>{metric.label}</h4>
                      <div className="metric-value" style={{ color: this.getStatusColor(metric.status) }}>
                        {metric.value} {metric.unit}
                      </div>
                      <div className="metric-target">Target: {metric.target} {metric.unit}</div>
                      <div className="progress-bar">
                        <div 
                          className="progress-fill" 
                          style={{ 
                            width: `${(metric.value / metric.target) * 100}%`,
                            backgroundColor: this.getStatusColor(metric.status)
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'ai' && (
            <div className="tab-content">
              <div className="ai-assistant-section">
                <h2>🤖 AI-Powered Farming Advice</h2>
                <div className="ai-advice-grid">
                  {aiAdvice.map((advice) => (
                    <div key={advice.id} className="advice-card">
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

        {!isAIChatOpen && (
          <button 
            className="ai-chat-button" 
            onClick={this.toggleAIChat}
            aria-label="Open AI Assistant"
          >
            🤖
          </button>
        )}

        {isAIChatOpen && (
          <div className="ai-chat-container">
            <div className="ai-chat-header">
              <div className="ai-chat-title">
                <span>🤖</span>
                <span>Farm AI Assistant</span>
              </div>
              <button 
                className="ai-chat-close" 
                onClick={this.toggleAIChat}
                aria-label="Close chat"
              >
                ×
              </button>
            </div>

            <div className="ai-chat-messages">
              {aiMessages.map((message, index) => (
                <div 
                  key={index} 
                  className={`ai-message ${message.role}`}
                >
                  <div className="ai-message-content">
                    {message.content}
                  </div>
                </div>
              ))}
              {isAILoading && (
                <div className="ai-message assistant">
                  <div className="ai-loading">
                    <div className="ai-loading-dot"></div>
                    <div className="ai-loading-dot"></div>
                    <div className="ai-loading-dot"></div>
                  </div>
                </div>
              )}
              <div ref={(el) => { this.aiMessagesEndRef = el; }} />
            </div>

            {aiMessages.length === 1 && (
              <div className="ai-quick-questions">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    className="ai-quick-question"
                    onClick={() => this.handleQuickQuestion(question)}
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}

            <div className="ai-chat-input-container">
              <div className="ai-chat-form">
                <input
                  type="text"
                  className="ai-chat-input"
                  placeholder="Ask about farming, crops, weather..."
                  value={aiInput}
                  onChange={(e) => this.setState({ aiInput: e.target.value })}
                  onKeyPress={this.handleAIKeyPress}
                  disabled={isAILoading}
                />
                <button
                  onClick={this.handleAISubmit}
                  className="ai-chat-send"
                  disabled={isAILoading || !aiInput.trim()}
                  aria-label="Send message"
                >
                  ➤
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
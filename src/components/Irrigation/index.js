import './index.css'
import { Component } from 'react'
import { BiSearch } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { FaFilter, FaRedo, FaHeart, FaComment, FaShare, FaBookmark, FaEllipsisV } from 'react-icons/fa'

class FarmSocialFeed extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: 'Rajesh Kumar',
        avatar: '👨‍🌾',
        location: 'Punjab',
        timestamp: '2 hours ago',
        category: 'Crop Tips',
        image: '🌾',
        content: 'Just harvested organic wheat using sustainable farming methods. The yield increased by 35% this season!',
        likes: 324,
        comments: 45,
        reposts: 12,
        liked: false,
        saved: false,
        showComments: false,
        commentText: ''
      },
      {
        id: 2,
        author: 'Priya Singh',
        avatar: '👩‍🌾',
        location: 'Tamil Nadu',
        timestamp: '4 hours ago',
        category: 'Irrigation',
        image: '💧',
        content: 'Switched to drip irrigation for my vegetable garden. Water usage reduced by 60% and plants are thriving!',
        likes: 456,
        comments: 78,
        reposts: 34,
        liked: false,
        saved: false,
        showComments: false,
        commentText: ''
      },
      {
        id: 3,
        author: 'Amit Patel',
        avatar: '👨‍🌾',
        location: 'Gujarat',
        timestamp: '6 hours ago',
        category: 'Equipment',
        image: '🚜',
        content: 'New rotavator makes soil preparation so much easier. Highly recommend for medium-sized farms!',
        likes: 278,
        comments: 32,
        reposts: 8,
        liked: false,
        saved: false,
        showComments: false,
        commentText: ''
      }
    ],
    searchInput: '',
    selectedCategory: 'All',
    newPostContent: '',
    newPostCategory: 'General',
    showNewPost: false,
    uploadedImage: null,
    imagePreview: null
  }

  onSearch = (event) => {
    this.setState({ searchInput: event.target.value })
  }

  onFilterChange = (category) => {
    this.setState({ selectedCategory: category, searchInput: '' })
  }

  onClearFilters = () => {
    this.setState({ selectedCategory: 'All', searchInput: '', showNewPost: false })
  }

  handleImageUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        this.setState({
          uploadedImage: file,
          imagePreview: e.target.result
        })
      }
      reader.readAsDataURL(file)
    }
  }

  removeUploadedImage = () => {
    this.setState({
      uploadedImage: null,
      imagePreview: null
    })
  }

  handleCreatePost = () => {
    const { newPostContent, newPostCategory, imagePreview } = this.state
    if (newPostContent.trim() || imagePreview) {
      this.setState(prevState => {
        const newPost = {
          id: prevState.posts.length + 1,
          author: 'You',
          avatar: '👤',
          location: 'Your Farm',
          timestamp: 'now',
          category: newPostCategory,
          image: imagePreview || '📸',
          content: newPostContent,
          likes: 0,
          comments: 0,
          reposts: 0,
          liked: false,
          saved: false,
          showComments: false,
          commentText: '',
          isImagePost: !!imagePreview
        }
        return {
          posts: [newPost, ...prevState.posts],
          newPostContent: '',
          showNewPost: false,
          newPostCategory: 'General',
          uploadedImage: null,
          imagePreview: null
        }
      })
    }
  }

  toggleLike = (id) => {
    this.setState(prevState => {
      const posts = prevState.posts.map(post =>
        post.id === id
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1
            }
          : post
      )
      return { posts }
    })
  }

  toggleSave = (id) => {
    this.setState(prevState => {
      const posts = prevState.posts.map(post =>
        post.id === id ? { ...post, saved: !post.saved } : post
      )
      return { posts }
    })
  }

  toggleComments = (id) => {
    this.setState(prevState => {
      const posts = prevState.posts.map(post =>
        post.id === id ? { ...post, showComments: !post.showComments } : post
      )
      return { posts }
    })
  }

  handleCommentChange = (id, text) => {
    this.setState(prevState => {
      const posts = prevState.posts.map(post =>
        post.id === id ? { ...post, commentText: text } : post
      )
      return { posts }
    })
  }

  addComment = (id) => {
    this.setState(prevState => {
      const posts = prevState.posts.map(post =>
        post.id === id
          ? {
              ...post,
              comments: post.comments + 1,
              commentText: ''
            }
          : post
      )
      return { posts }
    })
  }

  toggleRepost = (id) => {
    this.setState(prevState => {
      const posts = prevState.posts.map(post =>
        post.id === id
          ? { ...post, reposts: post.reposts + 1 }
          : post
      )
      return { posts }
    })
  }

  getFilteredPosts = () => {
    const { posts, searchInput, selectedCategory } = this.state
    return posts.filter(post => {
      const matchesSearch = post.content.toLowerCase().includes(searchInput.toLowerCase()) ||
                           post.author.toLowerCase().includes(searchInput.toLowerCase())
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }

  renderPost = (post) => {
    return (
      <div key={post.id} className='social-post-card'>
        {/* POST HEADER */}
        <div className='post-header'>
          <div className='post-author-info'>
            <span className='post-avatar'>{post.avatar}</span>
            <div className='post-author-details'>
              <h3 className='post-author-name'>{post.author}</h3>
              <div className='post-meta'>
                <span className='post-location'>📍 {post.location}</span>
                <span className='post-time'>⏱️ {post.timestamp}</span>
                <span className='post-category'>{post.category}</span>
              </div>
            </div>
          </div>
          <button className='post-menu-btn'>
            <FaEllipsisV />
          </button>
        </div>

        {/* POST IMAGE */}
        <div className='post-image-container'>
          {post.isImagePost ? (
            <img src={post.image} alt='post' className='post-uploaded-image' />
          ) : (
            post.image
          )}
        </div>

        {/* POST CONTENT */}
        <div className='post-content'>
          <p>{post.content}</p>
        </div>

        {/* ENGAGEMENT STATS */}
        <div className='post-stats'>
          <span>❤️ {post.likes} likes</span>
          <span>💬 {post.comments} comments</span>
          <span>🔄 {post.reposts} reposts</span>
        </div>

        {/* ACTIONS */}
        <div className='post-actions'>
          <button 
            className={`action-btn ${post.liked ? 'liked' : ''}`}
            onClick={() => this.toggleLike(post.id)}
          >
            <FaHeart /> <span>Like</span>
          </button>
          <button 
            className={`action-btn ${post.showComments ? 'active' : ''}`}
            onClick={() => this.toggleComments(post.id)}
          >
            <FaComment /> <span>Comment</span>
          </button>
          <button 
            className='action-btn'
            onClick={() => this.toggleRepost(post.id)}
          >
            <FaShare /> <span>Repost</span>
          </button>
          <button 
            className={`action-btn ${post.saved ? 'saved' : ''}`}
            onClick={() => this.toggleSave(post.id)}
          >
            <FaBookmark /> <span>Save</span>
          </button>
        </div>

        {/* COMMENTS SECTION */}
        {post.showComments && (
          <div className='comments-section'>
            <div className='comments-input-area'>
              <input
                type='text'
                placeholder='Add a comment...'
                value={post.commentText}
                onChange={(e) => this.handleCommentChange(post.id, e.target.value)}
                className='comment-input'
              />
              <button 
                className='comment-submit-btn'
                onClick={() => this.addComment(post.id)}
              >
                Post
              </button>
            </div>
            <div className='comments-list'>
              <div className='comment-item'>
                <span className='comment-avatar'>👤</span>
                <div className='comment-content'>
                  <p className='comment-author'>User</p>
                  <p className='comment-text'>Great post! Thanks for sharing.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }

  render() {
    const { searchInput, selectedCategory, showNewPost, newPostContent, newPostCategory } = this.state
    const currentPath = window.location.pathname
    const filteredPosts = this.getFilteredPosts()
    const categories = ['All', 'Crop Tips', 'Irrigation', 'Equipment', 'Pest Control', 'Fertilizer', 'Weather']

    return (
      <div className='farm-social-container'>
        {/* HEADER */}
        <header className='header'>
          <div className='img-logo'>
            <img
              src='https://res.cloudinary.com/dydyatmsi/image/upload/v1764740453/ChatGPT_Image_Dec_3_2025_11_10_27_AM_is7jud.png'
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
              placeholder='Search posts, farmers...'
              className='search-input'
            />
            <BiSearch className='search-icon' />
          </div>
        </header>

        {/* MAIN CONTENT */}
        <div className='social-main-container'>
          
          {/* SIDEBAR - FILTERS */}
          <aside className='social-sidebar'>
            <div className='filter-card'>
              <h3 className='filter-title'><FaFilter /> Filter Posts</h3>
              <div className='filter-buttons'>
                {categories.map(cat => (
                  <button
                    key={cat}
                    className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                    onClick={() => this.onFilterChange(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <button className='clear-filters-btn' onClick={this.onClearFilters}>
                <FaRedo /> Clear Filters
              </button>
            </div>
          </aside>

          {/* FEED CENTER */}
          <main className='social-feed'>
            
            {/* CREATE POST */}
            {!showNewPost ? (
              <div 
                className='create-post-prompt'
                onClick={() => this.setState({ showNewPost: true })}
              >
                <span className='create-post-avatar'>👤</span>
                <input
                  type='text'
                  placeholder='Share your farming experience...'
                  className='create-post-input'
                  readOnly
                />
              </div>
            ) : (
              <div className='create-post-form'>
                <div className='create-post-header'>
                  <span className='create-post-avatar'>👤</span>
                  <div>
                    <p className='create-post-author'>You</p>
                    <p className='create-post-location'>Your Farm</p>
                  </div>
                </div>
                
                {this.state.imagePreview && (
                  <div className='image-preview-container'>
                    <img src={this.state.imagePreview} alt='preview' className='image-preview' />
                    <button 
                      className='remove-image-btn'
                      onClick={this.removeUploadedImage}
                    >
                      ✕ Remove
                    </button>
                  </div>
                )}

                <textarea
                  value={newPostContent}
                  onChange={(e) => this.setState({ newPostContent: e.target.value })}
                  placeholder="What's happening at your farm? Share tips, updates, questions..."
                  className='create-post-textarea'
                />
                
                <div className='create-post-actions'>
                  <label className='image-upload-label'>
                    📸 Upload Image
                    <input 
                      type='file' 
                      accept='image/*' 
                      onChange={this.handleImageUpload}
                      className='image-upload-input'
                    />
                  </label>
                  <select
                    value={newPostCategory}
                    onChange={(e) => this.setState({ newPostCategory: e.target.value })}
                    className='category-select'
                  >
                    {categories.filter(c => c !== 'All').map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                  <div className='create-post-buttons'>
                    <button
                      className='post-cancel-btn'
                      onClick={() => this.setState({ showNewPost: false, imagePreview: null, uploadedImage: null })}
                    >
                      Cancel
                    </button>
                    <button
                      className='post-submit-btn'
                      onClick={this.handleCreatePost}
                    >
                      Post
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* POSTS FEED */}
            {filteredPosts.length > 0 ? (
              <div className='posts-list'>
                {filteredPosts.map(post => this.renderPost(post))}
              </div>
            ) : (
              <div className='no-posts'>
                <p className='no-posts-emoji'>🔍</p>
                <p className='no-posts-text'>No posts found</p>
                <p className='no-posts-hint'>Try adjusting your filters</p>
              </div>
            )}
          </main>
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
    )
  }
}

export default FarmSocialFeed